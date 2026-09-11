const translations = {
    en: {
        nav_download: "Download App",
        hero_title1: "Grade Smarter, Not Harder.",
        hero_title2: "Your AI Grading Assistant.",
        hero_subtitle: "Gradaly is an intelligent desktop grading assistant that accelerates handwritten exam grading using Google Gemini multimodal AI, while keeping teachers fully in control of every mark.",
        download_mac: "Download for macOS",
        see_how: "See how it works",
        phil_title: "Our Philosophy",
        phil_text: "Grading is tedious and repetitive. Teachers spend countless hours tallying points instead of providing valuable feedback. Gradaly doesn't replace the teacher; it acts as a smart assistant looking over your shoulder. By automating visual recognition and rubric matching with Gemini, you reclaim your time to provide meaningful, personalized feedback where it truly matters.",
        
        adv_title: "Why choose Gradaly?",
        adv1_title: "Clean Desktop App",
        adv1_text: "Built with Tauri 2.0 and Rust. Ultra-fast, lightweight, and operates natively on macOS, Windows and Linux without distracting clutter.",
        adv2_title: "Bring Your Own AI",
        adv2_text: "Powered by Google's top multimodal Gemini models (3.8 Flash, 3.7 Flash, 3.1 Pro). Direct connection with your own Google Gemini API key.",
        adv_privacy_title: "Total Privacy & Zero Cloud",
        adv_privacy_text: "A student's name never leaves your computer. The CSV roster, header OCR and copy matching run 100% offline locally. Only cropped answer snippets defined in the canvas are sent to the AI, ensuring complete student anonymity.",
        adv_cost_title: "Direct Cost Control",
        adv_cost_text: "You own your API Key. The application takes zero margin—whether you grade 10 or 1000 copies, you only pay direct AI provider costs (fractions of a cent per copy).",
        adv_control_title: "You Have the Final Say",
        adv_control_text: "Gradaly is a grading assistant, not a replacement. You retain full, fine-grained control and can overwrite the AI's output on any copy ergonomically at any moment.",
        adv_flex_title: "Dynamic Recalculation",
        adv_flex_text: "Change a rubric weighting or adjust base points at any time: all student scores across the entire cohort are automatically recalculated on the fly.",

        // Carousel slides
        carousel_slide0_badge: "Home & Projects",
        carousel_slide0_title: "Manage your grading sessions",
        carousel_slide0_desc: "Easily organize exam projects or explore instantly with the built-in demo project.",
        
        carousel_slide1_badge: "Step 1: Canvas",
        carousel_slide1_title: "Identification Area & Layout",
        carousel_slide1_desc: "Delineate the student ID zone for 100% offline local matching, and frame answer zones on the blank exam PDF.",
        
        carousel_slide2_badge: "Step 1 (cont.): Rubrics",
        carousel_slide2_title: "Questions, Criteria & AI Prompt",
        carousel_slide2_desc: "Set precise additive criteria (0.5 pt increments) and write custom prompts to guide Gemini's evaluation.",
        
        carousel_slide3_badge: "Step 2: Students",
        carousel_slide3_title: "Import Student Roster (CSV)",
        carousel_slide3_desc: "Load your class list (IDs, names, emails). Student identities stay 100% confidential and local.",
        
        carousel_slide4_badge: "Step 3: Matching",
        carousel_slide4_title: "Automatic & Manual Copy Matching",
        carousel_slide4_desc: "Batch import scanned copies. Gradaly uses offline local OCR to match each copy to its student, with 1-click manual adjustment.",
        
        carousel_slide5_badge: "Step 4: Workspace",
        carousel_slide5_title: "Unified Grading Station",
        carousel_slide5_desc: "Smoothly navigate between copies with a high-performance PDF viewer, switchable anonymous mode, and live progress indicators.",
        
        carousel_slide6_badge: "Step 4 (cont.): AI Grading",
        carousel_slide6_title: "Gemini Assistance & Constructive Feedback",
        carousel_slide6_desc: "Gemini checks criteria and drafts personalized feedback. You maintain total authority to validate, adjust, or edit anything.",
        
        carousel_slide7_badge: "Step 5: Analytics",
        carousel_slide7_title: "Cohort Statistics & Excel Export",
        carousel_slide7_desc: "Track grade distributions and rubric success rates in real-time, and export comprehensive multi-sheet Excel reports.",

        // Guide / User Guide Section
        guide_title: "Gradaly User Guide: From Rubric to Grade Export",
        guide_subtitle: "Gradaly simplifies and accelerates exam grading with the power of Gemini models, while keeping teachers in full control of every decision.",

        guide_step1_tag: "Step 1",
        guide_step1_title: "Evaluation Canvas Setup",
        guide_step1_subtitle: "Before importing student copies, prepare your exam structure on the blank PDF:",
        guide_step1_item1_title: "Identification Area:",
        guide_step1_item1_desc: "Delineate the reserved box for student details (name, first name, ID/matricule).",
        guide_step1_item2_title: "Question Layout:",
        guide_step1_item2_desc: "Add exam questions by drawing bounding boxes over the respective answer regions.",
        guide_step1_item3_title: "Criteria & Rubric:",
        guide_step1_item3_desc: "Define precise grading criteria and assign point weights in strictly controlled 0.5 point increments.",
        guide_step1_item4_title: "Evaluation Logic (Prompt):",
        guide_step1_item4_desc: "Write a dedicated grading prompt per question to guide the AI (key expectations, tolerances, required steps).",

        guide_step2_tag: "Step 2",
        guide_step2_title: "Import Student Roster",
        guide_step2_subtitle: "Load your enrolled class list to prepare tracking and export:",
        guide_step2_item1_title: "CSV File:",
        guide_step2_item1_desc: "Import student records (matricule IDs, last names, first names, email addresses, groups).",
        guide_step2_item2_title: "Secure Local Reference:",
        guide_step2_item2_desc: "This roster stays 100% on your computer and serves as the official reference for matching copies.",

        guide_step3_tag: "Step 3",
        guide_step3_title: "Import Copies & Matching",
        guide_step3_subtitle: "Batch drop files and seamlessly connect them to students:",
        guide_step3_item1_title: "Batch PDF Drop:",
        guide_step3_item1_desc: "Import your scanned student exam PDF copies all at once.",
        guide_step3_item2_title: "Automatic Matching (100% Offline):",
        guide_step3_item2_desc: "Using a private on-device OCR algorithm, Gradaly inspects the identification box and matches each copy to the student record.",
        guide_step3_item3_title: "Ergonomic Manual Adjustment:",
        guide_step3_item3_desc: "If handwriting is ambiguous, inspect high-resolution zoomed headers and assign students in a single click.",

        guide_step4_tag: "Step 4",
        guide_step4_title: "AI-Assisted Grading & Human Control",
        guide_step4_subtitle: "The core strength of Gradaly:",
        guide_step4_item1_title: "Gemini Multimodal Analysis:",
        guide_step4_item1_desc: "The AI examines the student's handwritten answer according to your prompt, selects met criteria and suggests an instant score.",
        guide_step4_item2_title: "Constructive Feedback:",
        guide_step4_item2_desc: "Gradaly generates a personalized constructive comment explaining errors and successes to the student.",
        guide_step4_item3_title: "Complete Teacher Sovereignty:",
        guide_step4_item3_desc: "The AI is strictly an advisory assistant. The teacher remains the sole decision-maker: easily override, toggle criteria or polish comments.",

        guide_step5_tag: "Step 5",
        guide_step5_title: "Dynamic Analytics & Grade Export",
        guide_step5_subtitle: "Monitor progress and distribute grades with ease:",
        guide_step5_item1_title: "Statistics Tab:",
        guide_step5_item1_desc: "Monitor completion rates and analyze group performance with score histograms and criterion pass rates.",
        guide_step5_item2_title: "Real-time Flexibility:",
        guide_step5_item2_desc: "Adjust rubric points or question weights at any moment; the entire cohort recalculates dynamically.",
        guide_step5_item3_title: "Multi-Sheet Excel Export:",
        guide_step5_item3_desc: "Export comprehensive spreadsheets (summary with student IDs, names, emails, plus individual question sheets) ready for school administration.",

        // Privacy Callout
        privacy_banner_title: "Local Architecture & Student Anonymity",
        privacy_banner_badge: "100% Offline",
        privacy_banner_desc: "A student's name never leaves your computer. The CSV student roster, header OCR, and copy matching operate entirely locally on your machine. Only cropped answer snippets defined in the canvas are sent to the AI via your own Gemini API key, ensuring students cannot be identified when the canvas is properly configured.",

        // Download & Gatekeeper
        download_mac: "Download for macOS",
        download_linux: "Download for Linux",
        download_appimage: "Download .AppImage",
        download_deb: "Download .deb",
        download_sub: "Universal (Apple Silicon M1-M4 & Intel)",
        download_sub_mac: "Apple Silicon (M1-M4) & Intel",
        download_sub_linux: "Ubuntu 22.04+, Debian 12+, Fedora",
        macos_req: "Requires macOS 11.0 or later",
        linux_req: "Requires 64-bit Linux (x86_64)",
        intel_windows_note: "Windows release coming soon",
        apple_notarized_badge: "Official Apple Developer Signed & Notarized",
        gatekeeper_btn: "Official Apple Developer Signature & Gatekeeper info",
        gatekeeper_title: "Apple Developer ID & Notarization",
        gatekeeper_desc: "Gradaly is officially signed with an Apple Developer ID Application certificate and notarized by Apple. It installs and opens seamlessly and securely on all Apple Silicon and Intel Macs.",
        gatekeeper_fix_title: "Quick start:",
        gatekeeper_step1: "Open the downloaded .dmg and drag Gradaly to Applications.",
        gatekeeper_step2: "Double-click Gradaly to launch. If prompted by macOS, click 'Open'.",
        gatekeeper_step3: "Launch Gradaly anytime from your Applications folder!",
        copy: "Copy",
        copied: "Copied!",
        cta_title: "Ready to upgrade your grading?",
        cta_subtitle: "Join the teachers who have already reclaimed their weekends.",
        footer_rights: "All rights reserved."
    },
    fr: {
        nav_download: "Télécharger l'App",
        hero_title1: "Corrigez plus intelligemment.",
        hero_title2: "Votre assistant IA pour la correction.",
        hero_subtitle: "Gradaly est un assistant de bureau intelligent qui simplifie et accélère la correction de copies d'examens manuscrites grâce à l'IA multimodale Google Gemini, tout en laissant l'enseignant aux commandes de chaque décision.",
        download_mac: "Télécharger pour macOS",
        see_how: "Voir le fonctionnement",
        phil_title: "Notre Philosophie",
        phil_text: "La correction est souvent fastidieuse et répétitive. Les enseignants passent des heures à compter des points au lieu d'apporter un retour pédagogique utile. Gradaly ne remplace pas l'enseignant ; il agit comme un assistant intelligent qui regarde par-dessus votre épaule. En automatisant la reconnaissance visuelle et la vérification des barèmes avec Gemini, vous gagnez un temps précieux pour offrir des retours personnalisés là où cela compte vraiment.",
        
        adv_title: "Pourquoi choisir Gradaly ?",
        adv1_title: "Application Bureau Native",
        adv1_text: "Conçue avec Tauri 2.0 et Rust. Ultra-rapide, légère, autonome et multiplateforme (macOS, Windows, Linux) sans distraction.",
        adv2_title: "Apportez votre IA (BYOAI)",
        adv2_text: "Propulsée par les meilleurs modèles multimodaux de Google (Gemini 3.8 Flash, 3.7 Flash, 3.1 Pro). Connexion directe avec votre propre clé API Gemini.",
        adv_privacy_title: "Confidentialité Absolue & Zéro Cloud",
        adv_privacy_text: "Le nom d'un étudiant ne sort jamais de votre ordinateur. Le trombinoscope CSV, l'OCR des en-têtes et l'appariement des copies s'exécutent intégralement en local. Seuls des fragments de copies partent vers l'IA, ne permettant en aucun cas d'identifier l'étudiant.",
        adv_cost_title: "Maîtrise Totale des Coûts",
        adv_cost_text: "Vous êtes propriétaire de votre clé API. L'application ne prend aucune marge : que vous corrigiez 10 ou 1000 copies, vous payez uniquement le coût direct fournisseur (quelques fractions de centime par copie).",
        adv_control_title: "Vous Gardez le Dernier Mot",
        adv_control_text: "Gradaly est une aide à la correction, pas un remplaçant. L'enseignant conserve un contrôle ergonomique et absolu : validez, modifiez ou écrasez la proposition de l'IA en un clic.",
        adv_flex_title: "Recalcul Dynamique",
        adv_flex_text: "Modifiez la pondération d'un critère ou la note de base à tout moment : l'ensemble des scores de la promotion est automatiquement recalculé à la volée.",

        // Carousel slides
        carousel_slide0_badge: "Accueil & Projets",
        carousel_slide0_title: "Gérez vos sessions d'examens",
        carousel_slide0_desc: "Organisez facilement vos différents examens ou essayez immédiatement le projet de démonstration intégré.",
        
        carousel_slide1_badge: "Étape 1 : Canevas",
        carousel_slide1_title: "Zone d'identification & Découpage",
        carousel_slide1_desc: "Délimitez la zone d'en-tête étudiant pour l'appariement 100% hors-ligne, et cadrez visuellement les zones de réponse sur le sujet vierge.",
        
        carousel_slide2_badge: "Étape 1 (suite) : Barème",
        carousel_slide2_title: "Questions, Critères & Consigne IA",
        carousel_slide2_desc: "Configurez des critères précis par demi-points et rédigez un prompt d'évaluation dédié pour guider l'analyse de Gemini.",
        
        carousel_slide3_badge: "Étape 2 : Étudiants",
        carousel_slide3_title: "Import du Référentiel Étudiants (CSV)",
        carousel_slide3_desc: "Chargez votre liste de classe (matricules, noms, emails). Aucune donnée nominative ne quitte votre machine.",
        
        carousel_slide4_badge: "Étape 3 : Appariement",
        carousel_slide4_title: "Appariement Automatique & Manuel",
        carousel_slide4_desc: "Importez vos copies PDF en lot. Gradaly relie automatiquement chaque copie à son étudiant avec possibilité d'ajustement en un clic.",
        
        carousel_slide5_badge: "Étape 4 : Visualiseur",
        carousel_slide5_title: "Poste de Correction Ergonomique",
        carousel_slide5_desc: "Parcourez les copies avec un visualiseur PDF fluide, un mode anonyme commutable et un suivi en temps réel de l'état d'évaluation.",
        
        carousel_slide6_badge: "Étape 4 (suite) : IA Gemini",
        carousel_slide6_title: "Évaluation par Gemini & Feedback",
        carousel_slide6_desc: "Gemini sélectionne les critères validés et génère un commentaire pédagogique. L'enseignant valide ou ajuste en toute liberté.",
        
        carousel_slide7_badge: "Étape 5 : Synthèse",
        carousel_slide7_title: "Statistiques de Promotion & Export Excel",
        carousel_slide7_desc: "Suivez la distribution des notes et la réussite par critère en temps réel, puis exportez un tableur Excel multi-feuilles complet.",

        // Guide / User Guide Section
        guide_title: "Guide d'utilisation de Gradaly : Du barème à l'export des notes",
        guide_subtitle: "Gradaly simplifie et accélère la correction des copies grâce à la puissance des modèles Gemini, tout en laissant l'enseignant aux commandes de chaque décision.",

        guide_step1_tag: "Étape 1",
        guide_step1_title: "Configuration du Canevas d'évaluation",
        guide_step1_subtitle: "Avant d'importer les copies, préparez la structure de votre épreuve :",
        guide_step1_item1_title: "Zone d'identification :",
        guide_step1_item1_desc: "Délimitez l'emplacement réservé aux informations de l'étudiant (nom, prénom, identifiant).",
        guide_step1_item2_title: "Découpage des questions :",
        guide_step1_item2_desc: "Ajoutez les questions de l'examen en traçant leurs zones de réponse sur le PDF vierge.",
        guide_step1_item3_title: "Critères et barème :",
        guide_step1_item3_desc: "Définissez précisément les critères d'évaluation et associez-y le nombre de points correspondant (multiples de 0,5 pt).",
        guide_step1_item4_title: "Logique de correction (Prompt) :",
        guide_step1_item4_desc: "Rédigez une consigne d'évaluation dédiée par question pour guider l'IA (attentes clés, tolérances, éléments indispensables).",

        guide_step2_tag: "Étape 2",
        guide_step2_title: "Import du référentiel étudiants",
        guide_step2_subtitle: "Chargez votre liste de classe pour préparer le suivi :",
        guide_step2_item1_title: "Fichier CSV :",
        guide_step2_item1_desc: "Importez les données de vos étudiants (identifiants, noms, adresses email, groupes).",
        guide_step2_item2_title: "Référence locale sécurisée :",
        guide_step2_item2_desc: "Ce fichier constitue la référence pour l'association ultérieure des copies et reste 100% stocké en local sur votre ordinateur.",

        guide_step3_tag: "Étape 3",
        guide_step3_title: "Import des copies et appariement (Matching)",
        guide_step3_subtitle: "Dépôt des fichiers et liaison automatique :",
        guide_step3_item1_title: "Dépôt des fichiers :",
        guide_step3_item1_desc: "Importez les PDF des copies d'étudiants scannées en lot.",
        guide_step3_item2_title: "Appariement automatique 100% hors-ligne :",
        guide_step3_item2_desc: "Grâce à un algorithme intelligent d'OCR local (0% cloud), Gradaly analyse la zone d'identification et relie automatiquement chaque copie à l'étudiant correspondant issu de votre fichier CSV.",
        guide_step3_item3_title: "Ajustement manuel :",
        guide_step3_item3_desc: "Si un doute persiste ou si l'écriture est illisible, vous pouvez finaliser l'appariement manuellement en quelques clics grâce à l'aperçu zoomé en haute résolution.",

        guide_step4_tag: "Étape 4",
        guide_step4_title: "Évaluation assistée par IA & Contrôle humain",
        guide_step4_subtitle: "C'est la force de Gradaly :",
        guide_step4_item1_title: "Analyse par Gemini :",
        guide_step4_item1_desc: "L'IA examine la réponse de l'étudiant selon vos instructions, sélectionne les critères validés et calcule une proposition de note.",
        guide_step4_item2_title: "Feedback constructif :",
        guide_step4_item2_desc: "Gradaly génère un retour explicatif personnalisé pour aider l'étudiant à comprendre ses erreurs et ses réussites.",
        guide_step4_item3_title: "Maîtrise totale par le correcteur :",
        guide_step4_item3_desc: "L'IA est un outil de support et d'aide à la décision. L'enseignant reste l'unique décideur : vous pouvez corriger manuellement, valider, modifier les critères sélectionnés ou retoucher le commentaire en toute liberté.",

        guide_step5_tag: "Étape 5",
        guide_step5_title: "Pilotage dynamique et Exportation",
        guide_step5_subtitle: "Supervision analytique et diffusion :",
        guide_step5_item1_title: "Onglet Statistiques :",
        guide_step5_item1_desc: "Visualisez l'état d'avancement de votre correction et analysez les performances globales du groupe (histogrammes, taux de succès par critère).",
        guide_step5_item2_title: "Flexibilité :",
        guide_step5_item2_desc: "Repondérez des questions, ajustez le barème ou revenez sur une copie à tout moment ; tout le système s'adapte et recalcule dynamiquement.",
        guide_step5_item3_title: "Export Excel :",
        guide_step5_item3_desc: "Exportez l'ensemble des résultats (notes, détail par critère, feedbacks) dans un tableau Excel multi-feuilles prêt à être partagé avec vos étudiants ou intégré à votre outil de scolarité.",

        // Privacy Callout
        privacy_banner_title: "Architecture locale & Anonymat des étudiants",
        privacy_banner_badge: "100% Hors-ligne",
        privacy_banner_desc: "Le nom d'un étudiant ne sort jamais de votre ordinateur. Le trombinoscope CSV, l'OCR des en-têtes et l'appariement des copies s'exécutent intégralement en local sur votre machine. Seuls des fragments de copies délimités dans le canevas partent vers l'IA via votre propre clé API Gemini, ne permettant en aucun cas d'identifier l'étudiant si le canevas a bien été configuré.",

        // Download & Gatekeeper
        download_mac: "Télécharger pour macOS",
        download_linux: "Télécharger pour Linux",
        download_appimage: "Télécharger .AppImage",
        download_deb: "Télécharger .deb",
        download_sub: "Universel (Apple Silicon M1-M4 & Intel)",
        download_sub_mac: "Apple Silicon (M1-M4) & Intel",
        download_sub_linux: "Ubuntu 22.04+, Debian 12+, Fedora",
        macos_req: "Requis : macOS 11.0 ou ultérieur",
        linux_req: "Requis : Linux 64-bit (x86_64)",
        intel_windows_note: "Version Windows à venir",
        apple_notarized_badge: "Certifié & Notarisé par Apple",
        gatekeeper_btn: "Signature Apple Developer & Informations Gatekeeper",
        gatekeeper_title: "Certificat Apple Developer ID & Notarisation",
        gatekeeper_desc: "Gradaly est officiellement signé avec un certificat Apple Developer ID Application et notarisé par Apple. Il s'installe et s'exécute nativement et en toute sécurité sur tous les Mac (Apple Silicon et Intel).",
        gatekeeper_fix_title: "Démarrage rapide :",
        gatekeeper_step1: "Ouvrez le .dmg téléchargé et glissez Gradaly dans Applications.",
        gatekeeper_step2: "Double-cliquez pour ouvrir. Si macOS demande confirmation, cliquez simplement sur « Ouvrir ».",
        gatekeeper_step3: "Lancez Gradaly à tout moment depuis votre dossier Applications !",
        copy: "Copier",
        copied: "Copié !",
        cta_title: "Prêt à révolutionner vos corrections ?",
        cta_subtitle: "Rejoignez les enseignants qui ont déjà récupéré leurs week-ends.",
        footer_rights: "Tous droits réservés."
    }
};

document.addEventListener('alpine:init', () => {
    Alpine.data('i18n', () => ({
        lang: 'en',
        t: {},
        init() {
            // Check browser language or saved preference
            const userLang = navigator.language || navigator.userLanguage; 
            if(userLang.startsWith('fr')) {
                this.lang = 'fr';
            }
            this.updateTranslations();
        },
        toggleLang() {
            this.lang = this.lang === 'en' ? 'fr' : 'en';
            this.updateTranslations();
        },
        updateTranslations() {
            this.t = translations[this.lang];
        }
    }));
});
