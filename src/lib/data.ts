export interface Comment {
    user: string;
    text: string;
}

export interface Article {
    title: string;
    slug: string;
    image: string;
    imageAlt: string;
    excerpt: string;
    content: string;
    comments: Comment[];
}

export interface FAQ {
    question: string;
    answer: string;
}

export const ARTICLES: Article[] = [
    {
        title: "La Genèse d'Essihault : Au-delà de l'Algorithme",
        slug: "origines-essihault",
        image: "/img/origins.png",
        imageAlt: "Représentation abstraite de la naissance de l'algorithme Essihault",
        excerpt: "Comprendre comment la résonance numérique supplante le SEO traditionnel dans un monde dominé par l'IA.",
        content: `Essihault n'est pas une simple mise à jour technique ; c'est un changement de paradigme complet. Historiquement, le SEO (Search Engine Optimization) consistait à "parler à la machine" via des balises et des mots-clés rigides. Mais avec l'avènement des modèles de langage (LLM) et de l'indexation sémantique profonde, cette approche est devenue obsolète.

        La méthode Essihault repose sur le concept de "Résonance Numérique". Il s'agit de structurer l'information de manière à ce qu'elle ne soit pas seulement indexée, mais "comprise" et "privilégiée" par les réseaux de neurones de Google. C'est l'art d'aligner la topologie de votre site avec les attentes cognitives de l'utilisateur ET de l'IA. En 2026, on ne classe plus une page ; on impose une autorité thématique incontestable.`,
        comments: [
            { user: "Sarah_Dev", text: "Cette perspective sur la 'résonance' explique pourquoi mes anciens hacks SEO ne fonctionnent plus." },
            { user: "Marc_Al", text: "L'approche bio-mimétique d'Essihault est fascinante. C'est du SEO organique au sens propre." }
        ]
    },
    {
        title: "Les 5 Piliers Fondamentaux de la Stratégie",
        slug: "piliers-strategie",
        image: "/img/future.png",
        imageAlt: "Structure architecturale abstraite représentant les piliers Essihault",
        excerpt: "Architecture, Vélocité, Maillage, Autorité et Symbiose : les clés de la domination des SERP.",
        content: `Pour déployer efficacement une stratégie Essihault, cinq piliers doivent être érigés simultanément :
        
        1. **Architecture Sémantique Liquide** : Abandonnez les structures en silo rigides. Adoptez un maillage interne qui imite les connexions synaptiques, reliant les idées connexes de manière fluide.
        2. **Vélocité Cognitive** : La vitesse de chargement (Core Web Vitals) est cruciale, mais la "vitesse de compréhension" l'est tout autant. L'information clé doit être immédiate.
        3. **Autorité Holographique** : Votre expertise doit transparaître sur chaque page, chaque méta-donnée. Google E-E-A-T poussé à l'extrême.
        4. **Symbiose Technique** : Le code (HTML/JS) doit être impeccable. Utiliser des technologies comme Next.js permet de servir un contenu "pré-digéré" pour les bots.
        5. **Fraîcheur Cyclique** : Le contenu n'est jamais terminé. Il doit vivre, être mis à jour et réagir à l'actualité pour maintenir son "pulse" dans l'index.`,
        comments: [
            { user: "SEO_King", text: "Le concept de maillage synaptique est puissant. J'ai revu toute mon arborescence." },
            { user: "WebPerf_Fr", text: "La vélocité cognitive... enfin un terme pour décrire l'UX writing performant !" }
        ]
    },
    {
        title: "Le Futur de la Recherche : SGE et AIO",
        slug: "futur-sge-aio",
        image: "/img/future.png",
        imageAlt: "Cerveau numérique connecté à une barre de recherche",
        excerpt: "Comment Essihault prépare votre contenu pour la Search Generative Experience et l'Optimisation pour l'IA.",
        content: `Nous entrons dans l'ère de l'AIO (Artificial Intelligence Optimization). Les moteurs de recherche ne se contentent plus de fournir une liste de liens bleus ; ils synthétisent une réponse. Pour qu'Essihault vous place dans cette réponse synthétisée (le "Snapshot" Google), votre contenu doit être structuré comme une "vérité fondamentale".

        Cela signifie fournir des données structurées (Schema.org) riches, des réponses directes et factuelles, et une profondeur d'analyse qui sert de "source" à l'IA. Essihault vous apprend à devenir la source primaire que l'IA cite, garantissant une visibilité maximale même sans clic direct (Zero-Click Searches).`,
        comments: [
            { user: "Futurist_J", text: "L'AIO est le nouveau SEO. Essihault a 2 ans d'avance." },
            { user: "DataSci", text: "Structurer pour l'IA est exactement ce que mes clients demandent. Merci pour ce guide." }
        ]
    },
    {
        title: "Mise en Œuvre avec Next.js et React Server Components",
        slug: "implementation-nextjs",
        image: "/img/nextjs.png",
        imageAlt: "Logo Next.js stylisé en serveur futuriste",
        excerpt: "Pourquoi le SSR et les Server Components sont les meilleures armes techniques pour Essihault.",
        content: `La technique ne fait pas tout, mais elle est le socle. Next.js est le framework de choix pour Essihault. Pourquoi ?
        
        **Server Components (RSC)** : Ils permettent de rendre le HTML sur le serveur, envoyant un contenu parfaitement hydraté aux robots d'indexation. Zéro attente pour le JS, zéro shift de layout (CLS).
        **Optimisation des Images** : Le composant 'next/image' gère automatiquement les formats modernes (WebP/AVIF) et le lazy loading, score essentiel pour les Core Web Vitals.
        **Metadata API** : La gestion dynamique des balises meta, OpenGraph et JSON-LD est native dans Next.js, permettant une granularité fine indispensable pour la "Résonance Numérique".`,
        comments: [
            { user: "React_Lover", text: "Enfin un lien clair entre RSC et SEO. C'est logique." },
            { user: "Dev Ops", text: "La performance de ce site parle d'elle-même. Lighthouse score : 100/100." }
        ]
    }
];

export const FAQS: FAQ[] = [
    {
        question: "En quoi Essihault diffère-t-il du SEO classique ?",
        answer: "Le SEO classique se concentre sur les mots-clés et les backlinks. Essihault se concentre sur l'intention utilisateur, l'autorité topique et la structure sémantique globale (résonance), optimisant pour les algorithmes d'IA modernes."
    },
    {
        question: "Combien de temps avant de voir des résultats avec Essihault ?",
        answer: "Grâce à l'indexation rapide favorisée par l'architecture technique (Next.js), des premiers signes de montée (impressions) peuvent apparaître en 2-3 semaines. La stabilisation dans le Top 3 prend généralement 2 à 3 mois de travail constant."
    },
    {
        question: "Essihault est-il adapté aux sites e-commerce ?",
        answer: "Absolument. La structure en silos thématiques et les fiches produits riches en sémantique sont au cœur de la stratégie e-commerce Essihault, augmentant drastiquement le taux de conversion organique."
    },
    {
        question: "Pourquoi utilisez-vous Next.js ?",
        answer: "Next.js offre le meilleur équilibre entre performance utilisateur (UX) et accessibilité pour les robots (Crawlabilité). C'est l'outil technique qui freine le moins la stratégie sémantique."
    }
];
