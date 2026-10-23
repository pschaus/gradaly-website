const manualContent = {
    en: {
        badge_manual: "User Manual",
        back_home: "Back to Gradaly.io",
        download_btn: "Download Gradaly",
        hero_pill: "Complete Guide, API Setup & FAQ (v3.0)",
        hero_title: "Gradaly User Manual",
        hero_subtitle: "Grade Smarter, not Harder. Discover step-by-step how to design fine-grained evaluation rubrics, configure your AI models, collaborate securely with your teaching team, and deliver rich formative feedback.",
        search_placeholder: "Search the manual (e.g. API key, OpenRouter, Gemini, Gradescope, encryption, merge)...",
        toc_title: "Table of Contents",
        privacy_box_title: "100% Local Student Privacy",
        privacy_box_text: "Student names, IDs, CSV rosters, and header OCR remain strictly on your computer (0% cloud). Even when using Cloud links, files are encrypted client-side (AES-256-GCM) so neither Gradaly nor any attacker can ever read them.",
        sections: [
            {
                id: "getting-started",
                stepNumber: "1",
                tag: "Chapter 1",
                shortTitle: "Installation & Workspace",
                title: "Installation, Workspace & Demo Projects",
                subtitle: "Start a new exam project in seconds or explore the built-in French and English demo projects.",
                paragraphs: [
                    "Gradaly is a native desktop application available for <strong>macOS</strong> (Universal Apple Silicon & Intel, officially signed and notarized by Apple), <strong>Windows 10/11</strong>, and <strong>Linux</strong> (<code>.rpm</code>, <code>.deb</code>, and <code>.AppImage</code>). All your exam projects are stored locally in your personal workspace folder.",
                    "When launching Gradaly for the first time, you can immediately click <strong>Load Demo Project (FR or EN)</strong> on the welcome screen. This creates a complete, ready-to-explore exam project with 20 handwritten student papers, a structured grading rubric, student roster, and pre-computed evaluations."
                ],
                screenshots: [
                    {
                        filePrefix: "01_welcome",
                        caption: "Welcome Screen: Recent projects, 1-click Demo Projects, and Project Import / Merge"
                    }
                ],
                callouts: [
                    {
                        title: "Create a New Project",
                        desc: "Enter a project name and select your blank exam PDF (canvas) to initialize an isolated project folder."
                    },
                    {
                        title: "Built-In Demo Projects (FR / EN)",
                        desc: "Experiment freely with 20 graded copies, adjust rubric weights, and test exports without needing any PDF scans."
                    },
                    {
                        title: "Import or Merge (.gradaly / Cloud)",
                        desc: "Open a project shared by a colleague either as an independent new project or by selectively merging into an existing project."
                    },
                    {
                        title: "Automatic Version Migration",
                        desc: "Projects created with earlier versions of Gradaly are automatically upgraded on open while preserving all rubrics and gradings."
                    }
                ],
                tip: {
                    title: "Pedagogical Philosophy: Focus on Rubric Quality & Formative Feedback",
                    text: "Gradaly is designed to help teachers invest their expertise where it matters most: crafting a rigorous, fair, and transparent evaluation rubric so every student receives detailed, individualized conceptual and mathematical feedback."
                }
            },
            {
                id: "canvas-and-rubrics",
                stepNumber: "2",
                tag: "Chapter 2",
                shortTitle: "Canvas, Zones & Rubrics",
                title: "Exam Canvas, Question Framing & Fine-Grained Rubrics",
                subtitle: "Import your blank exam PDF, draw answer zones across one or more pages, and build additive criteria.",
                paragraphs: [
                    "In the <strong>Canvas & Questions</strong> tab, your blank exam PDF serves as the geometric reference for all student copies. First, draw the <strong>Student Identification Zone</strong> (green box) around the header where students write their name and matricule ID—this zone is processed 100% offline on your machine.",
                    "Next, create each question and draw one or more <strong>Answer Bounding Boxes</strong> (red/indigo boxes). A single question can span multiple zones or even <strong>multiple pages</strong>: Gradaly automatically stitches all zones of a question vertically when displaying or evaluating the student's work.",
                    "For each question, define a fine-grained rubric made of independent boolean criteria (in <code>0.5 pt</code> increments) plus an optional base score and maximum score cap. You can also click <strong>AI Rubric Assistant</strong> to co-design criteria interactively by providing your master solution PDF or sample answers."
                ],
                screenshots: [
                    {
                        filePrefix: "02_questions",
                        caption: "Canvas & Questions Tab: Framing multi-page answer zones and designing additive rubric criteria"
                    }
                ],
                callouts: [
                    {
                        title: "Include the Printed Question Prompt",
                        desc: "When drawing a question box, include both the printed question statement and the student's answer box so the AI has full visual context."
                    },
                    {
                        title: "Multi-Page Questions",
                        desc: "Draw zones on Page 1 and Page 2 for the same question: Gradaly combines them seamlessly in the grading console and student web portal."
                    },
                    {
                        title: "Additive Criteria & Max Score Cap",
                        desc: "Each validated criterion adds points (+0.5 pt, +1 pt, etc.) clamped between 0 and the question's Max Score, allowing flexible bonus paths."
                    },
                    {
                        title: "Interactive AI Rubric Assistant",
                        desc: "Drop your official solution key PDF or discuss grading expectations with the AI assistant to generate clear, unambiguous criteria."
                    }
                ],
                tip: {
                    title: "Best Practice for Framing Zones",
                    text: "Always encompass the printed question text inside the bounding box whenever it sits above the answer area—this avoids copying the statement manually into the system prompt."
                }
            },
            {
                id: "collaborative-sharing",
                stepNumber: "3",
                tag: "Chapter 3",
                badge: "New in v3.0 • PRO",
                shortTitle: "Collaborative Team Grading",
                title: "Collaborative Project Sharing & Selective Per-Question Merge",
                subtitle: "Share projects via .gradaly archives or end-to-end encrypted Cloud links, and merge question-by-question (Gradaly Pro).",
                paragraphs: [
                    "When co-grading an exam with colleagues or teaching assistants, Gradaly Pro (v3.0) lets you share either a complete project or a lightweight subset (e.g. only the rubric and gradings for specific questions) with real-time progress bars.",
                    "Click the <strong>Share / Export</strong> icon next to the project name in the header to choose between a local <code>.gradaly</code> archive file or an <strong>Encrypted Cloud Link</strong>. With Cloud links, the archive is encrypted on your computer using <strong>AES-256-GCM</strong> before upload, and the secret decryption key (<code>#k=...</code>) stays strictly in the URL fragment that you send to your colleague.",
                    "When your colleague clicks <strong>Import / Merge</strong>, Gradaly inspects the archive, verifies that the exam canvas PDF has the exact same <strong>SHA-256 cryptographic fingerprint</strong>, and lets them either import the archive as a <strong>brand-new project under a custom name</strong> (100% conflict-free) or <strong>selectively merge rubrics and/or gradings question-by-question</strong> with an automatic pre-merge backup in <code>backups/</code>."
                ],
                screenshots: [
                    {
                        filePrefix: "09_share_modal",
                        caption: "Share / Export Project Modal: Presets, per-question filter, .gradaly file export, and AES-256 Encrypted Cloud Link"
                    },
                    {
                        filePrefix: "10_import_merge_modal",
                        caption: "Import / Selective Merge Modal: SHA-256 canvas verification, per-question Rubric/Gradings checkboxes, and conflict protection"
                    }
                ],
                callouts: [
                    {
                        title: "4 Ready-to-Use Sharing Presets",
                        desc: "Choose 'Rubric & Gradings (Lightweight < 500 KB)', 'Full Project', 'Canvas & Rubric Only', or 'Project + Papers (No gradings)'."
                    },
                    {
                        title: "End-to-End Encrypted Cloud Links",
                        desc: "Large archives are automatically split into encrypted chunks with a live byte-by-byte progress bar and configurable expiration (7, 14, or 30 days)."
                    },
                    {
                        title: "Create as New Project vs Selective Merge",
                        desc: "Import safely under a new project name, or merge specific questions (e.g. Colleague A's Q1–Q2 with Colleague B's Q3–Q4)."
                    },
                    {
                        title: "Conflict Protection & Auto-Backup",
                        desc: "Protect your local manual gradings from being overwritten and rely on the automatic snapshot saved in your project's backups/ directory."
                    }
                ],
                tip: {
                    title: "Recommended Team Workflow (Splitting by Question)",
                    text: "1) Coordinator shares the full project (Canvas + Rubric + Matched Papers). 2) Each TA grades their assigned questions and shares back a 'Rubric & Gradings (Lightweight)' link. 3) Coordinator uses Selective Merge to combine each TA's questions in seconds!"
                }
            },
            {
                id: "students-and-copies",
                stepNumber: "4",
                tag: "Chapter 4",
                shortTitle: "Roster, Scans & OCR Matching",
                title: "Student Roster (CSV), Batch Scans & 100% Offline OCR Matching",
                subtitle: "Import your class list, split multi-copy PDF scans, and link each paper to its student completely offline.",
                paragraphs: [
                    "In the <strong>Students</strong> tab, import your official class roster from a CSV file (matricule ID, last name, first name, email, group). All student identity records remain strictly on your computer.",
                    "In the <strong>Papers</strong> tab, import individual student PDF files or drop a single combined multi-copy scan from the photocopier: Gradaly automatically splits it into individual student copies based on the canvas page count.",
                    "In the <strong>Matching</strong> tab, Gradaly crops the Student Identification Zone on every copy and runs local OCR + fuzzy matching (handling typos, inverted first/last names, and matricule digits) while displaying a high-resolution zoomed header for instant human verification."
                ],
                screenshots: [
                    {
                        filePrefix: "04_students",
                        caption: "Students Tab: Imported CSV class roster with matricule IDs, names, emails, and groups"
                    },
                    {
                        filePrefix: "05_copies",
                        caption: "Papers Tab: Managing imported student PDF scans and automatic batch scan splitting"
                    },
                    {
                        filePrefix: "06_matching",
                        caption: "Matching Tab: Zoomed header preview, offline OCR recognition, and 1-click student assignment"
                    }
                ],
                callouts: [
                    {
                        title: "Flexible CSV Column Mapping",
                        desc: "Automatically detects ID, Last Name, First Name, Email, and Group columns from standard university exports."
                    },
                    {
                        title: "Combined Scan Splitter",
                        desc: "Scanned 100 4-page exams into a single 400-page PDF? Gradaly slices it into 100 individual copies in one click."
                    },
                    {
                        title: "Ambiguity & First-Name Safeguards",
                        desc: "Strict matching rules prevent false positives when two students share a similar name or only write a first name."
                    },
                    {
                        title: "Fast Keyboard Verification",
                        desc: "Review zoomed handwritten headers and confirm or reassign any paper in seconds."
                    }
                ]
            },
            {
                id: "grading-console",
                stepNumber: "5",
                tag: "Chapter 5",
                shortTitle: "Grading Console",
                title: "AI Pre-Grading, Manual & Hybrid Evaluation Console",
                subtitle: "Evaluate question-by-question with full human control, KaTeX math rendering, and selective override protection.",
                paragraphs: [
                    "The <strong>Grading</strong> tab is your main workspace. It displays the student's handwritten answer (stacking pages vertically if a question spans multiple pages) right next to the interactive criteria checklist, the technical justification for the teacher, and the formative feedback addressed to the student.",
                    "You can grade purely by hand (clicking criteria checkboxes or using keyboard shortcuts), run AI pre-grading on a single copy to test your rubric, or launch batch evaluation across the cohort while protecting any copy you have already graded manually."
                ],
                screenshots: [
                    {
                        filePrefix: "07_grading",
                        caption: "Grading Tab: Student answer crop, interactive criteria checklist, AI justification, and KaTeX student feedback"
                    }
                ],
                callouts: [
                    {
                        title: "Lazy Dynamic Score Calculation",
                        desc: "Scores are computed dynamically from checked criteria: if you change a criterion's weight from 1 pt to 1.5 pt, all 200 copies update instantly!"
                    },
                    {
                        title: "Selective Override Protection",
                        desc: "When re-running AI evaluation, choose whether to protect manual grades, existing feedback, or justifications."
                    },
                    {
                        title: "Gemini Batch API (-50% Cost)",
                        desc: "Submit an entire exam cohort as an asynchronous batch job at half the standard token cost, with persistent progress tracking."
                    },
                    {
                        title: "Rich Markdown & KaTeX Math",
                        desc: "Both student feedback and teacher justifications render LaTeX mathematical expressions ($\\int$, $\\frac{a}{b}$, matrices) cleanly."
                    }
                ]
            },
            {
                id: "api-keys-and-models",
                stepNumber: "6",
                tag: "Chapter 6",
                badge: "Zero AI Markup",
                shortTitle: "API Keys & Choosing Models",
                title: "How to Create an API Key & Choose the Right AI Model",
                subtitle: "Configure Gemini, OpenRouter, OpenAI, Anthropic, or a free university/local server with 0% commission.",
                paragraphs: [
                    "<strong>The quality of AI pre-grading depends directly on the vision and reasoning capabilities of the AI model you select.</strong> In our benchmarks on handwritten university exams (mathematics, physics, engineering, and humanities), we achieve <strong>excellent results with <code>Gemini 3.8 Flash</code>, <code>GPT 5-4 mini</code>, <code>Claude-Sonnet-5.5</code>, and <code>Mistral-Large 4.0</code></strong>—and you are completely free to test and switch between any other models at any time.",
                    "Unlike emerging cloud AI grading platforms that force a single model on you and charge a heavy markup via mandatory <em>\"AI credit packs\"</em>, <strong>Gradaly charges strictly nothing (0%) on your AI usage</strong>. You connect your own API key (paying the provider's raw token cost, typically a few cents for a whole class) or use a <strong>free model provided by your university</strong> or a <strong>local model via Ollama</strong> for total sovereignty."
                ],
                screenshots: [
                    {
                        filePrefix: "11_settings_ai",
                        caption: "Settings Modal: Configuring Gemini, OpenRouter, OpenAI, Anthropic Claude, University API, or Local Ollama"
                    }
                ],
                providerGuides: [
                    {
                        name: "1. Google Gemini (Google AI Studio)",
                        icon: "fas fa-bolt",
                        tag: "Recommended • Batch -50%",
                        desc: "Ideal for fast, high-accuracy handwriting recognition and mathematical reasoning (e.g. <code>Gemini 3.8 Flash</code>). Supports both a Free Tier and the asynchronous Batch mode (-50% cost).",
                        steps: [
                            "Sign in to <strong>Google AI Studio</strong> with your Google account.",
                            "Click <strong>Get API key</strong> in the left sidebar, then <strong>Create API key</strong>.",
                            "Copy the key (starts with <code>AIza...</code>) and paste it into Gradaly → <strong>Settings → Google Gemini</strong>."
                        ],
                        url: "https://aistudio.google.com/apikey",
                        linkLabel: "Open Google AI Studio (aistudio.google.com/apikey)"
                    },
                    {
                        name: "2. OpenRouter (All Models in One Key)",
                        icon: "fas fa-network-wired",
                        tag: "Universal Gateway",
                        desc: "<strong>Major advantage:</strong> OpenRouter gives you access to <strong>all models on the market</strong> (Gemini, GPT, Claude, Mistral-Large 4.0, Qwen, Llama) through a single account, a single prepaid balance, and one API key!",
                        steps: [
                            "Create an account on <strong>openrouter.ai</strong> and add a few euros/dollars in <em>Credits</em>.",
                            "Go to <strong>Keys</strong> and click <strong>Create Key</strong>.",
                            "Copy the key (starts with <code>sk-or-v1-...</code>) and paste it into Gradaly → <strong>Settings → OpenRouter</strong>, then pick any model."
                        ],
                        url: "https://openrouter.ai/keys",
                        linkLabel: "Open OpenRouter Keys (openrouter.ai/keys)"
                    },
                    {
                        name: "3. OpenAI (GPT Models)",
                        icon: "fas fa-microchip",
                        tag: "GPT 5-4 mini / GPT-4o",
                        desc: "Delivers very strong visual and analytical accuracy on complex diagrams and structured rubrics with models such as <code>GPT 5-4 mini</code>.",
                        steps: [
                            "Sign in to <strong>OpenAI Platform</strong> and add a payment method under <em>Billing</em>.",
                            "Open <strong>Dashboard → API Keys</strong> and click <strong>Create new secret key</strong>.",
                            "Copy the key (starts with <code>sk-proj-...</code>) and paste it into Gradaly → <strong>Settings → OpenAI</strong>."
                        ],
                        url: "https://platform.openai.com/api-keys",
                        linkLabel: "Open OpenAI Platform (platform.openai.com/api-keys)"
                    },
                    {
                        name: "4. Anthropic (Claude Models)",
                        icon: "fas fa-brain",
                        tag: "Claude-Sonnet-5.5",
                        desc: "Renowned for nuanced pedagogical feedback, essay evaluation, and step-by-step mathematical proofs with models like <code>Claude-Sonnet-5.5</code>.",
                        steps: [
                            "Sign in to <strong>Anthropic Console</strong> and top up your credit balance under <em>Billing</em>.",
                            "Navigate to <strong>Settings → API Keys</strong> and click <strong>Create Key</strong>.",
                            "Copy the key (starts with <code>sk-ant-...</code>) and paste it into Gradaly → <strong>Settings → Anthropic</strong>."
                        ],
                        url: "https://console.anthropic.com/settings/keys",
                        linkLabel: "Open Anthropic Console (console.anthropic.com)"
                    }
                ],
                tip: {
                    title: "University-Hosted Models & Local Ollama = 100% Sovereignty at Zero Cost",
                    text: "If your university or research lab provides an institutional AI gateway (OpenAI-compatible endpoint) or if you run Ollama locally on your machine, configure it under 'Custom / Institutional Server' or 'Local Ollama'. You get 100% academic sovereignty at zero cost!"
                }
            },
            {
                id: "analytics-and-exports",
                stepNumber: "7",
                tag: "Chapter 7",
                shortTitle: "Analytics, Portal & Exports",
                title: "Cohort Analytics, Annotated PDFs & Encrypted Student Web Portal",
                subtitle: "Analyze score distributions, simulate rubric adjustments, and deliver rich formative feedback to students.",
                paragraphs: [
                    "The <strong>Summary</strong> tab provides real-time cohort statistics: mean, median, standard deviation, min/max scores, unambiguous score histograms <code>[a, b[</code>, and the exact validation percentage for every rubric criterion.",
                    "When you are ready to return results, Gradaly offers three complementary export channels:",
                    "1) <strong>Multi-Sheet Excel Gradebook</strong> with a global summary tab (matched with student IDs, names, emails, and groups) plus one detailed breakdown tab per question.<br>2) <strong>Individual Annotated Student PDFs</strong> (packaged in a ZIP archive) with a clean cover sheet, per-question rubric breakdown, and KaTeX math.<br>3) <strong>End-to-End Encrypted Student Web Portal</strong>: publish encrypted copies online in one click, dispatch individual notification emails with 1-click magic links, print <strong>cut-out QR code slips</strong> for in-class distribution without email, or share a <strong>Teacher Review Portal link</strong> with colleagues."
                ],
                screenshots: [
                    {
                        filePrefix: "08_stats",
                        caption: "Summary Tab: Cohort KPIs, score distribution histograms, per-criterion success rates, and Export Hub"
                    }
                ],
                callouts: [
                    {
                        title: "Multi-Sheet Excel Export",
                        desc: "Ready for university grade administration, including per-criterion columns (1/0) and student roster metadata."
                    },
                    {
                        title: "Annotated Student PDFs",
                        desc: "Generates an individual PDF for each student combining a summary cover table and their original handwritten pages."
                    },
                    {
                        title: "Encrypted Student Web Portal",
                        desc: "Each copy is encrypted client-side (AES-256-GCM) with its own unique key (#k=...) before upload, with vertical multi-page viewing."
                    },
                    {
                        title: "Magic-Link Emails & Printable QR Slips",
                        desc: "Send personalized links by email (with Reply-To set to the teacher) or print A4 sheets of QR code slips to hand out in class."
                    }
                ]
            },
            {
                id: "faq-and-comparison",
                stepNumber: "8",
                tag: "Chapter 8",
                badge: "FAQ & Architecture",
                shortTitle: "FAQ & vs. Gradescope",
                title: "Frequently Asked Questions & Comparison with Other Tools",
                subtitle: "Cloud encryption security, why Gradaly is a desktop app, and how it compares to Gradescope and credit-based AI graders.",
                paragraphs: [
                    "Below you will find answers to the most frequent questions from faculty and data protection officers regarding cloud encryption, data ownership, and how Gradaly compares with traditional web grading platforms such as <strong>Gradescope</strong> or emerging cloud AI tools."
                ],
                comparisonTable: {
                    title: "Comparison: Gradaly vs. Gradescope vs. Cloud AI Grading Platforms",
                    headers: [
                        "Criterion",
                        "Gradaly (Desktop + Encrypted Cloud)",
                        "Gradescope (Web SaaS)",
                        "Other Cloud AI Graders"
                    ],
                    rows: [
                        [
                            "Student Data & Privacy",
                            "✅ <strong>100% Local</strong> roster & OCR on your laptop; Cloud exports are client-side encrypted (<code>AES-256-GCM</code>)",
                            "⚠️ Full student roster, names & PDF scans uploaded in cleartext to third-party cloud servers",
                            "⚠️ Full student copies uploaded in cleartext to the vendor's cloud"
                        ],
                        [
                            "AI Pre-Grading & Formative Feedback",
                            "✅ <strong>Included</strong> (checks rubric criteria + writes individualized mathematical & conceptual feedback)",
                            "❌ No multimodal AI rubric grading or automated formative feedback generation",
                            "✅ Included, but tied to the platform's imposed model"
                        ],
                        [
                            "AI-Assisted Rubric Creation",
                            "✅ <strong>Included</strong> (interactive AI Rubric Assistant from statement & master solution PDF)",
                            "❌ Manual rubric creation only",
                            "⚠️ Limited or locked to proprietary templates"
                        ],
                        [
                            "Choice of AI Model & Sovereignty",
                            "✅ <strong>Total freedom</strong> (Gemini 3.8 Flash, GPT 5-4 mini, Claude-Sonnet-5.5, Mistral-Large 4.0, OpenRouter, University API, or local Ollama)",
                            "➖ N/A",
                            "❌ Model imposed by the platform with no control"
                        ],
                        [
                            "AI Usage Pricing Model",
                            "✅ <strong>0% markup (Zero AI credits)</strong> — pay raw API cost (~cents) or 0 € via University/local model",
                            "➖ N/A (Institutional subscription)",
                            "❌ Expensive proprietary <strong>AI credit packs</strong> with heavy vendor margin"
                        ],
                        [
                            "Team Collaboration",
                            "✅ Encrypted Cloud Share links (<code>#k=...</code>) & <code>.gradaly</code> archives with selective per-question merge",
                            "✅ <strong>Excellent</strong> real-time multi-user browser collaboration without merging files",
                            "✅ Web-based collaboration"
                        ],
                        [
                            "Multiple-Choice (MCQ) & Answer Clustering",
                            "➖ Focused on open-ended handwritten questions & rubrics",
                            "✅ <strong>Excellent</strong> native bubble-sheet (MCQ) grading & automatic answer grouping/clustering",
                            "⚠️ Variable"
                        ]
                    ]
                },
                faqs: [
                    {
                        q: "Where are data stored when I publish an exam or share a project on the Cloud? Who has access to it?",
                        a: "<p>When you publish an exam to the Student Web Portal or generate a Collaborative Cloud Share link, <strong>every single file is encrypted locally on your computer using AES-256-GCM before a single byte leaves your machine</strong>. Only unintelligible encrypted binary files (<code>.enc</code>) are stored on our European cloud object storage (with automatic expiration after 7 to 365 days).</p><p>The secret decryption key (<code>#k=...</code>) is placed inside the URL fragment after the <code>#</code> symbol. By internet standard (RFC 3986), URL fragments are never transmitted in HTTP requests to the server. <strong>This means that neither the creators of Gradaly nor even an attacker who compromised the cloud server could ever read your copies, grades, or student names</strong>—only the person holding the generated link possesses the key to decrypt the file in their browser or Gradaly app.</p>"
                    },
                    {
                        q: "Why is Gradaly a desktop application rather than a web tool like Gradescope?",
                        a: "<p>We chose a native desktop architecture for two fundamental reasons:</p><p><strong>1. Immediate Data Control & Zero Institutional Friction:</strong> With web SaaS tools, uploading hundreds of named student exams requires strict institutional GDPR/FERPA sub-processor contracts. In Gradaly, your project files, CSV student roster, and header OCR stay 100% on your computer.</p><p><strong>2. Gradaly's Vision for 100% Autonomous Local AI:</strong> Our vision is that within the next few years, compact open-weights multimodal models will run directly on standard faculty laptops (Apple Silicon Unified Memory, NPU/GPU) with the same accuracy as today's cloud frontier models. Because Gradaly runs natively on your machine and already supports local engines like Ollama, teachers will be <strong>100% autonomous, offline, and sovereign</strong>—with zero cloud dependency.</p>"
                    },
                    {
                        q: "What are the honest differences with Gradescope?",
                        a: "<p><strong>Gradescope</strong> is a mature web platform with real strengths: it offers simultaneous browser-based team grading without needing to merge archives, native support for multiple-choice bubble sheets (MCQ), and answer clustering for short inputs.</p><p>However, Gradescope does <strong>not</strong> include multimodal AI pre-grading of complex handwritten derivations, does <strong>not</strong> offer an AI assistant to help design rubrics and questions from your solution key, and gives you less control over where your student data live. <strong>Gradaly</strong> is built specifically to combine human pedagogical sovereignty with multimodal AI rubric evaluation, rich individualized student feedback, and strict data ownership.</p>"
                    },
                    {
                        q: "Why doesn't Gradaly sell 'AI Credits' like other AI grading tools?",
                        a: "<p>Many emerging AI grading platforms lock you into a single hidden model and monetize by selling you proprietary <strong>AI credits</strong> at a 5× to 20× markup over raw API costs. Gradaly rejects this model: <strong>we will never charge anything for your AI usage</strong>. You plug in your own API key (or OpenRouter, or a free model hosted by your university) and keep 100% control over both the model and the cost.</p>"
                    }
                ]
            }
        ]
    },
    fr: {
        badge_manual: "Manuel Utilisateur",
        back_home: "Retour à Gradaly.io",
        download_btn: "Télécharger Gradaly",
        hero_pill: "Guide Complet, Clés API & FAQ (v3.0)",
        hero_title: "Manuel Utilisateur Gradaly",
        hero_subtitle: "Mieux corriger, pour mieux former. Découvrez pas à pas comment concevoir un barème fin, configurer vos modèles d'IA, collaborer en équipe en toute sécurité et offrir un feedback véritablement formateur.",
        search_placeholder: "Rechercher dans le manuel (ex: clé API, OpenRouter, Gemini, Gradescope, chiffrement, fusion)...",
        toc_title: "Sommaire du Manuel",
        privacy_box_title: "Confidentialité Étudiants 100% Locale",
        privacy_box_text: "Les noms, prénoms, matricules, fichiers CSV et l'OCR des en-têtes restent strictement sur votre ordinateur (0% cloud). Même lors d'un partage Cloud, tout est chiffré côté client (AES-256-GCM) : ni Gradaly ni un pirate ne peut lire vos fichiers.",
        sections: [
            {
                id: "getting-started",
                stepNumber: "1",
                tag: "Chapitre 1",
                shortTitle: "Installation & Espace de travail",
                title: "Installation, Espace de travail & Projets Démo",
                subtitle: "Créez un projet d'examen en quelques secondes ou explorez immédiatement les projets de démonstration intégrés.",
                paragraphs: [
                    "Gradaly est une application de bureau native disponible pour <strong>macOS</strong> (Universal Apple Silicon & Intel, signée et notarisée par Apple), <strong>Windows 10/11</strong> et <strong>Linux</strong> (<code>.rpm</code>, <code>.deb</code> et <code>.AppImage</code>). Tous vos projets sont stockés localement sur votre ordinateur dans votre dossier d'espace de travail.",
                    "Dès le premier lancement, vous pouvez cliquer sur <strong>Charger le projet Démo (FR ou EN)</strong> depuis l'écran d'accueil. Cela génère instantanément un examen complet avec 20 copies manuscrites, un barème détaillé, une liste d'étudiants et des corrections prêtes à être explorées hors-ligne."
                ],
                screenshots: [
                    {
                        filePrefix: "01_welcome",
                        caption: "Écran d'accueil : Projets récents, Projets Démo en 1 clic et bouton Importer / Fusionner"
                    }
                ],
                callouts: [
                    {
                        title: "Créer un nouveau projet",
                        desc: "Saisissez le nom de l'examen et sélectionnez le PDF vierge du sujet (canevas) pour initialiser votre projet."
                    },
                    {
                        title: "Projets Démo intégrés (FR / EN)",
                        desc: "Testez librement l'application avec 20 copies corrigées, modifiez les pondérations du barème et testez les exports sans aucun scan."
                    },
                    {
                        title: "Importer ou Fusionner (.gradaly / Cloud)",
                        desc: "Ouvrez une archive partagée par un collègue sous forme de nouveau projet indépendant ou fusionnez-la sélectivement dans un projet existant."
                    },
                    {
                        title: "Migration automatique des versions",
                        desc: "Tout projet créé avec une version antérieure est automatiquement mis à niveau à l'ouverture sans perte de données."
                    }
                ],
                tip: {
                    title: "Philosophie pédagogique : La qualité du barème et du feedback avant tout",
                    text: "Gradaly permet à l'enseignant de consacrer son expertise à la conception d'un barème rigoureux, fin et équitable, afin d'offrir à chaque étudiant une justification détaillée et un feedback personnalisé véritablement formateur."
                }
            },
            {
                id: "canvas-and-rubrics",
                stepNumber: "2",
                tag: "Chapitre 2",
                shortTitle: "Canevas, Zones & Barèmes",
                title: "Canevas PDF, Cadrage des Questions & Barèmes Fins",
                subtitle: "Importez votre sujet PDF vierge, tracez les zones de réponse (même sur plusieurs pages) et construisez vos critères.",
                paragraphs: [
                    "Dans l'onglet <strong>Canevas & Questions</strong>, le PDF vierge de votre sujet d'examen sert de référentiel géométrique pour toutes les copies. Commencez par tracer la <strong>Zone d'Identification Étudiant</strong> (cadre vert) autour du cartouche d'en-tête (nom, prénom, matricule) : cette zone est traitée 100% hors-ligne sur votre machine.",
                    "Créez ensuite vos questions et tracez une ou plusieurs <strong>Zones de réponse</strong>. Une même question peut comporter plusieurs cadres ou s'étendre sur <strong>plusieurs pages</strong> : Gradaly assemble automatiquement les zones verticalement lors de la correction et sur le portail web étudiant.",
                    "Pour chaque question, définissez des critères booléens indépendants (par paliers de <code>0.5 pt</code>) ainsi qu'une note maximale plafonnée. Vous pouvez également ouvrir l'<strong>Assistant IA de Barème</strong> pour co-construire vos critères à partir de votre corrigé type PDF."
                ],
                screenshots: [
                    {
                        filePrefix: "02_questions",
                        caption: "Onglet Canevas & Questions : Cadrage des zones sur le PDF et édition des critères du barème"
                    }
                ],
                callouts: [
                    {
                        title: "Inclure l'énoncé imprimé dans le cadre",
                        desc: "Englobez à la fois l'énoncé imprimé de la question et le cadre de réponse de l'étudiant pour donner tout le contexte visuel à l'IA."
                    },
                    {
                        title: "Questions multi-pages",
                        desc: "Tracez des cadres sur la page 1 puis la page 2 pour une même question : Gradaly les affiche verticalement bout à bout."
                    },
                    {
                        title: "Critères additifs & Plafonnement",
                        desc: "Chaque critère validé ajoute ses points (+0.5 pt, +1 pt...) dans la limite de la note maximale de la question."
                    },
                    {
                        title: "Assistant IA de Barème avec Corrigé PDF",
                        desc: "Importez votre solutionnaire PDF et dialoguez avec l'assistant pour générer une grille d'évaluation fine et explicite."
                    }
                ],
                tip: {
                    title: "Astuce de cadrage",
                    text: "En englobant directement l'énoncé imprimé au-dessus de la zone de réponse lors du tracé du rectangle, vous n'avez pas besoin de recopier l'énoncé dans les consignes texte."
                }
            },
            {
                id: "collaborative-sharing",
                stepNumber: "3",
                tag: "Chapitre 3",
                badge: "Nouveauté v3.0 • PRO",
                shortTitle: "Correction Collaborative (v3.0)",
                title: "Partage Collaboratif de Projet & Fusion Sélective par Question",
                subtitle: "Partagez vos projets via une archive .gradaly ou un lien Cloud chiffré de bout en bout, et fusionnez question par question (Gradaly Pro).",
                paragraphs: [
                    "Pour corriger un examen à plusieurs (co-titulaires ou équipe d'assistants), Gradaly Pro (v3.0) permet de partager tout ou partie d'un projet avec suivi de progression en temps réel.",
                    "Cliquez sur l'icône <strong>Partager / Exporter</strong> à côté du nom du projet dans la barre supérieure pour choisir entre un fichier local <code>.gradaly</code> ou un <strong>Lien Cloud chiffré</strong>. Avec le lien Cloud, l'archive est chiffrée sur votre ordinateur en <strong>AES-256-GCM</strong> avant l'envoi, et la clé secrète de déchiffrement (<code>#k=...</code>) figure exclusivement dans le lien que vous transmettez à votre collègue.",
                    "Lorsque votre collègue clique sur <strong>Importer / Fusionner</strong>, Gradaly analyse l'archive, vérifie automatiquement que le canevas PDF possède exactement la même <strong>empreinte cryptographique SHA-256</strong>, et propose soit d'<strong>importer comme nouveau projet sous un nouveau nom</strong> (100% sans risque), soit de <strong>fusionner sélectivement le barème et/ou les corrections question par question</strong> avec sauvegarde automatique préalable dans <code>backups/</code>."
                ],
                screenshots: [
                    {
                        filePrefix: "09_share_modal",
                        caption: "Fenêtre Partager / Exporter le projet : Profils préconfigurés, filtre par question et Lien Cloud chiffré AES-256"
                    },
                    {
                        filePrefix: "10_import_merge_modal",
                        caption: "Fenêtre Importer / Fusionner : Vérification SHA-256 du canevas, tableau de sélection par question et protection des conflits"
                    }
                ],
                callouts: [
                    {
                        title: "4 profils de partage préconfigurés",
                        desc: "Choisissez « Barème & Corrections (Léger < 500 Ko) », « Projet complet », « Canevas & Barème uniquement » ou « Projet + Copies vierges »."
                    },
                    {
                        title: "Lien Cloud chiffré de bout en bout",
                        desc: "Les archives volumineuses sont découpées et chiffrées automatiquement avec barre de progression et durée de validité (7, 14 ou 30 jours)."
                    },
                    {
                        title: "Nouveau projet ou Fusion sélective",
                        desc: "Créez un nouveau projet avec le nom de votre choix, ou cochez précisément les questions dont vous souhaitez récupérer le barème ou les notes."
                    },
                    {
                        title: "Protection des corrections manuelles & Backup",
                        desc: "Protégez vos corrections manuelles locales contre l'écrasement et bénéficiez d'une sauvegarde automatique dans le dossier backups/."
                    }
                ],
                tip: {
                    title: "Scénario recommandé en équipe (Répartition par question)",
                    text: "1) Le coordinateur prépare le projet (Canevas + Copies appariées) et le partage à l'équipe. 2) L'Assistant A corrige Q1–Q2, l'Assistant B corrige Q3–Q4, et chacun renvoie un lien « Barème & Corrections (Léger) ». 3) Le coordinateur fusionne Q1–Q2 puis Q3–Q4 en quelques secondes !"
                }
            },
            {
                id: "students-and-copies",
                stepNumber: "4",
                tag: "Chapitre 4",
                shortTitle: "Étudiants, Copies & OCR",
                title: "Liste d'Étudiants (CSV), Découpage des Scans & Appariement OCR Hors-Ligne",
                subtitle: "Importez votre liste de classe, découpez vos scans groupés et associez chaque copie à son étudiant 100% en local.",
                paragraphs: [
                    "Dans l'onglet <strong>Étudiants</strong>, importez la liste officielle de votre promotion au format CSV (matricule, nom, prénom, e-mail, groupe). Toutes ces données nominatives restent strictement locales sur votre machine.",
                    "Dans l'onglet <strong>Copies</strong>, déposez des fichiers PDF individuels ou un gros fichier PDF unique issu du scanner : Gradaly détecte automatiquement le nombre de pages du canevas et découpe le scan groupé en copies individuelles.",
                    "Dans l'onglet <strong>Appariement</strong>, Gradaly extrait la zone d'en-tête de chaque copie et exécute la reconnaissance optique (OCR) ainsi qu'un algorithme d'appariement flou tolérant aux fautes de frappe, tout en affichant un zoom haute définition de l'écriture manuscrite."
                ],
                screenshots: [
                    {
                        filePrefix: "04_students",
                        caption: "Onglet Étudiants : Liste de classe importée depuis un fichier CSV (matricules, noms, e-mails, groupes)"
                    },
                    {
                        filePrefix: "05_copies",
                        caption: "Onglet Copies : Gestion des copies PDF importées et découpage automatique de scans groupés"
                    },
                    {
                        filePrefix: "06_matching",
                        caption: "Onglet Appariement : Zoom sur l'en-tête manuscrit, reconnaissance OCR locale et attribution en 1 clic"
                    }
                ],
                callouts: [
                    {
                        title: "Import CSV universel",
                        desc: "Détection automatique des colonnes Matricule, Nom, Prénom, E-mail et Groupe."
                    },
                    {
                        title: "Découpage automatique de gros scans",
                        desc: "Vous avez scanné 100 copies de 4 pages en un seul PDF de 400 pages ? Gradaly génère les 100 copies individuelles en un clic."
                    },
                    {
                        title: "Sécurité anti-faux-positifs",
                        desc: "Les cas ambigus (homonymes ou prénom seul) sont signalés en orange pour validation visuelle par l'enseignant."
                    },
                    {
                        title: "Vérification visuelle rapide",
                        desc: "Contrôlez d'un coup d'œil l'en-tête manuscrit zoomé à côté du nom de l'étudiant attribué."
                    }
                ]
            },
            {
                id: "grading-console",
                stepNumber: "5",
                tag: "Chapitre 5",
                shortTitle: "Poste d'Évaluation",
                title: "Poste d'Évaluation : Correction IA, Manuelle ou Hybride",
                subtitle: "Évaluez question par question avec souveraineté humaine totale, formules KaTeX et protection contre l'écrasement.",
                paragraphs: [
                    "L'onglet <strong>Évaluation</strong> constitue votre poste de travail principal. Il affiche l'extrait manuscrit de la copie (empilé verticalement si la question s'étend sur plusieurs pages) face à la grille de critères cliquables, la justification technique pour l'enseignant et le commentaire formateur destiné à l'étudiant.",
                    "Vous pouvez corriger 100% manuellement, lancer l'IA sur une seule copie pour tester votre barème, ou lancer une pré-correction en lot sur toute la classe tout en protégeant les copies déjà corrigées à la main."
                ],
                screenshots: [
                    {
                        filePrefix: "07_grading",
                        caption: "Onglet Évaluation : Extrait de la copie, critères interactifs, justification IA et feedback étudiant avec maths KaTeX"
                    }
                ],
                callouts: [
                    {
                        title: "Recalcul dynamique instantané",
                        desc: "Les notes sont calculées dynamiquement à partir des critères cochés : modifiez le poids d'un critère et toute la promotion est recalculée instantanément !"
                    },
                    {
                        title: "Protection sélective contre l'écrasement",
                        desc: "Lors d'une relance IA, choisissez de préserver vos notes manuelles, vos commentaires ou vos justifications existantes."
                    },
                    {
                        title: "Mode Gemini Batch (-50% sur les coûts)",
                        desc: "Soumettez toute une promotion en tâche de fond asynchrone à moitié prix avec reprise automatique de l'état d'avancement."
                    },
                    {
                        title: "Rendu mathématique KaTeX",
                        desc: "Les formules LaTeX ($\\int$, $\\frac{a}{b}$, vecteurs, matrices) sont mises en forme proprement dans l'interface, les PDF et le portail web."
                    }
                ]
            },
            {
                id: "api-keys-and-models",
                stepNumber: "6",
                tag: "Chapitre 6",
                badge: "0% Commission IA",
                shortTitle: "Clés API & Choix du Modèle",
                title: "Comment créer une clé API & Choisir le bon modèle d'IA",
                subtitle: "Configurez Gemini, OpenRouter, OpenAI, Anthropic ou un serveur universitaire/local gratuit sans aucun surcoût.",
                paragraphs: [
                    "<strong>La qualité de la pré-correction IA dépend directement des capacités de lecture manuscrite et de raisonnement du modèle que vous sélectionnez.</strong> Sur nos examens universitaires de référence (mathématiques, physique, ingénierie, sciences humaines), nous obtenons <strong>d'excellents résultats avec <code>Gemini 3.8 Flash</code>, <code>GPT 5-4 mini</code>, <code>Claude-Sonnet-5.5</code> ou <code>Mistral-Large 4.0</code></strong> — et vous êtes totalement libre d'en tester d'autres selon votre discipline.",
                    "Contrairement aux nouvelles plateformes d'IA en ligne qui vous imposent leur modèle et vous revendent des <em>« crédits IA »</em> avec une forte marge, <strong>Gradaly ne facture strictement rien (0%) sur votre utilisation de l'IA</strong>. Vous utilisez votre propre clé API au prix coûtant (quelques centimes pour toute une promotion) ou un <strong>modèle gratuit fourni par votre université</strong> / <strong>Ollama en local</strong> pour une souveraineté maximale."
                ],
                screenshots: [
                    {
                        filePrefix: "11_settings_ai",
                        caption: "Fenêtre Paramètres : Configuration de Gemini, OpenRouter, OpenAI, Anthropic Claude, serveur universitaire ou Ollama local"
                    }
                ],
                providerGuides: [
                    {
                        name: "1. Google Gemini (Google AI Studio)",
                        icon: "fas fa-bolt",
                        tag: "Recommandé • Batch -50%",
                        desc: "Idéal pour la lecture d'écriture manuscrite et le raisonnement mathématique rapide (ex: <code>Gemini 3.8 Flash</code>). Propose un mode gratuit (Free Tier) et le mode Batch asynchrone (-50% sur les tarifs).",
                        steps: [
                            "Connectez-vous sur <strong>Google AI Studio</strong> avec votre compte Google.",
                            "Cliquez sur <strong>Get API key</strong> dans le menu de gauche, puis sur <strong>Create API key</strong>.",
                            "Copiez la clé générée (commençant par <code>AIza...</code>) et collez-la dans Gradaly → <strong>Paramètres → Google Gemini</strong>."
                        ],
                        url: "https://aistudio.google.com/apikey",
                        linkLabel: "Ouvrir Google AI Studio (aistudio.google.com/apikey)"
                    },
                    {
                        name: "2. OpenRouter (Tous les modèles en 1 seule clé)",
                        icon: "fas fa-network-wired",
                        tag: "Passerelle Universelle",
                        desc: "<strong>Avantage majeur :</strong> OpenRouter vous donne accès à <strong>tous les modèles du marché</strong> (Gemini, GPT, Claude, Mistral-Large 4.0, Qwen, Llama) avec un seul compte, un seul solde prépayé et une unique clé API !",
                        steps: [
                            "Créez un compte sur <strong>openrouter.ai</strong> et ajoutez quelques euros dans l'onglet <em>Credits</em>.",
                            "Ouvrez la page <strong>Keys</strong> et cliquez sur <strong>Create Key</strong>.",
                            "Copiez la clé (commençant par <code>sk-or-v1-...</code>) et collez-la dans Gradaly → <strong>Paramètres → OpenRouter</strong>, puis choisissez n'importe quel modèle."
                        ],
                        url: "https://openrouter.ai/keys",
                        linkLabel: "Ouvrir OpenRouter Keys (openrouter.ai/keys)"
                    },
                    {
                        name: "3. OpenAI (Modèles GPT)",
                        icon: "fas fa-microchip",
                        tag: "GPT 5-4 mini / GPT-4o",
                        desc: "Très grande précision visuelle et analytique sur les schémas et barèmes structurés avec des modèles tels que <code>GPT 5-4 mini</code>.",
                        steps: [
                            "Connectez-vous sur <strong>OpenAI Platform</strong> et ajoutez un moyen de paiement dans <em>Billing</em>.",
                            "Allez dans <strong>Dashboard → API Keys</strong> puis cliquez sur <strong>Create new secret key</strong>.",
                            "Copiez la clé (commençant par <code>sk-proj-...</code>) et collez-la dans Gradaly → <strong>Paramètres → OpenAI</strong>."
                        ],
                        url: "https://platform.openai.com/api-keys",
                        linkLabel: "Ouvrir OpenAI Platform (platform.openai.com/api-keys)"
                    },
                    {
                        name: "4. Anthropic (Modèles Claude)",
                        icon: "fas fa-brain",
                        tag: "Claude-Sonnet-5.5",
                        desc: "Particulièrement apprécié pour la finesse de ses commentaires pédagogiques, les démonstrations mathématiques et les questions rédactionnelles avec <code>Claude-Sonnet-5.5</code>.",
                        steps: [
                            "Connectez-vous sur <strong>Anthropic Console</strong> et créditez votre solde dans <em>Billing</em>.",
                            "Rendez-vous dans <strong>Settings → API Keys</strong> et cliquez sur <strong>Create Key</strong>.",
                            "Copiez la clé (commençant par <code>sk-ant-...</code>) et collez-la dans Gradaly → <strong>Paramètres → Anthropic</strong>."
                        ],
                        url: "https://console.anthropic.com/settings/keys",
                        linkLabel: "Ouvrir Anthropic Console (console.anthropic.com)"
                    }
                ],
                tip: {
                    title: "Serveur IA Universitaire & Ollama Local = Souveraineté 100% et Coût Zéro",
                    text: "Si votre université ou laboratoire met à disposition un serveur de modèles gratuit (compatible OpenAI) ou si vous utilisez Ollama sur votre ordinateur, configurez-le dans l'onglet « Serveur Personnalisé / Universitaire » ou « Ollama Local » : vous gagnez une souveraineté totale sans dépenser un centime !"
                }
            },
            {
                id: "analytics-and-exports",
                stepNumber: "7",
                tag: "Chapitre 7",
                shortTitle: "Statistiques, Portail & Exports",
                title: "Statistiques de Promotion, PDF Annotés & Portail Web Étudiant Chiffré",
                subtitle: "Analysez la distribution des notes, simulez vos ajustements de barème et restituez des copies richement commentées.",
                paragraphs: [
                    "L'onglet <strong>Synthèse</strong> affiche en temps réel les indicateurs de la promotion : moyenne, médiane, écart-type, notes min/max, histogrammes par tranches <code>[a, b[</code> sans ambiguïté, et taux de réussite détaillé pour chaque critère du barème.",
                    "Pour la restitution des résultats, Gradaly propose trois canaux complémentaires :",
                    "1) <strong>Tableur Excel multi-feuilles</strong> comprenant une feuille de synthèse officielle (avec matricules, noms, e-mails, groupes) et un onglet détaillé par question.<br>2) <strong>Copies PDF annotées individuelles</strong> (regroupées dans une archive ZIP) avec page de garde récapitulative, barème détaillé par question et formules mathématiques.<br>3) <strong>Portail Web Étudiant chiffré de bout en bout</strong> : publiez les copies chiffrées en 1 clic, envoyez automatiquement les e-mails individuels avec lien magique, imprimez des <strong>planches de QR codes découpables</strong> à distribuer en classe, ou partagez un <strong>Portail de révision enseignant</strong>."
                ],
                screenshots: [
                    {
                        filePrefix: "08_stats",
                        caption: "Onglet Synthèse : Indicateurs statistiques, histogrammes [a, b[, réussite par critère et centre d'exportation"
                    }
                ],
                callouts: [
                    {
                        title: "Export Excel multi-feuilles",
                        desc: "Prêt pour l'administration universitaire avec synthèse globale et détail binaire (1/0) de chaque critère par question."
                    },
                    {
                        title: "Copies PDF annotées (Archive ZIP)",
                        desc: "Génère un PDF individuel par étudiant combinant une page de garde synthétique et l'intégralité de sa copie."
                    },
                    {
                        title: "Portail Web chiffré côté client",
                        desc: "Chaque copie est chiffrée en AES-256-GCM avec sa propre clé unique (#k=...) et s'affiche en vue verticale multi-pages."
                    },
                    {
                        title: "E-mails avec lien magique & Fiches QR",
                        desc: "Envoyez les liens personnels par e-mail (avec Reply-To vers l'enseignant) ou imprimez des coupons QR découpables pour la classe."
                    }
                ]
            },
            {
                id: "faq-and-comparison",
                stepNumber: "8",
                tag: "Chapitre 8",
                badge: "FAQ & Comparatif",
                shortTitle: "FAQ & vs. Gradescope",
                title: "Foire Aux Questions (FAQ) & Comparaison avec les autres outils",
                subtitle: "Sécurité du chiffrement Cloud, pourquoi une application Desktop, et comparaison avec Gradescope et les plateformes à crédits IA.",
                paragraphs: [
                    "Retrouvez ci-dessous les réponses aux questions les plus fréquentes concernant l'hébergement chiffré, la souveraineté des données, ainsi qu'un comparatif transparent avec les plateformes web classiques comme <strong>Gradescope</strong> et les outils d'IA basés sur des crédits."
                ],
                comparisonTable: {
                    title: "Comparatif : Gradaly vs. Gradescope vs. Plateformes Cloud d'IA à crédits",
                    headers: [
                        "Critère",
                        "Gradaly (App Desktop + Cloud Chiffré)",
                        "Gradescope (SaaS Web)",
                        "Autres plateformes Cloud d'IA"
                    ],
                    rows: [
                        [
                            "Données étudiants & Confidentialité",
                            "✅ <strong>100% Local</strong> (liste CSV & OCR sur votre machine) ; exports Cloud chiffrés de bout en bout (<code>AES-256-GCM</code>)",
                            "⚠️ Liste d'étudiants, noms et copies PDF envoyés en clair sur des serveurs cloud tiers",
                            "⚠️ Copies et données envoyées en clair sur le cloud du prestataire"
                        ],
                        [
                            "Pré-correction IA & Feedback formateur",
                            "✅ <strong>Inclus</strong> (vérifie les critères du barème + rédige un feedback mathématique et conceptuel individualisé)",
                            "❌ Pas de pré-correction multimodale par IA ni de génération de feedback formateur",
                            "✅ Inclus, mais verrouillé sur le modèle imposé par la plateforme"
                        ],
                        [
                            "Assistant IA de création de barème",
                            "✅ <strong>Inclus</strong> (co-conception interactive des critères à partir de l'énoncé et du corrigé PDF)",
                            "❌ Création 100% manuelle uniquement",
                            "⚠️ Limité ou figé"
                        ],
                        [
                            "Choix du modèle d'IA & Souveraineté",
                            "✅ <strong>Liberté totale</strong> (Gemini 3.8 Flash, GPT 5-4 mini, Claude-Sonnet-5.5, Mistral-Large 4.0, OpenRouter, serveur universitaire ou Ollama local)",
                            "➖ Non applicable",
                            "❌ Modèle imposé par la plateforme sans contrôle"
                        ],
                        [
                            "Coût d'utilisation de l'IA",
                            "✅ <strong>0% de marge (Zéro crédit IA)</strong> — coût API direct (~quelques centimes) ou 0 € via serveur universitaire/local",
                            "➖ Non applicable (Abonnement institutionnel)",
                            "❌ Revente coûteuse de <strong>packs de crédits IA</strong> avec forte marge"
                        ],
                        [
                            "Collaboration en équipe",
                            "✅ Liens Cloud chiffrés (<code>#k=...</code>) & archives <code>.gradaly</code> avec fusion sélective par question",
                            "✅ <strong>Excellent</strong> (collaboration web simultanée en temps réel sans fusion de fichiers)",
                            "✅ Collaboration web"
                        ],
                        [
                            "QCM à cases & Regroupement (Clustering)",
                            "➖ Conçu en priorité pour les questions ouvertes manuscrites et barèmes fins",
                            "✅ <strong>Excellent</strong> support natif des formulaires QCM et du regroupement automatique de réponses courtes",
                            "⚠️ Variable"
                        ]
                    ]
                },
                faqs: [
                    {
                        q: "Où sont stockées les données lorsque je publie un examen ou partage un projet sur le Cloud ? Qui peut y accéder ?",
                        a: "<p>Lorsque vous publiez un examen sur le Portail Web Étudiant ou générez un lien de partage collaboratif Cloud, <strong>chaque fichier est chiffré localement sur votre ordinateur en AES-256-GCM avant même qu'un seul octet ne quitte votre machine</strong>. Seuls des blocs binaires chiffrés inintelligibles (<code>.enc</code>) sont stockés sur notre stockage cloud européen (avec suppression automatique à l'échéance choisie).</p><p>La clé secrète de déchiffrement (<code>#k=...</code>) est placée dans le fragment d'URL situé après le symbole dièse (<code>#</code>). Selon le standard officiel d'Internet (RFC 3986), ce fragment n'est jamais envoyé au serveur lors des requêtes HTTP. <strong>Ainsi, même les créateurs de Gradaly ne peuvent jamais lire vos fichiers, et même un pirate qui compromettrait le serveur cloud ne verrait que des données chiffrées indéchiffrables</strong> : seul le détenteur du lien généré possède la clé permettant de déchiffrer la copie ou le projet.</p>"
                    },
                    {
                        q: "Pourquoi Gradaly est-il une application de bureau plutôt qu'un outil 100% web comme Gradescope ?",
                        a: "<p>Ce choix architectural repose sur deux convictions fortes :</p><p><strong>1. Maîtrise immédiate de vos données (RGPD) :</strong> Avec un outil SaaS web, téléverser des centaines de copies nominatives sur un cloud externe impose de lourdes démarches juridiques et RGPD auprès de votre établissement. Avec Gradaly, la liste des étudiants, les noms, les matricules et l'OCR restent 100% sur votre ordinateur.</p><p><strong>2. La vision de Gradaly à moyen terme (100% d'autonomie locale) :</strong> Notre vision est que d'ici quelques années, d'excellents modèles multimodaux tourneront directement sur l'ordinateur portable de chaque enseignant (mémoire unifiée Apple Silicon, NPU/GPU) avec une qualité équivalente aux grands modèles cloud actuels. Grâce à l'architecture Desktop de Gradaly (qui supporte déjà Ollama en local), les enseignants seront <strong>100% autonomes, souverains et indépendants de tout abonnement cloud</strong>.</p>"
                    },
                    {
                        q: "Quelles sont les différences honnêtes avec Gradescope ?",
                        a: "<p><strong>Gradescope</strong> possède de vrais atouts pour certains usages : une collaboration web simultanée sans étape de fusion, une gestion très poussée des formulaires QCM à bulles et le regroupement automatique (clustering) de réponses courtes.</p><p>En revanche, Gradescope n'inclut <strong>pas</strong> de pré-correction par IA multimodale sur les raisonnements manuscrits, n'offre <strong>pas</strong> d'assistant IA pour concevoir vos barèmes à partir d'un corrigé PDF, et vous laisse moins de contrôle sur vos données. <strong>Gradaly</strong> est conçu pour allier souveraineté des données, conception assistée de barèmes fins et génération de feedbacks formateurs individualisés.</p>"
                    },
                    {
                        q: "Pourquoi Gradaly ne vend-il pas de « crédits IA » comme d'autres plateformes ?",
                        a: "<p>De nouvelles plateformes de correction par IA émergent, mais elles vous imposent leur modèle d'IA sans transparence et vous facturent un surcoût important sous forme de <strong>crédits IA prépayés</strong>. Gradaly refuse ce modèle économique : <strong>nous ne facturerons jamais rien sur votre usage de l'IA</strong>. Vous branchez le modèle de votre choix au prix coûtant (ou gratuitement via un serveur fourni par votre université) en conservant une liberté et une souveraineté totales.</p>"
                    }
                ]
            }
        ]
    }
};

