import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ARTICLES, FAQS } from "@/lib/data";

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
            <section className="relative min-h-[80vh] py-20 flex items-center justify-center overflow-hidden bg-essihault-dark">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-essihault-purple/30 via-black to-black" />
                </div>

                {/* Visual Grain/Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-10 z-0 pointer-events-none"></div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
                    <div className="mb-6 inline-block px-6 py-2 rounded-full border border-essihault-purple/50 bg-essihault-purple/10 text-essihault-purple text-sm font-bold tracking-widest uppercase backdrop-blur-md">
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

                    <div className="flex flex-wrap gap-6 justify-center">
                        <a href="#articles" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] border-2 border-white">
                            Découvrir la Stratégie
                        </a>
                        <Link href="/contact" className="px-10 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm">
                            Audit SEO Gratuit
                        </Link>
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
                                    <Link href={`/articles/${article.slug}`} className="block relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:shadow-essihault-purple/20 transition-all duration-500 cursor-pointer">
                                        <Image
                                            src={article.image}
                                            alt={article.imageAlt}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                    </Link>
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
                                    <Link href={`/articles/${article.slug}`} className="block">
                                        <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight hover:text-essihault-purple transition-colors">
                                            {article.title}
                                        </h3>
                                    </Link>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        {article.excerpt}
                                    </p>

                                    <div className="pt-4">
                                        <Link href={`/articles/${article.slug}`} className="inline-flex items-center gap-2 text-white font-bold hover:gap-4 transition-all">
                                            Lire le rapport complet
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-essihault-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>

                                    {/* Comments Micro-Section - Only showing 1 for preview */}
                                    <div className="pt-6 border-t border-white/5 mt-8">
                                        <div className="flex flex-col gap-4">
                                            {article.comments.slice(0, 1).map((comment, cIdx) => (
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
