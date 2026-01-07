import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ARTICLES } from '@/lib/data';
import Link from 'next/link';

interface ArticlePageProps {
    params: {
        slug: string;
    };
}

// Generate static params for all articles (SSG)
export async function generateStaticParams() {
    return ARTICLES.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
    const article = ARTICLES.find((a) => a.slug === params.slug);

    if (!article) {
        return {
            title: 'Article Non Trouvé',
        };
    }

    return {
        title: `${article.title} | Essihault`,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: [article.image],
            type: 'article',
        },
    };
}

export default function ArticlePage({ params }: ArticlePageProps) {
    const article = ARTICLES.find((a) => a.slug === params.slug);

    if (!article) {
        notFound();
    }

    // JSON-LD for the Article & Breadcrumb
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Essihault Accueil",
                        "item": "https://noa-panfil.cloud"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Bibliothèque Stratégique",
                        "item": "https://noa-panfil.cloud/#articles"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": article.title,
                        "item": `https://noa-panfil.cloud/articles/${article.slug}`
                    }
                ]
            },
            {
                "@type": "Article",
                "headline": article.title,
                "image": `https://noa-panfil.cloud${article.image}`,
                "author": {
                    "@type": "Person",
                    "name": "Noa Panfil",
                    "url": "https://noa-panfil.cloud/about"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Essihault",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://noa-panfil.cloud/icon.png"
                    }
                },
                "datePublished": "2025-01-01",
                "description": article.excerpt,
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": `https://noa-panfil.cloud/articles/${article.slug}`
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans pt-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Breadcrumb Navigation */}
            <nav className="max-w-4xl mx-auto px-6 mb-8 flex items-center text-sm text-gray-500 font-mono overflow-x-auto whitespace-nowrap">
                <Link href="/" className="hover:text-essihault-purple transition-colors flex items-center gap-2">
                    <span className="text-essihault-purple">⬢</span>
                    Essihault
                </Link>
                <span className="mx-3 text-gray-700">/</span>
                <Link href="/#articles" className="hover:text-white transition-colors">
                    Bibliothèque
                </Link>
                <span className="mx-3 text-gray-700">/</span>
                <span className="text-gray-300 truncate">{article.title}</span>
            </nav>

            {/* Hero Section */}
            <div className="relative py-10 pb-10 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-essihault-purple/20 via-black to-black -z-10" />

                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        {article.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        {article.excerpt}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <article className="max-w-4xl mx-auto px-6 py-12">
                {/* Feature Image */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-16 border border-white/10 shadow-2xl shadow-essihault-purple/10">
                    <Image
                        src={article.image}
                        alt={article.imageAlt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Body Text */}
                <div className="prose prose-lg prose-invert max-w-none">
                    <div className="text-gray-300 leading-loose whitespace-pre-line text-lg">
                        {/* 
                          Note: In a real app we might use a markdown parser. 
                          Here we just render the raw text with whitespace preservation.
                        */}
                        {article.content.split('\n').map((paragraph, idx) => (
                            <p key={idx} className="mb-6">{paragraph}</p>
                        ))}
                    </div>
                </div>

                {/* Comments / Social Proof */}
                <div className="mt-20 pt-10 border-t border-white/10">
                    <h3 className="text-2xl font-bold mb-8 text-white">Résonance de la Communauté</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {article.comments.map((comment, idx) => (
                            <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/5">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-essihault-purple to-blue-600 flex items-center justify-center text-xs font-bold">
                                        {comment.user.charAt(0)}
                                    </div>
                                    <span className="font-bold text-essihault-purple">{comment.user}</span>
                                </div>
                                <p className="text-gray-400 italic">"{comment.text}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </article>

            {/* Navigation to other articles */}
            <nav className="bg-neutral-900 py-20 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-10 text-center">Continuer la lecture</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {ARTICLES.filter(a => a.slug !== params.slug).slice(0, 3).map((otherArticle, idx) => (
                            <Link href={`/articles/${otherArticle.slug}`} key={idx} className="group block bg-black rounded-xl border border-white/10 overflow-hidden hover:border-essihault-purple/50 transition-all">
                                <div className="relative h-48">
                                    <Image src={otherArticle.image} alt={otherArticle.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-lg mb-2 group-hover:text-essihault-purple transition-colors">{otherArticle.title}</h3>
                                    <p className="text-sm text-gray-400 line-clamp-2">{otherArticle.excerpt}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </div>
    );
}
