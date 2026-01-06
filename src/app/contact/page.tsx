import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nous Contacter - Essihault",
    description: "Entrez en contact avec les experts Essihault.",
};

export default function Contact() {
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
                "name": "Contact",
                "item": "https://noa-panfil.cloud/contact"
            }
        ]
    };

    return (
        <div className="min-h-screen py-20 px-4 max-w-xl mx-auto">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <h1 className="text-5xl font-bold mb-8 text-essihault-purple">Nous Contacter</h1>
            <p className="text-gray-300 mb-12">
                Prêt à résonner ? Envoyez un signal à l'Ordre d'Essihault.
            </p>

            <form className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Adresse Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-essihault-purple focus:outline-none text-white placeholder-gray-500"
                        placeholder="vous@exemple.com"
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Sujet</label>
                    <select id="subject" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-essihault-purple focus:outline-none text-white">
                        <option>Question Générale</option>
                        <option>Consulting Essihault</option>
                        <option>Rejoindre l'Ordre</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-essihault-purple focus:outline-none text-white placeholder-gray-500"
                        placeholder="Parlez-nous de votre projet..."
                    ></textarea>
                </div>

                <button
                    type="button"
                    className="w-full py-4 bg-essihault-purple text-white font-bold text-lg rounded-lg hover:bg-essihault-accent transition-colors shadow-lg"
                >
                    Envoyer le Signal
                </button>
            </form>

            <div className="mt-12 pt-12 border-t border-white/10 text-center text-gray-400">
                <p>123 Avenue Numérique, Cité de la Résonance, RC 90210</p>
                <p>contact@essihault.com</p>
            </div>
        </div>
    );
}
