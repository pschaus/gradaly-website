const translations = {
    en: {
        nav_download: "Download App",
        hero_title1: "Grade Smarter, Not Harder.",
        hero_title2: "Your AI Co-Pilot for Grading.",
        hero_subtitle: "Gradaly is a floating AI assistant that analyzes student papers on your screen and suggests rubric items instantly. Reclaim your time.",
        download_mac: "Download for macOS",
        see_how: "See how it works",
        phil_title: "Our Philosophy",
        phil_text: "Grading is tedious and repetitive. Teachers spend countless hours tallying points instead of providing valuable feedback. Gradaly doesn't replace the teacher; it acts as a smart assistant looking over your shoulder. By automating visual recognition and rubric matching, you reclaim your time to provide meaningful, personalized feedback where it truly matters.",
        adv_title: "Why choose Gradaly?",
        adv1_title: "Floating & Minimalist",
        adv1_text: "Stays always on top of your windows. A distraction-free interface that never gets in your way.",
        adv2_title: "Bring Your Own AI",
        adv2_text: "Powered by the best multimodal models. Use your own OpenAI or Google Gemini API key.",
        adv3_title: "Platform Agnostic",
        adv3_text: "It reads your screen! Use it alongside Gradescope, Moodle, Canvas, or even a local PDF viewer.",
        adv4_title: "Custom Rubrics",
        adv4_text: "Pre-save your prompts and rubrics. Quickly switch contexts from one question to another.",
        tut_title: "How it works",
        tut_subtitle: "Four simple steps to grade an exam with AI.",
        tut1_title: "1. Select Context",
        tut1_text: "Choose the question or rubric from your pre-saved prompts in Gradaly.",
        tut2_title: "2. Show the Work",
        tut2_text: "Open the student's exam or copy on your main screen.",
        tut3_title: "3. Analyze Screen",
        tut3_text: "Click one button. Gradaly securely captures the screen and asks the AI.",
        tut4_title: "4. Apply Grade",
        tut4_text: "Review the suggested grading criteria and apply them to your grading software.",
        footer_rights: "All rights reserved."
    },
    fr: {
        nav_download: "Télécharger l'App",
        hero_title1: "Corrigez plus intelligemment.",
        hero_title2: "Votre copilote IA pour l'évaluation.",
        hero_subtitle: "Gradaly est un assistant IA flottant qui analyse les copies d'étudiants sur votre écran et suggère instantanément les critères de correction.",
        download_mac: "Télécharger pour macOS",
        see_how: "Voir le fonctionnement",
        phil_title: "Notre Philosophie",
        phil_text: "La correction est souvent fastidieuse et répétitive. Gradaly ne remplace pas l'enseignant ; il agit comme un assistant intelligent qui regarde par-dessus votre épaule. En automatisant la reconnaissance visuelle et la vérification des barèmes, vous gagnez un temps précieux pour offrir des retours personnalisés là où cela compte vraiment.",
        adv_title: "Pourquoi choisir Gradaly ?",
        adv1_title: "Flottant & Minimaliste",
        adv1_text: "Reste toujours au premier plan. Une interface sans distraction qui ne vous gêne jamais.",
        adv2_title: "Apportez votre IA",
        adv2_text: "Propulsé par les meilleurs modèles multimodaux. Utilisez votre clé API OpenAI ou Google Gemini.",
        adv3_title: "Universel",
        adv3_text: "Il lit votre écran ! Utilisez-le avec Gradescope, Moodle, Canvas, ou même un lecteur PDF local.",
        adv4_title: "Grilles Sur-Mesure",
        adv4_text: "Sauvegardez vos prompts et barèmes. Passez rapidement d'une question à l'autre.",
        tut_title: "Comment ça marche",
        tut_subtitle: "Quatre étapes simples pour corriger un examen avec l'IA.",
        tut1_title: "1. Sélectionnez le contexte",
        tut1_text: "Choisissez la question et le barème parmi vos prompts pré-enregistrés.",
        tut2_title: "2. Affichez la copie",
        tut2_text: "Affichez la réponse de l'étudiant sur votre écran principal.",
        tut3_title: "3. Analysez l'écran",
        tut3_text: "En un clic, Gradaly capture la copie et interroge l'IA de manière sécurisée.",
        tut4_title: "4. Appliquez la note",
        tut4_text: "Lisez les critères suggérés et reportez les points dans votre logiciel de correction.",
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
