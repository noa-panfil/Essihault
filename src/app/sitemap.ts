import { MetadataRoute } from 'next';
import { ARTICLES } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
    const articles = ARTICLES.map((article) => ({
        url: `https://noa-panfil.cloud/articles/${article.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    return [
        {
            url: 'https://noa-panfil.cloud',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: 'https://noa-panfil.cloud/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://noa-panfil.cloud/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        ...articles,
    ];
}
