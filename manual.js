const manualTranslations = {
    en: {
        badge_manual: "User Manual (2-in-1)",
        back_home: "Back to Website",
        download_btn: "Download Gradaly",
        hero_pill: "2-in-1 Desktop Application • Complete User Manual v4.0.0",
        hero_title: "Gradaly User Manual",
        hero_subtitle: "Grade Smarter, not Harder. Gradaly is a 2-in-1 application offering two independent workflows: (1) Summative Exam Grading by the teacher, and (2) Formative Practice QR Self-Assessment by the student. Select the guide matching your workflow below:",
        search_placeholder: "Search across all guides (e.g. exam, practice QR, rubric, OCR, API key, FAQ)...",
        card_exam_badge: "Product 1 • Summative (Teacher)",
        card_exam_chapters: "Chapters E1–E7",
        card_exam_title: "Manual 1: Exam Grading Mode (By the Teacher)",
        card_exam_desc: "For midterms, finals, and graded assignments: scan student booklets, match identities 100% offline via OCR, grade manually or with AI/team collaboration, and return annotated copies.",
        card_practice_badge: "Product 2 • Formative (Student)",
        card_practice_chapters: "Chapters P1–P4",
        card_practice_title: "Manual 2: Practice & Self-Assessment QR Mode (By the Student)",
        card_practice_desc: "For problem sets, tutorials, and mock exams: stamp QR codes onto your exercise PDF so students solve on paper, scan with their smartphone, and get instant formative AI feedback (BYOK, 0 € for the teacher).",
        filter_label: "Display:",
        filter_exam: "1. Exam Guide (E1–E7)",
        filter_practice: "2. Practice QR Guide (P1–P4)",
        filter_reference: "AI API Keys & FAQ (R1–R2)",
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
            // GUIDE 1: EXAM GRADING MODE (E1 to E7) — 100% SELF-CONTAINED
            // =========================================================================
            {
                id: "exam-getting-started",
                guide: "exam",
                stepNumber: "E1",
                partHeader: "Manual 1 — Exam Grading Mode (Teacher)",
                partColor: "indigo",
                partBanner: {
                    kicker: "Manual 1 • Product 1: Summative Exam Grading (Chapters E1–E7)",
                    title: "Complete Guide to Exam Grading by the Teacher (100% Human, AI-Assisted & Team Mode)",
                    desc: "Self-contained guide for collecting scanned student booklets, matching identities offline, grading with a structured rubric, and returning results."
                },
                tag: "Exam Mode • Step 1 — Creating an Exam Project",
                badge: "100% Human or AI-Assisted",
                shortTitle: "E1. Creating an Exam Project",
                title: "Creating an Exam Grading Project & 100% Human vs. AI Workflows",
                subtitle: "Start a new Exam project (or launch the 20-copy Exam Demo) to evaluate scanned student booklets on your computer.",
                paragraphs: [
                    "<strong>What is an Exam Grading Project (<code>Exam</code> badge)?</strong> An Exam project is designed for summative or graded assessments (midterms, finals, quizzes, graded homework) where the teacher collects student papers, scans them into PDFs, and grades the cohort. It provides <strong>6 dedicated workflow tabs</strong> in the top bar: <code>1. Canvas &amp; Questions</code>, <code>2. Students</code>, <code>3. Copies</code>, <code>4. Matching</code>, <code>5. Grading</code>, and <code>6. Summary</code>.",
                    "<strong>100% Human Mode or AI-Assisted Mode:</strong> You do <strong>not</strong> need an AI API key to grade an exam in Gradaly. Out of the box, Gradaly works in <strong>100% Human Mode</strong> with rapid keyboard shortcuts (<code>1–9</code> to toggle criteria, <code>J</code>/<code>K</code> to navigate between students), dynamic score recalculation across the entire cohort whenever you adjust criterion weights, and rich Markdown &amp; KaTeX feedback. Whenever you wish, you can connect an AI API key (see section <code>R1</code>) to unlock the <strong>AI Rubric Assistant</strong> and <strong>Multimodal AI Pre-Grading</strong> while always keeping the final human decision.",
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
                shortTitle: "E2. Canvas, ID Zone & Criteria",
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
                shortTitle: "E3. AI Rubric Assistant",
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
                shortTitle: "E4. Roster, Copies & OCR Matching",
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
                shortTitle: "E5. Manual & AI-Assisted Grading",
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
                shortTitle: "E6. Team Share & Merge (PRO)",
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
                shortTitle: "E7. Statistics, PDF & Exam Web Portal",
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

            // =========================================================================
            // GUIDE 2: PRACTICE & SELF-ASSESSMENT QR MODE (P1 to P4) — 100% SELF-CONTAINED
            // =========================================================================
            {
                id: "practice-getting-started",
                guide: "practice",
                stepNumber: "P1",
                partHeader: "Manual 2 — Practice & Self-Assessment QR Mode (Student)",
                partColor: "teal",
                partBanner: {
                    kicker: "Manual 2 • Product 2: Formative Practice QR Mode (Chapters P1–P4)",
                    title: "Complete Guide to Autonomous Student Self-Assessment via Printable QR Worksheets",
                    desc: "100% self-contained guide: design a PDF exercise worksheet with embedded QR codes so students solve on paper, scan with their smartphone, and receive instant formative AI feedback using their own API key (BYOK — 0 € for the teacher)."
                },
                tag: "Practice QR Mode • Step 1 — Concept & Project Creation",
                badge: "Formative • Autonomous Student Training",
                shortTitle: "P1. Concept & Creating a Practice Project",
                title: "How Practice QR Mode Works & Creating a Practice Project",
                subtitle: "Give your students unlimited paper-based training with instant AI feedback on smartphone — without collecting a single copy or paying a single cent in API tokens.",
                paragraphs: [
                    "<strong>The Pedagogical Goal of Practice QR Mode (<code>Practice</code> badge):</strong> Before a midterm or final exam, students need to practice solving problems by hand on paper (tutorials, problem sets, homework, past exam papers). However, teachers rarely have the time to collect and grade hundreds of weekly practice sheets. <strong>Practice QR Mode turns any PDF exercise sheet into an interactive self-assessment tutor:</strong><br>1. <strong>The Teacher</strong> prepares the PDF exercise sheet, defines the grading criteria (and optional Reference Solution <code>Solutionnaire</code>), places QR codes on the PDF, and publishes an encrypted static web portal.<br>2. <strong>The Student</strong> prints the PDF worksheet (or views it on tablet/screen), writes their mathematical derivations or essay answer on paper, <strong>scans the question's QR code with their smartphone</strong>, takes a photo of their handwritten work, and receives <strong>immediate, criterion-by-criterion formative AI feedback</strong>!",
                    "<strong>Why It Costs 0 € to the Teacher (100% Static &amp; BYOK Architecture):</strong> Unlike Exam Mode where the teacher runs AI grading on collected copies, in Practice Mode <strong>there are no student rosters, no scanned copies, and no teacher API keys in the published portal</strong>. Instead, each student enters their own personal API key once on their smartphone (<strong>Bring Your Own Key — BYOK</strong>, such as a <strong>free Google AI Studio Gemini key</strong>). The student's mobile browser communicates directly with the AI provider.",
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
                        title: "0 € Token Cost for the Teacher (BYOK)",
                        desc: "Students use their own free Google AI Studio (Gemini) key on their phone. Even 1,000 student attempts cost 0 € to the teacher."
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
                shortTitle: "P2. Worksheet PDF, Solution & Criteria",
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
                shortTitle: "P3. QR Placement & Printable PDF",
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
                tag: "Practice QR Mode • Step 4 — Simulator, Web Publication & Student App",
                badge: "Free Simulator • Gradaly Pro Publication • BYOK",
                shortTitle: "P4. Simulator, Web Publish (Pro) & Student App",
                title: "Smartphone Simulator (Free), Zero-Knowledge Web Publication (Pro) & The Student Experience",
                subtitle: "Configure pedagogical visibility rules, test for free in the built-in Smartphone Simulator, and publish online or as a static .zip with Gradaly Pro.",
                paragraphs: [
                    "In the <strong>3. Web Publication</strong> tab, you configure the pedagogical behavior of the mobile app, test it in the simulator, and publish it:",
                    "<strong>1. Pedagogical Visibility Options:</strong><br>• <strong>Show rubric criteria before the 1st attempt:</strong> Let students see the expected steps upfront, or keep criteria hidden until they submit their first photo.<br>• <strong>Show detailed AI evaluation justification:</strong> Display criterion-by-criterion explanations alongside the formative feedback.<br>• <strong>Reveal the Reference Solution (<code>Solutionnaire</code>) after at least one attempt:</strong> Keep your worked-out model solution locked until the student submits an initial handwritten attempt!",
                    "<strong>2. Test for Free in the Built-in Smartphone Simulator:</strong> Click <strong>Test Student Web App (Simulator)</strong> at the top right of the banner. Even in the <strong>Free Community Edition</strong>, you can preview and test the exact mobile interface inside Gradaly.",
                    "<strong>3. Publish Online in 1 Click or Export Static <code>.zip</code> (Gradaly Pro):</strong> With <strong>Gradaly Pro</strong>, click <strong>Publish in 1 click to portal.gradaly.io</strong> (encrypted client-side with <strong>AES-256-GCM</strong>, with a selectable retention duration of <strong>60 days</strong>, <strong>180 days / 1 semester</strong>, or <strong>365 days / 1 year</strong>) or click <strong>Export as standalone static website (.zip)</strong> to host on your own university server.",
                    "<strong>4. Step-by-Step Student Experience on Smartphone (BYOK — 0 € for the Teacher):</strong><br>• The student scans the QR code on their paper worksheet.<br>• On their first visit, they tap the <strong>API Key</strong> banner and follow the built-in 30-second guide to paste a <strong>free Google AI Studio (Gemini) API key</strong> (saved locally in their phone browser).<br>• They tap <strong>Take a photo of my work</strong>, photograph their handwritten solution on paper, and tap <strong>Evaluate my answer with AI</strong> to receive their score, validated criteria, LaTeX math feedback, and the unlocked Reference Solution!",
                    "<strong>5. Live Interactive Example (Printable PDF Worksheet &amp; Student Portal):</strong><br>• 🇬🇧 <a href=\"practice_examples_pdfs/Sujet_QR_Demo_Practice_EN.pdf\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">View Printable PDF Worksheet with QR Codes (Demo EN)</a> &nbsp;|&nbsp; <a href=\"https://portal.gradaly.io/?e=ex_7c576e0a7ff4729b&id=practice#k=fOTpaHBSuaFzzdN7AJYjSF_BKMgKaYcGQj6lyYljH10\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">Open Live Student Practice Portal (Demo EN)</a><br>• 🇫🇷 <a href=\"practice_examples_pdfs/Sujet_QR_Demo_Practice_FR.pdf\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">View Printable PDF Worksheet with QR Codes (Demo FR)</a> &nbsp;|&nbsp; <a href=\"https://portal.gradaly.io/?e=ex_f511e8d3dad53c82&id=practice#k=6p9EEDYpJx0TMPq7vWBK8h8oeuplQq07tGq56yQPWiM\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">Open Live Student Practice Portal (Demo FR)</a>"
                ],
                screenshots: [
                    {
                        filePrefix: "14_practice_publish",
                        caption: "Practice Mode — 3. Web Publication Tab: Pedagogical toggles, Solutionnaire unlock after 1st attempt, retention duration (60/180/365 days), and Gradaly Pro 1-click Cloud / ZIP publication"
                    },
                    {
                        filePrefix: "15_practice_student_portal",
                        caption: "Built-in Student Smartphone Simulator: Preview the mobile web app where students enter their free Gemini key (BYOK), snap a photo of their paper work, and get instant feedback"
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
                        title: "Free Google AI Studio Key for Students",
                        desc: "The mobile interface includes a built-in step-by-step tutorial showing students how to get a free Gemini API key in 30 seconds."
                    },
                    {
                        title: "Solutionnaire Unlocked After Effort",
                        desc: "Students must photograph and submit an initial paper attempt before the teacher's Reference Solution is revealed."
                    }
                ]
            },

            // =========================================================================
            // GUIDE 3: AI API KEYS & FAQ (R1 to R2)
            // =========================================================================
            {
                id: "ai-settings",
                guide: "reference",
                stepNumber: "R1",
                partHeader: "AI API Keys & FAQ",
                partColor: "slate",
                partBanner: {
                    kicker: "Reference & Configuration (Chapters R1–R2)",
                    title: "Setting Up AI API Keys, Choosing a Model & Frequently Asked Questions",
                    desc: "How to configure Gemini, OpenRouter, OpenAI, Anthropic, or a local/university server, plus answers to common questions."
                },
                tag: "Reference R1 — AI Configuration",
                badge: "OpenRouter • Gemini • GPT • Claude • Local",
                shortTitle: "R1. API Keys & Choosing an AI Model",
                title: "Setting Up Your API Key & Choosing the Right AI Model",
                subtitle: "Configure an API key in Settings (⚙️) to enable the AI Rubric Assistant and AI Pre-Grading with 0% markup.",
                paragraphs: [
                    "<strong>Recommended Vision Models:</strong> In our benchmarks on handwritten university exams (math, physics, engineering, economics, humanities), we achieve <strong>excellent results</strong> with <strong><code>Gemini 3.8 Flash</code></strong>, <strong><code>GPT 5-4 mini</code></strong>, <strong><code>Claude-Sonnet-5.5</code></strong>, and <strong><code>Mistral-Large 4.0</code></strong>.",
                    "<strong>Direct Provider Keys vs. OpenRouter:</strong> Create a key directly with <strong>Google Gemini</strong>, <strong>OpenAI</strong>, or <strong>Anthropic</strong> (which supports 50%-discounted asynchronous <strong>Batch / Flex mode</strong>), or use <strong>OpenRouter</strong> to access all providers from one unified balance.",
                    "<strong>0% Markup &amp; University/Local Server Support:</strong> Gradaly charges nothing on top of your provider's token cost — or <strong>0 € if you connect an institutional university LLM server or local Ollama model</strong>."
                ],
                screenshots: [
                    {
                        filePrefix: "11_settings_ai",
                        caption: "AI Settings Modal (⚙️): Configure Google Gemini, OpenRouter, OpenAI, Anthropic, or a Local / University server"
                    }
                ],
                providerGuides: [
                    {
                        name: "OpenRouter (Multi-Provider Gateway)",
                        tag: "All Models in 1 Key",
                        icon: "fas fa-network-wired",
                        desc: "One single account and API key lets you use <code>Gemini 3.8 Flash</code>, <code>GPT 5-4 mini</code>, <code>Claude-Sonnet-5.5</code>, and <code>Mistral-Large 4.0</code> (note: asynchronous Batch mode is not available on OpenRouter).",
                        steps: [
                            "Sign in at <strong>openrouter.ai</strong> and add a small prepaid balance ($5–$10) under <strong>Credits</strong>.",
                            "Go to <strong>Keys → Create Key</strong> and copy the key (<code>sk-or-v1-...</code>).",
                            "Paste it into Gradaly <strong>Settings (⚙️) → OpenRouter</strong>."
                        ],
                        url: "https://openrouter.ai/keys",
                        linkLabel: "Open OpenRouter API Keys Console"
                    },
                    {
                        name: "Google Gemini (Google AI Studio)",
                        tag: "Fast, Free Tier & Batch -50%",
                        icon: "fas fa-bolt",
                        desc: "Direct access to <code>Gemini 3.8 Flash</code> and Pro models with native 50%-discounted Batch API support (and a free tier for students in Practice QR mode).",
                        steps: [
                            "Sign in to <strong>Google AI Studio</strong> (<code>aistudio.google.com</code>).",
                            "Click <strong>Get API key → Create API key</strong> and copy the key (<code>AIzaSy...</code>).",
                            "Paste it into Gradaly <strong>Settings (⚙️) → Google Gemini</strong>."
                        ],
                        url: "https://aistudio.google.com/app/apikey",
                        linkLabel: "Open Google AI Studio API Keys"
                    },
                    {
                        name: "OpenAI (GPT Models)",
                        tag: "High Reasoning Precision",
                        icon: "fas fa-brain",
                        desc: "Direct access to <code>GPT 5-4 mini</code> and GPT vision models with 50% Batch API discounts.",
                        steps: [
                            "Log in to <strong>platform.openai.com</strong> and load a small prepaid balance under <strong>Settings → Billing</strong>.",
                            "Go to <strong>API keys → + Create new secret key</strong> (<code>sk-proj-...</code>).",
                            "Paste it into Gradaly <strong>Settings (⚙️) → OpenAI</strong>."
                        ],
                        url: "https://platform.openai.com/api-keys",
                        linkLabel: "Open OpenAI Platform API Keys"
                    },
                    {
                        name: "Anthropic (Claude Models)",
                        tag: "Nuanced Feedback & Proofs",
                        icon: "fas fa-feather-alt",
                        desc: "Direct access to <code>Claude-Sonnet-5.5</code> and Opus models for dense handwritten proofs.",
                        steps: [
                            "Sign in to <strong>console.anthropic.com</strong> and top up your balance under <strong>Billing</strong>.",
                            "Go to <strong>API Keys → Create Key</strong> (<code>sk-ant-...</code>).",
                            "Paste it into Gradaly <strong>Settings (⚙️) → Anthropic</strong>."
                        ],
                        url: "https://console.anthropic.com/settings/keys",
                        linkLabel: "Open Anthropic Console API Keys"
                    }
                ]
            },
            {
                id: "faq",
                guide: "reference",
                stepNumber: "R2",
                partColor: "slate",
                tag: "Reference R2 — Frequently Asked Questions",
                badge: "Architecture, Privacy & Best Practices",
                shortTitle: "R2. Frequently Asked Questions (FAQ)",
                title: "Frequently Asked Questions (FAQ)",
                subtitle: "Everything you need to know about Exam Mode vs. Practice QR Mode, AI costs, local files, and Zero-Knowledge encryption.",
                paragraphs: [
                    "Below you will find answers to the most frequent technical, pedagogical, and privacy questions about Gradaly."
                ],
                faqs: [
                    {
                        q: "What is the exact difference between Product 1 (Exam Mode) and Product 2 (Practice QR Mode)?",
                        a: "<p><strong>Product 1 — Exam Grading Mode (Summative, by the Teacher):</strong> You collect student papers after an exam, scan them, match student identities 100% offline via OCR, grade the cohort in Gradaly (100% manually or with your teacher API key), and export Excel gradebooks, annotated PDFs, or the Student Consultation Portal.</p><p><strong>Product 2 — Practice &amp; Self-Assessment QR Mode (Formative, by the Student):</strong> There are <strong>no student rosters and no copies collected by the teacher</strong>. You stamp QR codes onto a blank PDF exercise sheet and publish an encrypted static portal (with Gradaly Pro). Students solve the exercises on paper at home or in tutorials, scan the QR code with their smartphone, photograph their handwritten work, and get instant formative AI feedback using <strong>their own personal API key (BYOK — e.g. a free Google AI Studio key, costing 0 € to the teacher)</strong>.</p>"
                    },
                    {
                        q: "Should I trust AI grading for official exams?",
                        a: "<p><strong>At first, never blindly!</strong> For summative exams (Exam Mode), we strongly recommend calibrating your rubric on a few copies first, reviewing the AI's pre-grading, and <strong>validating every copy manually</strong> (turning its status badge from 🟢 AI to 🔵 Human). Because Gradaly returns the transparent criterion-by-criterion breakdown to students, students can also easily inspect and appeal any criterion if needed.</p>"
                    },
                    {
                        q: "How much does AI grading cost in Exam Mode vs. Practice QR Mode?",
                        a: "<p><strong>In Exam Mode:</strong> Using a fast multimodal model like <code>Gemini 3.8 Flash</code> in Flex/Batch mode (-50%), pre-grading a 6-page exam across <strong>400 students typically costs around $5 to $7 total</strong> (0% markup from Gradaly).</p><p><strong>In Practice QR Mode:</strong> It costs <strong>0 € to the teacher</strong> because each student uses their own personal API key (BYOK, such as Google AI Studio's free Gemini tier) directly on their smartphone.</p>"
                    },
                    {
                        q: "What resolution (DPI) should I use when scanning student copies in Exam Mode?",
                        a: "<p>Scan in <strong>Color at <code>150 DPI</code> to <code>200 DPI</code></strong>. Avoid 300 or 600 DPI (which makes files 5× heavier without improving AI vision accuracy) and avoid 1-bit black-and-white (which erases pencil strokes and colored diagrams).</p>"
                    },
                    {
                        q: "Where are my projects and API keys stored, and how does Zero-Knowledge Cloud encryption work?",
                        a: "<p>All projects live locally in <strong><code>Documents/Gradaly/</code></strong> on your computer, and your API keys stay in <code>~/.gradaly_settings.json</code>. Whenever you publish an Exam Portal, a Practice QR Portal, or a Team Share Link, all files are encrypted client-side on your machine using <strong><code>AES-256-GCM</code></strong> before upload. The decryption key (<code>#k=...</code>) remains inside the URL fragment after <code>#</code>, which browsers never send to the server.</p>"
                    },
                    {
                        q: "How long do published Exam Portals, Practice QR Portals, and Collaborative Links stay online?",
                        a: "<p>You choose the retention duration when publishing (with automatic purge upon expiration): <strong>30 to 365 days</strong> for Exam Consultation Portals, <strong>60, 180 (1 semester), or 365 days (1 year)</strong> for Practice QR Portals, and <strong>7, 14, or 30 days</strong> for Team Share Links. With Gradaly Pro, you can also export Exam and Practice portals as standalone <code>.zip</code> archives to host indefinitely on your own university server.</p>"
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
        hero_subtitle: "Mieux corriger, pour mieux former. Gradaly est un produit 2-en-1 réunissant deux outils distincts : (1) le Mode Examen Certificatif pour la correction de copies par l'enseignant, et (2) le Mode Entraînement QR Formatif pour l'auto-évaluation autonome par l'étudiant. Choisissez ci-dessous le manuel correspondant à votre besoin :",
        search_placeholder: "Rechercher dans les manuels (ex: examen, entraînement QR, barème, OCR, clé API, FAQ)...",
        card_exam_badge: "Produit 1 • Certificatif (Enseignant)",
        card_exam_chapters: "Chapitres E1 à E7",
        card_exam_title: "Manuel 1 : Mode Examen & Correction (Par l'Enseignant)",
        card_exam_desc: "Pour vos examens, partiels et interrogations : scannez les copies des étudiants, associez-les hors-ligne par OCR, corrigez (100 % humain, IA ou en équipe) et restituez les copies corrigées.",
        card_practice_badge: "Produit 2 • Formatif (Étudiant)",
        card_practice_chapters: "Chapitres P1 à P4",
        card_practice_title: "Manuel 2 : Mode Entraînement QR (Auto-évaluation par l'Étudiant)",
        card_practice_desc: "Pour vos TD, devoirs et examens blancs : incrustez des QR codes sur votre sujet PDF pour que l'étudiant rédige sur papier, scanne avec son smartphone et reçoive un feedback IA immédiat (BYOK, 0 € pour l'enseignant).",
        filter_label: "Afficher :",
        filter_exam: "1. Manuel Examen (E1–E7)",
        filter_practice: "2. Manuel Entraînement QR (P1–P4)",
        filter_reference: "Clés API IA & FAQ (R1–R2)",
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
            // MANUEL 1 : MODE EXAMEN (E1 à E7) — 100 % AUTONOME
            // =========================================================================
            {
                id: "exam-getting-started",
                guide: "exam",
                stepNumber: "E1",
                partHeader: "Manuel 1 — Mode Examen (Enseignant)",
                partColor: "indigo",
                partBanner: {
                    kicker: "Manuel 1 • Produit 1 : Évaluation Certificative & Correction d'Examen (Chapitres E1 à E7)",
                    title: "Guide Complet du Mode Examen : Correction par l'Enseignant (100 % Humain, Assisté par IA ou en Équipe)",
                    desc: "Ce manuel autonome couvre de A à Z la correction d'une promotion par l'enseignant : canevas, zone d'ID étudiant, barème, appariement OCR hors-ligne, console de notation et restitution."
                },
                tag: "Mode Examen • Étape 1 — Créer un Projet d'Examen",
                badge: "100 % Humain ou Assisté par IA",
                shortTitle: "E1. Créer un Projet d'Examen",
                title: "Créer un Projet d'Examen & Fonctionnement 100 % Humain ou Assisté par IA",
                subtitle: "Créez un projet Examen (ou lancez la démo Examen de 20 copies) pour corriger les copies scannées de votre promotion.",
                paragraphs: [
                    "<strong>Qu'est-ce qu'un Projet d'Examen (badge <code>Examen</code>) ?</strong> Ce premier mode est conçu pour les évaluations où l'enseignant ramasse et scanne les copies papier des étudiants (examens finaux, partiels, interrogations écrites). L'interface comporte <strong>6 onglets séquentiels</strong> dans la barre supérieure : <code>1. Canevas &amp; Questions</code>, <code>2. Étudiants</code>, <code>3. Copies</code>, <code>4. Appariement</code>, <code>5. Notation</code> et <code>6. Statistiques</code>.",
                    "<strong>Mode 100 % Humain ou Mode Assisté par IA :</strong> Vous n'avez <strong>pas besoin de clé API IA</strong> pour utiliser le Mode Examen. Par défaut, Gradaly fonctionne en <strong>Mode 100 % Humain</strong> avec navigation rapide au clavier (touches <code>1–9</code> pour cocher les critères, <code>J</code>/<code>K</code> pour changer d'étudiant), recalcul dynamique des notes de toute la promotion si vous ajustez le poids d'un critère, et commentaires riches en Markdown &amp; KaTeX. Si vous le souhaitez, connectez une clé API IA (voir chapitre <code>R1</code>) pour activer l'<strong>Assistant IA de Barème</strong> et la <strong>Pré-correction IA Multimodale</strong> tout en gardant systématiquement le dernier mot.",
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
                shortTitle: "E2. Canevas, Zone ID & Critères",
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
                shortTitle: "E3. Assistant IA de Barème",
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
                shortTitle: "E4. Étudiants, Copies & OCR",
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
                shortTitle: "E5. Notation Manuelle & IA",
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
                shortTitle: "E6. Partage Collaboratif & Fusion (PRO)",
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
                shortTitle: "E7. Statistiques, PDF & Portail Examen",
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

            // =========================================================================
            // MANUEL 2 : MODE ENTRAÎNEMENT & AUTO-ÉVALUATION QR (P1 à P4) — 100 % AUTONOME
            // =========================================================================
            {
                id: "practice-getting-started",
                guide: "practice",
                stepNumber: "P1",
                partHeader: "Manuel 2 — Mode Entraînement QR (Étudiant)",
                partColor: "teal",
                partBanner: {
                    kicker: "Manuel 2 • Produit 2 : Mode Entraînement & Auto-Évaluation QR (Chapitres P1 à P4)",
                    title: "Guide Complet du Mode Entraînement QR : Auto-Évaluation Formative par l'Étudiant sur Smartphone",
                    desc: "Ce manuel 100 % autonome explique comment créer une feuille d'exercices PDF munie de QR codes pour que vos étudiants s'entraînent sur papier, photographient leur brouillon avec leur smartphone et reçoivent un feedback IA immédiat (BYOK — 0 € pour l'enseignant)."
                },
                tag: "Mode Entraînement QR • Étape 1 — Principe & Création",
                badge: "Formatif • Entraînement Autonome Étudiant",
                shortTitle: "P1. Principe & Création du Projet",
                title: "Principe du Mode Entraînement QR & Création d'un Projet d'Entraînement",
                subtitle: "Permettez à vos étudiants de s'entraîner librement sur papier avec un retour IA immédiat sur smartphone — sans ramasser une seule copie ni payer le moindre jeton API.",
                paragraphs: [
                    "<strong>L'objectif pédagogique du Mode Entraînement QR (badge <code>Entraînement</code>) :</strong> Pour réussir un examen écrit, les étudiants doivent s'entraîner à rédiger des démonstrations, calculs et raisonnements complets sur papier (séances d'exercices / TD, devoirs à domicile, annales d'examen blanc). Or, il est matériellement impossible pour un enseignant de ramasser et corriger chaque semaine des centaines de feuilles d'exercices. <strong>Le Mode Entraînement QR transforme n'importe quel sujet d'exercices PDF en tuteur d'auto-évaluation interactif :</strong><br>1. <strong>L'enseignant</strong> prépare sa feuille d'exercices PDF, définit les critères d'évaluation (et le corrigé type <code>Solutionnaire</code> éventuel), positionne des QR codes sur le PDF et publie un portail web statique chiffré.<br>2. <strong>L'étudiant</strong> imprime la feuille d'exercices (ou l'affiche à l'écran), résout l'exercice au stylo sur papier, <strong>scanne le QR code de la question avec son smartphone</strong>, prend en photo son brouillon manuscrit et reçoit <strong>instantanément un feedback formateur détaillé critère par critère</strong> !",
                    "<strong>Pourquoi cela coûte 0 € à l'enseignant (Architecture 100 % Statique &amp; BYOK) :</strong> Contrairement au Mode Examen où l'enseignant corrige les copies de sa promotion, dans un projet d'Entraînement <strong>il n'y a ni liste d'étudiants, ni copies scannées, ni clé API enseignant dans la publication</strong>. Chaque étudiant saisit une seule fois sa propre clé API personnelle sur son smartphone (<strong>Bring Your Own Key — BYOK</strong>, par exemple une <strong>clé gratuite Google AI Studio Gemini</strong>). C'est le téléphone de l'étudiant qui interroge directement l'IA.",
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
                        title: "0 € de Frais IA pour l'Enseignant (BYOK)",
                        desc: "Les étudiants utilisent leur propre clé gratuite Google AI Studio (Gemini) sur leur téléphone — 0 € facturé à l'enseignant."
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
                shortTitle: "P2. Sujet PDF, Solutionnaire & Critères",
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
                shortTitle: "P3. Placement QR & PDF Imprimable",
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
                tag: "Mode Entraînement QR • Étape 4 — Simulateur, Publication Web & App Étudiant",
                badge: "Simulateur Gratuit • Publication Gradaly Pro • BYOK",
                shortTitle: "P4. Simulateur, Publication (Pro) & App Étudiant",
                title: "Simulateur Smartphone (Gratuit), Publication Web Zero-Knowledge (Pro) & Parcours de l'Étudiant",
                subtitle: "Configurez les options pédagogiques, testez gratuitement dans le Simulateur Smartphone intégré, et publiez en ligne ou en archive .zip avec Gradaly Pro.",
                paragraphs: [
                    "Dans l'onglet <strong>3. Publication Web</strong>, vous paramétrez le comportement pédagogique de l'application mobile, la testez dans le simulateur et la mettez en ligne :",
                    "<strong>1. Options pédagogiques (Avant et Après l'essai de l'étudiant) :</strong><br>• <strong>Afficher les critères du barème avant la 1re tentative :</strong> Choisissez si l'étudiant voit d'emblée la grille des critères attendus ou si elle reste masquée jusqu'à son premier essai.<br>• <strong>Afficher la justification détaillée de l'évaluation IA :</strong> Affiche l'explication critère par critère en plus du conseil formateur.<br>• <strong>Révéler le corrigé type (<code>Solutionnaire</code>) après au moins une tentative :</strong> Garde votre corrigé de référence verrouillé tant que l'étudiant n'a pas soumis une première photo de son travail manuscrit !",
                    "<strong>2. Tester gratuitement dans le Simulateur Smartphone intégré :</strong> Cliquez sur le bouton <strong>Tester l'application étudiant (Simulateur)</strong> en haut à droite. Même dans l'<strong>Édition Communautaire Gratuite</strong>, vous pouvez tester l'intégralité de l'interface mobile directement dans Gradaly.",
                    "<strong>3. Publier en 1 clic sur le Cloud ou Exporter en <code>.zip</code> autonome (Gradaly Pro) :</strong> Avec <strong>Gradaly Pro</strong>, cliquez sur <strong>Publier en 1 clic sur portal.gradaly.io</strong> (chiffré côté client en <strong>AES-256-GCM</strong>, avec choix de la durée de maintien en ligne : <strong>60 jours</strong>, <strong>180 jours / 1 semestre</strong> ou <strong>365 jours / 1 an</strong>) ou cliquez sur <strong>Exporter en site web statique autonome (.zip)</strong> pour l'héberger sur votre propre serveur universitaire.",
                    "<strong>4. Le parcours de l'étudiant sur son smartphone (BYOK — 0 € pour l'enseignant) :</strong><br>• L'étudiant scanne le QR code imprimé sur sa feuille d'exercices.<br>• Lors de sa 1re visite, il touche le bandeau <strong>Clé API</strong> et suit le mini-guide intégré de 30 secondes pour coller une <strong>clé API gratuite Google AI Studio (Gemini)</strong> (mémorisée localement dans le navigateur de son téléphone).<br>• Il appuie sur <strong>Prendre en photo ma copie</strong>, photographie son brouillon papier et lance <strong>Évaluer ma réponse avec l'IA</strong> pour découvrir sa note estimée, les critères validés, le feedback mathématique en LaTeX et le corrigé type débloqué !",
                    "<strong>5. Exemple interactif en direct (Sujet PDF imprimable &amp; Portail Étudiant) :</strong><br>• 🇫🇷 <a href=\"practice_examples_pdfs/Sujet_QR_Demo_Practice_FR.pdf\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">Voir le sujet PDF avec QR Codes (Démo FR)</a> &nbsp;|&nbsp; <a href=\"https://portal.gradaly.io/?e=ex_f511e8d3dad53c82&id=practice#k=6p9EEDYpJx0TMPq7vWBK8h8oeuplQq07tGq56yQPWiM\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">Ouvrir le Portail d'Entraînement Étudiant en direct (Démo FR)</a><br>• 🇬🇧 <a href=\"practice_examples_pdfs/Sujet_QR_Demo_Practice_EN.pdf\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">Voir le sujet PDF avec QR Codes (Démo EN)</a> &nbsp;|&nbsp; <a href=\"https://portal.gradaly.io/?e=ex_7c576e0a7ff4729b&id=practice#k=fOTpaHBSuaFzzdN7AJYjSF_BKMgKaYcGQj6lyYljH10\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-teal-700 font-bold underline hover:text-teal-900\">Ouvrir le Portail d'Entraînement Étudiant en direct (Démo EN)</a>"
                ],
                screenshots: [
                    {
                        filePrefix: "14_practice_publish",
                        caption: "Mode Entraînement — Onglet 3. Publication Web : Options pédagogiques, déblocage du Solutionnaire après essai, durée de disponibilité (60/180/365 j) et publication Cloud / ZIP (Gradaly Pro)"
                    },
                    {
                        filePrefix: "15_practice_student_portal",
                        caption: "Simulateur Smartphone Étudiant intégré : Prévisualisez l'application mobile où l'étudiant saisit sa clé Gemini gratuite (BYOK), photographie son brouillon et reçoit son feedback immédiat"
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
                        title: "Clé gratuite Google AI Studio pour l'étudiant",
                        desc: "L'interface mobile intègre un tutoriel pas-à-pas montrant à l'étudiant comment créer gratuitement sa clé Gemini en 30 secondes."
                    },
                    {
                        title: "Solutionnaire débloqué après l'effort",
                        desc: "L'étudiant doit soumettre la photo d'une première tentative sur papier avant de débloquer le corrigé type de l'enseignant."
                    }
                ]
            },

            // =========================================================================
            // GUIDE 3 : CLÉS API IA & FAQ (R1 à R2)
            // =========================================================================
            {
                id: "ai-settings",
                guide: "reference",
                stepNumber: "R1",
                partHeader: "Clés API IA & FAQ",
                partColor: "slate",
                partBanner: {
                    kicker: "Référence & Configuration (Chapitres R1 et R2)",
                    title: "Configuration des Clés API IA, Choix du Modèle & Foire Aux Questions",
                    desc: "Comment paramétrer Gemini, OpenRouter, OpenAI, Anthropic ou un serveur local/universitaire, et réponses aux questions fréquentes."
                },
                tag: "Référence R1 — Configuration IA",
                badge: "OpenRouter • Gemini • GPT • Claude • Local",
                shortTitle: "R1. Clés API & Choix du Modèle IA",
                title: "Configurer sa Clé API & Choisir le Bon Modèle d'IA",
                subtitle: "Paramétrez une clé API dans Paramètres (⚙️) pour activer l'Assistant IA de Barème et la Pré-correction IA avec 0 % de marge.",
                paragraphs: [
                    "<strong>Modèles multimodaux recommandés :</strong> Sur les copies manuscrites universitaires (mathématiques, physique, sciences de l'ingénieur, économie, droit), nous obtenons d'<strong>excellents résultats</strong> avec <strong><code>Gemini 3.8 Flash</code></strong>, <strong><code>GPT 5-4 mini</code></strong>, <strong><code>Claude-Sonnet-5.5</code></strong> et <strong><code>Mistral-Large 4.0</code></strong>.",
                    "<strong>Clé directe vs OpenRouter :</strong> Créez une clé directement chez <strong>Google Gemini</strong>, <strong>OpenAI</strong> ou <strong>Anthropic</strong> (ce qui donne accès au <strong>mode Batch / Flex asynchrone à -50 %</strong>), ou utilisez <strong>OpenRouter</strong> pour accéder à tous les modèles avec un seul compte.",
                    "<strong>0 % de marge &amp; Serveur Universitaire / Local :</strong> Gradaly ne prélève aucune commission sur vos jetons API — et l'usage est <strong>100 % gratuit (0 €) si vous connectez le serveur IA de votre université ou un modèle local via Ollama</strong>."
                ],
                screenshots: [
                    {
                        filePrefix: "11_settings_ai",
                        caption: "Fenêtre Paramètres IA (⚙️) : Choix du fournisseur (Gemini, OpenRouter, OpenAI, Anthropic ou Serveur Local / Universitaire) et test de connexion"
                    }
                ],
                providerGuides: [
                    {
                        name: "OpenRouter (Passerelle Multi-Modèles)",
                        tag: "Tous les modèles en 1 clé",
                        icon: "fas fa-network-wired",
                        desc: "Un seul compte et une seule clé API pour utiliser <code>Gemini 3.8 Flash</code>, <code>GPT 5-4 mini</code>, <code>Claude-Sonnet-5.5</code> et <code>Mistral-Large 4.0</code> (note : le mode Batch asynchrone n'est pas supporté sur OpenRouter).",
                        steps: [
                            "Créez un compte sur <strong>openrouter.ai</strong> et créditez 5 $ ou 10 $ dans <strong>Credits</strong>.",
                            "Allez dans <strong>Keys → Create Key</strong> et copiez la clé (<code>sk-or-v1-...</code>).",
                            "Collez-la dans Gradaly <strong>Paramètres (⚙️) → OpenRouter</strong>."
                        ],
                        url: "https://openrouter.ai/keys",
                        linkLabel: "Ouvrir la console OpenRouter Keys"
                    },
                    {
                        name: "Google Gemini (Google AI Studio)",
                        tag: "Rapide, Offre Gratuite & Batch -50 %",
                        icon: "fas fa-bolt",
                        desc: "Accès direct à <code>Gemini 3.8 Flash</code> et Pro avec support du mode Batch à -50 % (ainsi qu'une offre gratuite idéale pour les étudiants en mode Entraînement QR).",
                        steps: [
                            "Connectez-vous à <strong>Google AI Studio</strong> (<code>aistudio.google.com</code>).",
                            "Cliquez sur <strong>Get API key → Create API key</strong> et copiez la clé (<code>AIzaSy...</code>).",
                            "Collez-la dans Gradaly <strong>Paramètres (⚙️) → Google Gemini</strong>."
                        ],
                        url: "https://aistudio.google.com/app/apikey",
                        linkLabel: "Ouvrir Google AI Studio API Keys"
                    },
                    {
                        name: "OpenAI (Modèles GPT)",
                        tag: "Haute précision logique",
                        icon: "fas fa-brain",
                        desc: "Accès direct à <code>GPT 5-4 mini</code> et aux modèles de vision OpenAI avec réduction de 50 % en mode Batch.",
                        steps: [
                            "Connectez-vous sur <strong>platform.openai.com</strong> et ajoutez 5 $ de crédit dans <strong>Settings → Billing</strong>.",
                            "Allez dans <strong>API keys → + Create new secret key</strong> (<code>sk-proj-...</code>).",
                            "Collez-la dans Gradaly <strong>Paramètres (⚙️) → OpenAI</strong>."
                        ],
                        url: "https://platform.openai.com/api-keys",
                        linkLabel: "Ouvrir OpenAI Platform API Keys"
                    },
                    {
                        name: "Anthropic (Modèles Claude)",
                        tag: "Rédaction fine & Démonstrations",
                        icon: "fas fa-feather-alt",
                        desc: "Accès direct à <code>Claude-Sonnet-5.5</code> et Opus pour l'analyse de démonstrations manuscrites denses.",
                        steps: [
                            "Connectez-vous sur <strong>console.anthropic.com</strong> et créditez votre compte dans <strong>Billing</strong>.",
                            "Allez dans <strong>API Keys → Create Key</strong> (<code>sk-ant-...</code>).",
                            "Collez-la dans Gradaly <strong>Paramètres (⚙️) → Anthropic</strong>."
                        ],
                        url: "https://console.anthropic.com/settings/keys",
                        linkLabel: "Ouvrir Anthropic Console API Keys"
                    }
                ]
            },
            {
                id: "faq",
                guide: "reference",
                stepNumber: "R2",
                partColor: "slate",
                tag: "Référence R2 — Foire Aux Questions (FAQ)",
                badge: "Architecture, Confidentialité & Bonnes Pratiques",
                shortTitle: "R2. Foire Aux Questions (FAQ)",
                title: "Foire Aux Questions (FAQ)",
                subtitle: "Toutes les réponses sur la différence entre Mode Examen et Mode Entraînement QR, les coûts IA, les fichiers locaux et le chiffrement Zero-Knowledge.",
                paragraphs: [
                    "Retrouvez ci-dessous les réponses détaillées aux questions les plus fréquentes sur les deux produits intégrés dans Gradaly."
                ],
                faqs: [
                    {
                        q: "Quelle est la différence exacte entre le Produit 1 (Mode Examen) et le Produit 2 (Mode Entraînement QR) ?",
                        a: "<p><strong>Produit 1 — Mode Examen (Certificatif, par l'enseignant) :</strong> Vous ramassez les copies des étudiants après un examen, les scannez, associez les identités 100 % hors-ligne par OCR, corrigez la promotion dans Gradaly (manuellement ou avec votre clé API enseignant) et exportez le fichier Excel des notes, les PDF annotés ou le Portail Web de Consultation de Copie.</p><p><strong>Produit 2 — Mode Entraînement &amp; Auto-évaluation QR (Formatif, par l'étudiant) :</strong> Il n'y a <strong>ni liste d'étudiants ni copies ramassées par l'enseignant</strong>. Vous apposez des QR codes sur une feuille d'exercices PDF vierge et publiez un portail statique chiffré (avec Gradaly Pro). Les étudiants résolvent les exercices sur papier, scannent le QR code avec leur smartphone, prennent en photo leur brouillon et reçoivent un feedback IA formateur immédiat en utilisant <strong>leur propre clé API personnelle (BYOK — ex: clé gratuite Google AI Studio, coûtant 0 € à l'enseignant)</strong>.</p>"
                    },
                    {
                        q: "Faut-il faire confiance à l'IA pour un examen certificatif officiel ?",
                        a: "<p><strong>Dans un premier temps, jamais aveuglément !</strong> Pour un examen certificatif (Mode Examen), nous recommandons vivement de calibrer d'abord votre barème sur quelques copies, puis de <strong>relire et valider manuellement chaque copie</strong> (ce qui fait passer son statut de 🟢 IA à 🔵 Humain). Grâce à la transparence du barème restitué aux étudiants, ces derniers peuvent également consulter le détail des critères appliqués à leur copie.</p>"
                    },
                    {
                        q: "Combien coûte l'IA en Mode Examen et en Mode Entraînement QR ?",
                        a: "<p><strong>En Mode Examen :</strong> Avec un excellent modèle comme <code>Gemini 3.8 Flash</code> en mode Batch/Flex (-50 %), pré-corriger un examen de 6 pages pour <strong>400 étudiants coûte environ 5 à 7 $ au total</strong> (0 % de marge prélevée par Gradaly).</p><p><strong>En Mode Entraînement QR :</strong> Cela coûte <strong>0 € à l'enseignant</strong>, car chaque étudiant utilise sa propre clé API personnelle (BYOK, comme l'offre gratuite Google AI Studio Gemini) directement depuis son smartphone.</p>"
                    },
                    {
                        q: "Quelle résolution (DPI) utiliser pour scanner les copies en Mode Examen ?",
                        a: "<p>Scannez en <strong>Couleur entre <code>150 DPI</code> et <code>200 DPI</code></strong>. Évitez le 300 ou 600 DPI (qui alourdit les fichiers d'un facteur 5 sans aucun gain pour l'IA) ainsi que le noir et blanc binaire 1-bit (qui efface les tracés au crayon et les schémas en couleur).</p>"
                    },
                    {
                        q: "Où sont stockés mes projets et mes clés API, et comment fonctionne le chiffrement Cloud Zero-Knowledge ?",
                        a: "<p>Tous vos projets sont stockés localement dans <strong><code>Documents/Gradaly/</code></strong> sur votre ordinateur, et vos clés API restent dans <code>~/.gradaly_settings.json</code>. Lorsque vous publiez un Portail d'Examen, un Portail d'Entraînement QR ou un Lien Collaboratif, tous les fichiers sont chiffrés sur votre machine en <strong><code>AES-256-GCM</code></strong> avant l'envoi. La clé de déchiffrement (<code>#k=...</code>) reste dans le fragment d'URL après <code>#</code>, qui n'est jamais transmis au serveur.</p>"
                    },
                    {
                        q: "Combien de temps les portails d'Examen, d'Entraînement QR et les liens collaboratifs restent-ils en ligne ?",
                        a: "<p>Vous choisissez la durée de rétention lors de la publication (avec suppression automatique à l'échéance) : <strong>30 à 365 jours</strong> pour le Portail de Consultation d'Examen, <strong>60, 180 (1 semestre) ou 365 jours (1 an)</strong> pour le Portail d'Entraînement QR, et <strong>7, 14 ou 30 jours</strong> pour les liens de partage entre collègues. Avec Gradaly Pro, vous pouvez aussi exporter les portails d'Examen et d'Entraînement en archive <code>.zip</code> autonome pour les héberger sans limite de durée sur le serveur de votre université.</p>"
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
