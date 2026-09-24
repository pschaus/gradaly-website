/**
 * Gradaly Zero-Knowledge Student Web Viewer
 * Client-side in-memory decryption using Web Crypto API (AES-256-GCM)
 * Detailed Interactive Question-by-Question & Summary Consultation
 * 100% Offline & Online compatible (file:// and http(s)://)
 */

(function () {
  'use strict';

  // Base64URL decoding helper (RFC 4648 §5)
  function base64UrlToBytes(base64url) {
    let base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4 !== 0) {
      base64 += '=';
    }
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  // Base64 to Uint8Array helper
  function base64ToUint8Array(base64) {
    const cleanB64 = base64.replace(/\s+/g, '');
    const binary = atob(cleanB64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  function getKeyFromHash() {
    const raw = (window.location.hash || '').replace(/^#/, '').trim();
    if (!raw) return null;
    const match = raw.match(/(?:k|key)=([A-Za-z0-9_-]+)/);
    if (match) return match[1];
    if (/^[A-Za-z0-9_-]{20,}$/.test(raw)) return raw;
    return null;
  }

  function showView(viewId) {
    const views = ['view-loading', 'view-unlock', 'view-dashboard'];
    views.forEach(function (id) {
      const el = document.getElementById(id);
      if (el) {
        el.style.display = id === viewId ? '' : 'none';
      }
    });
  }

  function showError(msg) {
    const errEl = document.getElementById('unlock-error');
    if (errEl) {
      errEl.textContent = msg;
      errEl.style.display = 'block';
    }
  }

  function hideError() {
    const errEl = document.getElementById('unlock-error');
    if (errEl) {
      errEl.style.display = 'none';
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatMarkdown(str) {
    if (!str) return '';
    let out = escapeHtml(str);
    // Bold
    out = out.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Italic
    out = out.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Inline code
    out = out.replace(
      /`([^`]+)`/g,
      '<code style="background:rgba(0,0,0,0.06);padding:2px 5px;border-radius:4px;font-family:monospace;font-size:0.9em;">$1</code>'
    );
    return out;
  }

  // Active state variables
  let currentDocId = null;
  let currentData = null;
  let currentPdfBlobUrl = null;
  let activeQuestionIndex = 0;
  let currentMode = 'detailed'; // 'detailed' | 'summary'
  let mobilePane = 'copy'; // 'copy' | 'grading'
  let currentZoom = 1.0;
  let isShowingFullPdf = false; // toggle between interactive page image vs full PDF iframe
  let currentActiveCopyPage = null; // null defaults to question primary page

  function getQuestionZonesList(qObj) {
    if (!qObj) return [];
    if (Array.isArray(qObj.zones) && qObj.zones.length > 0) {
      return qObj.zones;
    }
    if (Array.isArray(qObj.bbox_rel) && qObj.bbox_rel.length === 4) {
      return [{ page: typeof qObj.page === 'number' ? qObj.page : 0, bbox_rel: qObj.bbox_rel }];
    }
    return [];
  }

  /**
   * Dual-mode loader:
   * 1. If on http(s)://, attempts fetch('data/<docId>.enc').
   * 2. If on file:// or if fetch fails, dynamically loads <script src="data/<docId>.js">
   *    which defines window.__GRADALY_PAYLOAD__ = "...base64...".
   * This completely bypasses CORS restrictions when opening via file://.
   */
  function loadEncryptedData(docId) {
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      return fetch('data/' + encodeURIComponent(docId) + '.enc')
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP code ' + res.status);
          return res.arrayBuffer();
        })
        .then(function (buf) {
          return new Uint8Array(buf);
        })
        .catch(function (e) {
          console.warn('HTTP fetch failed, falling back to script injection:', e);
          return loadViaScriptTag(docId);
        });
    }
    return loadViaScriptTag(docId);
  }

  function loadViaScriptTag(docId) {
    return new Promise(function (resolve, reject) {
      window.__GRADALY_PAYLOAD__ = null;
      const script = document.createElement('script');
      script.src = 'data/' + encodeURIComponent(docId) + '.js';
      script.async = true;

      script.onload = function () {
        if (
          typeof window.__GRADALY_PAYLOAD__ === 'string' &&
          window.__GRADALY_PAYLOAD__.length > 0
        ) {
          try {
            const bytes = base64ToUint8Array(window.__GRADALY_PAYLOAD__);
            window.__GRADALY_PAYLOAD__ = null; // free memory
            resolve(bytes);
          } catch (err) {
            reject(
              new Error('Erreur de décodage des données (fichier JS corrompu) : ' + (err.message || err))
            );
          }
        } else {
          reject(
            new Error(
              'Données de copie introuvables dans data/' + docId + '.js.'
            )
          );
        }
      };

      script.onerror = function () {
        // As a last-ditch fallback, try fetch in case browser allows local file requests
        fetch('data/' + encodeURIComponent(docId) + '.enc')
          .then(function (res) {
            if (!res.ok) throw new Error('HTTP code ' + res.status);
            return res.arrayBuffer();
          })
          .then(function (buf) {
            resolve(new Uint8Array(buf));
          })
          .catch(function () {
            reject(
              new Error(
                'Impossible de charger les données du document (' +
                  docId +
                  '). Vérifiez que le dossier "data/" est bien situé à côté du fichier index.html.'
              )
            );
          });
      };

      document.head.appendChild(script);
    });
  }

  async function decryptAndRender(docId, keyString) {
    showView('view-loading');
    hideError();

    try {
      const fileBytes = await loadEncryptedData(docId);
      if (fileBytes.byteLength < 28) {
        throw new Error('Le fichier de données est corrompu ou incomplet.');
      }

      const iv = fileBytes.subarray(0, 12);
      const ciphertextWithTag = fileBytes.subarray(12);

      const rawKey = base64UrlToBytes(keyString);
      const cryptoKey = await window.crypto.subtle.importKey(
        'raw',
        rawKey,
        { name: 'AES-GCM' },
        false,
        ['decrypt']
      );

      const decryptedBuffer = await window.crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: iv },
        cryptoKey,
        ciphertextWithTag
      );

      const jsonText = new TextDecoder('utf-8').decode(decryptedBuffer);
      currentData = JSON.parse(jsonText);

      renderDashboard(currentData);
      showView('view-dashboard');
    } catch (err) {
      console.error('Decryption failed:', err);
      showView('view-unlock');
      const msg =
        err && err.name === 'OperationError'
          ? 'Clé de déchiffrement incorrecte pour cette copie. Veuillez vérifier la clé saisie.'
          : err && err.message
          ? err.message
          : 'Erreur lors du déchiffrement de la copie.';
      showError(msg);
    }
  }

  function renderDashboard(data) {
    // 1. Header & Meta
    const examTitle = data.examTitle || 'Rapport d\'Évaluation';
    document.title = (data.student && data.student.name ? data.student.name + ' — ' : '') + examTitle;

    const titleEl = document.getElementById('header-exam-title');
    if (titleEl) titleEl.textContent = examTitle;

    const docIdEl = document.getElementById('header-doc-id');
    if (docIdEl && currentDocId) docIdEl.textContent = 'Doc: ' + currentDocId;

    // Student identity
    const studentNameEl = document.getElementById('student-name');
    if (studentNameEl) {
      studentNameEl.textContent = (data.student && data.student.name) || 'Copie anonyme';
    }

    const matriculeEl = document.getElementById('student-matricule');
    if (matriculeEl) {
      if (data.student && data.student.matricule) {
        matriculeEl.textContent = 'N° ' + data.student.matricule;
        matriculeEl.style.display = 'inline-flex';
      } else {
        matriculeEl.style.display = 'none';
      }
    }

    // Score
    const totalScore = (data.summary && typeof data.summary.totalScore === 'number') ? data.summary.totalScore : 0;
    const maxTotalScore = (data.summary && typeof data.summary.maxTotalScore === 'number') ? data.summary.maxTotalScore : 20;
    const pct = maxTotalScore > 0 ? Math.round((totalScore / maxTotalScore) * 1000) / 10 : 0;

    const scoreValEl = document.getElementById('total-score-val');
    if (scoreValEl) scoreValEl.textContent = Number(totalScore.toFixed(2));

    const maxScoreEl = document.getElementById('max-score-val');
    if (maxScoreEl) maxScoreEl.textContent = '/ ' + Number(maxTotalScore.toFixed(2));

    const scorePctEl = document.getElementById('score-pct-badge');
    if (scorePctEl) scorePctEl.textContent = pct + ' %';

    // Status badge
    const statusBadge = document.getElementById('grading-status-badge');
    if (statusBadge && data.summary && data.summary.status) {
      statusBadge.textContent = data.summary.status === 'COMPLETED' ? 'Évalué' : 'En cours';
    }

    // 2. Setup Full PDF actions if available
    const headerDownloadBtn = document.getElementById('header-download-pdf-btn');
    const headerOpenPdfBtn = document.getElementById('header-open-pdf-btn');
    const toggleViewBtn = document.getElementById('btn-toggle-view-type');

    if (currentPdfBlobUrl) {
      URL.revokeObjectURL(currentPdfBlobUrl);
      currentPdfBlobUrl = null;
    }

    if (data.pdfBase64) {
      try {
        const pdfBytes = base64ToUint8Array(data.pdfBase64);
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        currentPdfBlobUrl = URL.createObjectURL(blob);

        const cleanName = ((data.student && data.student.name) || 'copie')
          .replace(/[^a-zA-Z0-9_\-]/g, '_');
        const filename = 'Copie_' + cleanName + '.pdf';

        if (headerDownloadBtn) {
          headerDownloadBtn.href = currentPdfBlobUrl;
          headerDownloadBtn.download = filename;
          headerDownloadBtn.style.display = 'inline-flex';
        }

        if (headerOpenPdfBtn) {
          headerOpenPdfBtn.style.display = 'inline-flex';
        }

        if (toggleViewBtn) {
          toggleViewBtn.style.display = 'inline-flex';
        }
      } catch (e) {
        console.warn('PDF blob generation error:', e);
      }
    } else {
      if (headerDownloadBtn) headerDownloadBtn.style.display = 'none';
      if (headerOpenPdfBtn) headerOpenPdfBtn.style.display = 'none';
      if (toggleViewBtn) toggleViewBtn.style.display = 'none';
    }

    // 3. Setup Question Navigation Pills
    setupQuestionPills(data.questions || []);

    // 4. Render initial question in Detailed View
    activeQuestionIndex = 0;
    renderActiveQuestion();

    // 5. Render Summary View
    renderSummaryView(data);

    // Apply default mode
    setMode('detailed');
  }

  function setupQuestionPills(questions) {
    const pillsContainer = document.getElementById('question-pills-container');
    if (!pillsContainer) return;
    pillsContainer.innerHTML = '';

    questions.forEach(function (q, idx) {
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = 'q-pill' + (idx === activeQuestionIndex ? ' active' : '');
      pill.id = 'pill-q-' + idx;

      const score = typeof q.score === 'number' ? q.score : 0;
      const max = typeof q.maxScore === 'number' ? q.maxScore : 0;

      const pageInfo = q.pageRange ? ' (p. ' + q.pageRange + ')' : '';
      pill.title = (q.title || ('Question ' + (idx + 1))) + pageInfo;

      pill.innerHTML =
        '<span class="q-pill-label">Q' + (idx + 1) + '</span>' +
        '<span class="q-pill-score">' + Number(score.toFixed(1)) + '/' + Number(max.toFixed(1)) + '</span>';

      pill.addEventListener('click', function () {
        selectQuestion(idx);
      });

      pillsContainer.appendChild(pill);
    });

    updateNavArrows();
  }

  function updateNavArrows() {
    const questions = (currentData && currentData.questions) || [];
    const prevBtn = document.getElementById('btn-prev-q');
    const nextBtn = document.getElementById('btn-next-q');

    if (prevBtn) prevBtn.disabled = activeQuestionIndex <= 0;
    if (nextBtn) nextBtn.disabled = activeQuestionIndex >= questions.length - 1;
  }

  function prevQuestion() {
    if (activeQuestionIndex > 0) {
      selectQuestion(activeQuestionIndex - 1);
    }
  }

  function nextQuestion() {
    const questions = (currentData && currentData.questions) || [];
    if (activeQuestionIndex < questions.length - 1) {
      selectQuestion(activeQuestionIndex + 1);
    }
  }

  function selectQuestion(index) {
    const questions = (currentData && currentData.questions) || [];
    if (index < 0 || index >= questions.length) return;

    activeQuestionIndex = index;
    currentActiveCopyPage = null; // reset to primary page of question

    // Update active pill
    questions.forEach(function (_, idx) {
      const pill = document.getElementById('pill-q-' + idx);
      if (pill) {
        if (idx === activeQuestionIndex) {
          pill.classList.add('active');
          pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
          pill.classList.remove('active');
        }
      }
    });

    updateNavArrows();
    renderActiveQuestion();
  }

  function setCopyPage(pageNum) {
    currentActiveCopyPage = pageNum;
    if (!currentData) return;
    const questions = currentData.questions || [];
    const q = questions[activeQuestionIndex];
    if (q) {
      renderCopyPageAndOverlay(q);
    }
  }

  function renderActiveQuestion() {
    if (!currentData) return;
    const questions = currentData.questions || [];
    const q = questions[activeQuestionIndex];
    if (!q) return;

    // A. Render Right Console Card
    renderGradingConsole(q);

    // B. Render Left Copy Page & Bounding Box
    renderCopyPageAndOverlay(q);
  }

  function renderGradingConsole(q) {
    const cardEl = document.getElementById('active-question-card');
    if (!cardEl) return;

    const score = typeof q.score === 'number' ? q.score : 0;
    const max = typeof q.maxScore === 'number' ? q.maxScore : 0;
    const isHigh = max > 0 && (score / max) >= 0.7;

    // Mobile tab label update
    const mobileTabLabel = document.getElementById('mobile-grading-tab-label');
    if (mobileTabLabel) {
      mobileTabLabel.textContent = '📝 Q' + (activeQuestionIndex + 1) + ' (' + Number(score.toFixed(1)) + '/' + Number(max.toFixed(1)) + ')';
    }

    let originBadge = '';
    if (currentData.options && currentData.options.includeGradingOrigin && q.status) {
      const isAi = q.status.toUpperCase().includes('AI');
      originBadge = isAi
        ? '<span class="q-origin-badge ai">Pré-correction IA</span>'
        : '<span class="q-origin-badge human">Validé par l\'Enseignant</span>';
    }

    let scoreBadge = '';
    if (!currentData.options || currentData.options.includeScoreBadge !== false) {
      scoreBadge = '<span class="q-score-badge ' + (isHigh ? 'high' : '') + '">' + Number(score.toFixed(2)) + ' / ' + Number(max.toFixed(2)) + ' pts</span>';
    }

    // Criteria list
    let criteriaHtml = '';
    if ((!currentData.options || currentData.options.includeCriteria !== false) && q.criteria && q.criteria.length > 0) {
      criteriaHtml += '<div class="criteria-section"><div class="section-subtitle">Barème & Critères d\'évaluation</div>';
      q.criteria.forEach(function (c) {
        const isChecked = !!c.checked;
        const iconSvg = isChecked
          ? '<svg class="criterion-icon checked" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
          : '<svg class="criterion-icon unchecked" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>';

        const ptsSign = c.points > 0 ? '+' : '';
        const descContent = c.description_html || (c.description ? formatMarkdown(c.description) : '');
        const descHtml = descContent ? ('<div class="criterion-desc">' + descContent + '</div>') : '';

        criteriaHtml += '<div class="criterion-item ' + (isChecked ? 'checked' : '') + '">' +
          '<div class="criterion-info">' +
            iconSvg +
            '<div class="criterion-body">' +
              '<span class="criterion-label">' + escapeHtml(c.label) + '</span>' +
              descHtml +
            '</div>' +
          '</div>' +
          '<span class="criterion-pts">' + ptsSign + c.points + ' pt' + (Math.abs(c.points) > 1 ? 's' : '') + '</span>' +
          '</div>';
      });
      criteriaHtml += '</div>';
    }

    // Feedback
    let feedbackHtml = '';
    if ((!currentData.options || currentData.options.includeFeedback !== false) && q.feedback && q.feedback.trim()) {
      const fbBody = q.feedback_html || formatMarkdown(q.feedback);
      feedbackHtml = '<div class="feedback-box">' +
        '<div class="feedback-header">' +
        '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
        '<span>Commentaire de correction</span>' +
        '</div>' +
        '<div class="feedback-text">' + fbBody + '</div>' +
        '</div>';
    }

    // Justification
    let justificationHtml = '';
    if (currentData.options && currentData.options.includeJustification && q.justification && q.justification.trim()) {
      const justifBody = q.justification_html || formatMarkdown(q.justification);
      justificationHtml = '<div class="justification-box">' +
        '<div class="justification-header">Justification & Démarche</div>' +
        '<div class="justification-text">' + justifBody + '</div>' +
        '</div>';
    }

    const questionsCount = (currentData.questions || []).length;
    const isFirst = activeQuestionIndex <= 0;
    const isLast = activeQuestionIndex >= questionsCount - 1;

    const pageBadge = q.pageRange ? '<span class="q-page-range-badge" style="display:inline-block;margin-top:3px;font-size:11.5px;font-weight:600;color:var(--slate-500);">Page ' + escapeHtml(q.pageRange) + '</span>' : '';

    cardEl.innerHTML =
      '<div class="grading-card-header">' +
        '<div class="q-title-area">' +
          '<span class="q-index-badge">Q' + (activeQuestionIndex + 1) + '</span>' +
          '<div>' +
            '<h3 class="q-title">' + escapeHtml(q.title || ('Question ' + (activeQuestionIndex + 1))) + '</h3>' +
            pageBadge +
          '</div>' +
        '</div>' +
        '<div class="q-badges">' +
          scoreBadge +
          originBadge +
        '</div>' +
      '</div>' +
      criteriaHtml +
      feedbackHtml +
      justificationHtml +
      '<div class="card-nav-footer">' +
        '<button type="button" class="btn-card-nav" ' + (isFirst ? 'disabled' : '') + ' onclick="window.prevQuestion()">◀ Précédente</button>' +
        '<span class="nav-hint">Question ' + (activeQuestionIndex + 1) + ' / ' + questionsCount + '</span>' +
        '<button type="button" class="btn-card-nav" ' + (isLast ? 'disabled' : '') + ' onclick="window.nextQuestion()">Suivante ▶</button>' +
      '</div>';
  }

  function renderCopyPageAndOverlay(q) {
    const pages = currentData.pages || [];
    const copyImage = document.getElementById('copy-image');
    const overlaysLayer = document.getElementById('overlays-layer');
    const pageLabel = document.getElementById('current-page-label');
    const bboxIndicator = document.getElementById('bbox-indicator');
    const copyViewport = document.getElementById('copy-viewport');

    if (!copyImage || !overlaysLayer) return;

    const activeZones = getQuestionZonesList(q);
    const primaryPage = activeZones.length > 0 && typeof activeZones[0].page === 'number'
      ? activeZones[0].page
      : (typeof q.page === 'number' ? q.page : 0);

    const targetPage = typeof currentActiveCopyPage === 'number' ? currentActiveCopyPage : primaryPage;
    const pageDataUrl = pages[targetPage] || pages[0] || '';

    if (pageLabel) {
      if (activeZones.length > 1) {
        let pageBtnsHtml = '<span class="toolbar-label">Page :</span> ';
        activeZones.forEach(function (z) {
          const isCur = z.page === targetPage;
          pageBtnsHtml += '<button type="button" class="btn-page-pill ' + (isCur ? 'active' : '') + '" onclick="window.setCopyPage(' + z.page + ')" style="padding: 2px 7px; margin-left: 4px; border-radius: 4px; font-size: 11px; font-weight: 700; cursor: pointer; border: 1px solid ' + (isCur ? 'var(--primary)' : 'var(--slate-300)') + '; background: ' + (isCur ? 'var(--primary)' : '#ffffff') + '; color: ' + (isCur ? '#ffffff' : 'var(--slate-700)') + ';">p. ' + (z.page + 1) + '</button>';
        });
        pageBtnsHtml += ' <span style="font-size: 11px; color: var(--slate-400); margin-left: 6px;">(' + (targetPage + 1) + '/' + pages.length + ')</span>';
        pageLabel.innerHTML = pageBtnsHtml;
      } else {
        pageLabel.textContent = 'Page ' + (targetPage + 1) + ' / ' + (pages.length || 1);
      }
    }

    // Set page image
    if (pageDataUrl && copyImage.src !== pageDataUrl) {
      copyImage.src = pageDataUrl;
    }

    // Clear previous overlays
    overlaysLayer.innerHTML = '';

    const questions = currentData.questions || [];
    let hasTargetBbox = false;
    let targetBboxEl = null;

    // Draw bounding boxes for all questions/zones on this page
    questions.forEach(function (otherQ, otherIdx) {
      const otherZones = getQuestionZonesList(otherQ);
      const isActive = otherIdx === activeQuestionIndex;

      otherZones.forEach(function (z) {
        if (z.page !== targetPage || !z.bbox_rel || z.bbox_rel.length !== 4) return;
        const bbox = z.bbox_rel; // [x1, y1, x2, y2]

        const boxDiv = document.createElement('div');
        boxDiv.className = 'bbox-overlay ' + (isActive ? 'active' : 'inactive');
        boxDiv.style.left = (bbox[0] * 100) + '%';
        boxDiv.style.top = (bbox[1] * 100) + '%';
        boxDiv.style.width = ((bbox[2] - bbox[0]) * 100) + '%';
        boxDiv.style.height = ((bbox[3] - bbox[1]) * 100) + '%';

        if (isActive) {
          hasTargetBbox = true;
          targetBboxEl = boxDiv;
          const scoreStr = typeof otherQ.score === 'number' && typeof otherQ.maxScore === 'number'
            ? ' — ' + Number(otherQ.score.toFixed(1)) + '/' + Number(otherQ.maxScore.toFixed(1)) + ' pts'
            : '';
          const multiTag = activeZones.length > 1 ? ' (p. ' + (targetPage + 1) + ')' : '';
          boxDiv.innerHTML = '<div class="bbox-badge">Q' + (otherIdx + 1) + multiTag + scoreStr + '</div>';
        } else {
          boxDiv.title = (otherQ.title || ('Question ' + (otherIdx + 1))) + ' (Cliquer pour ouvrir)';
          boxDiv.addEventListener('click', function () {
            selectQuestion(otherIdx);
          });
        }

        overlaysLayer.appendChild(boxDiv);
      });
    });

    if (bboxIndicator) {
      bboxIndicator.style.display = hasTargetBbox ? 'inline-block' : 'none';
      if (hasTargetBbox) {
        const multiTag = activeZones.length > 1 ? ' (page ' + (targetPage + 1) + ')' : '';
        bboxIndicator.textContent = 'Zone ciblée Q' + (activeQuestionIndex + 1) + multiTag;
      }
    }

    // Auto-scroll to center the bounding box in the copy viewport
    if (targetBboxEl && copyViewport) {
      setTimeout(function () {
        const viewportRect = copyViewport.getBoundingClientRect();
        const bboxRect = targetBboxEl.getBoundingClientRect();
        const targetScrollTop = copyViewport.scrollTop + (bboxRect.top - viewportRect.top) - (viewportRect.height / 2) + (bboxRect.height / 2);
        copyViewport.scrollTo({
          top: Math.max(0, targetScrollTop),
          behavior: 'smooth',
        });
      }, 80);
    }
  }

  // Toggle between interactive cropped page view and full PDF iframe
  function toggleCopyViewType() {
    isShowingFullPdf = !isShowingFullPdf;
    const viewport = document.getElementById('copy-viewport');
    const pdfContainer = document.getElementById('copy-pdf-container');
    const pdfIframe = document.getElementById('copy-pdf-iframe');
    const btnText = document.getElementById('btn-toggle-view-text');
    const zoomControls = document.getElementById('toolbar-zoom-controls');

    if (isShowingFullPdf) {
      if (viewport) viewport.style.display = 'none';
      if (pdfContainer) pdfContainer.style.display = 'flex';
      if (zoomControls) zoomControls.style.display = 'none';
      if (btnText) btnText.textContent = '🖼️ Vue par question';
      if (pdfIframe && currentPdfBlobUrl && pdfIframe.src !== currentPdfBlobUrl) {
        pdfIframe.src = currentPdfBlobUrl;
      }
    } else {
      if (viewport) viewport.style.display = 'flex';
      if (pdfContainer) pdfContainer.style.display = 'none';
      if (zoomControls) zoomControls.style.display = 'flex';
      if (btnText) btnText.textContent = '📄 Voir PDF complet';
      renderActiveQuestion();
    }
  }

  function openPdfInNewTab() {
    if (currentPdfBlobUrl) {
      window.open(currentPdfBlobUrl, '_blank');
    }
  }

  // Zoom controls
  function zoomIn() {
    currentZoom = Math.min(2.5, Math.round((currentZoom + 0.25) * 100) / 100);
    applyZoom();
  }

  function zoomOut() {
    currentZoom = Math.max(0.6, Math.round((currentZoom - 0.25) * 100) / 100);
    applyZoom();
  }

  function zoomFitWidth() {
    currentZoom = 1.0;
    applyZoom();
  }

  function applyZoom() {
    const stage = document.getElementById('copy-stage');
    const zoomText = document.getElementById('zoom-level-text');
    if (stage) {
      stage.style.width = (currentZoom * 100) + '%';
      stage.style.maxWidth = currentZoom === 1.0 ? '800px' : 'none';
    }
    if (zoomText) {
      zoomText.textContent = Math.round(currentZoom * 100) + '%';
    }
  }

  // Mobile pane switcher
  function setMobilePane(pane) {
    mobilePane = pane;
    const copyPanel = document.getElementById('copy-panel');
    const gradingPanel = document.getElementById('grading-panel');
    const btnCopy = document.getElementById('btn-mobile-copy');
    const btnGrading = document.getElementById('btn-mobile-grading');

    if (pane === 'copy') {
      if (copyPanel) copyPanel.classList.remove('hidden-mobile');
      if (gradingPanel) gradingPanel.classList.add('hidden-mobile');
      if (btnCopy) btnCopy.classList.add('active');
      if (btnGrading) btnGrading.classList.remove('active');
    } else {
      if (gradingPanel) gradingPanel.classList.remove('hidden-mobile');
      if (copyPanel) copyPanel.classList.add('hidden-mobile');
      if (btnGrading) btnGrading.classList.add('active');
      if (btnCopy) btnCopy.classList.remove('active');
    }
  }

  // Mode switcher: 'detailed' (or alias 'corrector') vs 'summary'
  function setMode(mode) {
    // Support 'corrector' as alias for 'detailed'
    const targetMode = mode === 'summary' ? 'summary' : 'detailed';
    currentMode = targetMode;

    const btnDetailed = document.getElementById('btn-mode-detailed') || document.getElementById('btn-mode-corrector');
    const btnSummary = document.getElementById('btn-mode-summary');
    const detailedView = document.getElementById('mode-detailed-view') || document.getElementById('mode-corrector-view');
    const summaryView = document.getElementById('mode-summary-view');

    if (targetMode === 'detailed') {
      if (btnDetailed) btnDetailed.classList.add('active');
      if (btnSummary) btnSummary.classList.remove('active');
      if (detailedView) detailedView.style.display = 'flex';
      if (summaryView) summaryView.style.display = 'none';
      renderActiveQuestion();
    } else {
      if (btnSummary) btnSummary.classList.add('active');
      if (btnDetailed) btnDetailed.classList.remove('active');
      if (summaryView) summaryView.style.display = 'block';
      if (detailedView) detailedView.style.display = 'none';
    }
  }

  // Summary View rendering (full vertical list of all questions)
  function renderSummaryView(data) {
    const listEl = document.getElementById('questions-list');
    if (!listEl) return;
    listEl.innerHTML = '';

    const questions = data.questions || [];
    if (questions.length === 0) {
      listEl.innerHTML = '<div class="state-card"><p>Aucune question enregistrée pour cette copie.</p></div>';
      return;
    }

    questions.forEach(function (q, idx) {
      const card = document.createElement('div');
      card.className = 'question-summary-card';

      const score = typeof q.score === 'number' ? q.score : 0;
      const max = typeof q.maxScore === 'number' ? q.maxScore : 0;
      const isHigh = max > 0 && (score / max) >= 0.7;

      let originBadge = '';
      if (data.options && data.options.includeGradingOrigin && q.status) {
        const isAi = q.status.toUpperCase().includes('AI');
        originBadge = isAi
          ? '<span class="q-origin-badge ai">Pré-correction IA</span>'
          : '<span class="q-origin-badge human">Enseignant</span>';
      }

      let scoreBadge = '';
      if (!data.options || data.options.includeScoreBadge !== false) {
        scoreBadge = '<span class="q-score-badge ' + (isHigh ? 'high' : '') + '">' + Number(score.toFixed(2)) + ' / ' + Number(max.toFixed(2)) + ' pts</span>';
      }

      let criteriaHtml = '';
      if ((!data.options || data.options.includeCriteria !== false) && q.criteria && q.criteria.length > 0) {
        criteriaHtml += '<div class="criteria-section"><div class="section-subtitle">Barème & Critères</div>';
        q.criteria.forEach(function (c) {
          const isChecked = !!c.checked;
          const iconSvg = isChecked
            ? '<svg class="criterion-icon checked" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>'
            : '<svg class="criterion-icon unchecked" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>';

          const ptsSign = c.points > 0 ? '+' : '';
          const descContent = c.description_html || (c.description ? formatMarkdown(c.description) : '');
          const descHtml = descContent ? ('<div class="criterion-desc">' + descContent + '</div>') : '';

          criteriaHtml += '<div class="criterion-item ' + (isChecked ? 'checked' : '') + '">' +
            '<div class="criterion-info">' +
              iconSvg +
              '<div class="criterion-body">' +
                '<span class="criterion-label">' + escapeHtml(c.label) + '</span>' +
                descHtml +
              '</div>' +
            '</div>' +
            '<span class="criterion-pts">' + ptsSign + c.points + ' pt' + (Math.abs(c.points) > 1 ? 's' : '') + '</span>' +
            '</div>';
        });
        criteriaHtml += '</div>';
      }

      let feedbackHtml = '';
      if ((!data.options || data.options.includeFeedback !== false) && q.feedback && q.feedback.trim()) {
        const fbBody = q.feedback_html || formatMarkdown(q.feedback);
        feedbackHtml = '<div class="feedback-box">' +
          '<div class="feedback-header">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
          '<span>Commentaire de correction</span>' +
          '</div>' +
          '<div class="feedback-text">' + fbBody + '</div>' +
          '</div>';
      }

      let justificationHtml = '';
      if (data.options && data.options.includeJustification && q.justification && q.justification.trim()) {
        const justifBody = q.justification_html || formatMarkdown(q.justification);
        justificationHtml = '<div class="justification-box">' +
          '<div class="justification-header">Justification & Démarche</div>' +
          '<div class="justification-text">' + justifBody + '</div>' +
          '</div>';
      }

      const pageBadge = q.pageRange ? '<span class="q-page-range-badge" style="display:inline-block;margin-top:3px;font-size:11.5px;font-weight:600;color:var(--slate-500);">Page ' + escapeHtml(q.pageRange) + '</span>' : '';

      card.innerHTML =
        '<div class="summary-card-header">' +
          '<div class="q-title-area">' +
            '<span class="q-index-badge">Q' + (idx + 1) + '</span>' +
            '<div>' +
              '<h3 class="q-title">' + escapeHtml(q.title || ('Question ' + (idx + 1))) + '</h3>' +
              pageBadge +
            '</div>' +
          '</div>' +
          '<div class="q-badges">' +
            scoreBadge +
            originBadge +
          '</div>' +
        '</div>' +
        '<div class="summary-card-body">' +
          criteriaHtml +
          feedbackHtml +
          justificationHtml +
        '</div>';

      listEl.appendChild(card);
    });
  }

  // Keyboard navigation (Arrow keys)
  window.addEventListener('keydown', function (e) {
    if (currentMode !== 'detailed' && currentMode !== 'corrector') return;
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

    if (e.key === 'ArrowLeft') {
      prevQuestion();
    } else if (e.key === 'ArrowRight') {
      nextQuestion();
    }
  });

  // Manual unlock handler
  function handleManualUnlock() {
    const input = document.getElementById('manual-key-input');
    if (!input || !currentDocId) return;
    const key = input.value.trim();
    if (!key) return;
    decryptAndRender(currentDocId, key);
  }

  // Initialization on page load
  async function init() {
    const docId = getQueryParam('id');
    currentDocId = docId;

    if (!docId) {
      showView('view-unlock');
      showError(
        'Aucun identifiant de copie spécifié dans l\'URL (paramètre ?id= manquant). ' +
        'Veuillez cliquer sur le lien complet fourni dans le tableau des copies (liens_consultation_etudiants.xlsx).'
      );
      const input = document.getElementById('manual-key-input');
      if (input) input.disabled = true;
      const btn = document.getElementById('unlock-button');
      if (btn) btn.disabled = true;
      return;
    }

    const key = getKeyFromHash();
    if (key) {
      // Key is present in URL hash -> auto-unlock seamlessly!
      decryptAndRender(docId, key);
    } else {
      // No key in hash -> ask user to paste secret key
      showView('view-unlock');
    }
  }

  // Listen to hash changes (e.g. if key is appended afterwards)
  window.addEventListener('hashchange', function () {
    const key = getKeyFromHash();
    if (key && currentDocId) {
      decryptAndRender(currentDocId, key);
    }
  });

  // Expose global methods for inline HTML event attributes
  window.setMode = setMode;
  window.selectQuestion = selectQuestion;
  window.prevQuestion = prevQuestion;
  window.nextQuestion = nextQuestion;
  window.zoomIn = zoomIn;
  window.zoomOut = zoomOut;
  window.zoomFitWidth = zoomFitWidth;
  window.setMobilePane = setMobilePane;
  window.handleManualUnlock = handleManualUnlock;
  window.toggleCopyViewType = toggleCopyViewType;
  window.openPdfInNewTab = openPdfInNewTab;
  window.setCopyPage = setCopyPage;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
