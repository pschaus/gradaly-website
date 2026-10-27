const manualTranslations = {
    en: {
        badge_manual: "User Manual (2-in-1)",
        back_home: "Back to Website",
        download_btn: "Download Gradaly",
        hero_pill: "2-in-1 Desktop Application • Complete User Manual v4.0.0",
        hero_title: "Gradaly User Manual",
        hero_subtitle: "Grade Smarter, not Harder. Gradaly is a 2-in-1 application offering two independent workflows: (1) Exam & Mock Test Grading by the teacher (for formative mock exams under realistic exam conditions or official exams), and (2) Practice QR Self-Assessment by the student on smartphone. Select the guide matching your workflow below:",
        search_placeholder: "Search across all guides (e.g. exam, mock test, practice QR, rubric, OCR, API key, FAQ)...",
        card_exam_badge: "Product 1 • Teacher Grading",
        card_exam_chapters: "Chapters E1–E9",
        card_exam_title: "Manual 1: Exam & Mock Test Mode (By the Teacher)",
        card_exam_desc: "For official exams, midterms, or formative mock tests during the year in realistic exam conditions: scan student booklets, match identities 100% offline via OCR, grade manually or with AI/team collaboration, and return annotated copies.",
        card_practice_badge: "Product 2 • Student Self-Assessment",
        card_practice_chapters: "Chapters P1–P5",
        card_practice_title: "Manual 2: Practice & Self-Assessment QR Mode (By the Student)",
        card_practice_desc: "For problem sets, tutorials, and self-paced worksheets: stamp QR codes onto your exercise PDF so students solve on paper, scan with their smartphone, and get instant formative AI feedback using their own Gemini API key.",
        filter_label: "Display:",
        filter_exam: "1. Exam Guide (E1–E9)",
        filter_practice: "2. Practice QR Guide (P1–P5)",
        filter_all: "Show All Chapters",
        filter_hint: "Each guide is 100% self-contained — no need to read both!",
        switch_guide_kicker: "Explore the Second Gradaly Workflow",
        btn_go_practice: "Open Manual 2: Practice QR Mode",
        btn_go_exam: "Open Manual 1: Exam Grading Mode",
        toc_title: "Table of Contents",
        privacy_box_title: "100% Local Student Privacy",
        privacy_box_text: "Student rosters, ID zones, OCR matching, and project files are stored locally in Documents/Gradaly on your computer. Cloud portals and team links use client-side AES-256-GCM Zero-Knowledge encryption.",
        sections: [
            // =========================================================================
            // GUIDE 1: EXAM GRADING MODE (E1 to E9) — 100% SELF-CONTAINED
            // =========================================================================
            {
                id: "exam-getting-started",
                guide: "exam",
                stepNumber: "E1",
                partHeader: "Manual 1 — Exam & Mock Test Mode (Teacher)",
                partColor: "indigo",
                partBanner: {
                    kicker: "Manual 1 • Product 1: Exam & Mock Test Grading",
                    title: "Complete Guide to Exam & Mock Test Grading by the Teacher (100% Human, AI-Assisted & Team Mode)",
                    desc: "Self-contained guide for evaluating scanned student booklets — whether for an official exam or a formative mock test during the year under realistic exam conditions."
                },
                tag: "Exam Mode • Step 1 — Creating an Exam Project",
                badge: "100% Human or AI-Assisted",
                shortTitle: "Creating an Exam Project",
                title: "Creating an Exam Project & 100% Human vs. AI Workflows",
                subtitle: "Start a new Exam project (or launch the 20-copy Exam Demo) to evaluate scanned student booklets on your computer.",
                paragraphs: [
                    "<strong>What is an Exam Project (<code>Exam</code> badge)?</strong> An Exam project is designed for any evaluation where the teacher collects student papers, scans them into PDFs, and evaluates the cohort — including <strong>official midterms and finals</strong> as well as <strong>formative mock exams during the year</strong> under realistic exam conditions. Even if you prefer to grade your final exam by hand on paper, Exam Mode is an ideal way to run a mid-semester mock test and give every student detailed, individualized feedback in real exam conditions. It provides <strong>6 dedicated workflow tabs</strong> in the top bar: <code>1. Canvas &amp; Questions</code>, <code>2. Students</code>, <code>3. Copies</code>, <code>4. Matching</code>, <code>5. Grading</code>, and <code>6. Summary</code>.",
                    "<strong>100% Human Mode or AI-Assisted Mode:</strong> You do <strong>not</strong> need an AI API key to grade an exam in Gradaly. Out of the box, Gradaly works in <strong>100% Human Mode</strong> with rapid keyboard shortcuts (<code>1–9</code> to toggle criteria, <code>J</code>/<code>K</code> to navigate between students), dynamic score recalculation across the entire cohort whenever you adjust criterion weights, and rich Markdown &amp; KaTeX feedback. Whenever you wish, you can connect an AI API key to unlock the <strong>AI Rubric Assistant</strong> and <strong>Multimodal AI Pre-Grading</strong> while always keeping the final human decision.",
                    "From the <strong>Welcome Screen</strong>, click <strong>New project</strong> and select <strong>Exam Project (Teacher Grading)</strong>, or click <strong>Create demo project → Exam Project</strong> to explore a complete ready-made Physics exam with 20 handwritten student copies and a Reference Solution."
                ],
                screenshots: [
                    {
                        filePrefix: "01_welcome",
                        caption: "Welcome Screen: Exam projects are identified by the indigo 'Exam' badge and stored locally in Documents/Gradaly"
                    },
                    {
                        filePrefix: "12_demo_types_modal",
                        caption: "Demo Creation Modal: Select 'Exam Project (Teacher Grading)' to generate an offline demo with 20 graded copies"
                    }
                ],
                callouts: [
                    {
                        title: "Dedicated 6-Tab Exam Workspace",
                        desc: "Canvas & Questions → Students → Copies → Offline OCR Matching → 3-Pane Grading Console → Cohort Analytics & Exports."
                    },
                    {
                        title: "Works 100% Offline & Manually",
                        desc: "Grade manually at high speed with keyboard shortcuts, or combine AI pre-grading with human validation."
                    },
                    {
                        title: "Built-in 20-Copy Exam Demo",
                        desc: "Test the entire exam workflow immediately without scanning anything using the built-in English or French Exam Demo."
                    },
                    {
                        title: "100% Local Files in Documents/Gradaly",
                        desc: "All PDFs, rosters, and gradings remain on your machine in plain folders — zero forced cloud storage."
                    }
                ]
            },
            {
                id: "exam-canvas-and-rubric",
                guide: "exam",
                stepNumber: "E2",
                partColor: "indigo",
                tag: "Exam Mode • Step 2 — Canvas, ID Zone & Rubric",
                badge: "Essential for Accurate Grading",
                shortTitle: "Canvas, ID Zone & Criteria",
                title: "Defining the Student ID Zone, Question Zones, Scoring Policy & Solutionnaire",
                subtitle: "Import your blank exam PDF, frame the Student ID header for offline OCR, and define your questions and grading rubric.",
                paragraphs: [
                    "In the <strong>1. Canvas &amp; Questions</strong> tab of an Exam project, begin by importing the blank exam PDF (<code>Canvas</code>). You will then draw two types of rectangular zones on the PDF pages:",
                    "<strong>1. Draw the Student Identification Zone (<code>ID</code>):</strong> Click the <strong>Student ID Zone (Name / ID)</strong> button in the left panel and draw a rectangle on Page 1 where students write their name and student ID number. Gradaly will later crop this exact area on every copy to run <strong>100% offline OCR matching</strong> against your class roster.",
                    "<strong>2. Draw Each Question Zone (Include the Printed Question Statement!):</strong> When you trigger AI grading on a student's copy, Gradaly crops the <strong>exact image of the rectangle zone</strong> you drew for that question and sends it to your chosen AI model together with your rubric criteria. <strong>Crucial guideline:</strong> whenever the layout allows, <strong>include both the printed question statement and the student's answer box inside the rectangle</strong> so the AI has full visual context.",
                    "<strong>3. Understand Base Score (<code>Note de base</code>), Max Score (<code>Score max</code>), Clamping &amp; <code>Max possible</code>:</strong><br>• <strong>Score formula:</strong> Gradaly starts from the question's <strong>Base Score</strong>, adds the points of all checked criteria (<code>Raw Score = Base Score + Σ checked criteria</code>), and <strong>clamps the final question grade between <code>0</code> and <code>Max Score</code></strong>.<br>• <strong>Purely Additive OR Purely Diminutive Scheme:</strong> For an <strong>additive scheme</strong>, set <code>Base Score = 0</code> and use only positive criteria (<code>+1</code>, <code>+1.5</code>). For a <strong>diminutive / subtractive scheme</strong>, set <code>Base Score = Max Score</code> and use only negative criteria (<code>-0.5</code>, <code>-1</code>). <strong>Avoid mixing positive and negative points within the same question</strong> — a pure scheme is much clearer for both the AI and the student.<br>• <strong><code>Max possible</code> helper:</strong> Displays <code>Base Score + Σ (positive criteria)</code> so you can immediately spot if your criteria weights don't add up to <code>Max Score</code>.",
                    "<strong>4. Bottom General Instructions Field (<code>Consignes &amp; Logique de correction / Prompt IA</code>):</strong> Use the bottom text box of each question to specify how to handle edge cases (e.g. error carried forward, equivalent forms) — and if the printed question statement is outside the cropped box, paste the plain-text question here.",
                    "<strong>5. Import &amp; Test Your Reference Solution (<code>Solutionnaire</code> / <code>⭐ Solutionnaire</code>):</strong> Use the <strong>Statement (Canvas) / Solutionnaire</strong> toggle at the top of the PDF viewer to import your model solution PDF. It appears at the very top of the Grading tab as <strong><code>⭐ Reference Solution</code></strong>: always verify that your own Solutionnaire obtains the <strong>maximum score (<code>Max/Max</code>)</strong> on every question!"
                ],
                screenshots: [
                    {
                        filePrefix: "02_questions",
                        caption: "Exam Mode — Canvas & Questions Tab: Student ID Zone button, Base/Max/Max-possible scores, checkable criteria, bottom AI instructions, and Statement / Solutionnaire toggle"
                    }
                ],
                callouts: [
                    {
                        title: "Student ID Zone for Offline OCR",
                        desc: "Frame the header box on Page 1 once; Gradaly will extract it on all scanned copies for local name/matricule recognition."
                    },
                    {
                        title: "Purely Additive or Diminutive Rubric",
                        desc: "Start from 0 with +pts or start from Max Score with −pts. Final question scores are always clamped to [0, Max Score]."
                    },
                    {
                        title: "Include the Question in the Zone",
                        desc: "Frame both the printed question prompt and the student's answer box (or paste the prompt text in the bottom instructions field)."
                    },
                    {
                        title: "Solutionnaire (⭐) Sanity Check",
                        desc: "Import your model solution PDF and verify in 1 click that it achieves full marks (Max/Max) on every question."
                    }
                ]
            },
            {
                id: "exam-ai-rubric-assistant",
                guide: "exam",
                stepNumber: "E3",
                partColor: "indigo",
                tag: "Exam Mode • Step 3 — AI Rubric Assistant",
                badge: "Interactive Chat & Calibration",
                shortTitle: "AI Rubric Assistant",
                title: "Co-Designing & Calibrating Exam Criteria with the AI Rubric Assistant",
                subtitle: "Generate or refine your grading rubric from the question and solutionnaire PDF, iterate via chat, and paste screenshots of real student copies.",
                paragraphs: [
                    "On any question in <strong>Canvas &amp; Questions</strong>, click <strong>Design / Edit with AI</strong> (<code>Concevoir / Modifier avec l'IA</code>) to open the interactive <strong>AI Rubric Assistant</strong>.",
                    "<strong>1. Configure Your Rubric Preferences:</strong> Specify the question's <code>Max Score</code>, choose an <strong>Additive</strong> or <strong>Subtractive</strong> policy, and pick your target <strong>number of criteria</strong> (3, 4, 5, or free). If you loaded a <code>Solutionnaire</code> PDF, check <em>\"Use the reference solution answer as reference\"</em> so the AI inspects both the question and your model solution.",
                    "<strong>2. Iterate in Chat Mode &amp; Paste Student Screenshots (<code>Cmd+V</code> / <code>Ctrl+V</code>):</strong> Refine the proposed criteria in natural language on the right. Even better: take a screenshot of an actual student's handwritten answer, <strong>paste it directly into the chat</strong>, and write: <em>\"I think this student answer deserves full credit, please adapt the criteria and grading instructions accordingly.\"</em>",
                    "<strong>3. Apply &amp; Calibrate on a Few Copies:</strong> Click <strong>Validate and apply to question</strong>, then test the rubric on your <code>⭐ Reference Solution</code> and on 2–3 student copies in the Grading tab before launching a full-cohort batch."
                ],
                screenshots: [
                    {
                        filePrefix: "03_rubric_assistant",
                        caption: "AI Rubric Assistant Modal: Proposed criteria & PROMPT_TEXT on the left, interactive refinement chat (supporting screenshot paste) on the right"
                    }
                ],
                callouts: [
                    {
                        title: "Reads Both Canvas & Solutionnaire",
                        desc: "Generates structured criteria and point weights aligned with your exact mathematical or conceptual derivation."
                    },
                    {
                        title: "Paste Real Student Answers (Cmd+V)",
                        desc: "Paste screenshots of edge-case student answers in the chat to adapt criteria descriptions automatically."
                    }
                ]
            },
            {
                id: "exam-roster-and-matching",
                guide: "exam",
                stepNumber: "E4",
                partColor: "indigo",
                tag: "Exam Mode • Step 4 — Roster, Copies & Offline OCR",
                badge: "100% Local & Offline",
                shortTitle: "Roster, Copies & OCR Matching",
                title: "Student Roster (CSV), PDF Splitting & 100% Offline OCR Matching",
                subtitle: "Import your class list, slice bulk scanner PDFs into individual booklets, and match student identities locally with zero cloud uploads.",
                paragraphs: [
                    "In the <strong>2. Students</strong> tab, import your class roster from a CSV or Excel file (Moodle, Canvas, ADE, etc.). Gradaly maps <strong>Student ID (Matricule)</strong>, <strong>Last Name</strong>, <strong>First Name</strong>, <strong>Email</strong>, and <strong>Group</strong>.",
                    "In the <strong>3. Copies</strong> tab, import either individual student PDFs or a <strong>single multi-student bulk PDF</strong> from the photocopy scanner. Specify the page count per booklet (e.g. 4 pages per student) to slice the batch into <code>copie_01.pdf</code>, <code>copie_02.pdf</code>, etc. Gradaly can also automatically deskew/rotate upside-down scans.",
                    "In the <strong>4. Matching</strong> tab, click <strong>Run Automatic OCR Matching</strong>. Gradaly crops the Student ID Zone from Page 1 of each copy, runs an <strong>embedded WebAssembly Tesseract OCR engine 100% offline on your computer</strong>, and pairs handwritten names/IDs with your roster using fuzzy matching. Review and confirm each association side-by-side in seconds."
                ],
                screenshots: [
                    {
                        filePrefix: "04_students",
                        caption: "Students Tab: Local student roster with Matricule ID, Name, Email, and Group"
                    },
                    {
                        filePrefix: "05_copies",
                        caption: "Copies Tab: Split bulk PDF scans and preview individual exam booklets"
                    },
                    {
                        filePrefix: "06_matching",
                        caption: "Matching Tab: Side-by-side visual verification of the cropped handwritten ID zone against the student roster"
                    }
                ],
                callouts: [
                    {
                        title: "Strict Local Privacy (Zero Cloud OCR)",
                        desc: "Student names, IDs, emails, and header crops never leave your computer — OCR runs 100% offline inside the desktop app."
                    },
                    {
                        title: "Unmatched Filter & Instant Search",
                        desc: "Filter by 'Unmatched' or 'Low Confidence' to resolve ambiguous handwriting in seconds."
                    }
                ]
            },
            {
                id: "exam-grading-console",
                guide: "exam",
                stepNumber: "E5",
                partColor: "indigo",
                tag: "Exam Mode • Step 5 — The Grading Console",
                badge: "100% Human, Standard AI or Batch Flex (-50%)",
                shortTitle: "Manual & AI-Assisted Grading",
                title: "The 3-Pane Grading Console: Manual Speed, AI Calibration & Batch Mode",
                subtitle: "Navigate question-by-question across the cohort, understand the 3-color status code, calibrate on single copies, and run Batch AI pre-grading.",
                paragraphs: [
                    "The <strong>5. Grading</strong> tab features three synchronized panes: the <strong>Student List</strong> on the left (with the pinned <code>⭐ Reference Solution</code> at the top), the <strong>Interactive PDF Viewer</strong> in the center, and the <strong>Question &amp; Criteria Workstation</strong> on the right.",
                    "<strong>1. Question Circles &amp; Horizontal Navigation:</strong> Click any numbered question circle (<code>1</code>, <code>2</code>, <code>3</code>...) at the top right to jump to that question's zone on the PDF. Then use <code>&lt; 1/20 &gt;</code> or the <code>↑</code>/<code>↓</code> (<code>J</code>/<code>K</code>) keys to grade the entire cohort on that same question for maximum consistency.",
                    "<strong>2. The 3-Color Status Code:</strong><br>• 🟢 <strong>Green (<code>AI</code>):</strong> Pre-graded by the AI (awaiting your human review).<br>• 🔵 <strong>Blue (<code>Human</code>):</strong> Graded, modified, or explicitly validated by a human teacher.<br>• ⚪ <strong>Grey (<code>To grade</code>):</strong> Not graded yet.",
                    "<strong>3. Calibrating on a Single Copy vs. Launching Full-Cohort Batch AI:</strong><br>• <strong>Single-Question Calibration:</strong> At the bottom right, click <strong>Re-run AI for this question</strong> to test your rubric on the current student only.<br>• <strong>Multi-Copy Batch Launch (<code>▶ AI Grading</code>):</strong> Click <strong>▶ AI Grading</strong> at the top left to grade selected copies and questions. Choose between <strong>⚡ Standard Mode</strong> (real-time parallel workers) and <strong>🌿 Flex / Asynchronous Batch Mode (-50% cost discount)</strong>, recommended for full cohorts with direct Gemini, OpenAI, or Anthropic keys."
                ],
                screenshots: [
                    {
                        filePrefix: "07_grading",
                        caption: "Grading Console Overview: Left student list (with ⭐ Reference Solution, status dots, question score & total score), Center PDF auto-focused on the question zone, and Right rubric workstation"
                    },
                    {
                        filePrefix: "07b_grading_single_ai",
                        caption: "Bottom of Right Pane: AI Justification, Student Feedback (Markdown + KaTeX), Override protection checkboxes, and 'Re-run AI for this question'"
                    },
                    {
                        filePrefix: "07c_grading_launch_modal",
                        caption: "Start AI Grading Modal: Select target copies, questions, override rules, and Standard vs. Flex Asynchronous Batch Mode (-50%)"
                    }
                ],
                callouts: [
                    {
                        title: "100% Human Keyboard Speed",
                        desc: "Toggle criteria with keys 1–9 and move across students with J/K without touching the mouse."
                    },
                    {
                        title: "Recommended Flex Batch Mode (-50%)",
                        desc: "Available with direct Gemini, OpenAI, and Anthropic keys for 50%-discounted asynchronous cohort pre-grading."
                    }
                ]
            },
            {
                id: "exam-collaborative-sharing",
                guide: "exam",
                stepNumber: "E6",
                partColor: "indigo",
                tag: "Exam Mode • Step 6 — Team Grading (Gradaly Pro)",
                badge: "Collaborative Share & Merge • PRO",
                shortTitle: "Team Share & Merge (PRO)",
                title: "Collaborative Project Sharing & Selective Per-Question Merge",
                subtitle: "Split exam grading across colleagues or teaching assistants via .gradaly archives or end-to-end encrypted Cloud links (Gradaly Pro).",
                paragraphs: [
                    "When co-grading an exam with colleagues or TAs, <strong>Gradaly Pro</strong> lets you share a complete project or a lightweight subset via a local <code>.gradaly</code> archive or an <strong>AES-256-GCM Encrypted Cloud Link</strong> (valid for 7, 14, or 30 days).",
                    "When colleagues click <strong>Import / Merge</strong>, Gradaly verifies the SHA-256 fingerprint of the exam canvas PDF and lets them either import the archive as a <strong>new project</strong> or <strong>selectively merge rubrics and/or gradings question-by-question</strong> (e.g. merging TA 1's Q1–Q2 with TA 2's Q3–Q4) with automatic pre-merge backups."
                ],
                screenshots: [
                    {
                        filePrefix: "09_share_modal",
                        caption: "Share / Export Project Modal (Gradaly Pro): Sharing presets, per-question filter, and AES-256 Encrypted Cloud Link"
                    },
                    {
                        filePrefix: "10_import_merge_modal",
                        caption: "Import / Selective Merge Modal (Gradaly Pro): SHA-256 canvas verification and per-question Rubric/Gradings merge"
                    }
                ],
                callouts: [
                    {
                        title: "End-to-End Encrypted Cloud Links",
                        desc: "Share projects across your teaching team with client-side AES-256-GCM encryption (#k=... never reaches the server)."
                    },
                    {
                        title: "Question-by-Question Selective Merge",
                        desc: "Combine gradings from multiple TAs cleanly while protecting manual edits and saving an automatic backup."
                    }
                ]
            },
            {
                id: "exam-analytics-and-exports",
                guide: "exam",
                stepNumber: "E7",
                partColor: "indigo",
                tag: "Exam Mode • Step 7 — Statistics & Restitution",
                badge: "Excel • Annotated PDFs • Encrypted Web Portal",
                shortTitle: "Statistics, PDF & Exam Web Portal",
                title: "Cohort Analytics, Annotated PDFs & Encrypted Student Consultation Portal",
                subtitle: "Analyze score distributions, simulate rubric weight adjustments, and return rich individual feedback to your students.",
                paragraphs: [
                    "The <strong>6. Summary</strong> tab computes real-time cohort statistics: mean, median, standard deviation, min/max, unambiguous histograms <code>[a, b[</code>, and per-criterion validation rates.",
                    "To return graded exams to students (1-copy preview in Free mode; full cohort in Gradaly Pro), choose among three channels:<br>1) <strong>Multi-Sheet Excel Gradebook</strong> (global summary + 1 tab per question).<br>2) <strong>Individual Annotated PDFs (ZIP)</strong> combining a summary cover sheet with the student's handwritten pages.<br>3) <strong>Zero-Knowledge Student Consultation Web Portal</strong>: publish encrypted graded copies online (for 30, 60, 90, 180, or 365 days), send personalized magic links by email, or print <strong>cut-out individual QR code slips</strong> to hand out in class."
                ],
                screenshots: [
                    {
                        filePrefix: "08_stats",
                        caption: "Summary Tab (Exam Mode): Cohort KPIs, score distribution histograms, per-criterion success rates, and Export Hub"
                    }
                ],
                callouts: [
                    {
                        title: "Excel Gradebook & Annotated PDFs",
                        desc: "Export official university gradebooks and individual PDF copies with detailed criterion breakdowns and KaTeX math."
                    },
                    {
                        title: "Encrypted Student Consultation Portal",
                        desc: "Students view their graded copy, checked criteria, and personalized feedback via email magic link or individual QR slip."
                    }
                ]
            },
            {
                id: "exam-ai-settings",
                guide: "exam",
                stepNumber: "E8",
                partColor: "indigo",
                tag: "Exam Mode • Step 8 — AI Configuration (Optional)",
                badge: "OpenRouter • Gemini • GPT • Claude • Local",
                shortTitle: "API Keys & Choosing an AI Model",
                title: "Setting Up Your API Key & Choosing the Right AI Model",
                subtitle: "Skip this chapter if you use Gradaly in 100% Human Mode. To enable the AI Rubric Assistant and AI Pre-Grading, configure your API key in Settings (⚙️).",
                paragraphs: [
                    "<strong> grading quality depends directly on the AI model you select:</strong> In our benchmarks on handwritten university exams (mathematics, physics, engineering, economics, humanities), we achieve <strong>excellent results</strong> with <strong><code>Gemini 3.8 Flash</code></strong>, <strong><code>GPT 5-4 mini</code></strong>, <strong><code>Claude-Sonnet-5.5</code></strong>, and <strong><code>Mistral-Large 4.0</code></strong> — feel free to test several models depending on your subject!",
                    "<strong>Direct Provider Keys vs. OpenRouter:</strong> You can create an API key directly with <strong>Google Gemini</strong>, <strong>OpenAI</strong>, or <strong>Anthropic</strong> (which enables 50%-discounted asynchronous <strong>Batch / Flex mode</strong>), or use <strong>OpenRouter</strong>, whose advantage is that <strong>a single API key gives access to models from all providers</strong> (Gemini, GPT, Claude, Mistral, DeepSeek, Qwen, Llama) on one unified account.",
                    "<strong>0% Markup &amp; No Proprietary 'AI Credits':</strong> Unlike commercial cloud platforms that lock you into a single model and resell 'AI credit packs' with a heavy markup, Gradaly charges <strong>zero markup</strong> on AI usage. You pay the exact provider token cost — or <strong>0 € if your university provides a free institutional LLM server or if you run a local model via Ollama</strong>."
                ],
                screenshots: [
                    {
                        filePrefix: "11_settings_ai",
                        caption: "AI Settings Modal (⚙️): Choose your provider (Google Gemini, OpenRouter, OpenAI, Anthropic, or Local / University Server), select your model, and test the connection"
                    }
                ],
                providerGuides: [
                    {
                        name: "OpenRouter (Multi-Provider Gateway)",
                        tag: "All Models in 1 Key",
                        icon: "fas fa-network-wired",
                        desc: "<strong>Specific advantage:</strong> One single account and API key lets you test <code>Gemini 3.8 Flash</code>, <code>GPT 5-4 mini</code>, <code>Claude-Sonnet-5.5</code>, <code>Mistral-Large 4.0</code>, and hundreds of other models without managing multiple billing accounts (note: asynchronous Batch mode is not available on OpenRouter).",
                        steps: [
                            "Go to <strong>openrouter.ai</strong> and sign in (or create a free account).",
                            "Open <strong>Credits</strong> and add a small prepaid balance (e.g. $5 or $10 — enough for thousands of exam pages).",
                            "Open <strong>Keys</strong> → click <strong>Create Key</strong>, name it <code>Gradaly</code>, and copy the key starting with <code>sk-or-v1-...</code>.",
                            "In Gradaly, open <strong>Settings (⚙️)</strong>, choose <strong>OpenRouter</strong>, paste the key, and select your desired model."
                        ],
                        url: "https://openrouter.ai/keys",
                        linkLabel: "Open OpenRouter API Keys Console"
                    },
                    {
                        name: "Google Gemini (Google AI Studio)",
                        tag: "Fast & Economical",
                        icon: "fas fa-bolt",
                        desc: "Direct access to Google's multimodal <code>Gemini 3.8 Flash</code> and Pro models, with native support for 50%-discounted asynchronous Batch mode.",
                        steps: [
                            "Sign in to <strong>Google AI Studio</strong> (<code>aistudio.google.com</code>) with your Google account.",
                            "Click <strong>Get API key</strong> in the left menu, then click <strong>Create API key</strong>.",
                            "Copy the generated key (starting with <code>AIzaSy...</code>). Enable Pay-as-you-go billing if you wish to unlock higher rate limits.",
                            "In Gradaly, open <strong>Settings (⚙️)</strong>, select <strong>Google Gemini</strong>, and paste your key."
                        ],
                        url: "https://aistudio.google.com/app/apikey",
                        linkLabel: "Open Google AI Studio API Keys"
                    },
                    {
                        name: "OpenAI (GPT Models)",
                        tag: "High Logical Precision",
                        icon: "fas fa-brain",
                        desc: "Direct access to OpenAI's multimodal models such as <code>GPT 5-4 mini</code>, excellent for checking step-by-step calculations, with 50%-discounted Batch mode.",
                        steps: [
                            "Sign in to <strong>platform.openai.com</strong> (separate from a consumer ChatGPT Plus subscription).",
                            "Go to <strong>Settings → Billing</strong> and load a small prepaid balance (e.g. $5).",
                            "Open <strong>Dashboard → API keys</strong>, click <strong>+ Create new secret key</strong>, and copy the key (<code>sk-proj-...</code>).",
                            "In Gradaly, open <strong>Settings (⚙️)</strong>, select <strong>OpenAI</strong>, paste the key, and choose your model."
                        ],
                        url: "https://platform.openai.com/api-keys",
                        linkLabel: "Open OpenAI Platform API Keys"
                    },
                    {
                        name: "Anthropic (Claude Models)",
                        tag: "Proofs & Nuanced Writing",
                        icon: "fas fa-feather-alt",
                        desc: "Direct access to Anthropic's <code>Claude-Sonnet-5.5</code> and Opus models, renowned for analyzing handwritten mathematical proofs and writing detailed feedback.",
                        steps: [
                            "Sign in to the <strong>Anthropic Console</strong> (<code>console.anthropic.com</code>).",
                            "In <strong>Settings → Billing</strong>, activate a prepaid credit balance.",
                            "In <strong>API Keys</strong>, click <strong>Create Key</strong> and copy the secret key (<code>sk-ant-...</code>).",
                            "In Gradaly, open <strong>Settings (⚙️)</strong>, select <strong>Anthropic</strong>, and paste your key."
                        ],
                        url: "https://console.anthropic.com/settings/keys",
                        linkLabel: "Open Anthropic Console API Keys"
                    }
                ],
                callouts: [
                    {
                        title: "University Server or 100% Local Ollama",
                        desc: "If your university provides an OpenAI-compatible AI server or if you run a local model via Ollama (<code>http://localhost:11434/v1</code>), select 'Local / Custom Server' in Settings for 0 € token cost."
                    },
                    {
                        title: "1-Click Connection Diagnostic",
                        desc: "Click the AI status badge in the top bar at any time to verify your API key validity and model responsiveness."
                    }
                ]
            },
            {
                id: "exam-faq",
                guide: "exam",
                isFaq: true,
                stepNumber: "FAQ",
                partColor: "indigo",
                tag: "Frequently Asked Questions (FAQ)",
                badge: "Architecture, Privacy & Best Practices",
                shortTitle: "Frequently Asked Questions",
                title: "Frequently Asked Questions (FAQ)",
                subtitle: "Answers to common questions about how AI grading works, formative mock tests vs. official exams, local storage in Documents/Gradaly, API key security, Zero-Knowledge Cloud encryption, and support.",
                paragraphs: [
                    "Below you will find detailed answers to the most frequent technical, pedagogical, and privacy questions about Gradaly's Exam &amp; Mock Test Mode."
                ],
                faqs: [
                    {
                        q: "How does Gradaly's AI grading work under the hood?",
                        a: "<p>When you ask the AI to grade a question on a student's paper, Gradaly extracts the <strong>cropped image of the rectangle zone</strong> you drew for that question and sends it to your chosen vision AI model together with a structured prompt containing your rubric criteria (<code>CRITERIA</code>) and general grading instructions (<code>PROMPT_TEXT</code>).</p><p><strong>In short, it works just as if you copied and pasted a screenshot of that zone into your favorite AI chat tool and asked:</strong> <em>\"Hey, here is my grading policy and point breakdown for this question — please evaluate this student's handwritten answer, tell me which criteria are satisfied, explain why, and write constructive feedback for the student.\"</em></p><p>Because the AI only sees what is inside that cropped zone plus the text of your criteria and instructions, framing the question statement inside the zone (or pasting the question text in the bottom instructions field) and writing clear criteria descriptions ensures the best possible grading accuracy.</p>"
                    },
                    {
                        q: "Should I trust AI grading, or use it for formative mock tests?",
                        a: "<p><strong>Yes and no — at first, never blindly!</strong> Out of the box, your initial rubric might be too strict or ambiguous, or the AI model you selected might struggle to solve a specific problem or misread an unusual notation.</p><p><strong>Formative mock exams vs. official exams:</strong> Many teachers prefer to grade their final official exam by hand on paper (or use Gradaly in 100% Human Mode), while being very comfortable using Gradaly's AI pre-grading for <strong>mid-year formative mock tests</strong> to give students rich, individualized feedback under realistic exam conditions.</p><p><strong>Human review and validation are essential:</strong> Whenever Gradaly is used for <strong>summative or high-stakes (certificative) exams</strong>, we strongly recommend that you <strong>read through the AI's outputs and validate them manually</strong>. Gradaly is specifically designed to let you review, adjust, and manually validate every single student answer and feedback item — and doing so will always be the best practice.</p><p><strong>Student transparency &amp; grade appeals:</strong> Because Gradaly gives students full transparency on the exact criteria applied to their copy (via annotated PDFs or the Student Web Portal), we also strongly recommend giving students the opportunity to review their graded copy and contest/appeal the application of specific rubric criteria if needed.</p>"
                    },
                    {
                        q: "How much does it cost to grade an exam with AI?",
                        a: "<p>There is no single fixed price because the cost depends on several factors: the number of student copies, the number of questions, and the size and pricing tier of the AI model you choose (each API provider publishes its exact price per million input/output tokens).</p><p>To give a concrete real-world benchmark: using an excellent model like <strong><code>Gemini 3.8 Flash</code></strong> (which performs remarkably well in our tests), we graded complex university statistics exams with <strong>6 to 7 pages of handwritten answers across 400 students for a total API cost of around $5 to $7</strong> in flexible/batch mode (and remember: Gradaly takes 0% markup on top of your provider's token price).</p>"
                    },
                    {
                        q: "I already have a paid subscription to ChatGPT Plus (OpenAI), Claude Pro, or Gemini Advanced — why can't I use it instead of an API key?",
                        a: "<p><strong>1. Two strictly separate products at AI providers:</strong> At OpenAI, Anthropic, and Google, consumer chat subscriptions (ChatGPT Plus, Claude Pro, Gemini Advanced at ~$20/month) and <strong>API access</strong> are completely separate billing systems. Consumer subscriptions only grant manual access to their web/mobile chat interface and do not technically allow third-party software like Gradaly to run automated requests (and their Terms of Service strictly prohibit bypassing this).</p><p><strong>2. Parallel batch grading &amp; stronger data privacy:</strong> To pre-grade dozens or hundreds of exam copies in parallel and receive structured grading data (checked rubric criteria, teacher justifications, and student feedback), Gradaly must communicate through the official developer API. Furthermore, <strong>API traffic enjoys stricter privacy guarantees</strong>: unlike consumer web chats by default, exam answers sent through the commercial API <strong>are contractually not used by OpenAI, Google, or Anthropic to train their AI models</strong>.</p><p><strong>3. Very low pay-as-you-go cost (no extra monthly subscription):</strong> An API key does not require a monthly subscription — you only pay for the exact tokens you use (<em>pay-as-you-go</em>, with 0% markup from Gradaly), which typically costs <strong>only a few dollars to grade an entire cohort of several hundred students</strong> (and Google even offers a free tier on the Gemini API for testing). If you prefer a single unified balance for all models (OpenAI, Claude, Gemini, Mistral), you can simply use <strong>OpenRouter</strong> or your university's institutional AI server.</p>"
                    },
                    {
                        q: "How long does it take to grade my exam with AI?",
                        a: "<p>The processing time depends on the number of question zones, the number of copies, and the complexity of the reasoning task for the AI model. In practice, for an exam with <strong>400 student copies, 5 questions, and around ten pages of handwritten answers</strong> in flexible mode, we typically pre-grade the <strong>entire exam in about 10 minutes</strong>.</p><p><strong>Tip to speed up processing:</strong> Don't hesitate to increase the <strong>number of parallel threads (workers)</strong> in <strong>Settings (⚙️)</strong> — as long as your API provider's rate limits allow it, running more parallel workers significantly reduces total grading time.</p>"
                    },
                    {
                        q: "What resolution (DPI) should I use when scanning student copies?",
                        a: "<p>Aim for the <strong>lightest possible files that remain clearly legible</strong>: <strong><code>150 DPI</code> to <code>200 DPI</code></strong> is the ideal sweet spot for both human reading and AI vision models.</p><p><strong>Why you should NOT scan at 300 or 600 DPI:</strong> Scanning at very high resolutions offers zero benefit for AI grading accuracy (vision models internally resize images anyway) while making your PDF files 4× to 10× heavier, which unnecessarily slows down PDF splitting, page navigation, and encrypted Cloud uploads.</p><p><strong>Keep Color enabled:</strong> We recommend scanning in <strong>Color (at 150–200 DPI with standard JPEG/PDF compression)</strong> rather than harsh black-and-white (1-bit) mode. Color preserves faint pencil strokes, colored pens used by students in diagrams, and subtle math subscripts much more faithfully.</p>"
                    },
                    {
                        q: "Where are the files of Gradaly stored on my computer?",
                        a: "<p>All your exam projects are stored locally in your computer's <strong><code>Documents/Gradaly/</code></strong> folder (e.g. <code>~/Documents/Gradaly/</code> on macOS/Linux or <code>C:\\Users\\YourName\\Documents\\Gradaly\\</code> on Windows), with one subfolder per project.</p><p>Inside each project folder, everything is stored in standard, transparent formats:<ul><li><strong>PDF files:</strong> the blank exam canvas (<code>canvas.pdf</code>), the optional reference solution (<code>solution.pdf</code>), and the individual student copies inside <code>copies/</code> (<code>copie_01.pdf</code>, <code>copie_02.pdf</code>, etc.).</li><li><strong>Plain-text JSON files:</strong> the question zones and grading rubric (<code>config.json</code>), the student roster with names, IDs, and emails (<code>students.json</code>), the OCR student-to-copy association table (<code>matching.json</code>), and each copy's evaluation and feedback inside <code>gradings/</code> (<code>copie_01.json</code>, etc.).</li></ul></p><p><strong>⚠️ Important advice:</strong> While this open structure makes it easy to back up your <code>Documents/Gradaly</code> folder (via Time Machine, Nextcloud, OneDrive, etc.), <strong>we strongly advise NOT editing, renaming, or moving files manually inside a project folder</strong>, as manual modifications may break internal references and corrupt the project.</p>"
                    },
                    {
                        q: "Where are my API keys stored and is this secure?",
                        a: "<p>Your AI API keys (Gemini, OpenRouter, OpenAI, Anthropic) are stored <strong>strictly locally on your own computer</strong> inside the hidden configuration file <code>.gradaly_settings.json</code> located in your user home directory (<code>~/.gradaly_settings.json</code> on macOS/Linux or <code>C:\\Users\\YourName\\.gradaly_settings.json</code> on Windows).</p><p><strong>Security guarantees:</strong><ul><li>Your API keys are <strong>never sent to any Gradaly server</strong> and are <strong>never included when you export or share a <code>.gradaly</code> project archive</strong> with colleagues.</li><li>When you trigger AI rubric design or AI pre-grading, your computer communicates <strong>directly over encrypted HTTPS (TLS 1.3)</strong> with the official API endpoint of the provider you selected (Google, OpenRouter, OpenAI, Anthropic, or your university server).</li><li>You can revoke, rotate, or set a monthly spending cap on your API key at any time from your provider's dashboard.</li></ul></p>"
                    },
                    {
                        q: "Where are data stored when I publish an exam on the Cloud or generate a Cloud share link? Who has access to it?",
                        a: "<p>When you publish an exam to the <strong>Student Web Portal</strong> or generate a <strong>Collaborative Cloud Share Link</strong>, <strong>every file is encrypted locally on your computer using <code>AES-256-GCM</code> before a single byte leaves your machine</strong>. Only unreadable encrypted binary blobs (<code>.enc</code>) are uploaded to our European cloud storage (hosted in the EU with automatic expiration).</p><p>The secret decryption key (<code>#k=...</code>) is placed inside the URL fragment after the <code>#</code> symbol. By web standard (RFC 3986), browsers <strong>never transmit the URL fragment after <code>#</code> to the server</strong>. Consequently, <strong>even the creators of Gradaly can never read your files stored on the cloud, and even an attacker who compromised the cloud platform could see nothing</strong> — because everything stored is encrypted and only you (and the recipients to whom you send the generated web link) possess the key.</p>"
                    },
                    {
                        q: "Why is Gradaly a desktop application rather than a web tool? What is Gradaly's vision?",
                        a: "<p>We chose a native desktop architecture (macOS, Windows, Linux) for two fundamental reasons:</p><p>1) <strong>Immediate Data Sovereignty:</strong> You never have to upload unencrypted student rosters or exam scans to a third-party SaaS database just to organize and match your exam.</p><p>2) <strong>Our Long-Term Vision (100% Autonomous Local AI):</strong> AI hardware and open-weights multimodal models are advancing rapidly. <strong>Gradaly's vision is that within the next few years, highly capable vision-language models will run directly on a teacher's laptop</strong> (or on a local department server). Because Gradaly is a native desktop app with built-in local endpoint support (Ollama / vLLM / institutional servers), educators will become <strong>100% autonomous</strong> — grading exams offline with zero cloud dependency and zero token cost.</p>"
                    },
                    {
                        q: "What are the differences with traditional web grading platforms or cloud AI graders?",
                        a: "<p><strong>Compared to traditional web grading platforms:</strong> Browser-based grading platforms have real advantages for certain workflows — simultaneous real-time browser collaboration without merging files, advanced support for multiple-choice bubble sheets, and automatic answer clustering. However, they do not include multimodal AI pre-grading for open-ended handwritten reasoning, do not offer an AI assistant to co-design rubrics, and give you less control over your student data (which are stored in plaintext on third-party servers). Gradaly can be used in <strong>100% Human Mode</strong> with the same core rubric grading workflow, while adding optional AI rubric design, AI pre-grading, and 100% local data control.</p><p><strong>Compared to emerging Cloud AI Graders:</strong> Those platforms typically impose a single black-box AI model and charge a heavy markup by selling proprietary 'AI Credit Packs'. Gradaly gives you <strong>full control over the AI model</strong> (Gemini, GPT, Claude, Mistral, OpenRouter, or a free university/local server) and <strong>charges 0% markup on AI usage</strong>.</p>"
                    },
                    {
                        q: "Where can I make suggestions and bug reports?",
                        a: "<p>We welcome all your feedback, feature ideas, and bug reports! You can open an issue directly on our GitHub issue tracker here: <a href=\"https://github.com/pschaus/gradaly-website/issues\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-indigo-600 font-bold hover:underline\">https://github.com/pschaus/gradaly-website/issues</a>.</p>"
                    }
                ]
            },

            // =========================================================================
            // GUIDE 2: PRACTICE & SELF-ASSESSMENT QR MODE (P1 to P5) — 100% SELF-CONTAINED
            // =========================================================================
            {
                id: "practice-getting-started",
                guide: "practice",
                stepNumber: "P1",
                partHeader: "Manual 2 — Practice & Self-Assessment QR Mode (Student)",
                partColor: "teal",
                partBanner: {
                    kicker: "Manual 2 • Product 2: Formative Practice QR Mode",
                    title: "Complete Guide to Autonomous Student Self-Assessment via Printable QR Worksheets",
                    desc: "100% self-contained guide: design a PDF exercise worksheet with embedded QR codes so students solve on paper, scan with their smartphone, and receive instant formative AI feedback (zero API key required on portal.gradaly.io, or optional personal Gemini key)."
                },
                tag: "Practice QR Mode • Step 1 — Concept & Project Creation",
                badge: "Formative • Autonomous Student Training",
                shortTitle: "Concept & Creating a Practice Project",
                title: "How Practice QR Mode Works & Creating a Practice Project",
                subtitle: "Give your students unlimited paper-based training with instant AI feedback on smartphone — without collecting a single copy or exposing your teacher API key.",
                paragraphs: [
                    "<strong>The Pedagogical Goal of Practice QR Mode (<code>Practice</code> badge):</strong> Before a midterm or final exam, students need to practice solving problems by hand on paper (tutorials, problem sets, homework, past exam papers). However, teachers rarely have the time to collect and grade hundreds of weekly practice sheets. <strong>Practice QR Mode turns any PDF exercise sheet into an interactive self-assessment tutor:</strong><br>1. <strong>The Teacher</strong> prepares the PDF exercise sheet, defines the grading criteria (and optional Reference Solution <code>Solutionnaire</code>), places QR codes on the PDF, and publishes an encrypted static web portal.<br>2. <strong>The Student</strong> prints the PDF worksheet (or views it on tablet/screen), writes their mathematical derivations or essay answer on paper, <strong>scans the question's QR code with their smartphone</strong>, takes a photo of their handwritten work, and receives <strong>immediate, criterion-by-criterion formative AI feedback</strong>!",
                    "<strong>Zero Teacher API Key Exposed — Built-in Gradaly AI Relay or Optional Student Key:</strong> Unlike Exam Mode where the teacher runs AI grading on collected copies, in Practice Mode <strong>there are no student rosters, no scanned copies, and no teacher API keys in the published portal</strong>. When published on <code>portal.gradaly.io</code>, students can evaluate their handwritten answers <strong>immediately with zero API key setup</strong> thanks to the built-in Gradaly AI relay (ideal for all students, including minors under 18), or optionally enter their own personal Google AI Studio (Gemini) API key in their phone browser.",
                    "<strong>Streamlined 3-Tab Interface:</strong> On the Welcome Screen, click <strong>New project → Practice Project (Student Self-Assessment)</strong> (or click <strong>Create demo project → Practice Project (QR Self-Assessment)</strong> to explore a complete Trigonometry worksheet in French or English). A Practice project opens a clean <strong>3-tab workspace</strong>: <code>1. Canvas &amp; Questions</code>, <code>2. QR Code Placement</code>, and <code>3. Web Publication</code>."
                ],
                screenshots: [
                    {
                        filePrefix: "01_welcome",
                        caption: "Welcome Screen: Practice projects are identified by the teal 'Practice' badge alongside your Exam projects"
                    },
                    {
                        filePrefix: "12_demo_types_modal",
                        caption: "Demo Creation Modal: Select 'Practice Project (QR Self-Assessment)' to open a ready-to-test QR exercise sheet"
                    }
                ],
                callouts: [
                    {
                        title: "Paper + Smartphone Workflow",
                        desc: "Students keep writing real handwritten math, proofs, and diagrams on paper while getting instant AI tutoring via smartphone camera."
                    },
                    {
                        title: "Zero Copies to Collect, Zero Roster",
                        desc: "A Practice project has no student list or copies tab — it is 100% dedicated to autonomous formative training."
                    },
                    {
                        title: "Zero Key Setup on portal.gradaly.io",
                        desc: "Students get instant AI evaluation out-of-the-box on portal.gradaly.io (or can optionally enter their own personal Gemini API key)."
                    },
                    {
                        title: "Instant Built-in Practice Demo",
                        desc: "Launch the built-in Practice Demo from the Welcome Screen to inspect a complete 10-question QR worksheet and Reference Solution."
                    }
                ]
            },
            {
                id: "practice-canvas-and-rubric",
                guide: "practice",
                stepNumber: "P2",
                partColor: "teal",
                tag: "Practice QR Mode • Step 2 — Worksheet, Solutionnaire & Rubric",
                badge: "100% Self-Contained Guide",
                shortTitle: "Worksheet PDF, Solution & Criteria",
                title: "Importing Your Exercise PDF, Reference Solution & Designing Formative Criteria",
                subtitle: "Frame each exercise on your blank PDF, load your Reference Solution (Solutionnaire), and build clear self-assessment criteria manually or with the AI Assistant.",
                paragraphs: [
                    "In the <strong>1. Canvas &amp; Questions</strong> tab of your Practice project (notice the streamlined 3-tab header at the top and the absence of any Student ID zone), you define the exercises and grading criteria that will guide the AI when evaluating a student's smartphone photo:",
                    "<strong>1. Import the Blank Exercise PDF (<code>Canvas</code>) &amp; Frame Each Question:</strong> Import your PDF worksheet and draw a rectangle around each exercise (<code>Q1</code>, <code>Q2</code>, ...). <strong>Important:</strong> include the printed exercise statement inside the rectangle! In Practice Mode, Gradaly crops this exact rectangle to <strong>display the exercise statement on the student's smartphone screen</strong> and to give the AI full visual context.",
                    "<strong>2. Import the Optional Reference Solution PDF (<code>Solutionnaire</code>):</strong> Use the <strong>Statement (Canvas) / Solutionnaire</strong> toggle at the top of the PDF viewer to import a PDF containing your worked-out model solutions. If your solution PDF has the same page layout as the blank worksheet, the question zones apply automatically; if the layout differs, switch to <em>Solutionnaire</em> view and draw the corresponding solution zone for each question. In Practice Mode, the Solutionnaire serves three purposes:<br>• <strong>Helping the AI Rubric Assistant</strong> generate accurate criteria.<br>• <strong>Providing the ground-truth mathematical solution to the AI</strong> when evaluating the student's photo.<br>• <strong>Unlocking the visual model solution on the student's smartphone</strong> after they submit at least one handwritten attempt!",
                    "<strong>3. Define the Scoring Rules &amp; Criteria (Purely Additive or Purely Diminutive):</strong><br>• Gradaly computes <code>Score = Base Score + Σ (validated criteria)</code>, bounded between <code>0</code> and <code>Max Score</code>.<br>• Choose either a <strong>purely additive rubric</strong> (<code>Base Score = 0</code>, positive criteria <code>+1</code>, <code>+2</code> for each valid step) or a <strong>purely diminutive rubric</strong> (<code>Base Score = Max Score</code>, negative penalties <code>-0.5</code>, <code>-1</code>). Avoid mixing positive and negative weights in the same question.<br>• Use the bottom field (<strong>General AI Instructions / Prompt</strong>) to specify pedagogical guidance or paste the plain-text question if needed.",
                    "<strong>4. Use the AI Rubric Assistant (<code>Design / Edit with AI</code>):</strong> Click <strong>Design / Edit with AI</strong> above the criteria list to let the AI draft your formative rubric automatically from the exercise statement and Reference Solution, and refine it in chat mode."
                ],
                screenshots: [
                    {
                        filePrefix: "13a_practice_questions",
                        caption: "Practice Mode — 1. Canvas & Questions Tab: Streamlined 3-tab header (Canvas & Questions | QR Code Placement | Web Publication), question zones, formative criteria, and Statement / Solutionnaire toggle"
                    },
                    {
                        filePrefix: "03_rubric_assistant",
                        caption: "AI Rubric Assistant: Co-design formative criteria and instructions using both the exercise statement and your Reference Solution"
                    }
                ],
                callouts: [
                    {
                        title: "Statement Crop Shown on Smartphone",
                        desc: "The zone you draw on the Canvas PDF is automatically cropped and displayed at the top of the student's phone screen."
                    },
                    {
                        title: "Reference Solution (Solutionnaire)",
                        desc: "Guides the AI during evaluation and can be automatically revealed to the student after their first handwritten attempt."
                    },
                    {
                        title: "Purely Additive or Diminutive Criteria",
                        desc: "Clear step-by-step criteria help students understand exactly which part of their derivation succeeded or needs rework."
                    },
                    {
                        title: "AI Rubric Assistant Included",
                        desc: "Generate a complete formative rubric from your exercise PDF and solutionnaire in seconds."
                    }
                ]
            },
            {
                id: "practice-qr-placement",
                guide: "practice",
                stepNumber: "P3",
                partColor: "teal",
                tag: "Practice QR Mode • Step 3 — QR Code Placement & Printable PDF",
                badge: "Included in Free & Pro",
                shortTitle: "QR Placement & Printable PDF",
                title: "Positioning QR Codes on Your PDF & Downloading the Printable Worksheet",
                subtitle: "Place a General QR code (full sheet) and/or Per-Question QR codes directly inside each exercise box on your PDF.",
                paragraphs: [
                    "Open the <strong>2. QR Code Placement</strong> tab to choose where the self-assessment QR codes appear on your exercise sheet:",
                    "<strong>1. General QR Code vs. Per-Question QR Codes:</strong><br>• <strong>General QR Code (Full Worksheet):</strong> Placed by default at the top of Page 1. Scanning it opens the mobile portal on the full list of exercises.<br>• <strong>Per-Question QR Codes (<code>QR Q1</code>, <code>QR Q2</code>, ...):</strong> Embedded directly inside each question's box on the PDF. When a student scans <code>QR Q1</code> with their phone camera, their smartphone opens <strong>directly on Question 1</strong> (<code>?q=Q1</code>), ready to snap a photo of their answer!",
                    "<strong>2. Interactive Drag-and-Drop &amp; 1-Click Corner Alignment:</strong> Click any question in the left list to jump to its page. Drag any QR badge directly with your mouse on the PDF page so it never covers formulas or diagrams, or click <code>Top-Right Corner</code>, <code>Top-Left Corner</code>, or <code>Bottom-Right Corner</code>. Toggle individual QR codes on/off with the eye icon.",
                    "<strong>3. Download the Printable PDF with Embedded QR Codes:</strong> Click <strong>Download Printable PDF with QR Codes</strong>. Gradaly generates a crisp vector PDF with all active QR codes stamped at their exact positions, ready to print for class or upload to Moodle/Canvas."
                ],
                screenshots: [
                    {
                        filePrefix: "13_practice_qr",
                        caption: "Practice Mode — 2. QR Code Placement Tab: General & Per-Question QR list on the left, corner snap buttons, and interactive drag-and-drop placement on Page 2 (QR Q1 & QR Q2)"
                    }
                ],
                callouts: [
                    {
                        title: "Direct Per-Question Deep Link (?q=Q1)",
                        desc: "Scanning a question's QR code opens that exact exercise on the student's smartphone with zero navigation needed."
                    },
                    {
                        title: "Permanent QR Codes Across Rubric Edits",
                        desc: "Even if you refine your rubric criteria later and update the online publication, the printed QR codes remain 100% valid!"
                    }
                ]
            },
            {
                id: "practice-publish-and-student",
                guide: "practice",
                stepNumber: "P4",
                partColor: "teal",
                tag: "Practice QR Mode • Step 4 — Website Publication (Gradaly Pro) & Student App",
                badge: "Publication Requires Gradaly Pro",
                shortTitle: "Website Publication (Pro) & Student App",
                title: "Publishing the Student Practice Website (Gradaly Pro) & The Student Experience",
                subtitle: "While the Free version lets you create your project and design your PDF with QR codes, Gradaly Pro unlocks the publication of the Student Practice Website (online or .zip).",
                paragraphs: [
                    "In the <strong>3. Web Publication</strong> tab, you configure the pedagogical behavior of the mobile app and publish the Student Practice Website:",
                    "<strong>1. Pedagogical Visibility Options:</strong><br>• <strong>Show rubric criteria before the 1st attempt:</strong> Let students see the expected steps upfront, or keep criteria hidden until they submit their first photo.<br>• <strong>Show detailed AI evaluation justification:</strong> Display criterion-by-criterion explanations alongside the formative feedback.<br>• <strong>Reveal the Reference Solution (<code>Solutionnaire</code>) after at least one attempt:</strong> Keep your worked-out model solution locked until the student submits an initial handwritten attempt!",
                    "<strong>2. Preview in the Built-in Smartphone Simulator:</strong> Click <strong>Test Student Web App (Simulator)</strong> at the top right of the banner to preview the mobile interface inside Gradaly.",
                    "<strong>3. Publish the Student Practice Website Online or Export Static <code>.zip</code> (Gradaly Pro):</strong> While the Free version lets you create your Practice project and design your PDF with QR codes, <strong>Gradaly Pro</strong> gives you access to publishing the Student Practice Website: click <strong>Publish in 1 click to portal.gradaly.io</strong> (encrypted client-side with <strong>AES-256-GCM</strong>, with a selectable retention duration of <strong>60 days</strong>, <strong>180 days / 1 semester</strong>, or <strong>365 days / 1 year</strong>) or click <strong>Export as standalone static website (.zip)</strong> to host on your own university server.",
                    "<strong>4. Step-by-Step Student Experience on Smartphone:</strong><br>• The student scans the QR code on his/her paper worksheet.<br>• When hosted on <code>portal.gradaly.io</code>, AI evaluation works <strong>immediately without entering any API key</strong> (via the built-in Gradaly AI relay). Optionally — or when hosted on a standalone <code>.zip</code> server — the student can tap the <strong>Personal Key</strong> button to paste his/her own <strong>Google AI Studio (Gemini) API key</strong> (saved locally in the phone browser).<br>• The student taps <strong>Take a photo of my work</strong>, photographs the handwritten solution on paper, and taps <strong>Evaluate my answer with AI</strong> to receive the score, validated criteria, LaTeX math feedback, and the unlocked Reference Solution!",
                    "<strong>5. Live Interactive Example (Printable PDF Worksheet &amp; Student Portal):</strong><br>• 🇬🇧 <a href=\"practice_examples_pdfs/Sujet_QR_Demo_Practice_EN.pdf\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">View Printable PDF Worksheet with QR Codes (Demo EN)</a> &nbsp;|&nbsp; <a href=\"https://portal.gradaly.io/?e=ex_7c576e0a7ff4729b&id=practice#k=fOTpaHBSuaFzzdN7AJYjSF_BKMgKaYcGQj6lyYljH10\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">Open Live Student Practice Portal (Demo EN)</a>"
                ],
                screenshots: [
                    {
                        filePrefix: "14_practice_publish",
                        caption: "Practice Mode — 3. Web Publication Tab: Pedagogical toggles, Solutionnaire unlock after 1st attempt, retention duration (60/180/365 days), and Gradaly Pro 1-click Cloud / ZIP publication"
                    },
                    {
                        filePrefix: "15_practice_student_portal",
                        caption: "Built-in Student Smartphone Simulator: Preview the mobile web app where students snap a photo of their paper work and get instant formative AI feedback"
                    }
                ],
                callouts: [
                    {
                        title: "Built-in Smartphone Simulator (Free)",
                        desc: "Test your exercise sheet, criteria, and mobile student experience inside Gradaly for free before publishing."
                    },
                    {
                        title: "1-Click Cloud or Static ZIP (Gradaly Pro)",
                        desc: "Publish with client-side AES-256-GCM encryption to portal.gradaly.io (60/180/365 days) or export a standalone .zip."
                    },
                    {
                        title: "Built-in AI Relay or Personal Key",
                        desc: "On portal.gradaly.io, students can self-assess immediately with zero API key setup, or optionally enter their own free Gemini key."
                    },
                    {
                        title: "Solutionnaire Unlocked After Effort",
                        desc: "Students must photograph and submit an initial paper attempt before the teacher's Reference Solution is revealed."
                    }
                ]
            },
            {
                id: "practice-faq",
                guide: "practice",
                isFaq: true,
                stepNumber: "FAQ",
                partColor: "teal",
                tag: "Frequently Asked Questions (FAQ)",
                badge: "Encryption, Access, AI Relay & Privacy",
                shortTitle: "Frequently Asked Questions",
                title: "Frequently Asked Questions (FAQ)",
                subtitle: "Answers to common questions about why the Practice site is encrypted, who can access it, how student photos and API keys are handled, and whether the teacher tracks student usage.",
                paragraphs: [
                    "Below you will find answers to the most frequent questions about Gradaly's Practice &amp; Self-Assessment QR Mode."
                ],
                faqs: [
                    {
                        q: "Why is the Practice website encrypted?",
                        a: "<p><strong>To protect the teacher's intellectual property:</strong> Neither Gradaly nor anyone else has access to the published content — that is, the teacher's exercise sheet (questionnaire), the worked-out Reference Solution (<code>Solutionnaire</code>), or the teacher's grading criteria and instructions. All of this material is the <strong>teacher's intellectual property</strong>.</p><p>Before a single byte is uploaded to <code>portal.gradaly.io</code>, Gradaly encrypts the entire exercise package locally on the teacher's computer using <strong><code>AES-256-GCM</code></strong>. The decryption key (<code>#k=...</code>) is embedded solely inside the URL fragment (and inside the QR codes) after the <code>#</code> symbol, which web browsers never transmit to the server. The server only hosts unreadable encrypted binary blobs.</p>"
                    },
                    {
                        q: "Who has access to the Practice application?",
                        a: "<p><strong>Only the people possessing the link or the QR codes with whom the teacher has decided to share them</strong> have access to the application and can decrypt the exercises in their browser.</p><p>The teacher can therefore share the printable PDF worksheet (or the link) <strong>in complete confidentiality with his/her students</strong> (for example on an internal course page such as Moodle/Canvas or on paper in class) without the exercises or solutions ever being public on the internet. Of course, because access relies on possessing the link or QR code, the application becomes accessible to anyone outside the class if that link or QR code is shared externally.</p>"
                    },
                    {
                        q: "Does the student need an API key, and what happens to the photo of the student's handwritten work?",
                        a: "<p>Depending on how the student uses the Practice portal, there are two operating modes — both guaranteeing <strong>100% anonymity and zero image storage</strong>:</p><p><strong>1. Default Mode on <code>portal.gradaly.io</code> (No student API key required):</strong><ul><li>When the Practice project is deployed on <code>portal.gradaly.io</code> and the student does not enter a personal API key, the evaluation uses the <strong>secure Gradaly AI relay</strong> (making it immediately accessible to all students, including minors under 18, without creating any account).</li><li>In this mode, the photo of the student's handwritten answer (along with the question's evaluation prompt) <strong>transits through the Gradaly relay server</strong> solely to be evaluated by Gemini Flash.</li><li><strong>Strict non-storage guarantee:</strong> The image is <strong>never stored on disk or in the cloud</strong>, remains <strong>100% anonymous</strong>, and is <strong>immediately destroyed from server memory</strong> as soon as the AI feedback is returned to the student's phone.</li></ul></p><p><strong>2. Personal API Key Mode (Optional on <code>portal.gradaly.io</code>, or on a standalone <code>.zip</code> website):</strong><ul><li>If the student enters his/her own Google Gemini API key via the <em>Personal Key</em> button, that key is stored <strong>strictly locally inside the browser's <code>localStorage</code> on the student's own device</strong> (never sent to any Gradaly server and never visible to the teacher).</li><li>When using a personal API key, the student's browser communicates <strong>directly over encrypted HTTPS with Google's official Gemini API endpoint</strong> without passing through the Gradaly server at all.</li></ul></p>"
                    },
                    {
                        q: "Does the teacher know if a student uses the application?",
                        a: "<p><strong>No — Practice QR Mode is 100% anonymous and autonomous.</strong> There is no student login, no student roster, and no tracking or reporting sent back to the teacher.</p><p>The teacher does not know which student scanned a QR code, how many attempts a student made, or what score the student obtained. This intentional design creates a <strong>safe, judgment-free formative environment</strong> where students can practice freely on paper, make mistakes, and test their understanding as many times as they wish before the exam.</p>"
                    },
                    {
                        q: "What does the Free (non-Pro) version allow compared to Gradaly Pro in Practice QR Mode?",
                        a: "<p><strong>Free (non-Pro) version:</strong> Allows you to create your Practice project, import your exercise PDF and Reference Solution, design and calibrate your formative criteria (manually or with the AI Rubric Assistant), position the QR codes, download the <strong>printable PDF with embedded QR codes</strong>, and test the entire workflow inside the built-in <strong>Smartphone Simulator</strong>.</p><p><strong>Gradaly Pro:</strong> Unlocks the <strong>publication of the Student Practice Website</strong> — either in 1 click to the encrypted <code>portal.gradaly.io</code> cloud (for 60, 180, or 365 days) or as a standalone static <code>.zip</code> website to host on your own university server.</p>"
                    },
                    {
                        q: "What happens if I adjust my grading criteria after printing or distributing the PDF worksheet?",
                        a: "<p><strong>Your printed QR codes remain 100% valid!</strong> Each Practice project keeps a permanent publication identifier and encryption key. If you spot a typo or refine a criterion in Gradaly after handing out the paper worksheet, simply click <strong>Update existing publication</strong> in the <em>3. Web Publication</em> tab: students scanning the exact same paper QR codes will immediately benefit from the updated rubric.</p>"
                    }
                ]
            }
        ]
    },

    // =========================================================================
    // FRENCH TRANSLATION (FR) — DEUX MANUELS INDÉPENDANTS (SANS SOCLE COMMUN)
    // =========================================================================
    fr: {
        badge_manual: "Manuel Utilisateur (2-en-1)",
        back_home: "Retour au site",
        download_btn: "Télécharger Gradaly",
        hero_pill: "Logiciel Desktop 2-en-1 • Manuel Utilisateur Complet v4.0.0",
        hero_title: "Manuel Utilisateur Gradaly",
        hero_subtitle: "Mieux corriger, pour mieux former. Gradaly est un produit 2-en-1 réunissant deux outils complémentaires : (1) le Mode Examen & Test à Blanc pour l'évaluation de copies par l'enseignant (pour un test à blanc formatif en conditions réelles ou un examen final), et (2) le Mode Entraînement QR pour l'auto-évaluation autonome par l'étudiant sur smartphone. Choisissez ci-dessous le manuel correspondant à votre besoin :",
        search_placeholder: "Rechercher dans les manuels (ex: examen, test à blanc, entraînement QR, barème, OCR, clé API, FAQ)...",
        card_exam_badge: "Produit 1 • Correction Enseignant",
        card_exam_chapters: "Chapitres E1 à E9",
        card_exam_title: "Manuel 1 : Mode Examen & Test à Blanc (Par l'Enseignant)",
        card_exam_desc: "Pour vos examens finaux, partiels ou tests à blanc formatifs pendant l'année en conditions réalistes d'examen : scannez les copies des étudiants, associez-les hors-ligne par OCR, corrigez (100 % humain, IA ou en équipe) et restituez un feedback détaillé.",
        card_practice_badge: "Produit 2 • Auto-Évaluation Étudiant",
        card_practice_chapters: "Chapitres P1 à P5",
        card_practice_title: "Manuel 2 : Mode Entraînement QR (Auto-évaluation par l'Étudiant)",
        card_practice_desc: "Pour vos TD, devoirs et fiches d'exercices : incrustez des QR codes sur votre sujet PDF pour que l'étudiant rédige sur papier, scanne avec son smartphone et reçoive un feedback IA immédiat avec sa propre clé API Gemini.",
        filter_label: "Afficher :",
        filter_exam: "1. Manuel Examen (E1–E9)",
        filter_practice: "2. Manuel Entraînement QR (P1–P5)",
        filter_all: "Tout afficher",
        filter_hint: "Chaque manuel est 100 % autonome — inutile de lire les deux !",
        switch_guide_kicker: "Découvrir le second outil de Gradaly",
        btn_go_practice: "Ouvrir le Manuel 2 : Mode Entraînement QR",
        btn_go_exam: "Ouvrir le Manuel 1 : Mode Examen",
        toc_title: "Sommaire du Manuel",
        privacy_box_title: "Confidentialité 100 % Locale",
        privacy_box_text: "La liste des étudiants, l'OCR et vos projets restent stockés localement dans Documents/Gradaly sur votre ordinateur. Les publications web utilisent un chiffrement AES-256-GCM Zero-Knowledge côté client.",
        sections: [
            // =========================================================================
            // MANUEL 1 : MODE EXAMEN (E1 à E9) — 100 % AUTONOME
            // =========================================================================
            {
                id: "exam-getting-started",
                guide: "exam",
                stepNumber: "E1",
                partHeader: "Manuel 1 — Mode Examen & Test à Blanc (Enseignant)",
                partColor: "indigo",
                partBanner: {
                    kicker: "Manuel 1 • Produit 1 : Mode Examen & Test à Blanc",
                    title: "Guide Complet du Mode Examen & Test à Blanc : Évaluation par l'Enseignant (100 % Humain, Assisté par IA ou en Équipe)",
                    desc: "Ce manuel autonome couvre de A à Z l'évaluation d'une promotion par l'enseignant — aussi bien pour un examen final que pour un test à blanc formatif en cours d'année dans des conditions réalistes d'examen."
                },
                tag: "Mode Examen • Étape 1 — Créer un Projet d'Examen",
                badge: "100 % Humain ou Assisté par IA",
                shortTitle: "Créer un Projet d'Examen",
                title: "Créer un Projet d'Examen & Fonctionnement 100 % Humain ou Assisté par IA",
                subtitle: "Créez un projet Examen (ou lancez la démo Examen de 20 copies) pour évaluer les copies scannées de votre promotion.",
                paragraphs: [
                    "<strong>Qu'est-ce qu'un Projet d'Examen (badge <code>Examen</code>) ?</strong> Ce premier mode est conçu pour toutes les évaluations où l'enseignant ramasse et scanne les copies papier des étudiants : <strong>examens finaux et partiels</strong>, mais aussi <strong>tests à blanc formatifs pendant l'année</strong> pour donner un feedback approfondi dans des conditions réalistes d'examen. Même si vous préférez corriger votre examen final à la main sur papier, vous pouvez utiliser confortablement Gradaly pour un test en cours d'année afin de préparer vos étudiants à l'examen. L'interface comporte <strong>6 onglets séquentiels</strong> dans la barre supérieure : <code>1. Canevas &amp; Questions</code>, <code>2. Étudiants</code>, <code>3. Copies</code>, <code>4. Appariement</code>, <code>5. Notation</code> et <code>6. Statistiques</code>.",
                    "<strong>Mode 100 % Humain ou Mode Assisté par IA :</strong> Vous n'avez <strong>pas besoin de clé API IA</strong> pour utiliser le Mode Examen. Par défaut, Gradaly fonctionne en <strong>Mode 100 % Humain</strong> avec navigation rapide au clavier (touches <code>1–9</code> pour cocher les critères, <code>J</code>/<code>K</code> pour changer d'étudiant), recalcul dynamique des notes de toute la promotion si vous ajustez le poids d'un critère, et commentaires riches en Markdown &amp; KaTeX. Si vous le souhaitez, connectez une clé API IA pour activer l'<strong>Assistant IA de Barème</strong> et la <strong>Pré-correction IA Multimodale</strong> tout en gardant systématiquement le dernier mot.",
                    "Depuis l'<strong>Écran d'accueil</strong>, cliquez sur <strong>Nouveau projet → Projet d'Examen (Correction par l'enseignant)</strong>, ou cliquez sur <strong>Créer projet de démo → Projet d'Examen</strong> pour explorer immédiatement un examen complet de Physique contenant 20 copies manuscrites et un corrigé de référence."
                ],
                screenshots: [
                    {
                        filePrefix: "01_welcome",
                        caption: "Écran d'accueil : Vos projets d'Examen (badge indigo « Examen ») sont stockés localement dans Documents/Gradaly"
                    },
                    {
                        filePrefix: "12_demo_types_modal",
                        caption: "Fenêtre de création de démo : Choisissez « Projet d'Examen (Correction par l'enseignant) » pour charger les 20 copies de démonstration"
                    }
                ],
                callouts: [
                    {
                        title: "Flux Examen dédié en 6 onglets",
                        desc: "Canevas & Questions → Étudiants → Copies → Appariement OCR hors-ligne → Console de Notation → Statistiques & Exports."
                    },
                    {
                        title: "Utilisable 100 % manuellement sans IA",
                        desc: "Corrigez au clavier à haute vitesse en mode 100 % humain, ou combinez pré-correction IA et validation humaine."
                    },
                    {
                        title: "Démo Examen de 20 copies intégrée",
                        desc: "Testez tout le flux de correction en 1 clic sans rien scanner grâce au projet démo FR ou EN embarqué."
                    },
                    {
                        title: "Stockage 100 % local (Documents/Gradaly)",
                        desc: "Tous vos PDF, listes d'étudiants et notations restent sur votre ordinateur dans des dossiers standards."
                    }
                ]
            },
            {
                id: "exam-canvas-and-rubric",
                guide: "exam",
                stepNumber: "E2",
                partColor: "indigo",
                tag: "Mode Examen • Étape 2 — Canevas, Zone ID & Barème",
                badge: "Essentiel pour la précision",
                shortTitle: "Canevas, Zone ID & Critères",
                title: "Définir la Zone d'ID Étudiant, les Zones de Questions, le Barème & le Solutionnaire",
                subtitle: "Importez le sujet PDF vierge, tracez le cadre d'identification étudiant pour l'OCR hors-ligne, et créez vos questions et critères.",
                paragraphs: [
                    "Dans l'onglet <strong>1. Canevas &amp; Questions</strong> d'un projet Examen, commencez par importer le PDF vierge de votre sujet (<code>Canevas</code>). Vous allez ensuite tracer deux types de zones rectangulaires sur le PDF :",
                    "<strong>1. Tracer la Zone d'Identification Étudiant (<code>ID</code>) :</strong> Cliquez sur le bouton <strong>Zone d'identification Étudiant (Nom / Matricule)</strong> dans le panneau de gauche et encadrez sur la Page 1 la zone où les étudiants inscrivent leur nom et numéro de matricule. Gradaly découpera cette zone sur chaque copie scannée pour effectuer l'<strong>appariement OCR 100 % hors-ligne</strong>.",
                    "<strong>2. Tracer chaque Zone de Question (en englobant l'énoncé imprimé !) :</strong> Lorsque vous lancez la correction IA sur une copie, Gradaly découpe <strong>exactement l'image du rectangle</strong> tracé pour la question et l'envoie au modèle d'IA avec votre barème. <strong>Règle d'or :</strong> dès que la mise en page le permet, <strong>englobez à la fois l'énoncé imprimé de la question et le cadre de réponse de l'étudiant dans le rectangle</strong> afin que l'IA dispose de tout le contexte visuel.",
                    "<strong>3. Comprendre la Note de base, le Score max, le bornage et le <code>Max possible</code> :</strong><br>• <strong>Formule de calcul :</strong> Gradaly part de la <strong>Note de base</strong> de la question, y ajoute les points des critères cochés (<code>Score brut = Note de base + Σ critères cochés</code>), puis <strong>borne strictement la note finale entre <code>0</code> et <code>Score max</code></strong>.<br>• <strong>Barème purement additif OU purement diminutif :</strong> Pour un barème <strong>additif</strong>, fixez <code>Note de base = 0</code> et utilisez uniquement des critères positifs (<code>+1</code>, <code>+1.5</code>). Pour un barème <strong>diminutif / soustractif</strong>, fixez <code>Note de base = Score max</code> et utilisez uniquement des pénalités négatives (<code>-0.5</code>, <code>-1</code>). <strong>Évitez de mélanger des points positifs et négatifs dans une même question</strong> : un schéma pur est beaucoup plus clair pour l'IA comme pour l'étudiant.<br>• <strong>Indicateur <code>Max possible</code> :</strong> Affiche <code>Note de base + Σ (critères positifs)</code> pour vous permettre de repérer immédiatement un oubli dans le total de vos critères.",
                    "<strong>4. Champ du bas — Consignes générales pour l'IA (<code>Consignes &amp; Logique de correction / Prompt IA</code>) :</strong> Précisez dans ce champ comment gérer les cas particuliers (erreur reportée, forme équivalente) — et si l'énoncé ne figure pas dans la zone découpée, collez-y l'énoncé en texte plein.",
                    "<strong>5. Importer et tester le Solutionnaire (<code>Solutionnaire</code> / <code>⭐ Corrigé de référence</code>) :</strong> Utilisez la bascule <strong>Énoncé (Canevas) / Solutionnaire</strong> en haut du PDF pour importer votre corrigé type. Il apparaît tout en haut de la liste des copies dans l'onglet Notation (<code>⭐ Corrigé de référence</code>) : vérifiez toujours que votre propre solutionnaire obtient bien la <strong>note maximale (<code>Max/Max</code>)</strong> à chaque question !"
                ],
                screenshots: [
                    {
                        filePrefix: "02_questions",
                        caption: "Mode Examen — Onglet Canevas & Questions : Bouton Zone d'ID Étudiant, Note de base / Score max / Max possible, critères, consignes IA de bas de page et bascule Énoncé / Solutionnaire"
                    }
                ],
                callouts: [
                    {
                        title: "Zone d'ID Étudiant pour l'OCR local",
                        desc: "Encadrez une seule fois l'en-tête sur la Page 1 ; Gradaly l'extraira sur toutes les copies pour reconnaître les noms hors-ligne."
                    },
                    {
                        title: "Schéma purement Additif ou Diminutif",
                        desc: "Partez de 0 avec des +pts ou partez du Score max avec des −pts. La note est toujours bornée entre 0 et Score max."
                    },
                    {
                        title: "Englober l'énoncé dans la zone",
                        desc: "Incluez l'énoncé imprimé et la boîte de réponse dans le rectangle (ou collez l'énoncé dans le champ de consignes en bas)."
                    },
                    {
                        title: "Vérification sur le Solutionnaire (⭐)",
                        desc: "Importez votre corrigé type PDF et vérifiez en 1 clic qu'il obtient bien le score maximum (Max/Max) à chaque question."
                    }
                ]
            },
            {
                id: "exam-ai-rubric-assistant",
                guide: "exam",
                stepNumber: "E3",
                partColor: "indigo",
                tag: "Mode Examen • Étape 3 — Assistant IA de Barème",
                badge: "Mode Chat & Calibrage",
                shortTitle: "Assistant IA de Barème",
                title: "Concevoir et Calibrer ses Critères d'Examen avec l'Assistant IA",
                subtitle: "Générez ou affinez votre barème à partir de l'énoncé et du solutionnaire PDF, dialoguez en mode chat et collez des captures de vraies copies.",
                paragraphs: [
                    "Sur n'importe quelle question de l'onglet <strong>Canevas &amp; Questions</strong>, cliquez sur <strong>Concevoir / Modifier avec l'IA</strong> pour ouvrir l'<strong>Assistant IA de Barème</strong>.",
                    "<strong>1. Choisir vos paramètres (et cocher l'option Solutionnaire) :</strong> Indiquez le <code>Score max</code>, la politique <strong>Additive</strong> ou <strong>Soustractive</strong>, et le <strong>nombre de critères</strong> souhaité (3, 4, 5 ou libre). Si vous avez chargé un PDF <code>Solutionnaire</code>, cochez <em>« Utiliser la réponse du solutionnaire comme référence »</em> pour que l'IA s'appuie sur votre démonstration attendue.",
                    "<strong>2. Affiner par Chat &amp; Coller des captures de copies d'étudiants (<code>Cmd+V</code> / <code>Ctrl+V</code>) :</strong> Demandez des ajustements en langage naturel dans le chat à droite, ou collez directement la capture d'écran d'une vraie réponse d'étudiant en écrivant : <em>« Je pense que cette réponse mérite le maximum, adapte les critères et la logique de notation en conséquence. »</em>",
                    "<strong>3. Appliquer et calibrer sur quelques copies :</strong> Cliquez sur <strong>Valider et appliquer à la question</strong>, puis testez le barème sur votre <code>⭐ Corrigé de référence</code> et sur 2 ou 3 copies dans l'onglet Notation."
                ],
                screenshots: [
                    {
                        filePrefix: "03_rubric_assistant",
                        caption: "Fenêtre Assistant Barème IA : Critères et PROMPT_TEXT proposés à gauche, chat interactif (supportant le collage de captures de copies) à droite"
                    }
                ],
                callouts: [
                    {
                        title: "Analyse conjointe Énoncé + Solutionnaire",
                        desc: "Construit automatiquement une grille de critères détaillée et fidèle à votre corrigé type."
                    },
                    {
                        title: "Coller de vraies copies dans le Chat (Cmd+V)",
                        desc: "Collez l'image d'une méthode alternative d'étudiant pour que l'assistant adapte immédiatement la formulation des critères."
                    }
                ]
            },
            {
                id: "exam-roster-and-matching",
                guide: "exam",
                stepNumber: "E4",
                partColor: "indigo",
                tag: "Mode Examen • Étape 4 — Étudiants, Copies & OCR Hors-Ligne",
                badge: "100 % Local & Hors-Ligne",
                shortTitle: "Étudiants, Copies & OCR",
                title: "Liste d'Étudiants (CSV), Découpage PDF & Appariement OCR 100 % Hors-Ligne",
                subtitle: "Importez votre promotion, découpez vos scans PDF groupés en copies individuelles et associez les identités localement sans aucun envoi cloud.",
                paragraphs: [
                    "Dans l'onglet <strong>2. Étudiants</strong>, importez la liste officielle de votre promotion au format CSV ou Excel (export Moodle, ADE, etc.) avec détection automatique des colonnes <strong>Matricule (ID)</strong>, <strong>Nom</strong>, <strong>Prénom</strong>, <strong>E-mail</strong> et <strong>Groupe</strong>.",
                    "Dans l'onglet <strong>3. Copies</strong>, importez soit des PDF individuels, soit un <strong>fichier PDF unique issu du scanner</strong> regroupant toute la pile de copies. Indiquez le nombre de pages par copie (ex: 4 pages par étudiant) pour découper automatiquement le lot en <code>copie_01.pdf</code>, <code>copie_02.pdf</code>, etc.",
                    "Dans l'onglet <strong>4. Appariement</strong>, cliquez sur <strong>Lancer l'appariement automatique (OCR)</strong>. Gradaly découpe la zone d'identification (<code>ID</code>) sur la Page 1 de chaque copie, exécute un moteur <strong>Tesseract WebAssembly embarqué 100 % hors-ligne</strong> et associe chaque copie à l'étudiant correspondant par similarité floue."
                ],
                screenshots: [
                    {
                        filePrefix: "04_students",
                        caption: "Onglet Étudiants : Liste locale de la promotion avec Matricule, Nom, Prénom, E-mail et Groupe"
                    },
                    {
                        filePrefix: "05_copies",
                        caption: "Onglet Copies : Importation, découpage automatique par nombre de pages et aperçu des copies"
                    },
                    {
                        filePrefix: "06_matching",
                        caption: "Onglet Appariement : Vérification visuelle côte à côte de l'en-tête manuscrit découpé et de la liste d'étudiants"
                    }
                ],
                callouts: [
                    {
                        title: "Confidentialité Absolue (Zéro Cloud OCR)",
                        desc: "Les noms, matricules, e-mails et en-têtes manuscrits ne quittent jamais votre machine : tout tourne 100 % hors-ligne."
                    },
                    {
                        title: "Filtre « Non associés » & Recherche Rapide",
                        desc: "Vérifiez et associez les écritures ambiguës en quelques secondes grâce au filtre dédié et à la recherche instantanée."
                    }
                ]
            },
            {
                id: "exam-grading-console",
                guide: "exam",
                stepNumber: "E5",
                partColor: "indigo",
                tag: "Mode Examen • Étape 5 — Console de Notation",
                badge: "100 % Humain, IA Standard ou Batch Flex (-50 %)",
                shortTitle: "Notation Manuelle & IA",
                title: "Console de Notation à 3 Panneaux : Vitesse au Clavier, Calibrage & Lot IA",
                subtitle: "Naviguez question par question sur toute la promotion, maîtrisez les codes couleurs, calibrez sur une copie et lancez la pré-correction IA en mode Batch.",
                paragraphs: [
                    "L'onglet <strong>5. Notation</strong> réunit trois colonnes synchronisées : la <strong>Liste des copies</strong> à gauche (avec le <code>⭐ Corrigé de référence</code> épinglé tout en haut), la <strong>Visionneuse PDF interactive</strong> au centre et le <strong>Poste de notation par critères</strong> à droite.",
                    "<strong>1. Petits ronds de questions &amp; Navigation horizontale :</strong> Cliquez sur un rond numéroté (<code>1</code>, <code>2</code>, <code>3</code>...) en haut à droite pour centrer automatiquement le PDF sur cette question. Naviguez ensuite d'un étudiant à l'autre sur cette même question avec les flèches <code>↑</code>/<code>↓</code> (<code>J</code>/<code>K</code>) et cochez/décochez les critères avec les touches <code>1–9</code>.",
                    "<strong>2. Code couleur des statuts :</strong><br>• 🟢 <strong>Vert (<code>IA</code>) :</strong> Question pré-corrigée par l'IA (en attente de relecture/validation par l'enseignant).<br>• 🔵 <strong>Bleu (<code>Humain</code>) :</strong> Question corrigée, modifiée ou validée manuellement par un humain.<br>• ⚪ <strong>Gris (<code>À corriger</code>) :</strong> Question non encore évaluée.",
                    "<strong>3. Calibrage sur l'élève courant vs Lancement par lot (<code>▶ Correction IA</code>) :</strong><br>• <strong>Calibrer sur 1 copie :</strong> En bas à droite, cliquez sur <strong>« Relancer l'IA pour cette question »</strong> pour tester votre barème sur l'étudiant affiché.<br>• <strong>Lancer sur toute la promotion (<code>▶ Correction IA</code>) :</strong> Cliquez sur <strong>▶ Correction IA</strong> en haut à gauche et choisissez entre le <strong>⚡ Mode Standard</strong> (threads parallèles en direct) et le <strong>🌿 Mode Flex / Lot Asynchrone (-50 % sur le coût API)</strong>, vivement recommandé avec une clé directe Gemini, OpenAI ou Anthropic."
                ],
                screenshots: [
                    {
                        filePrefix: "07_grading",
                        caption: "Vue d'ensemble de l'onglet Notation : Colonne de gauche (⭐ Corrigé de référence, pastilles 🟢 IA / 🔵 Humain / ⚪ À corriger, score de la question & score total), copie PDF centrée au milieu et grille de critères à droite"
                    },
                    {
                        filePrefix: "07b_grading_single_ai",
                        caption: "Bas de la colonne de droite : Justificatif IA, Feedback élève (Markdown + KaTeX), options « Ne pas écraser » et bouton « Relancer l'IA pour cette question »"
                    },
                    {
                        filePrefix: "07c_grading_launch_modal",
                        caption: "Fenêtre « Lancer la correction IA » : Choix des copies, des questions, des règles d'écrasement et sélection du Mode Flex / Batch asynchrone (-50 %)"
                    }
                ],
                callouts: [
                    {
                        title: "Ergonomie 100 % Clavier",
                        desc: "Cochez les critères avec les touches 1–9 et passez d'une copie à l'autre avec J/K sans toucher la souris."
                    },
                    {
                        title: "Mode Batch / Flex Recommandé (-50 %)",
                        desc: "Disponible avec les clés directes Gemini, OpenAI et Claude pour pré-corriger toute une promotion à moitié prix."
                    }
                ]
            },
            {
                id: "exam-collaborative-sharing",
                guide: "exam",
                stepNumber: "E6",
                partColor: "indigo",
                tag: "Mode Examen • Étape 6 — Correction en Équipe (Gradaly Pro)",
                badge: "Partage & Fusion Sélective • PRO",
                shortTitle: "Partage Collaboratif & Fusion (PRO)",
                title: "Partage Collaboratif de Projet & Fusion Sélective par Question",
                subtitle: "Répartissez la correction d'un examen entre collègues ou assistants via une archive .gradaly ou un lien Cloud chiffré AES-256 (Gradaly Pro).",
                paragraphs: [
                    "Pour corriger un examen à plusieurs (co-titulaires ou équipe d'assistants), <strong>Gradaly Pro</strong> permet de partager tout ou partie d'un projet via une archive locale <code>.gradaly</code> ou un <strong>Lien Cloud chiffré de bout en bout en AES-256-GCM</strong> (valide 7, 14 ou 30 jours).",
                    "Lorsque votre collègue clique sur <strong>Importer / Fusionner</strong>, Gradaly vérifie l'empreinte SHA-256 du canevas PDF et propose soit d'<strong>importer comme nouveau projet</strong>, soit de <strong>fusionner sélectivement le barème et/ou les corrections question par question</strong> (ex: fusionner Q1–Q2 de l'Assistant A avec Q3–Q4 de l'Assistant B) avec sauvegarde automatique préalable dans <code>backups/</code>."
                ],
                screenshots: [
                    {
                        filePrefix: "09_share_modal",
                        caption: "Fenêtre Partager / Exporter le projet (Gradaly Pro) : Profils préconfigurés, filtre par question et Lien Cloud chiffré AES-256"
                    },
                    {
                        filePrefix: "10_import_merge_modal",
                        caption: "Fenêtre Importer / Fusionner (Gradaly Pro) : Vérification SHA-256 du canevas et fusion sélective question par question"
                    }
                ],
                callouts: [
                    {
                        title: "Liens Cloud Chiffrés de Bout en Bout",
                        desc: "Transmettez le projet à votre équipe avec chiffrement AES-256-GCM côté client (la clé #k=... ne quitte jamais le lien)."
                    },
                    {
                        title: "Fusion Sélective Question par Question",
                        desc: "Rassemblez les questions corrigées par chaque assistant tout en protégeant vos corrections manuelles locales."
                    }
                ]
            },
            {
                id: "exam-analytics-and-exports",
                guide: "exam",
                stepNumber: "E7",
                partColor: "indigo",
                tag: "Mode Examen • Étape 7 — Statistiques & Restitution",
                badge: "Excel • PDF Annotés • Portail Web Examen",
                shortTitle: "Statistiques, PDF & Portail Examen",
                title: "Statistiques de Promotion, PDF Annotés & Portail Web de Consultation des Copies",
                subtitle: "Analysez la distribution des notes, ajustez le barème à la volée et restituez à chaque étudiant sa copie corrigée et commentée.",
                paragraphs: [
                    "L'onglet <strong>6. Statistiques</strong> calcule en temps réel les indicateurs de la promotion : moyenne, médiane, écart-type, notes min/max, histogrammes par tranches <code>[a, b[</code>, et taux de validation de chaque critère.",
                    "Pour restituer les résultats aux étudiants (aperçu 1 copie en version gratuite ; promotion complète avec Gradaly Pro), trois canaux sont disponibles :<br>1) <strong>Tableur Excel multi-feuilles</strong> (synthèse officielle + 1 onglet détaillé par question).<br>2) <strong>Copies PDF annotées individuelles (ZIP)</strong> combinant une page de garde récapitulative et les pages manuscrites de l'étudiant.<br>3) <strong>Portail Web Étudiant Zero-Knowledge</strong> : publiez les copies corrigées chiffrées en 1 clic (pendant 30, 60, 90, 180 ou 365 jours), envoyez automatiquement les liens magiques par e-mail, ou imprimez des <strong>planches de coupons QR codes individuels</strong> à distribuer en auditoire."
                ],
                screenshots: [
                    {
                        filePrefix: "08_stats",
                        caption: "Onglet Statistiques (Mode Examen) : Indicateurs de promotion, histogrammes [a, b[, réussite par critère et centre d'exportation"
                    }
                ],
                callouts: [
                    {
                        title: "Tableur Excel & Copies PDF Annotées",
                        desc: "Générez le fichier Excel officiel des notes ainsi qu'un PDF annoté individuel par étudiant avec formules KaTeX."
                    },
                    {
                        title: "Portail Web de Consultation de Copie",
                        desc: "Chaque étudiant consulte sa copie corrigée, son barème détaillé et ses commentaires via lien e-mail ou coupon QR individuel."
                    }
                ]
            },
            {
                id: "exam-ai-settings",
                guide: "exam",
                stepNumber: "E8",
                partColor: "indigo",
                tag: "Mode Examen • Étape 8 — Configuration IA (Optionnel)",
                badge: "OpenRouter • Gemini • GPT • Claude • Local",
                shortTitle: "Clés API & Choix du Modèle IA",
                title: "Configurer sa Clé API & Choisir son Modèle d'IA",
                subtitle: "Ignorez ce chapitre si vous utilisez Gradaly en mode 100 % humain. Pour activer l'Assistant de barème et la pré-correction IA, configurez votre clé dans Paramètres (⚙️).",
                paragraphs: [
                    "<strong>La qualité de la pré-correction IA dépend directement du modèle d'IA que vous utilisez :</strong> Lors de nos campagnes d'évaluation sur des copies manuscrites universitaires (mathématiques, physique, ingénierie, économie, sciences humaines), nous obtenons d'<strong>excellents résultats</strong> avec <strong><code>Gemini 3.8 Flash</code></strong>, <strong><code>GPT 5-4 mini</code></strong>, <strong><code>Claude-Sonnet-5.5</code></strong> ou <strong><code>Mistral-Large 4.0</code></strong> — n'hésitez pas à en tester plusieurs selon votre discipline !",
                    "<strong>Clé directe fournisseur ou OpenRouter :</strong> Vous pouvez créer une clé API directement chez <strong>Google Gemini</strong>, <strong>OpenAI</strong> ou <strong>Anthropic</strong> (ce qui permet notamment de bénéficier du <strong>mode Batch / Flex asynchrone à -50 %</strong>), ou passer par <strong>OpenRouter</strong>, dont l'avantage est qu'<strong>une seule clé API donne accès aux modèles de tous les fournisseurs</strong> (Gemini, GPT, Claude, Mistral, DeepSeek, Qwen, Llama) sur un même compte.",
                    "<strong>0 % de marge ni « crédits IA » propriétaires :</strong> Contrairement aux plateformes commerciales qui vous imposent un modèle unique et vous revendent des « packs de crédits IA » avec une forte marge, Gradaly ne facture <strong>aucun surcoût</strong> sur l'usage de l'IA. Vous payez le coût réel directement au fournisseur — ou <strong>0 € si votre université met à disposition un modèle institutionnel gratuit ou si vous utilisez un modèle local via Ollama</strong>, renforçant ainsi votre souveraineté numérique."
                ],
                screenshots: [
                    {
                        filePrefix: "11_settings_ai",
                        caption: "Fenêtre Paramètres IA (⚙️) : Choix du fournisseur (Gemini, OpenRouter, OpenAI, Anthropic ou Serveur Local/Universitaire), sélection du modèle et test de connexion"
                    }
                ],
                providerGuides: [
                    {
                        name: "OpenRouter (Passerelle Multi-Fournisseurs)",
                        tag: "Tous les modèles en 1 clé",
                        icon: "fas fa-network-wired",
                        desc: "<strong>Avantage spécifique :</strong> Un seul compte et une seule clé API permettent de tester <code>Gemini 3.8 Flash</code>, <code>GPT 5-4 mini</code>, <code>Claude-Sonnet-5.5</code>, <code>Mistral-Large 4.0</code> et des centaines d'autres modèles sans multiplier les comptes (note : le mode Batch asynchrone n'est pas disponible sur OpenRouter).",
                        steps: [
                            "Rendez-vous sur <strong>openrouter.ai</strong> et connectez-vous (ou créez un compte gratuit).",
                            "Allez dans <strong>Credits</strong> et ajoutez un petit solde prépayé (ex: 5 $ ou 10 $ — suffisant pour des milliers de pages de copies).",
                            "Allez dans <strong>Keys</strong> → cliquez sur <strong>Create Key</strong>, nommez-la <code>Gradaly</code> et copiez la clé commençant par <code>sk-or-v1-...</code>.",
                            "Dans Gradaly, ouvrez <strong>Paramètres (⚙️)</strong>, choisissez <strong>OpenRouter</strong>, collez la clé et sélectionnez le modèle souhaité."
                        ],
                        url: "https://openrouter.ai/keys",
                        linkLabel: "Ouvrir la console OpenRouter Keys"
                    },
                    {
                        name: "Google Gemini (Google AI Studio)",
                        tag: "Rapide & Économique",
                        icon: "fas fa-bolt",
                        desc: "Accès direct aux modèles multimodaux <code>Gemini 3.8 Flash</code> et Pro de Google, avec support du mode Batch asynchrone à -50 %.",
                        steps: [
                            "Connectez-vous sur <strong>Google AI Studio</strong> (<code>aistudio.google.com</code>) avec votre compte Google.",
                            "Cliquez sur <strong>Get API key</strong> dans le menu de gauche, puis sur <strong>Create API key</strong>.",
                            "Copiez la clé générée (commençant par <code>AIzaSy...</code>). Activez la facturation Pay-as-you-go si vous souhaitez débloquer les quotas élevés.",
                            "Dans Gradaly, ouvrez <strong>Paramètres (⚙️)</strong>, sélectionnez <strong>Google Gemini</strong> et collez votre clé."
                        ],
                        url: "https://aistudio.google.com/app/apikey",
                        linkLabel: "Ouvrir Google AI Studio API Keys"
                    },
                    {
                        name: "OpenAI (Modèles GPT)",
                        tag: "Haute précision logique",
                        icon: "fas fa-brain",
                        desc: "Accès direct aux modèles multimodaux d'OpenAI tels que <code>GPT 5-4 mini</code>, excellents pour vérifier chaque étape d'un calcul, avec support du mode Batch à -50 %.",
                        steps: [
                            "Connectez-vous sur <strong>platform.openai.com</strong> (indépendant d'un abonnement ChatGPT Plus).",
                            "Allez dans <strong>Settings → Billing</strong> et créditez un petit solde prépayé (ex: 5 $).",
                            "Ouvrez <strong>Dashboard → API keys</strong>, cliquez sur <strong>+ Create new secret key</strong> et copiez la clé (<code>sk-proj-...</code>).",
                            "Dans Gradaly, ouvrez <strong>Paramètres (⚙️)</strong>, sélectionnez <strong>OpenAI</strong>, collez la clé et choisissez votre modèle."
                        ],
                        url: "https://platform.openai.com/api-keys",
                        linkLabel: "Ouvrir OpenAI Platform API Keys"
                    },
                    {
                        name: "Anthropic (Modèles Claude)",
                        tag: "Rédaction & Démonstrations",
                        icon: "fas fa-feather-alt",
                        desc: "Accès direct aux modèles <code>Claude-Sonnet-5.5</code> et Opus d'Anthropic, réputés pour l'analyse fine des démonstrations manuscrites et la qualité de leurs feedbacks.",
                        steps: [
                            "Connectez-vous sur la <strong>Console Anthropic</strong> (<code>console.anthropic.com</code>).",
                            "Dans <strong>Settings → Billing</strong>, activez un solde de crédits prépayés.",
                            "Dans <strong>API Keys</strong>, cliquez sur <strong>Create Key</strong> et copiez la clé secrète (<code>sk-ant-...</code>).",
                            "Dans Gradaly, ouvrez <strong>Paramètres (⚙️)</strong>, sélectionnez <strong>Anthropic</strong> et collez votre clé."
                        ],
                        url: "https://console.anthropic.com/settings/keys",
                        linkLabel: "Ouvrir Anthropic Console API Keys"
                    }
                ],
                callouts: [
                    {
                        title: "Serveur Universitaire ou Ollama 100 % Local",
                        desc: "Si votre université met à disposition un serveur d'IA (compatible OpenAI) ou si vous faites tourner un modèle local via Ollama (<code>http://localhost:11434/v1</code>), sélectionnez « Serveur Local / Personnalisé » dans les Paramètres pour un coût de 0 €."
                    },
                    {
                        title: "Diagnostic de Connexion en 1 Clic",
                        desc: "Cliquez à tout moment sur le badge d'état IA dans la barre supérieure pour vérifier la validité de votre clé et la réactivité du modèle."
                    }
                ]
            },
            {
                id: "exam-faq",
                guide: "exam",
                isFaq: true,
                stepNumber: "FAQ",
                partColor: "indigo",
                tag: "Foire Aux Questions (FAQ)",
                badge: "Fonctionnement, Fichiers Locaux & Support",
                shortTitle: "Foire Aux Questions",
                title: "Foire Aux Questions (FAQ)",
                subtitle: "Réponses aux questions fréquentes sur le fonctionnement de l'IA, les tests à blanc formatifs vs examens finaux, le stockage local dans Documents/Gradaly, la sécurité des clés API, le chiffrement Cloud et le support.",
                paragraphs: [
                    "Retrouvez ci-dessous les réponses détaillées aux questions techniques, pédagogiques et de confidentialité les plus fréquentes sur le Mode Examen &amp; Test à Blanc de Gradaly."
                ],
                faqs: [
                    {
                        q: "Comment fonctionne concrètement la correction par IA dans Gradaly ?",
                        a: "<p>Lorsque vous lancez l'IA sur une question pour une copie donnée, Gradaly extrait <strong>l'image découpée de la zone rectangulaire</strong> que vous avez tracée pour cette question, et l'envoie au modèle d'IA accompagnée d'un prompt contenant vos critères de barème (<code>CRITERIA</code>) et vos consignes générales pour la question (<code>PROMPT_TEXT</code>).</p><p><strong>C'est exactement similaire à ce que vous feriez si vous faisiez un copier-coller d'une capture d'écran de cette zone dans votre outil de chat IA favori en lui demandant :</strong> <em>« Corrige cet extrait de copie : voici ma politique de notation et mes critères pour cette question, indique-moi quels critères sont validés, pourquoi, et rédige un commentaire pour l'étudiant. »</em></p><p>C'est pourquoi, pour que l'IA fasse un travail remarquable, il est essentiel d'être très précis sur la façon d'appliquer votre barème : englobez l'énoncé dans la zone de la question (ou collez l'énoncé en texte plein dans le champ de consignes en bas de la question) et utilisez l'Assistant IA de Barème pour calibrer vos critères.</p>"
                    },
                    {
                        q: "Faut-il faire confiance à la correction IA, ou l'utiliser pour des tests à blanc formatifs ?",
                        a: "<p><strong>Oui et non — dans un premier temps, jamais aveuglément !</strong> Votre barème initial pourrait être trop strict ou comporter des implicites, ou le modèle d'IA que vous avez choisi pourrait ne pas être capable de résoudre correctement la question ou mal interpréter une notation manuscrite.</p><p><strong>Tests à blanc formatifs vs examen final :</strong> Certains professeurs préfèrent corriger à la main l'examen final sur papier (ou utiliser Gradaly en Mode 100 % Humain), tout en étant très confortables d'utiliser la pré-correction IA de Gradaly pour un <strong>test à blanc formatif pendant l'année</strong> en préparation à l'examen, afin d'offrir un feedback détaillé dans des conditions réalistes d'examen.</p><p><strong>Relire et valider manuellement :</strong> Nous vous recommandons vivement de <strong>relire les propositions produites par l'IA et de les valider</strong>, tout particulièrement si Gradaly est utilisé dans un <strong>but certificatif (examen officiel)</strong>. Gradaly a été conçu pour vous permettre de vérifier, ajuster en un clic et valider manuellement chaque réponse et chaque feedback, et il sera toujours préférable de le faire.</p><p><strong>Droit de regard et réclamation des étudiants :</strong> Grâce à la transparence du barème par critères restitué aux étudiants (via les PDF annotés ou le Portail Web Étudiant), nous vous recommandons également de toujours laisser la possibilité aux étudiants de consulter leur copie et, le cas échéant, de contester l'application d'un critère.</p>"
                    },
                    {
                        q: "Combien coûte la correction d'un examen avec l'IA ?",
                        a: "<p>Il n'y a pas de tarif unique figé, car le coût dépend du nombre de copies à corriger, du nombre de questions, ainsi que de la taille et de la gamme du modèle d'IA choisi (chaque fournisseur d'API publie sa grille tarifaire exacte par million de tokens que vous pouvez consulter).</p><p>Pour vous donner un ordre de grandeur concret issu de nos propres examens : avec un excellent modèle comme <strong><code>Gemini 3.8 Flash</code></strong> (qui donne de très bons résultats dans nos tests), nous avons corrigé des examens universitaires de statistiques complexes comportant <strong>6 à 7 pages de réponses pour 400 étudiants pour un coût total de l'ordre de 5 à 7 $</strong> en mode flexible/batch (sans aucune marge prélevée par Gradaly).</p>"
                    },
                    {
                        q: "J'ai déjà un abonnement payant à ChatGPT Plus (OpenAI), Claude Pro ou Gemini Advanced : pourquoi ne puis-je pas l'utiliser directement plutôt qu'une clé API ?",
                        a: "<p><strong>1. Deux services totalement distincts chez les fournisseurs d'IA :</strong> Chez OpenAI, Anthropic et Google, les abonnements grand public (ChatGPT Plus, Claude Pro, Gemini Advanced à ~20 €/mois) et l'accès par <strong>clé API</strong> sont deux produits séparés. Les abonnements mensuels donnent uniquement accès à leur interface de discussion web/mobile pour un usage manuel et ne permettent techniquement pas à un logiciel externe comme Gradaly d'envoyer des requêtes automatisées (leurs conditions d'utilisation l'interdisent d'ailleurs formellement).</p><p><strong>2. Traitement par lots et confidentialité accrue :</strong> Pour pré-corriger des dizaines ou des centaines de copies en parallèle et recevoir des réponses structurées (cases du barème cochées automatiquement, justificatif enseignant et feedback étudiant), Gradaly doit passer par l'API officielle. De plus, <strong>les données transmises via l'API bénéficient de garanties de confidentialité professionnelles</strong> : contrairement aux interfaces de chat grand public par défaut, les copies envoyées via l'API <strong>ne sont pas utilisées par OpenAI, Google ou Anthropic pour entraîner leurs modèles</strong>.</p><p><strong>3. Un coût à l'usage minime (sans abonnement supplémentaire) :</strong> L'utilisation d'une clé API ne nécessite aucun abonnement mensuel fixe : vous ne payez qu'à la consommation réelle (<em>pay-as-you-go</em>, sans aucune marge prélevée par Gradaly), soit typiquement <strong>quelques euros à peine pour corriger une promotion entière de plusieurs centaines d'étudiants</strong> (et Google propose même un niveau gratuit sur l'API Gemini pour tester). Si vous souhaitez éviter de gérer plusieurs comptes, vous pouvez utiliser <strong>OpenRouter</strong> (une seule clé rechargeable donnant accès à GPT, Claude, Gemini, etc.) ou le serveur IA de votre université.</p>"
                    },
                    {
                        q: "Combien de temps cela prend-il de corriger mon examen avec l'IA ?",
                        a: "<p>La durée dépend du nombre de zones de questions, du nombre de copies et de la difficulté de la tâche demandée à l'agent d'IA. À titre indicatif, pour un examen de <strong>400 copies, 5 questions et une dizaine de pages de réponses</strong> en mode flexible, l'examen complet est généralement pré-corrigé en <strong>une dizaine de minutes</strong>.</p><p><strong>Astuce performance :</strong> N'hésitez pas à ajuster le <strong>nombre de threads parallèles (workers)</strong> dans les <strong>Paramètres (⚙️)</strong> de l'application — augmenter ce paramètre permet d'accélérer sensiblement la vitesse de traitement (selon les quotas autorisés par votre fournisseur d'API).</p>"
                    },
                    {
                        q: "Quelle résolution (DPI) doivent avoir mes scans de copies ?",
                        a: "<p>Privilégiez des fichiers <strong>les plus légers possibles tout en restant parfaitement lisibles</strong> : une résolution de <strong><code>150 DPI</code> à <code>200 DPI</code></strong> constitue le compromis idéal, aussi bien pour la lecture à l'écran que pour la reconnaissance par l'IA.</p><p><strong>Inutile de monter à 300 ou 600 DPI :</strong> Une résolution trop élevée n'apporte strictement aucun gain de précision pour l'IA (les images étant redimensionnées avant l'analyse) mais alourdit vos fichiers PDF d'un facteur 4 à 10, ce qui ralentit inutilement le découpage des copies, l'affichage et l'envoi vers le Portail Web ou le Cloud.</p><p><strong>Conservez la couleur :</strong> Nous recommandons de scanner en <strong>Couleur (en 150–200 DPI avec compression PDF standard)</strong> plutôt qu'en noir et blanc binaire (1 bit) qui écrase les contrastes. La couleur préserve beaucoup mieux les tracés au crayon gris, les stylos de couleur sur les schémas et les exposants/indices fins.</p>"
                    },
                    {
                        q: "Où sont stockés les fichiers de Gradaly sur mon ordinateur ?",
                        a: "<p>Tous vos projets d'examen sont stockés localement dans le dossier <strong><code>Documents/Gradaly/</code></strong> de votre ordinateur (par ex. <code>~/Documents/Gradaly/</code> sur macOS/Linux ou <code>C:\\Users\\VotreNom\\Documents\\Gradaly\\</code> sur Windows), avec un sous-dossier par projet.</p><p>À l'intérieur de chaque dossier de projet, toutes les données sont enregistrées sous forme de fichiers standards et lisibles :<ul><li><strong>Les fichiers PDF :</strong> le sujet vierge (<code>canvas.pdf</code>), le corrigé type éventuel (<code>solution.pdf</code>) et toutes les copies PDF découpées dans le sous-dossier <code>copies/</code> (<code>copie_01.pdf</code>, <code>copie_02.pdf</code>, etc.).</li><li><strong>Les fichiers texte JSON :</strong> le barème et les zones de questions (<code>config.json</code>), la liste des étudiants avec noms, matricules et e-mails (<code>students.json</code>), la table d'appariement OCR (<code>matching.json</code>), ainsi que les évaluations et commentaires de chaque copie dans le sous-dossier <code>gradings/</code> (<code>copie_01.json</code>, etc.).</li></ul></p><p><strong>⚠️ Conseil important :</strong> Bien que ce stockage transparent facilite la sauvegarde de votre dossier <code>Documents/Gradaly</code>, <strong>nous vous conseillons vivement de ne PAS modifier ou renommer manuellement les fichiers dans ce dossier</strong>, car cela risquerait de corrompre la cohérence du projet.</p>"
                    },
                    {
                        q: "Où sont stockées mes clés API et est-ce sécurisé ?",
                        a: "<p>Vos clés API (Gemini, OpenRouter, OpenAI, Anthropic) sont enregistrées <strong>strictement en local sur votre ordinateur</strong> dans le fichier de configuration <code>.gradaly_settings.json</code> situé à la racine de votre dossier utilisateur (<code>~/.gradaly_settings.json</code> sur macOS/Linux ou <code>C:\\Users\\VotreNom\\.gradaly_settings.json</code> sur Windows).</p><p><strong>Garanties de sécurité :</strong><ul><li>Vos clés API ne sont <strong>jamais envoyées vers un serveur Gradaly</strong> et ne sont <strong>jamais incluses lorsque vous exportez ou partagez un projet <code>.gradaly</code></strong> avec un collègue.</li><li>Lorsque vous utilisez l'IA, votre ordinateur communique <strong>directement en HTTPS chiffré (TLS 1.3)</strong> avec le serveur officiel du fournisseur d'IA que vous avez choisi.</li><li>Vous pouvez à tout moment plafonner le budget mensuel ou révoquer votre clé depuis l'interface de votre fournisseur d'IA.</li></ul></p>"
                    },
                    {
                        q: "Où sont stockées les données lorsque je publie un examen sur le Cloud ? Qui peut y accéder ?",
                        a: "<p>Lorsque vous publiez un examen sur le <strong>Portail Web Étudiant</strong> ou générez un <strong>lien de partage collaboratif Cloud</strong>, <strong>chaque fichier est chiffré localement sur votre ordinateur en <code>AES-256-GCM</code> avant même qu'un seul octet ne quitte votre machine</strong>. Seuls des blocs binaires chiffrés inintelligibles (<code>.enc</code>) sont stockés sur notre stockage cloud européen (avec suppression automatique à l'échéance choisie).</p><p>La clé secrète de déchiffrement (<code>#k=...</code>) est placée dans le fragment d'URL situé après le symbole dièse (<code>#</code>). Selon le standard officiel d'Internet (RFC 3986), ce fragment n'est jamais envoyé au serveur lors des requêtes HTTP. <strong>Ainsi, même les créateurs de Gradaly ne peuvent jamais lire vos fichiers, et même un pirate qui compromettrait le serveur cloud ne verrait que des données chiffrées indéchiffrables</strong> : seul le détenteur du lien généré possède la clé permettant de déchiffrer la copie ou le projet.</p>"
                    },
                    {
                        q: "Pourquoi une application Desktop plutôt qu'un outil 100 % Web ? Quelle est la vision de Gradaly ?",
                        a: "<p>Nous avons fait le choix d'une application native installée sur votre ordinateur (macOS, Windows, Linux) pour deux raisons fondamentales :</p><p>1) <strong>Maîtrise immédiate de vos données :</strong> Vous n'êtes jamais obligé d'envoyer les copies non chiffrées ni la liste nominative de vos étudiants sur un serveur distant pour préparer, découper et associer vos copies.</p><p>2) <strong>Notre vision à moyen terme (Autonomie 100 % locale) :</strong> Les processeurs d'ordinateurs portables et les modèles d'IA multimodaux ouverts progressent à une vitesse fulgurante. <strong>La vision de Gradaly est que d'ici quelques années, d'excellents modèles de vision et de raisonnement tourneront directement sur votre ordinateur portable</strong> (ou sur le serveur interne de votre faculté). Grâce à son architecture locale compatible Ollama / serveurs universitaires, Gradaly permettra aux enseignants d'être <strong>100 % autonomes</strong>, sans dépendre d'aucun cloud externe ni payer le moindre jeton.</p>"
                    },
                    {
                        q: "Quelles sont les différences avec les plateformes web classiques de correction ou les plateformes Cloud d'IA ?",
                        a: "<p><strong>Par rapport aux plateformes web classiques de correction :</strong> Les plateformes web traditionnelles possèdent de vrais atouts pour certains usages — collaboration web simultanée en temps réel sans fusion de fichiers, support très poussé des formulaires QCM à bulles et regroupement automatique (clustering) de réponses courtes. En revanche, elles n'incluent pas de pré-correction par IA multimodale sur les raisonnements manuscrits, n'offrent pas d'assistant IA pour concevoir vos barèmes, et vous laissent moins de contrôle sur vos données (stockées en clair sur des serveurs tiers). Gradaly peut s'utiliser en <strong>Mode 100 % Humain</strong> avec le même confort de grille par critères, tout en y ajoutant l'Assistant IA de barème, la pré-correction IA et un contrôle 100 % local sur vos données.</p><p><strong>Par rapport aux plateformes Cloud de correction IA émergentes :</strong> Ces plateformes imposent généralement un modèle d'IA unique sans transparence et revendent des « packs de crédits IA » avec une forte marge. Gradaly vous laisse le <strong>libre choix du modèle d'IA</strong> (Gemini, GPT, Claude, Mistral, OpenRouter ou un serveur gratuit de votre université / local) et ne facture <strong>0 % de marge sur l'IA</strong>.</p>"
                    },
                    {
                        q: "Où puis-je faire des suggestions d'amélioration ou signaler un bug ?",
                        a: "<p>Vos retours d'expérience, idées de fonctionnalités et signalements de bugs sont les bienvenus ! Vous pouvez ouvrir un ticket directement sur notre espace GitHub Issues ici : <a href=\"https://github.com/pschaus/gradaly-website/issues\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-indigo-600 font-bold hover:underline\">https://github.com/pschaus/gradaly-website/issues</a>.</p>"
                    }
                ]
            },

            // =========================================================================
            // MANUEL 2 : MODE ENTRAÎNEMENT & AUTO-ÉVALUATION QR (P1 à P5) — 100 % AUTONOME
            // =========================================================================
            {
                id: "practice-getting-started",
                guide: "practice",
                stepNumber: "P1",
                partHeader: "Manuel 2 — Mode Entraînement QR (Étudiant)",
                partColor: "teal",
                partBanner: {
                    kicker: "Manuel 2 • Produit 2 : Mode Entraînement & Auto-Évaluation QR",
                    title: "Guide Complet du Mode Entraînement QR : Auto-Évaluation Formative par l'Étudiant sur Smartphone",
                    desc: "Ce manuel 100 % autonome explique comment créer une feuille d'exercices PDF munie de QR codes pour que vos étudiants s'entraînent sur papier, photographient leur brouillon avec leur smartphone et reçoivent un feedback IA immédiat (sans aucune clé API requise sur portal.gradaly.io, ou avec leur propre clé Gemini personnelle)."
                },
                tag: "Mode Entraînement QR • Étape 1 — Principe & Création",
                badge: "Formatif • Entraînement Autonome Étudiant",
                shortTitle: "Principe & Création du Projet",
                title: "Principe du Mode Entraînement QR & Création d'un Projet d'Entraînement",
                subtitle: "Permettez à vos étudiants de s'entraîner librement sur papier avec un retour IA immédiat sur smartphone — sans ramasser une seule copie ni exposer votre clé API enseignant.",
                paragraphs: [
                    "<strong>L'objectif pédagogique du Mode Entraînement QR (badge <code>Entraînement</code>) :</strong> Pour réussir un examen écrit, les étudiants doivent s'entraîner à rédiger des démonstrations, calculs et raisonnements complets sur papier (séances d'exercices / TD, devoirs à domicile, annales d'examen blanc). Or, il est matériellement impossible pour un enseignant de ramasser et corriger chaque semaine des centaines de feuilles d'exercices. <strong>Le Mode Entraînement QR transforme n'importe quel sujet d'exercices PDF en tuteur d'auto-évaluation interactif :</strong><br>1. <strong>L'enseignant</strong> prépare sa feuille d'exercices PDF, définit les critères d'évaluation (et le corrigé type <code>Solutionnaire</code> éventuel), positionne des QR codes sur le PDF et publie un portail web statique chiffré.<br>2. <strong>L'étudiant</strong> imprime la feuille d'exercices (ou l'affiche à l'écran), résout l'exercice au stylo sur papier, <strong>scanne le QR code de la question avec son smartphone</strong>, prend en photo son brouillon manuscrit et reçoit <strong>instantanément un feedback formateur détaillé critère par critère</strong> !",
                    "<strong>Aucune clé API enseignant exposée — Relais IA Gradaly intégré ou Clé personnelle :</strong> Contrairement au Mode Examen où l'enseignant évalue les copies de sa promotion, dans un projet d'Entraînement <strong>il n'y a ni liste d'étudiants, ni copies scannées, ni clé API enseignant dans la publication</strong>. Lorsque le projet est publié sur <code>portal.gradaly.io</code>, les étudiants peuvent faire évaluer leur brouillon <strong>immédiatement sans saisir aucune clé API</strong> grâce au relais IA Gradaly intégré (idéal pour tous les élèves, y compris les mineurs de moins de 18 ans), ou saisir optionnellement leur propre clé API Google AI Studio (Gemini) dans leur navigateur.",
                    "<strong>Une interface épurée en 3 onglets :</strong> Depuis l'Écran d'accueil, cliquez sur <strong>Nouveau projet → Projet d'Entraînement (Auto-évaluation étudiant)</strong> (ou sur <strong>Créer projet de démo → Projet d'Entraînement (Auto-évaluation QR)</strong> pour explorer une séance complète de Trigonométrie en français ou en anglais). Le projet s'ouvre sur <strong>3 onglets dédiés</strong> : <code>1. Canevas &amp; Questions</code>, <code>2. Placement QR Codes</code> et <code>3. Publication Web</code>."
                ],
                screenshots: [
                    {
                        filePrefix: "01_welcome",
                        caption: "Écran d'accueil : Les projets d'Entraînement sont identifiés par le badge vert d'eau « Entraînement »"
                    },
                    {
                        filePrefix: "12_demo_types_modal",
                        caption: "Fenêtre de création de démo : Choisissez « Projet d'Entraînement (Auto-évaluation QR) » pour ouvrir une séance d'exercices QR complète"
                    }
                ],
                callouts: [
                    {
                        title: "Rédaction Papier + Caméra Smartphone",
                        desc: "Les étudiants continuent à rédiger de vraies mathématiques et démonstrations sur papier tout en bénéficiant d'un retour immédiat sur téléphone."
                    },
                    {
                        title: "Zéro Copie à Ramasser, Zéro Liste CSV",
                        desc: "Un projet d'Entraînement ne comporte ni onglet Étudiants ni onglet Copies : tout se passe en autonomie côté étudiant."
                    },
                    {
                        title: "Zéro Clé Requise sur portal.gradaly.io",
                        desc: "L'évaluation IA fonctionne immédiatement sans configuration sur portal.gradaly.io (avec possibilité optionnelle d'entrer une clé Gemini personnelle)."
                    },
                    {
                        title: "Démo Entraînement QR Intégrée",
                        desc: "Lancez la démo Entraînement QR en 1 clic depuis l'écran d'accueil pour tester immédiatement une fiche de 10 exercices avec solutionnaire."
                    }
                ]
            },
            {
                id: "practice-canvas-and-rubric",
                guide: "practice",
                stepNumber: "P2",
                partColor: "teal",
                tag: "Mode Entraînement QR • Étape 2 — Sujet PDF, Solutionnaire & Barème",
                badge: "Guide 100 % Autonome",
                shortTitle: "Sujet PDF, Solutionnaire & Critères",
                title: "Importer la Feuille d'Exercices PDF, le Corrigé Type & Concevoir le Barème Formatif",
                subtitle: "Découpez chaque exercice sur votre PDF vierge, importez votre Solutionnaire et créez vos critères d'auto-évaluation manuellement ou avec l'Assistant IA.",
                paragraphs: [
                    "Dans l'onglet <strong>1. Canevas &amp; Questions</strong> de votre projet d'Entraînement (notez la barre supérieure épurée à 3 onglets et l'absence de zone d'identification étudiant), vous préparez les exercices et le barème qui guideront l'IA lors de l'auto-évaluation de l'étudiant :",
                    "<strong>1. Importer le PDF d'exercices vierge (<code>Canevas</code>) &amp; Encadrer chaque question :</strong> Importez votre PDF d'énoncé et tracez un rectangle autour de chaque exercice (<code>Q1</code>, <code>Q2</code>, ...). <strong>Conseil essentiel :</strong> englobez l'énoncé imprimé de la question dans le rectangle ! En mode Entraînement, Gradaly découpe ce rectangle pour <strong>afficher l'énoncé de l'exercice sur l'écran du smartphone de l'étudiant</strong> et pour donner tout le contexte visuel à l'IA.",
                    "<strong>2. Importer le PDF Corrigé Type optionnel (<code>Solutionnaire</code>) :</strong> Utilisez la bascule <strong>Énoncé (Canevas) / Solutionnaire</strong> en haut du PDF pour importer un PDF contenant vos résolutions détaillées. Si le corrigé est rédigé sur le même canevas que l'énoncé vierge, les zones s'appliquent automatiquement ; si sa mise en page diffère, basculez sur la vue <em>Solutionnaire</em> et encadrez la solution correspondante pour chaque question. En mode Entraînement, le Solutionnaire remplit trois rôles :<br>• <strong>Aider l'Assistant IA de Barème</strong> à générer des critères précis.<br>• <strong>Servir de référence mathématique/conceptuelle à l'IA</strong> lorsqu'elle évalue la photo du brouillon de l'étudiant.<br>• <strong>Être débloqué et affiché visuellement sur le smartphone de l'étudiant</strong> après qu'il a soumis au moins une tentative manuscrite !",
                    "<strong>3. Définir les critères du barème (Purement Additif ou Purement Diminutif) :</strong><br>• Gradaly calcule <code>Score = Note de base + Σ (critères validés)</code>, borné entre <code>0</code> et <code>Score max</code>.<br>• Choisissez soit un <strong>barème purement additif</strong> (<code>Note de base = 0</code>, critères positifs <code>+1</code>, <code>+2</code> par étape réussie), soit un <strong>barème purement diminutif</strong> (<code>Note de base = Score max</code>, pénalités négatives <code>-0.5</code>, <code>-1</code>). Évitez de mélanger des points positifs et négatifs dans une même question.<br>• Utilisez le champ du bas (<strong>Consignes &amp; Logique de correction / Prompt IA</strong>) pour préciser vos consignes pédagogiques.",
                    "<strong>4. Utiliser l'Assistant IA de Barème (<code>Concevoir / Modifier avec l'IA</code>) :</strong> Cliquez sur <strong>Concevoir / Modifier avec l'IA</strong> au-dessus de la liste des critères pour générer automatiquement une grille de critères formative à partir de l'énoncé et du solutionnaire, puis affinez-la par chat."
                ],
                screenshots: [
                    {
                        filePrefix: "13a_practice_questions",
                        caption: "Mode Entraînement — Onglet 1. Canevas & Questions : Barre supérieure dédiée à 3 onglets (Canevas & Questions | Placement QR Codes | Publication Web), découpage des exercices, critères formatifs et bascule Énoncé / Solutionnaire"
                    },
                    {
                        filePrefix: "03_rubric_assistant",
                        caption: "Assistant IA de Barème : Co-concevez vos critères d'auto-évaluation et consignes IA en vous appuyant sur l'énoncé et le Solutionnaire"
                    }
                ],
                callouts: [
                    {
                        title: "Découpe de l'énoncé affichée sur Smartphone",
                        desc: "Le rectangle tracé sur le PDF Canevas est automatiquement découpé et affiché en haut de l'écran du téléphone de l'étudiant."
                    },
                    {
                        title: "Corrigé Type (Solutionnaire) intégré",
                        desc: "Fiabilise l'évaluation par l'IA et peut être révélé automatiquement à l'étudiant après son premier essai manuscrit."
                    },
                    {
                        title: "Barème Additif ou Diminutif Clair",
                        desc: "Des critères explicites étape par étape permettent à l'étudiant de comprendre immédiatement où se situe son erreur."
                    },
                    {
                        title: "Assistant IA de Barème inclus",
                        desc: "Générez en quelques secondes vos critères formatifs à partir du PDF d'exercices et du corrigé type."
                    }
                ]
            },
            {
                id: "practice-qr-placement",
                guide: "practice",
                stepNumber: "P3",
                partColor: "teal",
                tag: "Mode Entraînement QR • Étape 3 — Placement des QR Codes & PDF Imprimable",
                badge: "Inclus en Version Gratuite & Pro",
                shortTitle: "Placement QR & PDF Imprimable",
                title: "Positionner les QR Codes sur le PDF & Générer la Feuille d'Exercices Prête à Imprimer",
                subtitle: "Incrustez un QR code général (toute la fiche) et/ou des QR codes individuels par exercice directement dans les cadres de votre PDF.",
                paragraphs: [
                    "Ouvrez l'onglet <strong>2. Placement QR Codes</strong> pour définir l'emplacement des QR codes d'auto-évaluation sur votre feuille d'exercices :",
                    "<strong>1. QR Code Général vs QR Codes par Question :</strong><br>• <strong>QR Général (Tout le sujet) :</strong> Placé par défaut en haut de la Page 1. Lorsqu'un étudiant le scanne, son téléphone ouvre le portail sur le sommaire complet des exercices.<br>• <strong>QR Codes par Question (<code>QR Q1</code>, <code>QR Q2</code>, ...) :</strong> Incrustés directement dans le cadre de chaque exercice sur le PDF. Lorsqu'un étudiant scanne <code>QR Q1</code>, son smartphone s'ouvre <strong>directement sur la Question 1</strong> (<code>?q=Q1</code>), prêt à photographier sa résolution !",
                    "<strong>2. Glisser-déposer à la souris &amp; Alignement en 1 clic dans les coins :</strong> Cliquez sur une question dans la liste de gauche pour afficher sa page. Déplacez librement chaque QR code à la souris sur la page PDF afin de ne masquer aucune formule ni figure, ou cliquez sur <code>Coin haut-droit</code>, <code>Coin haut-gauche</code> ou <code>Coin bas-droit</code>. L'icône œil permet d'activer ou masquer chaque QR code.",
                    "<strong>3. Télécharger le sujet PDF avec QR Codes prêt à imprimer :</strong> Cliquez sur <strong>Télécharger le sujet PDF avec QR Codes prêt à imprimer</strong>. Gradaly génère un PDF vectoriel haute définition intégrant tous vos QR codes actifs, prêt à être distribué en TD ou déposé sur Moodle."
                ],
                screenshots: [
                    {
                        filePrefix: "13_practice_qr",
                        caption: "Mode Entraînement — Onglet 2. Placement QR Codes : Liste des QR codes à gauche, boutons d'alignement dans les coins et glisser-déposer interactif sur la Page 2 (QR Q1 et QR Q2)"
                    }
                ],
                callouts: [
                    {
                        title: "Lien direct par exercice (?q=Q1)",
                        desc: "Scanner le QR code d'un exercice ouvre directement cette question précise sur le smartphone de l'étudiant."
                    },
                    {
                        title: "QR Codes pérennes si le barème évolue",
                        desc: "Même si vous ajustez un critère plus tard et mettez à jour la publication en ligne, les QR codes déjà imprimés restent 100 % valides !"
                    }
                ]
            },
            {
                id: "practice-publish-and-student",
                guide: "practice",
                stepNumber: "P4",
                partColor: "teal",
                tag: "Mode Entraînement QR • Étape 4 — Publication du Site Web (Gradaly Pro) & App Étudiant",
                badge: "Publication réservée à Gradaly Pro",
                shortTitle: "Publication Web (Pro) & App Étudiant",
                title: "Publication du Site Web d'Entraînement (Gradaly Pro) & Parcours de l'Étudiant",
                subtitle: "Tandis que la version gratuite permet de créer votre projet et le design de votre PDF avec QR codes, Gradaly Pro débloque la publication du site web d'entraînement étudiant (en ligne ou en .zip).",
                paragraphs: [
                    "Dans l'onglet <strong>3. Publication Web</strong>, vous paramétrez le comportement pédagogique de l'application mobile et publiez le site web d'entraînement étudiant :",
                    "<strong>1. Options pédagogiques (Avant et Après l'essai de l'étudiant) :</strong><br>• <strong>Afficher les critères du barème avant la 1re tentative :</strong> Choisissez si l'étudiant voit d'emblée la grille des critères attendus ou si elle reste masquée jusqu'à son premier essai.<br>• <strong>Afficher la justification détaillée de l'évaluation IA :</strong> Affiche l'explication critère par critère en plus du conseil formateur.<br>• <strong>Révéler le corrigé type (<code>Solutionnaire</code>) après au moins une tentative :</strong> Garde votre corrigé de référence verrouillé tant que l'étudiant n'a pas soumis une première photo de son travail manuscrit !",
                    "<strong>2. Prévisualiser dans le Simulateur Smartphone intégré :</strong> Cliquez sur le bouton <strong>Tester l'application étudiant (Simulateur)</strong> en haut à droite pour prévisualiser l'interface mobile directement dans Gradaly.",
                    "<strong>3. Publier le site web d'entraînement sur le Cloud ou Exporter en <code>.zip</code> autonome (Gradaly Pro) :</strong> Tandis que la version non-Pro permet de créer votre projet et le design de votre sujet PDF avec QR codes, <strong>Gradaly Pro</strong> donne accès à la publication du site web d'entraînement : cliquez sur <strong>Publier en 1 clic sur portal.gradaly.io</strong> (chiffré côté client en <strong>AES-256-GCM</strong>, avec choix de la durée de maintien en ligne : <strong>60 jours</strong>, <strong>180 jours / 1 semestre</strong> ou <strong>365 jours / 1 an</strong>) ou cliquez sur <strong>Exporter en site web statique autonome (.zip)</strong> pour l'héberger sur votre propre serveur universitaire.",
                    "<strong>4. Le parcours de l'étudiant sur son smartphone :</strong><br>• L'étudiant scanne le QR code imprimé sur sa feuille d'exercices.<br>• Lorsque le projet est hébergé sur <code>portal.gradaly.io</code>, l'évaluation IA fonctionne <strong>immédiatement sans saisir aucune clé API</strong> (via le relais IA Gradaly intégré). Optionnellement — ou dans le cas d'un export <code>.zip</code> hébergé sur un serveur tiers — l'étudiant peut toucher le bouton <strong>Clé perso</strong> pour coller sa propre <strong>clé API Google AI Studio (Gemini)</strong> (mémorisée localement dans le navigateur de son téléphone).<br>• Il appuie sur <strong>Prendre en photo ma copie</strong>, photographie son brouillon papier et lance <strong>Évaluer ma réponse avec l'IA</strong> pour découvrir sa note estimée, les critères validés, le feedback mathématique en LaTeX et le corrigé type débloqué !",
                    "<strong>5. Exemple interactif en direct (Sujet PDF imprimable &amp; Portail Étudiant) :</strong><br>• 🇫🇷 <a href=\"practice_examples_pdfs/Sujet_QR_Demo_Practice_FR.pdf\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">Voir le sujet PDF avec QR Codes (Démo FR)</a> &nbsp;|&nbsp; <a href=\"https://portal.gradaly.io/?e=ex_f511e8d3dad53c82&id=practice#k=6p9EEDYpJx0TMPq7vWBK8h8oeuplQq07tGq56yQPWiM\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">Ouvrir le Portail d'Entraînement Étudiant en direct (Démo FR)</a>"
                ],
                screenshots: [
                    {
                        filePrefix: "14_practice_publish",
                        caption: "Mode Entraînement — Onglet 3. Publication Web : Options pédagogiques, déblocage du Solutionnaire après essai, durée de disponibilité (60/180/365 j) et publication Cloud / ZIP (Gradaly Pro)"
                    },
                    {
                        filePrefix: "15_practice_student_portal",
                        caption: "Simulateur Smartphone Étudiant intégré : Prévisualisez l'application mobile où l'étudiant photographie son brouillon et reçoit son feedback immédiat"
                    }
                ],
                callouts: [
                    {
                        title: "Simulateur Smartphone intégré (Gratuit)",
                        desc: "Testez gratuitement vos exercices, votre barème et l'interface mobile étudiant directement dans Gradaly."
                    },
                    {
                        title: "Publication Cloud ou ZIP statique (Gradaly Pro)",
                        desc: "Publiez en 1 clic en AES-256-GCM sur portal.gradaly.io (60/180/365 jours) ou exportez une archive web .zip autonome."
                    },
                    {
                        title: "Relais IA intégré ou Clé personnelle",
                        desc: "Sur portal.gradaly.io, les étudiants s'auto-évaluent immédiatement sans clé API, ou peuvent saisir leur propre clé Gemini."
                    },
                    {
                        title: "Solutionnaire débloqué après l'effort",
                        desc: "L'étudiant doit soumettre la photo d'une première tentative sur papier avant de débloquer le corrigé type de l'enseignant."
                    }
                ]
            },
            {
                id: "practice-faq",
                guide: "practice",
                isFaq: true,
                stepNumber: "FAQ",
                partColor: "teal",
                tag: "Foire Aux Questions (FAQ)",
                badge: "Chiffrement, Accès, Relais IA & Confidentialité",
                shortTitle: "Foire Aux Questions",
                title: "Foire Aux Questions (FAQ)",
                subtitle: "Réponses aux questions sur le chiffrement du site d'entraînement, l'accès au contenu, le traitement des photos et clés API, et l'anonymat des essais.",
                paragraphs: [
                    "Retrouvez ci-dessous les réponses aux questions les plus fréquentes concernant le Mode Entraînement &amp; Auto-évaluation QR de Gradaly."
                ],
                faqs: [
                    {
                        q: "Pourquoi est-ce que le site d'entraînement est crypté (chiffré) ?",
                        a: "<p><strong>Pour protéger la propriété intellectuelle de l'enseignant :</strong> Ni Gradaly, ni personne n'a accès au contenu publié — c'est-à-dire au questionnaire, au corrigé type (<code>Solutionnaire</code>) ou aux critères d'évaluation de l'enseignant. Tout ce contenu constitue la <strong>propriété intellectuelle de l'enseignant</strong>.</p><p>Avant même l'envoi sur <code>portal.gradaly.io</code>, Gradaly chiffre l'intégralité des exercices, du solutionnaire et des critères localement sur l'ordinateur de l'enseignant en <strong><code>AES-256-GCM</code></strong>. La clé secrète de déchiffrement (<code>#k=...</code>) figure uniquement dans le fragment d'URL (et dans les QR codes) après le symbole <code>#</code>, qui n'est jamais transmis au serveur. Le serveur n'héberge donc que des fichiers binaires chiffrés illisibles.</p>"
                    },
                    {
                        q: "Qui a accès à l'application d'entraînement ?",
                        a: "<p><strong>Uniquement les personnes disposant du lien ou des QR codes avec qui l'enseignant a décidé de les partager</strong> ont accès à l'application et peuvent déchiffrer les exercices dans leur navigateur.</p><p>L'enseignant peut dès lors communiquer sa feuille d'exercices PDF (ou le lien) <strong>en toute confidentialité avec ses élèves</strong> (par exemple via l'intranet de son cours Moodle/Teams ou sur papier en séance d'exercices) sans que cela ne soit public sur Internet. Cela le devient évidemment si cette information (le lien ou le PDF avec QR codes) est partagée en dehors.</p>"
                    },
                    {
                        q: "Faut-il une clé API et que deviennent les photos envoyées par l'étudiant ?",
                        a: "<p>Selon le mode utilisé par l'étudiant, deux fonctionnements sont possibles — garantissant dans les deux cas <strong>un anonymat total et zéro stockage des images</strong> :</p><p><strong>1. Mode par défaut sur <code>portal.gradaly.io</code> (Aucune clé API requise) :</strong><ul><li>Lorsque le projet d'Entraînement est déployé chez Gradaly (<code>portal.gradaly.io</code>) et que l'utilisateur n'entre pas sa propre clé API, l'évaluation passe par le <strong>relais IA sécurisé de Gradaly</strong> (ce qui permet une utilisation immédiate par tous les élèves, y compris les mineurs de moins de 18 ans, sans créer de compte).</li><li>Dans ce cas, la photo du brouillon de l'étudiant (accompagnée de la consigne d'évaluation de la question) <strong>transite bien par le serveur Gradaly</strong> le temps d'interroger le modèle Gemini Flash.</li><li><strong>Garantie stricte de non-stockage :</strong> L'image n'est <strong>jamais stockée sur disque ni dans le cloud</strong>, l'essai reste <strong>100 % anonyme</strong>, et l'image est <strong>immédiatement détruite de la mémoire vive</strong> dès que la réponse de l'IA est renvoyée au téléphone de l'étudiant.</li></ul></p><p><strong>2. Mode Clé API personnelle (Optionnel sur <code>portal.gradaly.io</code>, ou sur un export <code>.zip</code> autonome) :</strong><ul><li>Si l'étudiant saisit sa propre clé API Google Gemini via le bouton <em>Clé perso</em>, cette clé est stockée <strong>strictement en local dans la mémoire du navigateur (<code>localStorage</code>) de son appareil</strong> (elle n'est jamais envoyée à Gradaly ni visible par l'enseignant).</li><li>Avec une clé personnelle, le navigateur du téléphone communique <strong>directement en HTTPS chiffré avec le serveur officiel de l'API Google Gemini</strong>, sans même transiter par le serveur Gradaly.</li></ul></p>"
                    },
                    {
                        q: "Est-ce que l'enseignant sait si un étudiant utilise l'application ?",
                        a: "<p><strong>Non — le Mode Entraînement QR est 100 % anonyme et autonome.</strong> Il n'y a ni compte étudiant, ni liste nominative, ni remontée de statistiques ou de photos vers l'enseignant.</p><p>L'enseignant ne sait pas quel étudiant a scanné un QR code, combien d'essais il a effectués, ni quelle note il a obtenue. Ce choix pédagogique garantit aux étudiants un <strong>espace d'entraînement bienveillant et sans pression</strong>, où ils peuvent chercher sur papier, se tromper et recommencer librement pour progresser avant l'examen.</p>"
                    },
                    {
                        q: "Que permet la version non-Pro (gratuite) par rapport à Gradaly Pro en Mode Entraînement QR ?",
                        a: "<p><strong>Version non-Pro (gratuite) :</strong> Vous permet de créer votre projet d'entraînement, d'importer votre sujet PDF et votre solutionnaire, de concevoir vos critères (manuellement ou avec l'Assistant IA), de positionner les QR codes, de télécharger le <strong>design de votre PDF prêt à imprimer avec QR codes</strong>, et de tester l'application dans le <strong>Simulateur Smartphone intégré</strong>.</p><p><strong>Gradaly Pro :</strong> Vous donne accès à la <strong>publication du site web d'entraînement</strong> à destination des étudiants — soit en 1 clic sur le cloud chiffré <code>portal.gradaly.io</code> (pour 60, 180 ou 365 jours), soit sous forme d'archive web statique <code>.zip</code> autonome à héberger sur le serveur de votre université.</p>"
                    },
                    {
                        q: "Que se passe-t-il si je modifie un critère du barème après avoir distribué ou imprimé les feuilles avec QR codes ?",
                        a: "<p><strong>Les QR codes déjà imprimés restent 100 % valides !</strong> Chaque projet d'entraînement conserve un identifiant et une clé de chiffrement permanents. Si vous corrigez une coquille ou affinez un critère dans Gradaly après avoir distribué le PDF, cliquez simplement sur <strong>Mettre à jour la publication existante</strong> dans l'onglet <em>3. Publication Web</em> : les étudiants scannant leurs feuilles papier bénéficieront immédiatement du barème mis à jour.</p>"
                    }
                ]
            }
        ]
    }
};

