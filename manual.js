const manualTranslations = {
    en: {
        badge_manual: "User Manual",
        back_home: "Back to Website",
        download_btn: "Download Gradaly",
        hero_pill: "Complete Step-by-Step Guide • v3.0.1",
        hero_title: "Gradaly User Manual",
        hero_subtitle: "Grade Smarter, not Harder. Use Gradaly in 100% Human Mode (just like Gradescope) or supercharge your workflow with Multimodal AI Rubric Design & Pre-Grading — while keeping 100% control over your data.",
        search_placeholder: "Search the manual (e.g. human mode, criteria, API key, OpenRouter, Gradescope, Documents/Gradaly, FAQ)...",
        toc_title: "Chapters",
        privacy_box_title: "100% Local Student Privacy",
        privacy_box_text: "Student rosters, ID zones, OCR matching, and project files are stored locally in Documents/Gradaly on your computer. Cloud portals and team links use client-side AES-256-GCM Zero-Knowledge encryption.",
        sections: [
            {
                id: "welcome-and-modes",
                stepNumber: "1",
                tag: "Chapter 1 — Getting Started",
                badge: "100% Human or AI-Assisted",
                shortTitle: "1. Human vs AI Mode & Projects",
                title: "Two Ways to Grade: 100% Human Mode or AI-Assisted Mode",
                subtitle: "A complete question-by-question rubric grading workstation that works both 100% manually (without any AI) and with optional multimodal AI assistance.",
                paragraphs: [
                    "<strong>First and foremost: you do NOT need an AI API key to use Gradaly.</strong> Out of the box, Gradaly works in <strong>100% Human Mode</strong> with the same core question-by-question rubric workflow as platforms like Gradescope: you define question zones on your blank exam PDF, build a structured rubric of checkable criteria, match scanned student papers locally, and grade rapidly using keyboard shortcuts (<code>1–9</code> to toggle criteria, <code>J</code>/<code>K</code> to navigate between students) while writing rich Markdown & KaTeX feedback. If you later adjust a criterion's point value, Gradaly dynamically recalculates every student's score across the entire cohort.",
                    "<strong>Optional AI-Assisted Mode:</strong> Whenever you want to go further, you can connect your own AI API key (or a free university/local server) to unlock two powerful assistants while always keeping the final human word:<br>• <strong>The AI Rubric Assistant</strong> to help you design, structure, and calibrate your grading criteria in an interactive chat.<br>• <strong>Multimodal AI Pre-Grading</strong> to read handwritten student answers, pre-check your rubric criteria, explain its reasoning to the teacher, and draft individualized formative feedback for each student.",
                    "From the <strong>Welcome Screen</strong>, you can create a new exam project from a blank PDF canvas, launch the built-in <strong>Offline Demo Project</strong> (20 pre-populated physics/math papers in English or French) in one click, or use <strong>Import / Merge</strong> (Gradaly Pro) to collaborate with colleagues."
                ],
                screenshots: [
                    {
                        filePrefix: "01_welcome",
                        caption: "Welcome Screen: Create a project, try the instant offline demo, or import/merge a colleague's archive"
                    }
                ],
                callouts: [
                    {
                        title: "100% Human Mode (Zero AI Required)",
                        desc: "Grade manually by clicking criteria or pressing keys 1–9, with instant score recalculation, cohort histograms, Excel gradebooks, annotated PDFs, and the encrypted Student Web Portal."
                    },
                    {
                        title: "AI-Assisted Mode (When You Want It)",
                        desc: "Connect Gemini, OpenAI, Claude, OpenRouter, or a local Ollama model to co-design rubrics and pre-grade handwritten answers with detailed justifications."
                    },
                    {
                        title: "Instant Offline Demo Project",
                        desc: "Click 'Create Demo Project' to explore a complete 20-student exam with rubrics, handwritten copies, and statistics before importing your own PDFs."
                    },
                    {
                        title: "100% Local Workspace (Documents/Gradaly)",
                        desc: "All your projects live in plain folders inside your computer's Documents/Gradaly directory — no forced cloud account required."
                    }
                ],
                tip: {
                    title: "Pedagogical Positioning: Better Formative Feedback",
                    text: "Whether you grade 100% manually or with AI pre-grading, Gradaly shifts your effort toward designing a clear, fair, fine-grained rubric so every student receives detailed conceptual feedback."
                }
            },
            {
                id: "ai-settings",
                stepNumber: "2",
                tag: "Chapter 2 — AI Setup (Optional)",
                badge: "OpenRouter • Gemini • GPT • Claude",
                shortTitle: "2. API Keys & Choosing an AI Model",
                title: "Setting Up Your API Key & Choosing the Right AI Model",
                subtitle: "Skip this chapter if you grade 100% manually. To enable AI Rubric Design and AI Pre-Grading, configure an API key in Settings.",
                paragraphs: [
                    "<strong>The quality of AI pre-grading depends directly on the vision/reasoning capability of the AI model you select.</strong> In our benchmarks on handwritten university exams (mathematics, physics, engineering, economics, and humanities), we achieve <strong>excellent results</strong> with <strong><code>Gemini 3.8 Flash</code></strong>, <strong><code>GPT 5-4 mini</code></strong>, <strong><code>Claude-Sonnet-5.5</code></strong>, and <strong><code>Mistral-Large 4.0</code></strong> — feel free to experiment with other models to see which one best fits your subject!",
                    "<strong>Direct Provider Keys vs. OpenRouter:</strong> You can create an API key directly with <strong>Google Gemini</strong>, <strong>OpenAI</strong>, or <strong>Anthropic</strong> (which notably gives you access to their asynchronous <strong>Batch / Flex mode</strong>), or use <strong>OpenRouter</strong>, whose specific advantage is that <strong>a single API key gives you access to models from all providers</strong> (Gemini, GPT, Claude, Mistral, DeepSeek, Qwen, Llama) from one unified balance.",
                    "<strong>0% Markup & No Proprietary 'AI Credits':</strong> Unlike commercial AI grading platforms that lock you into a fixed model and sell expensive proprietary 'AI credit packs', Gradaly charges <strong>nothing</strong> for AI usage. You pay the exact wholesale token cost directly to your provider (typically a few dollars for a whole exam) — or <strong>0 € if your university provides an institutional LLM server or if you run local models via Ollama</strong>, maximizing academic sovereignty."
                ],
                screenshots: [
                    {
                        filePrefix: "11_settings_ai",
                        caption: "AI Settings Modal: Choose your provider (Gemini, OpenRouter, OpenAI, Anthropic, or Local/University Server), pick your model, and test connectivity"
                    }
                ],
                providerGuides: [
                    {
                        name: "OpenRouter (Multi-Provider Gateway)",
                        tag: "All Models in 1 Key",
                        icon: "fas fa-network-wired",
                        desc: "<strong>Specific advantage:</strong> One single account and API key lets you try <code>Gemini 3.8 Flash</code>, <code>GPT 5-4 mini</code>, <code>Claude-Sonnet-5.5</code>, <code>Mistral-Large 4.0</code>, and hundreds of other models without managing multiple accounts (note: asynchronous Batch mode is not supported on OpenRouter).",
                        steps: [
                            "Go to <strong>openrouter.ai</strong> and sign in (or create a free account).",
                            "Open <strong>Credits</strong> in the top menu and add a small prepaid balance (e.g. $5 or $10 — enough for thousands of exam pages).",
                            "Go to <strong>Keys</strong> → click <strong>Create Key</strong>, name it <code>Gradaly</code>, and copy the key starting with <code>sk-or-v1-...</code>.",
                            "In Gradaly, open <strong>Settings (⚙️)</strong>, select <strong>OpenRouter</strong>, paste your key, and type or select your model ID."
                        ],
                        url: "https://openrouter.ai/keys",
                        linkLabel: "Open OpenRouter API Keys Console"
                    },
                    {
                        name: "Google Gemini (Google AI Studio)",
                        tag: "Fast & Cost-Effective",
                        icon: "fas fa-bolt",
                        desc: "Direct access to Google's multimodal <code>Gemini 3.8 Flash</code> and Pro models, featuring native 50%-discounted asynchronous Batch API support.",
                        steps: [
                            "Sign in to <strong>Google AI Studio</strong> (<code>aistudio.google.com</code>) with your Google account.",
                            "Click <strong>Get API key</strong> in the left sidebar, then click <strong>Create API key</strong>.",
                            "Copy the generated key (starts with <code>AIzaSy...</code>). Enable Pay-as-you-go billing in Google Cloud if you want high rate limits.",
                            "In Gradaly, open <strong>Settings (⚙️)</strong>, select <strong>Google Gemini</strong>, and paste your key."
                        ],
                        url: "https://aistudio.google.com/app/apikey",
                        linkLabel: "Open Google AI Studio API Keys"
                    },
                    {
                        name: "OpenAI (GPT Models)",
                        tag: "High Reasoning Precision",
                        icon: "fas fa-brain",
                        desc: "Direct access to OpenAI's multimodal models such as <code>GPT 5-4 mini</code>, offering strong mathematical and logical step verification plus 50% Batch API discounts.",
                        steps: [
                            "Log in to <strong>platform.openai.com</strong> (note: API accounts are separate from ChatGPT Plus subscriptions).",
                            "Go to <strong>Settings → Billing</strong> and load a small prepaid credit balance (e.g. $5).",
                            "Navigate to <strong>Dashboard → API keys</strong>, click <strong>+ Create new secret key</strong>, and copy the key (<code>sk-proj-...</code>).",
                            "In Gradaly, open <strong>Settings (⚙️)</strong>, select <strong>OpenAI</strong>, paste your key, and choose your model."
                        ],
                        url: "https://platform.openai.com/api-keys",
                        linkLabel: "Open OpenAI Platform API Keys"
                    },
                    {
                        name: "Anthropic (Claude Models)",
                        tag: "Nuanced Feedback & Proofs",
                        icon: "fas fa-feather-alt",
                        desc: "Direct access to Anthropic's <code>Claude-Sonnet-5.5</code> and Opus models, renowned for reading dense handwritten proofs and writing natural academic feedback.",
                        steps: [
                            "Sign in to the <strong>Anthropic Console</strong> (<code>console.anthropic.com</code>).",
                            "Go to <strong>Settings → Billing</strong> to activate a prepaid credit balance.",
                            "Go to <strong>API Keys</strong>, click <strong>Create Key</strong>, and copy the secret key (<code>sk-ant-...</code>).",
                            "In Gradaly, open <strong>Settings (⚙️)</strong>, select <strong>Anthropic</strong>, and paste your key."
                        ],
                        url: "https://console.anthropic.com/settings/keys",
                        linkLabel: "Open Anthropic Console API Keys"
                    }
                ],
                callouts: [
                    {
                        title: "University Server or 100% Local Ollama",
                        desc: "If your university provides an OpenAI-compatible AI endpoint — or if you run local vision models via Ollama/LM Studio (<code>http://localhost:11434/v1</code>) — select 'Local / Custom Server' in Settings for 100% sovereign, zero-cost AI."
                    },
                    {
                        title: "One-Click Connection Diagnostic",
                        desc: "Click the status badge in the top bar at any time to verify that your API key and selected vision model respond properly."
                    }
                ]
            },
            {
                id: "canvas-and-rubric",
                stepNumber: "3",
                tag: "Chapter 3 — Core Functionality",
                badge: "Essential for Accurate Grading",
                shortTitle: "3. Creating Question Zones & Criteria",
                title: "How to Define Question Zones & Write Effective Grading Criteria",
                subtitle: "Understand how Gradaly extracts each question zone and how to structure your points, criteria, and general instructions for accurate grading.",
                paragraphs: [
                    "<strong>How Gradaly's AI Grading Works Under the Hood:</strong> When you trigger AI grading on a student's copy for a specific question, Gradaly crops the <strong>exact image of the rectangle zone</strong> you drew for that question and sends that image — together with a structured prompt containing your rubric criteria and instructions — to your chosen AI model. <em>Think of it as if you took a screenshot of that area on the student's paper, pasted it into your favorite AI chat tool, and wrote: \"Please grade this student's answer using the following grading policy.\"</em>",
                    "Because the AI <strong>only sees what is inside the cropped zone plus the text of your rubric</strong>, setting up your question zone and criteria accurately is the single most important key to high-precision AI grading! Here is the step-by-step method in the <strong>Canvas & Questions</strong> tab:",
                    "<strong>1. Draw the Question Zone (Include the Printed Question Statement!):</strong> On the blank exam PDF on the right, draw a rectangle around each question. <strong>Crucial guideline:</strong> whenever the layout allows, <strong>include both the printed question statement and the student's answer box inside the rectangle</strong>. Seeing the printed question directly above the handwritten answer gives the AI complete visual context (formulas, diagrams, notations).",
                    "<strong>2. Set the Question's Worth (<code>Max</code> & <code>Base</code> Score):</strong> First, set how many points the question is worth (<code>Max</code>, e.g. <code>4 pts</code> or <code>8 pts</code>, in multiples of <code>0.5</code>). Set <code>Base</code> to <code>0</code> for an <strong>additive policy</strong> (where criteria add points <code>+1</code>, <code>+2</code>) or set <code>Base</code> equal to <code>Max</code> for a <strong>subtractive policy</strong> (where criteria deduct points <code>-0.5</code>, <code>-1</code> for errors). Every student's score is automatically clamped between <code>0</code> and <code>Max</code>.",
                    "<strong>3. Define Each Rubric Criterion:</strong> Add criteria with a clear <strong>Label</strong> (e.g. <code>C1_Formula</code>), a <strong>Point weight</strong> (e.g. <code>+1.5 pts</code>), and a precise <strong>Description</strong> stating the exact condition required to validate the criterion.",
                    "<strong>4. Fill in the Bottom Field — General Instructions on How to Select Criteria (<code>Consignes & Logique de correction / Prompt IA</code>):</strong> At the bottom of the question panel, you will find a dedicated text box for general grading instructions on that question. Use this field for two essential purposes:<br>• <strong>Explain how to apply your grading policy in edge cases:</strong> e.g. <em>\"If the student makes a sign error in step 1 but carries the rest of the derivation consistently, do not award C1 but still award C2\"</em> or <em>\"Accept any equivalent trigonometric form.\"</em><br>• <strong>Include the question statement in plain text if it is NOT visible in the zone:</strong> If the question prompt was printed on a separate sheet or outside the cropped answer box, <strong>paste the plain-text question (and expected final answer) into this bottom field</strong> so the AI knows exactly what question the student is answering!"
                ],
                screenshots: [
                    {
                        filePrefix: "02_questions",
                        caption: "Canvas & Questions Tab: Question Max/Base points, checkable criteria with descriptions, bottom General AI Instructions field, and PDF bounding boxes"
                    }
                ],
                callouts: [
                    {
                        title: "Include the Question in the Zone",
                        desc: "Frame both the printed question statement and the answer box whenever possible so the vision model sees the exact wording and diagrams."
                    },
                    {
                        title: "First Set How Many Points the Question Is Worth",
                        desc: "Define Max Score (and Base Score: 0 for additive, Max for subtractive). All scores use clean 0.5-point increments."
                    },
                    {
                        title: "Write Explicit Criterion Descriptions",
                        desc: "Be specific about what mathematical expression, physical law, or argument is expected to check each criterion box."
                    },
                    {
                        title: "Use the Bottom General Instructions Field",
                        desc: "Specify global rules for selecting criteria (carry-through errors, alternative methods) — and paste the question text here if it does not appear in the cropped zone!"
                    }
                ],
                tip: {
                    title: "Multi-Zone Questions Across Pages",
                    text: "If a single question spans the bottom of Page 2 and continues at the top of Page 3, add a second zone to the same question: Gradaly automatically stitches both areas into a single composite image for the grader and the AI."
                }
            },
            {
                id: "ai-rubric-assistant",
                stepNumber: "4",
                tag: "Chapter 4 — AI Rubric Assistant",
                badge: "Interactive Chat & Calibration",
                shortTitle: "4. AI Assistant for Creating Criteria",
                title: "Co-Designing & Calibrating Criteria with the AI Rubric Assistant",
                subtitle: "Let the AI draft your rubric from the question and solution PDF, iterate in chat mode, paste screenshots of real student answers, and calibrate on a few copies.",
                paragraphs: [
                    "Defining well-calibrated grading criteria from scratch can sometimes feel complex. That is why Gradaly includes an interactive <strong>AI Rubric Assistant</strong> — click the <strong>Design with AI</strong> (<code>Concevoir avec l'IA</code>) button above your criteria list on any question.",
                    "<strong>1. Configure Your Rubric Preferences:</strong> In the setup screen, specify how many points the question is worth, choose whether you prefer an <strong>Additive policy</strong> (starting from 0 pt and adding points per step) or a <strong>Subtractive / Deductive policy</strong> (starting from Max score and deducting penalties), and pick the <strong>number of criteria</strong> you want (e.g. 3, 4, 5, or let the AI decide). If you uploaded a <strong>Reference Solution PDF</strong> (<code>Solutionnaire</code>), the assistant automatically reads both the question zone and your master solution!",
                    "<strong>2. Iterate in Chat Mode Until You Are Happy:</strong> Once the assistant proposes an initial rubric (shown on the left) and general AI instructions (<code>PROMPT_TEXT</code>), use the chat panel on the right to refine it in natural language (e.g. <em>\"Split criterion 2 into two 1-point steps\"</em> or <em>\"Add a -0.5 pt penalty if units are missing\"</em>).",
                    "<strong>3. Power Workflow — Copy-Paste Screenshots of Actual Student Answers in the Chat!</strong> While reviewing your exam, don't hesitate to take a screenshot of an actual student's handwritten answer, <strong>paste it directly into the Rubric Assistant chat (<code>Cmd+V</code> / <code>Ctrl+V</code>)</strong>, and write:<br><em>\"I think this student answer deserves the maximum grade on the question, please adapt the grading policy and criteria so this alternative method gets full credit\"</em> (or <em>\"This answer should only get 2/5, please clarify the criteria\"</em>). The AI will inspect the screenshot and automatically update the criteria descriptions and general instructions!",
                    "<strong>4. Include the Criteria & Experiment on a Few Copies:</strong> When you are satisfied with the proposed rubric, click <strong>Validate and apply to question</strong> to import all criteria and instructions into your question. Then, go to the <strong>Grading</strong> tab and <strong>test the AI grading on 2 to 4 student copies</strong> (or click <em>Test on Solution</em>) to make sure the calibration matches your expectations before grading the entire class!"
                ],
                screenshots: [
                    {
                        filePrefix: "03_rubric_assistant",
                        caption: "AI Rubric Assistant Modal: Live proposed criteria & PROMPT_TEXT on the left, interactive natural-language refinement chat (with screenshot paste support) on the right"
                    }
                ],
                callouts: [
                    {
                        title: "Choose Additive or Subtractive & Criteria Count",
                        desc: "Tell the assistant the question's Max Score, whether you want positive steps or negative penalties, and how many criteria (3, 4, 5, or free) you prefer."
                    },
                    {
                        title: "Paste Real Student Screenshots in the Chat",
                        desc: "Press Cmd+V / Ctrl+V in the chat to paste an image of a real student answer and say: 'I think this deserves the maximum grade, please adapt the grading policy.'"
                    },
                    {
                        title: "Automatic Solution Audit & Simulation",
                        desc: "If a Solution PDF is loaded, the assistant audits your solution for completeness and lets you simulate the rubric's score in one click."
                    },
                    {
                        title: "Calibrate on a Few Copies First",
                        desc: "After applying the AI-generated criteria to your question, always run a quick test on a few actual student copies to verify the grading calibration."
                    }
                ]
            },
            {
                id: "roster-and-matching",
                stepNumber: "5",
                tag: "Chapter 5 — Roster, Copies & OCR",
                badge: "100% Local & Offline",
                shortTitle: "5. Roster, Copies & OCR Matching",
                title: "Student Roster, PDF Splitting & 100% Offline OCR Matching",
                subtitle: "Import your student list, slice bulk scanner PDFs into individual copies, and associate student identities locally without sending a single byte to the cloud.",
                paragraphs: [
                    "In the <strong>Students</strong> tab, import your official class roster from a CSV or Excel file (Moodle, Canvas, Banner, ADE, etc.). Gradaly automatically detects columns for <strong>Student ID (Matricule)</strong>, <strong>Last Name</strong>, <strong>First Name</strong>, <strong>Email</strong> (used for sending encrypted Web Portal links), and <strong>Group/Section</strong>.",
                    "In the <strong>Copies</strong> tab, import either a folder of individual student PDFs or a <strong>single multi-student bulk PDF</strong> straight from the photocopy room scanner. Tell Gradaly how many pages each exam booklet has (e.g. 4 pages per student), and it automatically slices the bulk scan into <code>copie_01.pdf</code>, <code>copie_02.pdf</code>, etc.",
                    "In the <strong>Matching</strong> tab, click <strong>Run Automatic OCR Matching</strong>. Gradaly crops the Student Identification Zone (<code>ID</code>) you drew on Page 1, runs an <strong>embedded WebAssembly Tesseract OCR engine 100% locally on your computer</strong>, and matches handwritten names/IDs against your roster using fuzzy string similarity. You can then verify each copy side-by-side with its cropped ID header and confirm or reassign any student in one click."
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
                        desc: "Filter by 'Unmatched' or 'Low Confidence' to resolve ambiguous handwriting in seconds using the live search dropdown."
                    }
                ]
            },
            {
                id: "grading-console",
                stepNumber: "6",
                tag: "Chapter 6 — Grading Console",
                badge: "Navigation, Color Codes & Batch AI",
                shortTitle: "6. Manual & AI-Assisted Grading",
                title: "The Evaluation Console: Navigation, Color Codes & Launching AI Grading",
                subtitle: "Understand the 3-pane workspace, question circles, color status codes, single-question calibration, and Batch vs. Standard AI execution.",
                paragraphs: [
                    "The <strong>Grading</strong> tab is organized into three synchronized columns: the <strong>Student List</strong> on the left, the <strong>Interactive PDF Copy Viewer</strong> in the center, and the <strong>Question &amp; Criteria Workstation</strong> on the right.",
                    "<strong>1. Selecting a Question ('Small Circles' in the Top Right) &amp; Horizontal Navigation:</strong> At the top of the right-hand column under <em>Question Overview</em>, each exam question is represented by a numbered circle (<code>1</code>, <code>2</code>, <code>3</code>, ...). Click any circle to select that question — the center PDF viewer automatically jumps to the right page and frames the student's answer box. You can then <strong>stay on that question and navigate from one student to the next</strong> using the <code>&lt; 1/20 &gt;</code> arrows in the top right (or the <code>↑</code> / <code>↓</code> arrow keys on your keyboard) to grade or review the entire class one question at a time.",
                    "<strong>2. Understanding the 3-Color Status Code (Question Circles &amp; Left Column):</strong> Both the numbered question circles in the top right and the summary counters in the left column use the same intuitive color code:<br>• 🟢 <strong>Green (<code>AI</code>):</strong> The question was pre-graded by the AI (awaiting your human review).<br>• 🔵 <strong>Blue (<code>Human</code>):</strong> The question was graded, modified, or explicitly confirmed by a human (by clicking a criterion checkbox or clicking the <strong>Human Validation</strong> button).<br>• ⚪ <strong>Grey (<code>To grade</code>):</strong> The question has not been graded yet.",
                    "<strong>3. Reading the Left Column (Status Counters, Open Question Score &amp; Total Score):</strong> In the left column, beneath each student's name, three colored dots (<code>🟢 AI</code>, <code>🔵 Human</code>, <code>⚪ To grade</code>) show the exact progress on that student's copy. On the right side of each student row, two score badges appear side by side: <strong>the student's score on the currently open question</strong> (e.g. <code>8/8</code>) and <strong>the student's total exam score</strong> (e.g. <code>18.8 tot</code>). You can sort the student list in one click by student name, by active question score, or by total score.",
                    "<strong>4. Option A — Grading Only the Current Question for the Current Student (Calibrating Your Criteria):</strong> Scroll to the bottom of the right-hand column and click <strong>Re-run AI for this question</strong>. This runs the AI on <strong>the active question for the current student only</strong>. This is the essential workflow for <strong>calibrating your rubric criteria</strong>: test a question on 2 or 3 sample copies, and do a few quick back-and-forths with the <em>Canvas &amp; Questions</em> tab to fine-tune your criteria descriptions or general instructions until the AI's evaluation matches your expectations. Right above the button, three checkboxes (<em>Do not override: Grades / Feedback / Justification</em>) let you protect existing grades if you only want to regenerate the text.",
                    "<strong>5. Option B — Launching Multi-Copy / Multi-Question AI Grading (<code>▶ AI Grading</code> Modal):</strong> Once your criteria are calibrated, click the large <strong>▶ AI Grading</strong> button at the top left to open the batch launch dialog:<br>• <strong>Target copies:</strong> Choose between <em>All checked copies</em> in the left column or <em>Only the current copy</em> (e.g. to grade all questions of a single student).<br>• <strong>Questions to grade:</strong> Select <em>Check all</em>, <em>Active question only</em>, or check specific questions.<br>• <strong>Override protection:</strong> Check <em>Do not override grades / feedback / justification</em> so the AI skips or preserves questions you have already graded or validated.<br>• <strong>Execution Mode — We Recommend Batch / Flex Mode:</strong> You can choose between <strong>⚡ Standard Mode</strong> (real-time parallel requests using multiple worker threads, compatible with all providers) and <strong>🌿 Flex Mode (Asynchronous Batch API)</strong>, which submits the batch in the background to the provider's servers with a <strong>50% cost discount</strong> and higher rate limits. <strong>We strongly recommend using Batch / Flex Mode for full-cohort grading.</strong> Note that Batch Mode is supported with direct <strong>Google Gemini</strong>, <strong>OpenAI</strong>, and <strong>Anthropic (Claude)</strong> API keys, but is <strong>unfortunately not available when using OpenRouter</strong>."
                ],
                screenshots: [
                    {
                        filePrefix: "07_grading",
                        caption: "Grading Console Overview: Left column (student list with 🟢 AI / 🔵 Human / ⚪ To grade counters, open question score & total score), Center PDF auto-focused on the question zone, and Top-Right colored question circles (1–10)"
                    },
                    {
                        filePrefix: "07b_grading_single_ai",
                        caption: "Bottom of Right Column: AI Justification, Student Feedback (Markdown + KaTeX), 'Do not override' checkboxes, and 'Re-run AI for this question' button for single-student calibration"
                    },
                    {
                        filePrefix: "07c_grading_launch_modal",
                        caption: "Start AI Grading Modal ('▶ AI Grading'): Select target copies, questions, override rules, and choose between Standard parallel mode and recommended Flex / Asynchronous Batch Mode (-50%)"
                    }
                ],
                callouts: [
                    {
                        title: "Single-Question AI Calibration",
                        desc: "Use 'Re-run AI for this question' at the bottom right on a few copies and iterate on your criteria before launching a full batch."
                    },
                    {
                        title: "3-Color Status Code (🟢 AI • 🔵 Human • ⚪ To grade)",
                        desc: "Track at a glance which questions were pre-graded by AI, validated by a human teacher, or still ungraded — both on the top-right circles and in the left list."
                    },
                    {
                        title: "Question Score + Total Score in Left List",
                        desc: "See each student's score on the open question alongside their total exam score, and sort the cohort by either column in one click."
                    },
                    {
                        title: "Recommended Asynchronous Batch Mode (-50%)",
                        desc: "Available with direct Gemini, OpenAI, and Anthropic keys (not supported on OpenRouter) for 50%-discounted background grading."
                    }
                ]
            },
            {
                id: "collaborative-sharing",
                stepNumber: "7",
                tag: "Chapter 7 — Team Grading (Gradaly Pro)",
                badge: "New in v3.0 • PRO",
                shortTitle: "7. Collaborative Share & Merge (PRO)",
                title: "Collaborative Project Sharing & Selective Per-Question Merge",
                subtitle: "Split grading across colleagues or teaching assistants via .gradaly archives or end-to-end encrypted Cloud links (Gradaly Pro).",
                paragraphs: [
                    "When co-grading an exam with colleagues or teaching assistants, <strong>Gradaly Pro</strong> lets you share either a complete project or a lightweight subset (e.g. only the rubric and gradings for specific questions) with real-time progress bars.",
                    "Click the <strong>Share / Export</strong> icon next to the project name in the header to choose between a local <code>.gradaly</code> archive file or an <strong>Encrypted Cloud Link</strong>. With Cloud links, the archive is encrypted on your computer using <strong>AES-256-GCM</strong> before upload, and the secret decryption key (<code>#k=...</code>) stays strictly in the URL fragment that you send to your colleague.",
                    "When your colleague clicks <strong>Import / Merge</strong>, Gradaly inspects the archive, verifies that the exam canvas PDF has the exact same <strong>SHA-256 cryptographic fingerprint</strong>, and lets them either import the archive as a <strong>brand-new project under a custom name</strong> (100% conflict-free) or <strong>selectively merge rubrics and/or gradings question-by-question</strong> with an automatic pre-merge backup in <code>backups/</code>."
                ],
                screenshots: [
                    {
                        filePrefix: "09_share_modal",
                        caption: "Share / Export Project Modal (Gradaly Pro): Presets, per-question filter, .gradaly file export, and AES-256 Encrypted Cloud Link"
                    },
                    {
                        filePrefix: "10_import_merge_modal",
                        caption: "Import / Selective Merge Modal (Gradaly Pro): SHA-256 canvas verification, per-question Rubric/Gradings checkboxes, and conflict protection"
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
                ]
            },
            {
                id: "analytics-and-exports",
                stepNumber: "8",
                tag: "Chapter 8 — Analytics & Restitution",
                badge: "Excel • PDF • Web Portal",
                shortTitle: "8. Analytics, PDF & Web Portal",
                title: "Cohort Analytics, Annotated PDFs & Zero-Knowledge Student Web Portal",
                subtitle: "Analyze score distributions, simulate rubric adjustments, and deliver rich formative feedback to students.",
                paragraphs: [
                    "The <strong>Summary</strong> tab provides real-time cohort statistics: mean, median, standard deviation, min/max scores, unambiguous score histograms <code>[a, b[</code>, and the exact validation percentage for every rubric criterion.",
                    "When you are ready to return results, Gradaly offers three complementary export channels (1-copy test in Free mode; unlimited full-class exports in Gradaly Pro):",
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
                        title: "Annotated Student PDFs (ZIP)",
                        desc: "Generates an individual PDF for each student combining a summary cover table and their original handwritten pages."
                    },
                    {
                        title: "Zero-Knowledge Student Web Portal",
                        desc: "Each student copy is encrypted client-side (AES-256-GCM) with its own unique key (#k=...) before upload."
                    },
                    {
                        title: "Direct Email Dispatch & Printable QR Slips",
                        desc: "Send personalized magic links by email or print a PDF sheet of individual QR code slips to hand out in class."
                    }
                ]
            },
            {
                id: "faq",
                stepNumber: "9",
                tag: "Chapter 9 — FAQ",
                badge: "Architecture, Privacy & Support",
                shortTitle: "9. Frequently Asked Questions (FAQ)",
                title: "Frequently Asked Questions (FAQ)",
                subtitle: "Answers to common questions about how AI grading works, local storage, API key security, Zero-Knowledge Cloud encryption, and feedback.",
                paragraphs: [
                    "Below you will find answers to the most frequent technical, pedagogical, and privacy questions about Gradaly."
                ],
                faqs: [
                    {
                        q: "How does Gradaly's AI grading work under the hood?",
                        a: "<p>When you ask the AI to grade a question on a student's paper, Gradaly extracts the <strong>cropped image of the rectangle zone</strong> you drew for that question and sends it to your chosen vision AI model together with a structured prompt containing your rubric criteria (<code>CRITERIA</code>) and general grading instructions (<code>PROMPT_TEXT</code>).</p><p><strong>In short, it works just as if you copied and pasted a screenshot of that zone into your favorite AI chat tool and asked:</strong> <em>\"Hey, here is my grading policy and point breakdown for this question — please evaluate this student's handwritten answer, tell me which criteria are satisfied, explain why, and write constructive feedback for the student.\"</em></p><p>Because the AI only sees what is inside that cropped zone plus the text of your criteria and instructions, framing the question statement inside the zone (or pasting the question text in the bottom instructions field) and writing clear criteria descriptions ensures the best possible grading accuracy.</p>"
                    },
                    {
                        q: "Should I trust AI grading?",
                        a: "<p><strong>Yes and no — at first, absolutely not!</strong> Out of the box, your initial rubric might be too strict or ambiguous, or the AI model you selected might struggle to solve a specific problem or misread an unusual notation.</p><p><strong>Human review and validation are essential:</strong> We strongly recommend that you <strong>read through the AI's outputs and validate them manually</strong>, especially when Gradaly is used for <strong>summative or high-stakes (certificative) exams</strong>. Gradaly is specifically designed to let you review, adjust, and manually validate every single student answer and feedback item — and doing so will always be the best practice.</p><p><strong>Student transparency &amp; grade appeals:</strong> Because Gradaly gives students full transparency on the exact criteria applied to their copy (via annotated PDFs or the Student Web Portal), we also strongly recommend giving students the opportunity to review their graded copy and contest/appeal the application of specific rubric criteria if needed.</p>"
                    },
                    {
                        q: "How much does it cost to grade an exam with AI?",
                        a: "<p>There is no single fixed price because the cost depends on several factors: the number of student copies, the number of questions, and the size and pricing tier of the AI model you choose (each API provider publishes its exact price per million input/output tokens).</p><p>To give a concrete real-world benchmark: using an excellent model like <strong><code>Gemini 3.8 Flash</code></strong> (which performs remarkably well in our tests), we graded complex university statistics exams with <strong>6 to 7 pages of handwritten answers across 400 students for a total API cost of around $5 to $7</strong> in flexible/batch mode (and remember: Gradaly takes 0% markup on top of your provider's token price).</p>"
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
                        q: "What are the differences with other tools such as Gradescope or cloud AI graders?",
                        a: "<p><strong>Compared to Gradescope:</strong> Gradescope has real advantages for certain workflows — simultaneous real-time browser collaboration without merging files, advanced support for multiple-choice bubble sheets, and automatic answer clustering. However, Gradescope does not include multimodal AI pre-grading for open-ended handwritten reasoning, does not offer an AI assistant to co-design rubrics, and gives you less control over your student data (which are stored in plaintext on third-party servers). Gradaly can be used in <strong>100% Human Mode</strong> with the same core rubric grading workflow, while adding optional AI rubric design, AI pre-grading, and 100% local data control.</p><p><strong>Compared to emerging Cloud AI Graders:</strong> Those platforms typically impose a single black-box AI model and charge a heavy markup by selling proprietary 'AI Credit Packs'. Gradaly gives you <strong>full control over the AI model</strong> (Gemini, GPT, Claude, Mistral, OpenRouter, or a free university/local server) and <strong>charges 0% markup on AI usage</strong>.</p>"
                    },
                    {
                        q: "Where can I make suggestions and bug reports?",
                        a: "<p>We welcome all your feedback, feature ideas, and bug reports! You can open an issue directly on our GitHub issue tracker here: <a href=\"https://github.com/pschaus/gradaly-website/issues\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-indigo-600 font-bold hover:underline\">https://github.com/pschaus/gradaly-website/issues</a>.</p>"
                    }
                ]
            }
        ]
    },
    fr: {
        badge_manual: "Manuel Utilisateur",
        back_home: "Retour au site",
        download_btn: "Télécharger Gradaly",
        hero_pill: "Guide Complet Pas-à-Pas • v3.0.1",
        hero_title: "Manuel Utilisateur Gradaly",
        hero_subtitle: "Mieux corriger, pour mieux former. Utilisez Gradaly en mode 100 % Humain (comme Gradescope) ou activez l'assistance IA multimodale pour concevoir vos barèmes et pré-corriger vos copies — tout en gardant un contrôle absolu sur vos données.",
        search_placeholder: "Rechercher dans le manuel (ex: mode humain, critères, clé API, OpenRouter, Gradescope, Documents/Gradaly, FAQ)...",
        toc_title: "Sommaire",
        privacy_box_title: "Confidentialité 100 % Locale",
        privacy_box_text: "La liste des étudiants, l'OCR et vos projets restent stockés localement dans Documents/Gradaly sur votre ordinateur. Le portail web et les liens Cloud utilisent un chiffrement Zero-Knowledge AES-256-GCM côté client.",
        sections: [
            {
                id: "welcome-and-modes",
                stepNumber: "1",
                tag: "Chapitre 1 — Prise en main",
                badge: "100 % Humain ou Assisté par IA",
                shortTitle: "1. Mode Humain vs IA & Projets",
                title: "Deux façons d'utiliser Gradaly : Mode 100 % Humain ou Mode Assisté par l'IA",
                subtitle: "Un environnement complet de correction par critères utilisable aussi bien à 100 % manuellement (sans aucune IA) qu'avec l'assistance multimodale de l'IA.",
                paragraphs: [
                    "<strong>Point essentiel : vous n'avez PAS besoin de clé API d'IA pour utiliser Gradaly.</strong> Par défaut, Gradaly fonctionne en <strong>Mode 100 % Humain</strong> avec exactement le même confort de correction par grille de critères que des outils comme Gradescope : vous délimitez les zones de questions sur le PDF vierge, créez vos critères de barème, associez localement les copies scannées aux étudiants, et corrigez très rapidement au clavier (touches <code>1–9</code> pour cocher/décocher les critères, <code>J</code>/<code>K</code> pour passer d'une copie à l'autre) tout en rédigeant des commentaires en Markdown et LaTeX (KaTeX). Si vous modifiez le poids d'un critère en cours de route, toutes les notes de la promotion sont recalculées instantanément.",
                    "<strong>Mode Assisté par l'IA (optionnel) :</strong> Dès que vous le souhaitez, vous pouvez renseigner une clé API d'IA (ou un serveur universitaire / Ollama local) pour débloquer deux assistants puissants, tout en gardant systématiquement le dernier mot :<br>• <strong>L'Assistant IA de Barème</strong> pour co-construire, affiner et calibrer vos critères d'évaluation par dialogue.<br>• <strong>La Pré-correction IA Multimodale</strong> qui lit les réponses manuscrites des étudiants, pré-coche les critères du barème, explique son raisonnement à l'enseignant et rédige un feedback formateur personnalisé pour chaque étudiant.",
                    "Depuis l'<strong>Écran d'Accueil</strong>, vous pouvez créer un nouveau projet à partir d'un canevas PDF vierge, lancer en un clic le <strong>Projet de Démonstration hors-ligne</strong> (20 copies pré-remplies en français ou en anglais), ou cliquer sur <strong>Importer / Fusionner</strong> (Gradaly Pro) pour travailler en équipe."
                ],
                screenshots: [
                    {
                        filePrefix: "01_welcome",
                        caption: "Écran d'accueil : Création de projet, projet de démo instantané hors-ligne et Import / Fusion collaboratif"
                    }
                ],
                callouts: [
                    {
                        title: "Mode 100 % Humain (Sans aucune IA)",
                        desc: "Corrigez manuellement par clic ou raccourcis clavier (1–9), avec recalcul dynamique du barème, statistiques, export Excel, PDF annotés et Portail Web Étudiant."
                    },
                    {
                        title: "Mode Assisté par l'IA (À la carte)",
                        desc: "Connectez Gemini, OpenAI, Claude, OpenRouter ou un modèle local Ollama pour concevoir vos grilles de critères et pré-corriger les copies manuscrites."
                    },
                    {
                        title: "Projet de Démo Instantané Hors-Ligne",
                        desc: "Cliquez sur « Créer projet de démo » pour explorer immédiatement un examen complet de 20 copies corrigées avant d'importer vos propres PDF."
                    },
                    {
                        title: "Stockage 100 % Local (Documents/Gradaly)",
                        desc: "Tous vos projets sont enregistrés localement sur votre machine dans le dossier Documents/Gradaly, sans compte cloud imposé."
                    }
                ],
                tip: {
                    title: "Positionnement Pédagogique : Mieux corriger, pour mieux former",
                    text: "Que vous corrigiez à 100 % manuellement ou avec l'IA, Gradaly vous permet de concentrer votre expertise sur la finesse du barème et la richesse du feedback formateur transmis à chaque étudiant."
                }
            },
            {
                id: "ai-settings",
                stepNumber: "2",
                tag: "Chapitre 2 — Configuration IA (Optionnel)",
                badge: "OpenRouter • Gemini • GPT • Claude",
                shortTitle: "2. Clés API & Choix du Modèle IA",
                title: "Configurer sa Clé API & Choisir son Modèle d'IA",
                subtitle: "Ignorez ce chapitre si vous utilisez Gradaly en mode 100 % humain. Pour activer l'Assistant de barème et la pré-correction IA, configurez votre clé dans Paramètres.",
                paragraphs: [
                    "<strong>La qualité de la pré-correction IA dépend directement du modèle d'IA que vous utilisez.</strong> Lors de nos campagnes d'évaluation sur des copies manuscrites universitaires (mathématiques, physique, ingénierie, économie, sciences humaines), nous obtenons d'<strong>excellents résultats</strong> avec <strong><code>Gemini 3.8 Flash</code></strong>, <strong><code>GPT 5-4 mini</code></strong>, <strong><code>Claude-Sonnet-5.5</code></strong> ou <strong><code>Mistral-Large 4.0</code></strong> — n'hésitez pas à en tester plusieurs selon votre discipline !",
                    "<strong>Clé directe fournisseur ou OpenRouter :</strong> Vous pouvez créer une clé API directement chez <strong>Google Gemini</strong>, <strong>OpenAI</strong> ou <strong>Anthropic</strong> (ce qui permet notamment de bénéficier du <strong>mode Batch / Flex asynchrone</strong>), ou passer par <strong>OpenRouter</strong>, dont l'avantage est qu'<strong>une seule clé API donne accès aux modèles de tous les fournisseurs</strong> (Gemini, GPT, Claude, Mistral, DeepSeek, Qwen, Llama) sur un même compte.",
                    "<strong>0 % de marge ni « crédits IA » propriétaires :</strong> Contrairement aux plateformes commerciales qui vous imposent un modèle unique et vous revendent des « packs de crédits IA » avec une forte marge, Gradaly ne facture <strong>aucun surcoût</strong> sur l'usage de l'IA. Vous payez le coût réel directement au fournisseur — ou <strong>0 € si votre université met à disposition un modèle institutionnel gratuit ou si vous utilisez un modèle local via Ollama</strong>, renforçant ainsi votre souveraineté numérique."
                ],
                screenshots: [
                    {
                        filePrefix: "11_settings_ai",
                        caption: "Fenêtre Paramètres IA : Choix du fournisseur (Gemini, OpenRouter, OpenAI, Anthropic ou Serveur Local/Universitaire), sélection du modèle et test de connexion"
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
                id: "canvas-and-rubric",
                stepNumber: "3",
                tag: "Chapitre 3 — Fonctionnalité Cœur",
                badge: "Essentiel pour la précision de l'IA",
                shortTitle: "3. Créer les Zones & Critères de Barème",
                title: "Comment Délimiter les Questions et Rédiger des Critères de Notation Efficaces",
                subtitle: "Comprenez comment Gradaly extrait chaque zone de copie et comment structurer vos points, vos critères et vos consignes générales.",
                paragraphs: [
                    "<strong>Comment fonctionne la correction IA dans Gradaly :</strong> Lorsque vous lancez la pré-correction IA d'une question sur la copie d'un étudiant, Gradaly découpe <strong>l'image exacte du rectangle (zone)</strong> que vous avez tracé pour cette question et l'envoie au modèle d'IA accompagnée d'un prompt structurant vos critères de barème et vos consignes. <em>C'est exactement comme si vous faisiez un copier-coller d'une capture d'écran de cette zone dans votre outil de chat IA favori en lui disant : « Corrige cette réponse d'étudiant en appliquant rigoureusement la politique de notation suivante. »</em>",
                    "Puisque l'IA <strong>ne voit que ce qui figure dans la zone découpée ainsi que le texte de vos critères et consignes</strong>, la précision de la correction dépend directement du soin apporté à la définition de vos questions dans l'onglet <strong>Canevas & Questions</strong> :",
                    "<strong>1. Tracer la zone de la question (Inclure l'énoncé dans la zone !) :</strong> Sur le canevas PDF vierge à droite, tracez un rectangle autour de la question. <strong>Règle d'or :</strong> chaque fois que la mise en page le permet, <strong>englobez à la fois l'énoncé imprimé de la question et le cadre de réponse de l'étudiant dans la zone</strong>. Ainsi, le modèle de vision lit directement l'énoncé exact (formules, schémas, notations) juste au-dessus de la réponse manuscrite.",
                    "<strong>2. Définir d'abord le nombre de points de la question (<code>Max</code> & <code>Base</code>) :</strong> Indiquez en premier lieu combien de points vaut la question (<code>Note max</code>, par ex. <code>4 pts</code> ou <code>8 pts</code>, par pas de <code>0.5</code>) ainsi que la <code>Note de base</code> : mettez <code>0</code> pour une <strong>politique additive</strong> (où chaque critère validé ajoute des points <code>+1</code>, <code>+2</code>) ou mettez la note maximale pour une <strong>politique soustractive / déductive</strong> (où chaque critère sanctionne une erreur par une pénalité <code>-0.5</code>, <code>-1</code>).",
                    "<strong>3. Définir chaque critère du barème :</strong> Créez vos critères avec un <strong>Label</strong> court (ex: <code>C1_Formule</code>), un <strong>Poids en points</strong> (<code>+</code> ou <code>-</code>) et une <strong>Description</strong> explicite détaillant la condition exacte pour que le critère soit validé.",
                    "<strong>4. Remplir le champ du bas — Consignes générales de sélection des critères (<code>Consignes & Logique de correction / Prompt IA</code>) :</strong> Tout en bas de la question se trouve un champ de texte essentiel qui donne à l'IA les instructions générales sur la façon d'appliquer votre barème pour cette question. Il remplit deux rôles clés :<br>• <strong>Préciser la logique globale d'attribution des critères :</strong> par ex. <em>« En cas d'erreur de signe à la 1re ligne mais avec une suite de résolution cohérente, ne pas valider C1 mais valider C2 (erreur reportée) »</em> ou <em>« Accepter toute forme trigonométrique équivalente. »</em><br>• <strong>Fournir l'énoncé en texte clair s'il n'apparaît pas dans la zone découpée :</strong> Si l'énoncé de la question se trouve sur une feuille séparée ou en dehors de la zone de réponse de l'étudiant, <strong>collez l'énoncé de la question (et la réponse attendue) en texte plein dans ce champ du bas</strong> afin que l'IA sache précisément à quelle question l'étudiant répond !"
                ],
                screenshots: [
                    {
                        filePrefix: "02_questions",
                        caption: "Onglet Canevas & Questions : Note Max/Base, liste des critères, champ du bas « Consignes & Logique de correction (Prompt IA) » et zones sur le PDF"
                    }
                ],
                callouts: [
                    {
                        title: "Inclure l'énoncé dans la zone de la question",
                        desc: "Tracez le rectangle de manière à inclure l'énoncé imprimé et l'espace de réponse afin que l'IA dispose de tout le contexte visuel."
                    },
                    {
                        title: "Fixer d'abord la valeur de la question (Max & Base)",
                        desc: "Indiquez combien de points vaut la question (Max) et la note de départ (Base = 0 en additif, Base = Max en soustractif)."
                    },
                    {
                        title: "Rédiger des descriptions de critères précises",
                        desc: "Détaillez clairement l'expression mathématique, le raisonnement ou l'étape attendue pour cocher chaque critère."
                    },
                    {
                        title: "Utiliser le champ d'instructions générales en bas",
                        desc: "Expliquez comment sélectionner les critères dans les cas limites — et collez-y l'énoncé en texte plein si celui-ci ne figure pas dans la zone découpée !"
                    }
                ],
                tip: {
                    title: "Questions multi-zones sur plusieurs pages",
                    text: "Si la réponse d'une question commence au bas de la Page 2 et se poursuit en haut de la Page 3, ajoutez une seconde zone à la même question : Gradaly fusionnera automatiquement les deux découpes en une seule image pour le correcteur et l'IA."
                }
            },
            {
                id: "ai-rubric-assistant",
                stepNumber: "4",
                tag: "Chapitre 4 — Assistant IA de Barème",
                badge: "Mode Chat & Calibrage",
                shortTitle: "4. Assistant IA de Création de Critères",
                title: "Co-construire et Calibrer ses Critères avec l'Assistant IA de Barème",
                subtitle: "Choisissez le nombre de critères et la politique (additive ou soustractive), itérez en mode chat, collez des captures de vraies copies et calibrez sur quelques étudiants.",
                paragraphs: [
                    "Définir de zéro une grille de critères fine et sans ambiguïté peut parfois s'avérer délicat. C'est pourquoi Gradaly intègre un <strong>Assistant IA de Barème</strong> — accessible via le bouton <strong>Concevoir avec l'IA</strong> au-dessus de la liste des critères de chaque question.",
                    "<strong>1. Choisir ses paramètres de départ :</strong> Indiquez la note maximale de la question, choisissez si vous préférez une <strong>politique additive</strong> (départ à 0 pt, ajout de points par étape réussie) ou une <strong>politique soustractive / déductive</strong> (départ à la note maximale, retrait de points par erreur), et spécifiez le <strong>nombre de critères souhaité</strong> (3, 4, 5 ou libre). Si vous avez chargé un <strong>PDF Solutionnaire</strong>, l'assistant lit simultanément l'énoncé et votre corrigé type !",
                    "<strong>2. Itérer en mode Chat jusqu'à satisfaction :</strong> L'assistant affiche à gauche la grille de critères proposée ainsi que les consignes générales (<code>PROMPT_TEXT</code>), et à droite une interface de dialogue. Demandez-lui des ajustements en langage naturel (ex: <em>« Découpe le critère 2 en deux étapes de 1 point »</em> ou <em>« Ajoute une tolérance sur les arrondis »</em>).",
                    "<strong>3. Astuce puissante — Copier-coller des captures d'écran de vraies réponses dans le Chat !</strong> N'hésitez pas à faire une capture d'écran d'une vraie réponse d'étudiant, à la <strong>coller directement dans le chat de l'assistant (<code>Cmd+V</code> / <code>Ctrl+V</code>)</strong> et à lui écrire par exemple :<br><em>« Je pense que cette réponse mérite la note maximale à la question, adapte la politique de notation et les critères en conséquence »</em> (ou à l'inverse : <em>« Cette réponse ne devrait obtenir que 2/5, durcis le critère 2 »</em>). L'assistant analyse l'écriture manuscrite de la capture et adapte immédiatement les descriptions des critères et le prompt !",
                    "<strong>4. Inclure les critères et expérimenter sur quelques copies :</strong> Lorsque vous êtes satisfait, cliquez sur <strong>Valider et appliquer à la question</strong> pour intégrer les critères générés. Rendez-vous ensuite dans l'onglet <strong>Évaluation</strong> et <strong>testez la correction IA sur 2 à 4 copies</strong> (ou sur le solutionnaire) afin de vérifier que le calibrage correspond exactement à vos attentes avant de lancer la correction sur toute la classe !"
                ],
                screenshots: [
                    {
                        filePrefix: "03_rubric_assistant",
                        caption: "Fenêtre Assistant Barème IA : Grille de critères et PROMPT_TEXT proposés à gauche, dialogue interactif d'affinage (avec collage de captures de copies) à droite"
                    }
                ],
                callouts: [
                    {
                        title: "Nombre de critères & Politique Additive/Soustractive",
                        desc: "Spécifiez le nombre de critères voulu (3, 4, 5 ou libre) et la philosophie de notation (additive depuis 0 ou déductive depuis Max)."
                    },
                    {
                        title: "Coller des captures de vraies copies (Cmd+V / Ctrl+V)",
                        desc: "Collez l'image d'une réponse d'étudiant dans le chat en disant : « Je pense que cette réponse mérite la note maximale, adapte la politique de notation. »"
                    },
                    {
                        title: "Audit & Simulation sur le Solutionnaire",
                        desc: "Si un PDF solutionnaire est chargé, l'assistant vérifie la complétude du corrigé et permet de simuler le score obtenu en un clic."
                    },
                    {
                        title: "Expérimenter sur quelques copies pour calibrer",
                        desc: "Une fois les critères appliqués à la question, testez-les sur 2 ou 3 copies réelles dans l'onglet Évaluation pour valider le calibrage."
                    }
                ]
            },
            {
                id: "roster-and-matching",
                stepNumber: "5",
                tag: "Chapitre 5 — Étudiants, Copies & OCR",
                badge: "100 % Local & Hors-Ligne",
                shortTitle: "5. Étudiants, Copies & Appariement OCR",
                title: "Liste d'Étudiants, Découpage PDF & Appariement OCR 100 % Hors-Ligne",
                subtitle: "Importez votre liste d'étudiants, découpez vos scans PDF groupés et associez automatiquement chaque copie sans aucun envoi cloud.",
                paragraphs: [
                    "Dans l'onglet <strong>Étudiants</strong>, importez la liste officielle de votre promotion au format CSV ou Excel (export Moodle, ADE, etc.). Gradaly détecte automatiquement les colonnes <strong>Matricule (ID)</strong>, <strong>Nom</strong>, <strong>Prénom</strong>, <strong>E-mail</strong> (utilisé pour l'envoi des liens du Portail Web) et <strong>Groupe</strong>.",
                    "Dans l'onglet <strong>Copies</strong>, importez soit un dossier de fichiers PDF individuels, soit un <strong>fichier PDF unique issu du scanner</strong> regroupant toute la pile de copies. Indiquez le nombre de pages par copie (ex: 4 pages par étudiant) : Gradaly découpe instantanément le document en copies individuelles (<code>copie_01.pdf</code>, <code>copie_02.pdf</code>, etc.).",
                    "Dans l'onglet <strong>Appariement</strong>, cliquez sur <strong>Lancer l'appariement automatique (OCR)</strong>. Gradaly extrait la zone d'identification (<code>ID</code>) tracée sur la Page 1, exécute un moteur <strong>Tesseract WebAssembly embarqué 100 % hors-ligne</strong> et associe chaque copie à l'étudiant correspondant par similarité floue. Vérifiez ensuite visuellement l'en-tête découpé à droite et validez ou corrigez l'association en un clic."
                ],
                screenshots: [
                    {
                        filePrefix: "04_students",
                        caption: "Onglet Étudiants : Liste locale des étudiants avec Matricule, Nom, Prénom, E-mail et Groupe"
                    },
                    {
                        filePrefix: "05_copies",
                        caption: "Onglet Copies : Importation, découpage automatique par lot de pages et aperçu des copies"
                    },
                    {
                        filePrefix: "06_matching",
                        caption: "Onglet Appariement : Vérification visuelle côte à côte du cadre d'en-tête manuscrit et de la liste d'étudiants"
                    }
                ],
                callouts: [
                    {
                        title: "Confidentialité Absolue (Zéro Cloud OCR)",
                        desc: "Les noms, matricules, e-mails et en-têtes de copies ne quittent jamais votre ordinateur : la reconnaissance d'écriture tourne à 100 % en local."
                    },
                    {
                        title: "Filtre « Non associés » & Recherche Rapide",
                        desc: "Filtrez les copies non reconnues ou à faible confiance pour les associer en quelques secondes via le menu déroulant avec recherche instantanée."
                    }
                ]
            },
            {
                id: "grading-console",
                stepNumber: "6",
                tag: "Chapitre 6 — Console d'Évaluation",
                badge: "Navigation, Codes Couleurs & Modes IA",
                shortTitle: "6. Correction Manuelle & Pré-correction IA",
                title: "Console d'Évaluation : Navigation, Codes Couleurs & Lancement de la Correction IA",
                subtitle: "Maîtrisez les petits ronds de sélection de question, les codes couleurs (IA / Humain / À corriger), le calibrage sur une copie et le lancement en mode Batch.",
                paragraphs: [
                    "L'onglet <strong>Évaluation</strong> s'organise en trois colonnes synchronisées : la <strong>Liste des copies</strong> à gauche, la <strong>Visionneuse PDF interactive</strong> au centre et le <strong>Poste de notation par critères</strong> à droite.",
                    "<strong>1. Sélectionner une question (« Petits ronds » en haut à droite) et naviguer d'un étudiant à l'autre :</strong> En haut de la colonne de droite, sous <em>Aperçu des questions</em>, chaque question de l'examen est représentée par un petit rond numéroté (<code>1</code>, <code>2</code>, <code>3</code>, ...). Cliquez sur un rond pour sélectionner cette question : le PDF central se positionne automatiquement sur la page et la zone correspondante. Vous pouvez ensuite <strong>naviguer d'un étudiant à l'autre tout en restant sur cette même question</strong> grâce aux flèches <code>&lt; 1/20 &gt;</code> en haut à droite (ou aux flèches <code>↑</code> / <code>↓</code> du clavier), ce qui assure une parfaite homogénéité de notation.",
                    "<strong>2. Comprendre les codes de couleurs (Petits ronds &amp; Colonne de gauche) :</strong> Les petits ronds de questions en haut à droite ainsi que les indicateurs de la colonne de gauche partagent le même code couleur :<br>• 🟢 <strong>Vert (<code>IA</code>) :</strong> Question pré-corrigée par l'IA (en attente de relecture/validation par l'enseignant).<br>• 🔵 <strong>Bleu (<code>Humain</code>) :</strong> Question corrigée, modifiée ou validée manuellement par un humain (en cochant/décochant un critère ou en cliquant sur le bouton <strong>Validation humaine</strong>).<br>• ⚪ <strong>Gris (<code>À corriger</code>) :</strong> Question non encore corrigée.",
                    "<strong>3. Lire la colonne de gauche (Compteurs de statut, Score à la question ouverte &amp; Score total) :</strong> Dans la colonne de gauche, sous le nom de chaque étudiant, les trois pastilles colorées (<code>🟢 IA</code>, <code>🔵 Humain</code>, <code>⚪ À corriger</code>) résument l'avancement de sa copie. À droite de chaque ligne étudiant s'affichent deux badges côte à côte : <strong>le score à la question actuellement ouverte</strong> (ex: <code>8/8</code>) et <strong>le score total de l'étudiant sur l'ensemble de l'examen</strong> (ex: <code>18.8 tot</code>). Vous pouvez trier la liste en un clic par nom, par note à la question ouverte ou par note totale.",
                    "<strong>4. Première façon de lancer l'IA — Corriger uniquement la question courante pour l'élève courant (Calibrage) :</strong> Tout en bas de la colonne de droite, cliquez sur le bouton <strong>« Relancer l'IA pour cette question »</strong>. L'IA évalue alors <strong>uniquement la question active pour l'élève affiché</strong>. C'est la méthode idéale pour <strong>calibrer vos critères</strong> sur quelques copies : vous ferez typiquement quelques allers-retours avec les critères de la question (dans l'onglet <em>Canevas &amp; Questions</em>) jusqu'à obtenir exactement le comportement souhaité. Juste au-dessus du bouton, trois cases (<em>Ne pas écraser : Notes / Feedback / Justificatif</em>) permettent si besoin de protéger les éléments existants.",
                    "<strong>5. Deuxième façon de lancer l'IA — Fenêtre « Lancer la correction IA » et Mode Batch recommandé :</strong> Une fois vos critères calibrés, cliquez sur le bouton <strong>« ▶ Correction IA »</strong> en haut à gauche pour ouvrir la fenêtre de lancement par lot :<br>• <strong>Copies cibles :</strong> Corrigez <em>Toutes les copies cochées</em> dans la colonne de gauche, ou <em>Uniquement la copie en cours</em> (pour évaluer toutes les questions d'un seul étudiant).<br>• <strong>Questions à corriger :</strong> Cliquez sur <em>Tout cocher</em>, <em>Question active seule</em> ou sélectionnez les questions de votre choix.<br>• <strong>Comportement d'écrasement (Override) :</strong> Cochez <em>Ne pas écraser les notes / le feedback / le justificatif</em> pour préserver le travail déjà effectué.<br>• <strong>Mode d'exécution — Nous recommandons le Mode Batch (Flex) :</strong> Vous avez le choix entre le <strong>⚡ Mode Standard</strong> (requêtes parallèles en direct via plusieurs threads, compatible avec tous les fournisseurs) et le <strong>🌿 Mode Flex (Lot Asynchrone / API Batch)</strong> qui exécute le lot en arrière-plan sur les serveurs du fournisseur avec <strong>50 % de réduction sur le coût des tokens</strong> et sans bloquer votre machine. <strong>Nous recommandons vivement le mode Batch / Flex pour corriger vos examens.</strong> Attention : ce mode Batch est disponible avec une clé directe <strong>Google Gemini</strong>, <strong>OpenAI</strong> ou <strong>Anthropic (Claude)</strong>, mais il n'est <strong>malheureusement pas disponible via OpenRouter</strong>."
                ],
                screenshots: [
                    {
                        filePrefix: "07_grading",
                        caption: "Vue d'ensemble de l'onglet Évaluation : Colonne de gauche (pastilles 🟢 IA / 🔵 Humain / ⚪ À corriger, score de la question ouverte & score total), copie PDF centrée au milieu, et petits ronds colorés des questions (1 à 10) en haut à droite"
                    },
                    {
                        filePrefix: "07b_grading_single_ai",
                        caption: "Bas de la colonne de droite : Justificatif IA, Feedback élève (Markdown + KaTeX), options « Ne pas écraser » et bouton « Relancer l'IA pour cette question » pour calibrer ses critères sur l'élève courant"
                    },
                    {
                        filePrefix: "07c_grading_launch_modal",
                        caption: "Fenêtre « Lancer la correction IA » : Choix des copies cibles, des questions, des protections d'écrasement et sélection entre le Mode Standard (threads parallèles) et le Mode Flex / Batch asynchrone recommandé (-50 %)"
                    }
                ],
                callouts: [
                    {
                        title: "Calibrage sur l'élève courant",
                        desc: "Utilisez « Relancer l'IA pour cette question » en bas à droite pour tester et ajuster vos critères par allers-retours avant de lancer un lot global."
                    },
                    {
                        title: "Code Couleur (🟢 IA • 🔵 Humain • ⚪ À corriger)",
                        desc: "Repérez instantanément sur les petits ronds en haut à droite et dans la colonne de gauche quelles questions sont notées par l'IA, validées par l'humain ou non corrigées."
                    },
                    {
                        title: "Score de la question & Score total à gauche",
                        desc: "Visualisez côte à côte pour chaque étudiant sa note à la question ouverte (ex: 8/8) et sa note totale (ex: 18.8 tot), avec tri en un clic."
                    },
                    {
                        title: "Mode Batch / Flex Recommandé (-50 %)",
                        desc: "Nous recommandons le mode Batch asynchrone (disponible chez Gemini, OpenAI et Claude, mais pas sur OpenRouter) pour sa fiabilité et son tarif réduit de 50 %."
                    }
                ]
            },
            {
                id: "collaborative-sharing",
                stepNumber: "7",
                tag: "Chapitre 7 — Correction en Équipe (Gradaly Pro)",
                badge: "Nouveauté v3.0 • PRO",
                shortTitle: "7. Partage Collaboratif & Fusion (PRO)",
                title: "Partage Collaboratif de Projet & Fusion Sélective par Question",
                subtitle: "Répartissez la correction entre collègues ou assistants via une archive .gradaly ou un lien Cloud chiffré de bout en bout (Gradaly Pro).",
                paragraphs: [
                    "Pour corriger un examen à plusieurs (co-titulaires ou équipe d'assistants), <strong>Gradaly Pro</strong> permet de partager tout ou partie d'un projet avec barre de progression en temps réel.",
                    "Cliquez sur l'icône <strong>Partager / Exporter</strong> à côté du nom du projet dans la barre supérieure pour choisir entre un fichier local <code>.gradaly</code> ou un <strong>Lien Cloud chiffré</strong>. Avec le lien Cloud, l'archive est chiffrée sur votre ordinateur en <strong>AES-256-GCM</strong> avant l'envoi, et la clé secrète de déchiffrement (<code>#k=...</code>) figure exclusivement dans le lien que vous transmettez à votre collègue.",
                    "Lorsque votre collègue clique sur <strong>Importer / Fusionner</strong>, Gradaly analyse l'archive, vérifie automatiquement que le canevas PDF possède exactement la même <strong>empreinte cryptographique SHA-256</strong>, et propose soit d'<strong>importer comme nouveau projet sous un nouveau nom</strong> (100 % sans risque), soit de <strong>fusionner sélectivement le barème et/ou les corrections question par question</strong> avec sauvegarde automatique préalable dans <code>backups/</code>."
                ],
                screenshots: [
                    {
                        filePrefix: "09_share_modal",
                        caption: "Fenêtre Partager / Exporter le projet (Gradaly Pro) : Profils préconfigurés, filtre par question et Lien Cloud chiffré AES-256"
                    },
                    {
                        filePrefix: "10_import_merge_modal",
                        caption: "Fenêtre Importer / Fusionner (Gradaly Pro) : Vérification SHA-256 du canevas, sélection par question et protection des conflits"
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
                ]
            },
            {
                id: "analytics-and-exports",
                stepNumber: "8",
                tag: "Chapitre 8 — Statistiques & Restitution",
                badge: "Excel • PDF • Portail Web",
                shortTitle: "8. Statistiques, PDF & Portail Web",
                title: "Statistiques de Promotion, PDF Annotés & Portail Web Étudiant Chiffré",
                subtitle: "Analysez la distribution des notes, simulez vos ajustements de barème et restituez des copies richement commentées.",
                paragraphs: [
                    "L'onglet <strong>Synthèse</strong> affiche en temps réel les indicateurs de la promotion : moyenne, médiane, écart-type, notes min/max, histogrammes par tranches <code>[a, b[</code> sans ambiguïté, et taux de réussite détaillé pour chaque critère du barème.",
                    "Pour la restitution des résultats, Gradaly propose trois canaux complémentaires (1 copie test en version gratuite ; illimité pour toute la promotion avec Gradaly Pro) :",
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
                        title: "Portail Web Étudiant Zero-Knowledge",
                        desc: "Chaque copie est chiffrée sur votre machine (AES-256-GCM) avec sa propre clé unique (#k=...) avant l'envoi."
                    },
                    {
                        title: "Envoi d'e-mails & Coupons QR imprimables",
                        desc: "Envoyez les liens individuels par e-mail ou imprimez une planche PDF de coupons QR codes individuels à remettre en auditoire."
                    }
                ]
            },
            {
                id: "faq",
                stepNumber: "9",
                tag: "Chapitre 9 — FAQ",
                badge: "Fonctionnement, Fichiers Locaux & Support",
                shortTitle: "9. Foire Aux Questions (FAQ)",
                title: "Foire Aux Questions (FAQ)",
                subtitle: "Réponses aux questions fréquentes sur le fonctionnement de l'IA, le stockage local dans Documents/Gradaly, la sécurité des clés API, le chiffrement Cloud et le support.",
                paragraphs: [
                    "Retrouvez ci-dessous les réponses détaillées aux questions techniques, pédagogiques et de confidentialité les plus fréquentes sur Gradaly."
                ],
                faqs: [
                    {
                        q: "Comment fonctionne concrètement la correction par IA dans Gradaly ?",
                        a: "<p>Lorsque vous lancez l'IA sur une question pour une copie donnée, Gradaly extrait <strong>l'image découpée de la zone rectangulaire</strong> que vous avez tracée pour cette question, et l'envoie au modèle d'IA accompagnée d'un prompt contenant vos critères de barème (<code>CRITERIA</code>) et vos consignes générales pour la question (<code>PROMPT_TEXT</code>).</p><p><strong>C'est exactement similaire à ce que vous feriez si vous faisiez un copier-coller d'une capture d'écran de cette zone dans votre outil de chat IA favori en lui demandant :</strong> <em>« Corrige cet extrait de copie : voici ma politique de notation et mes critères pour cette question, indique-moi quels critères sont validés, pourquoi, et rédige un commentaire pour l'étudiant. »</em></p><p>C'est pourquoi, pour que l'IA fasse un travail remarquable, il est essentiel d'être très précis sur la façon d'appliquer votre barème : englobez l'énoncé dans la zone de la question (ou collez l'énoncé en texte plein dans le champ de consignes en bas de la question) et utilisez l'Assistant IA de Barème pour calibrer vos critères.</p>"
                    },
                    {
                        q: "Faut-il faire confiance à la correction IA ?",
                        a: "<p><strong>Oui et non — dans un premier temps, non, absolument pas !</strong> Votre barème initial pourrait être trop strict ou comporter des implicites, ou le modèle d'IA que vous avez choisi pourrait ne pas être capable de résoudre correctement la question ou mal interpréter une notation manuscrite.</p><p><strong>Relire et valider manuellement :</strong> Nous vous recommandons vivement de <strong>relire les propositions produites par l'IA et de les valider</strong>, tout particulièrement si Gradaly est utilisé dans un <strong>but certificatif (examen officiel)</strong>. Gradaly a été conçu pour vous permettre de vérifier, ajuster en un clic et valider manuellement chaque réponse et chaque feedback, et il sera toujours préférable de le faire.</p><p><strong>Droit de regard et réclamation des étudiants :</strong> Grâce à la transparence du barème par critères restitué aux étudiants (via les PDF annotés ou le Portail Web Étudiant), nous vous recommandons également de toujours laisser la possibilité aux étudiants de consulter leur copie et, le cas échéant, de contester l'application d'un critère.</p>"
                    },
                    {
                        q: "Combien coûte la correction d'un examen avec l'IA ?",
                        a: "<p>Il n'y a pas de tarif unique figé, car le coût dépend du nombre de copies à corriger, du nombre de questions, ainsi que de la taille et de la gamme du modèle d'IA choisi (chaque fournisseur d'API publie sa grille tarifaire exacte par million de tokens que vous pouvez consulter).</p><p>Pour vous donner un ordre de grandeur concret issu de nos propres examens : avec un excellent modèle comme <strong><code>Gemini 3.8 Flash</code></strong> (qui donne de très bons résultats dans nos tests), nous avons corrigé des examens universitaires de statistiques complexes comportant <strong>6 à 7 pages de réponses pour 400 étudiants pour un coût total de l'ordre de 5 à 7 $</strong> en mode flexible/batch (sans aucune marge prélevée par Gradaly).</p>"
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
                        q: "Quelles sont les différences avec d'autres outils comme Gradescope ou les plateformes Cloud d'IA ?",
                        a: "<p><strong>Par rapport à Gradescope :</strong> Gradescope possède de vrais atouts pour certains usages — collaboration web simultanée en temps réel sans fusion de fichiers, support très poussé des formulaires QCM à bulles et regroupement automatique (clustering) de réponses courtes. En revanche, Gradescope n'inclut pas de pré-correction par IA multimodale sur les raisonnements manuscrits, n'offre pas d'assistant IA pour concevoir vos barèmes, et vous laisse moins de contrôle sur vos données (stockées en clair sur des serveurs tiers). Gradaly peut s'utiliser en <strong>Mode 100 % Humain</strong> avec le même confort de grille par critères, tout en y ajoutant l'Assistant IA de barème, la pré-correction IA et un contrôle 100 % local sur vos données.</p><p><strong>Par rapport aux plateformes Cloud de correction IA émergentes :</strong> Ces plateformes imposent généralement un modèle d'IA unique sans transparence et revendent des « packs de crédits IA » avec une forte marge. Gradaly vous laisse le <strong>libre choix du modèle d'IA</strong> (Gemini, GPT, Claude, Mistral, OpenRouter ou un serveur gratuit de votre université / local) et ne facture <strong>0 % de marge sur l'IA</strong>.</p>"
                    },
                    {
                        q: "Où puis-je faire des suggestions d'amélioration ou signaler un bug ?",
                        a: "<p>Vos retours d'expérience, idées de fonctionnalités et signalements de bugs sont les bienvenus ! Vous pouvez ouvrir un ticket directement sur notre espace GitHub Issues ici : <a href=\"https://github.com/pschaus/gradaly-website/issues\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-indigo-600 font-bold hover:underline\">https://github.com/pschaus/gradaly-website/issues</a>.</p>"
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
            this.t = manualTranslations[this.lang];
        },
        toggleLang() {
            this.lang = this.lang === 'en' ? 'fr' : 'en';
            this.t = manualTranslations[this.lang];
        },
        get filteredSections() {
            const q = this.search.trim().toLowerCase();
            if (!q) return this.t.sections;
            return this.t.sections.filter((sec) => {
                const haystack = [
                    sec.title,
                    sec.subtitle,
                    sec.shortTitle,
                    ...(sec.paragraphs || []),
                    ...(sec.callouts || []).map((c) => c.title + ' ' + c.desc),
                    ...(sec.providerGuides || []).map((p) => p.name + ' ' + p.desc + ' ' + (p.steps || []).join(' ')),
                    ...(sec.faqs || []).map((f) => f.q + ' ' + f.a),
                    sec.comparisonTable ? sec.comparisonTable.title + ' ' + sec.comparisonTable.rows.map((r) => r.join(' ')).join(' ') : '',
                    sec.tip ? sec.tip.title + ' ' + sec.tip.text : ''
                ]
                    .join(' ')
                    .toLowerCase();
                return haystack.includes(q);
            });
        }
    };
}
