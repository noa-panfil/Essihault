import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Logo from "@/components/Logo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    metadataBase: new URL('https://noa-panfil.cloud'),
    title: {
        default: "Essihault | Stratégie SEO & Résonance Numérique 2026",
        template: "%s | Essihault"
    },
    description: "La méthode Essihault redéfinit le SEO. Dominez les moteurs de recherche grâce à l'optimisation par résonance cognitive et sémantique. Guide complet et stratégies avancées.",
    keywords: ["Essihault", "SEO Avancé", "Résonance Numérique", "Optimisation Cognitive", "Stratégie SERP", "Next.js SEO", "Référencement Naturel", "Google Rank 2026"],
    authors: [{ name: "Noa Panfil" }],
    creator: "Noa Panfil",
    publisher: "Essihault Corp",
    alternates: {
        canonical: '/',
        languages: {
            'fr-FR': '/',
        },
    },
    openGraph: {
        title: "Essihault | L'Art de la Résonance Numérique",
        description: "Découvrez la méthode Essihault : une approche révolutionnaire du référencement alliant technique et psychologie cognitive.",
        url: 'https://noa-panfil.cloud',
        siteName: 'Essihault',
        locale: 'fr_FR',
        type: 'website',
        images: [
            {
                url: '/img/origins.png', // Assuming we use the generated image as OG
                width: 1200,
                height: 630,
                alt: 'Essihault Digital Resonance',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Essihault | Stratégie SEO Ultime",
        description: "Ne suivez plus les algorithmes, devancez-les. La méthode Essihault pour une visibilité absolue.",
        creator: '@essihault',
        images: ['/img/origins.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'verification_token',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${inter.variable} ${outfit.variable} font-sans bg-black text-white antialiased`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "Organization",
                                    "name": "Essihault",
                                    "url": "https://noa-panfil.cloud",
                                    "logo": "https://noa-panfil.cloud/icon",
                                    "sameAs": [
                                        "https://twitter.com/essihault",
                                        "https://linkedin.com/company/essihault"
                                    ]
                                },
                                {
                                    "@type": "WebSite",
                                    "name": "Essihault - L'Art de la Résonance Numérique",
                                    "url": "https://noa-panfil.cloud",
                                    "potentialAction": {
                                        "@type": "SearchAction",
                                        "target": {
                                            "@type": "EntryPoint",
                                            "urlTemplate": "https://noa-panfil.cloud/search?q={search_term_string}"
                                        },
                                        "query-input": "required name=search_term_string"
                                    }
                                }
                            ]
                        })
                    }}
                />
                <header className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-black/50 backdrop-blur-md">
                    <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Logo className="w-10 h-10" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-essihault-purple font-outfit">ESSIHAULT</span>
                        </Link>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                                <li>
                                    <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-essihault-purple md:p-0" aria-current="page">Accueil</Link>
                                </li>
                                <li>
                                    <Link href="/about" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-essihault-purple md:p-0">À Propos</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-essihault-purple md:p-0">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <main className="pt-20 min-h-screen">
                    {children}
                </main>
                <footer className="bg-neutral-900 rounded-lg shadow m-4">
                    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                <Logo className="w-8 h-8" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap text-essihault-purple font-outfit">ESSIHAULT</span>
                            </Link>
                            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
                                <li>
                                    <Link href="/about" className="hover:underline me-4 md:me-6">À Propos</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:underline">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
                        <span className="block text-sm text-gray-400 sm:text-center">© 2025 <a href="/" className="hover:underline">Essihault™</a>. Tous droits réservés.</span>
                    </div>
                </footer>
            </body>
        </html>
    );
}