function manualApp() {
    return {
        lang: 'en',
        activeGuide: 'exam',
        search: '',
        t: manualTranslations.en,
        init() {
            const urlParams = new URLSearchParams(window.location.search);
            const langParam = urlParams.get('lang');
            if (langParam === 'fr' || langParam === 'en') {
                this.lang = langParam;
            } else {
                const navLang = navigator.language || navigator.userLanguage || '';
                if (navLang.toLowerCase().startsWith('fr')) {
                    this.lang = 'fr';
                }
            }
            const modeParam = urlParams.get('mode');
            if (modeParam === 'exam' || modeParam === 'practice' || modeParam === 'reference' || modeParam === 'all') {
                this.activeGuide = modeParam;
            }
            this.t = manualTranslations[this.lang];
        },
        toggleLang() {
            this.lang = this.lang === 'en' ? 'fr' : 'en';
            this.t = manualTranslations[this.lang];
        },
        selectGuide(guide) {
            this.activeGuide = guide;
            this.search = '';
        },
        get filteredSections() {
            const q = this.search.trim().toLowerCase();
            if (q) {
                return this.t.sections.filter((sec) => {
                    const haystack = [
                        sec.title,
                        sec.subtitle,
                        sec.shortTitle,
                        ...(sec.paragraphs || []),
                        ...(sec.callouts || []).map((c) => c.title + ' ' + c.desc),
                        ...(sec.providerGuides || []).map((p) => p.name + ' ' + p.desc + ' ' + (p.steps || []).join(' ')),
                        ...(sec.faqs || []).map((f) => f.q + ' ' + f.a),
                        sec.tip ? sec.tip.title + ' ' + sec.tip.text : ''
                    ]
                        .join(' ')
                        .toLowerCase();
                    return haystack.includes(q);
                });
            }
            if (this.activeGuide === 'all') {
                return this.t.sections;
            }
            return this.t.sections.filter((sec) => sec.guide === this.activeGuide);
        }
    };
}
