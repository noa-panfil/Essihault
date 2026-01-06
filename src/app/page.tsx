import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Essihault - La Révolution du SEO Cognitif",
    description: "Plongez au cœur de la méthode Essihault. Une stratégie SEO avant-gardiste conçue pour la nouvelle ère des moteurs de recherche sémantiques et génératifs.",
    openGraph: {
        title: "Essihault - La Révolution du SEO Cognitif",
        description: "Maîtrisez la résonance numérique. Stratégies avancées, architecture Next.js et psychologie de l'utilisateur.",
        type: "article",
        images: ['/img/origins.png'],
    },
};

const ARTICLES = [
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
        image: "/img/future.png", // Using abstract future image as metaphor for pillars/structure
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

const FAQS = [
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

export default function Home() {
    // Generate Rich Snippets (JSON-LD)
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "name": "Essihault",
                "url": "https://noa-panfil.cloud",
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://noa-panfil.cloud/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Accueil",
                    "item": "https://noa-panfil.cloud"
                }]
            },
            {
                "@type": "FAQPage",
                "mainEntity": FAQS.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            },
            // Adding specific Article data to the graph
            ...ARTICLES.map(article => ({
                "@type": "Article",
                "headline": article.title,
                "image": `https://noa-panfil.cloud${article.image}`,
                "author": {
                    "@type": "Person",
                    "name": "Noa Panfil"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Essihault",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://noa-panfil.cloud/icon.png"
                    }
                },
                "datePublished": "2025-01-01T08:00:00+08:00", // Example date
                "description": article.excerpt
            })),
            {
                "@type": "Organization",
                "name": "Essihault",
                "url": "https://noa-panfil.cloud",
                "logo": "https://noa-panfil.cloud/icon.png",
                "foundingDate": "2024",
                "founders": [
                    {
                        "@type": "Person",
                        "name": "Noa Panfil"
                    }
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer support",
                    "email": "contact@noa-panfil.cloud"
                }
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-essihault-dark">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-essihault-purple/30 via-black to-black" />
                </div>

                {/* Visual Grain/Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-10 z-0 pointer-events-none"></div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
                    <div className="mb-6 inline-block px-6 py-2 rounded-full border border-essihault-purple/50 bg-essihault-purple/10 text-essihault-purple text-sm font-bold tracking-widest uppercase animate-fade-in-up backdrop-blur-md">
                        Algorithme v2.0 Actif
                    </div>

                    {/* RESTORED EFFECT: Shimmer Gradient Text */}
                    <h1 className="text-7xl md:text-9xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-essihault-purple to-white animate-text-shimmer tracking-tight leading-none drop-shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                        ESSIHAULT
                    </h1>

                    <h2 className="text-2xl md:text-4xl text-gray-200 font-light max-w-4xl mx-auto mb-12 leading-normal text-balance">
                        L'Art de la <span className="text-essihault-accent font-semibold">Résonance Numérique Sémantique</span>. <br />
                        Dominez les SERP Google 2026 par l'intelligence cognitive.
                    </h2>

                    <div className="flex flex-wrap gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <a href="#articles" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] border-2 border-white">
                            Découvrir la Stratégie
                        </a>
                        <a href="/contact" className="px-10 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm">
                            Audit SEO Gratuit
                        </a>
                    </div>
                </div>
            </section>

            {/* Introduction Quote */}
            <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-essihault-purple to-transparent opacity-50"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <p className="text-3xl md:text-5xl font-serif italic text-gray-300 leading-relaxed">
                        "Le SEO n'est pas mort, il s'est éveillé. <strong className="text-transparent bg-clip-text bg-gradient-to-r from-essihault-purple to-white">Essihault</strong> est le langage pour parler à cette nouvelle conscience numérique."
                    </p>
                </div>
            </section>

            {/* Articles Section (Pillars) */}
            <section id="articles" className="py-24 px-4 bg-gradient-to-b from-black to-neutral-900">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white inline-block relative">
                            La Bibliothèque Essihault
                            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-essihault-purple to-transparent"></div>
                        </h2>
                        <p className="text-gray-500 mt-6 text-lg">Documentation officielle et recherche fondamentale.</p>
                    </div>

                    <div className="space-y-32">
                        {ARTICLES.map((article, idx) => (
                            <article key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center group`}>
                                {/* Image Side */}
                                <div className="w-full md:w-1/2 relative">
                                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:shadow-essihault-purple/20 transition-all duration-500">
                                        <Image
                                            src={article.image}
                                            alt={article.imageAlt}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                    </div>
                                    {/* Deco Elements */}
                                    <div className={`absolute -bottom-6 ${idx % 2 === 1 ? '-left-6' : '-right-6'} w-24 h-24 bg-essihault-purple/20 rounded-full blur-2xl -z-10`}></div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-1/2 space-y-6">
                                    <div className="flex items-center gap-4 text-essihault-purple/80 font-mono text-sm uppercase tracking-wider">
                                        <span>0{idx + 1}</span>
                                        <span className="h-px w-12 bg-essihault-purple/50"></span>
                                        <span>Document Classifié</span>
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-line">
                                        {article.content}
                                    </p>

                                    {/* Comments Micro-Section */}
                                    <div className="pt-6 border-t border-white/5 mt-8">
                                        <div className="flex flex-col gap-4">
                                            {article.comments.map((comment, cIdx) => (
                                                <div key={cIdx} className="flex gap-4 items-start bg-white/5 p-4 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-essihault-purple to-blue-500 flex-shrink-0 flex items-center justify-center text-xs font-bold text-white">
                                                        {comment.user.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <span className="text-essihault-purple text-sm font-bold block mb-1">{comment.user}</span>
                                                        <p className="text-gray-400 text-sm italic">"{comment.text}"</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-neutral-950">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-16 text-center text-white">Questions Fréquentes</h2>
                    <div className="space-y-4">
                        {FAQS.map((faq, idx) => (
                            <details key={idx} className="group [&_summary::-webkit-details-marker]:hidden bg-neutral-900 rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 open:bg-neutral-800 open:border-essihault-purple/30">
                                <summary className="flex cursor-pointer items-center justify-between gap-4 p-8 text-white hover:bg-white/5 transition-colors font-medium text-xl">
                                    <span>{faq.question}</span>
                                    <span className="bg-white/10 rounded-full p-1 group-open:bg-essihault-purple group-open:text-white transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </summary>
                                <div className="p-8 pt-0 text-gray-400 leading-relaxed animate-fade-in">
                                    <p>{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