function manualApp() {
    return {
        lang: 'en',
        search: '',
        t: manualContent.en,
        init() {
            const urlParams = new URLSearchParams(window.location.search);
            const qLang = urlParams.get('lang');
            if (qLang === 'fr' || qLang === 'en') {
                this.lang = qLang;
            } else {
                const userLang = navigator.language || navigator.userLanguage || '';
                if (userLang.toLowerCase().startsWith('fr')) {
                    this.lang = 'fr';
                }
            }
            this.t = manualContent[this.lang];
        },
        toggleLang() {
            this.lang = this.lang === 'en' ? 'fr' : 'en';
            this.t = manualContent[this.lang];
        },
        get filteredSections() {
            const q = (this.search || '').trim().toLowerCase();
            if (!q) return this.t.sections;
            return this.t.sections.filter((sec) => {
                const haystack = [
                    sec.title,
                    sec.subtitle,
                    sec.shortTitle,
                    ...(sec.paragraphs || []),
                    ...(sec.callouts || []).map((c) => `${c.title} ${c.desc}`),
                    ...(sec.providerGuides || []).map((pg) => `${pg.name} ${pg.tag} ${pg.desc} ${(pg.steps || []).join(' ')}`),
                    sec.comparisonTable ? `${sec.comparisonTable.title} ${sec.comparisonTable.rows.map((r) => r.join(' ')).join(' ')}` : '',
                    ...(sec.faqs || []).map((f) => `${f.q} ${f.a}`),
                    sec.tip ? `${sec.tip.title} ${sec.tip.text}` : ''
                ].join(' ').toLowerCase();
                return haystack.includes(q);
            });
        }
    };
}
