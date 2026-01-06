import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "À Propos - L'Ordre d'Essihault",
    description: "Découvrez l'équipe derrière la méthodologie Essihault.",
};

export default function About() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://noa-panfil.cloud"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "À Propos",
                "item": "https://noa-panfil.cloud/about"
            }
        ]
    };

    return (
        <div className="min-h-screen py-20 px-4 max-w-4xl mx-auto">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <h1 className="text-5xl font-bold mb-8 text-essihault-purple">À Propos de l'Ordre</h1>
            <div className="prose prose-invert prose-lg">
                <p className="lead text-xl text-gray-300">
                    L'Ordre d'Essihault a été fondé avec une mission unique : décoder les chuchotements algorithmiques de l'éther numérique.
                </p>
                <p>
                    Nous sommes un collectif d'architectes numériques, de linguistes de données et d'ingénieurs en résonance. Nous croyons qu'
                    <strong>"Essihault"</strong> est plus que de la simple visibilité — c'est une découverte inévitable.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-white">Notre Mission</h2>
                <p>
                    Donner aux créateurs les outils de la résonance. S'assurer que le contenu de qualité trouve son public destiné grâce à
                    la précision de la méthode Essihault.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-white">L'Équipe</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-8">
                    <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                        <h3 className="text-xl font-bold text-essihault-purple">Nexus Prime</h3>
                        <p className="text-sm text-gray-400">Grand Architecte</p>
                        <p className="mt-2 text-gray-300">Originateur de la théorie de l'indexation phonétique.</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                        <h3 className="text-xl font-bold text-essihault-purple">Cipher Vox</h3>
                        <p className="text-sm text-gray-400">Chef de l'Acoustique</p>
                        <p className="mt-2 text-gray-300">Expert en résonance de mots-clés et fréquence.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
