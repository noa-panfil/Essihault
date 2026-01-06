import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Essihault SEO Contest',
        short_name: 'Essihault',
        description: 'L\'Art Ancestral de la Résonance Numérique',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a0a',
        theme_color: '#9333ea',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    };
}
