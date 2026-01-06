import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                essihault: {
                    dark: "#0a0a0a",
                    purple: "#9333ea", // Vibrant Purple (Purple-600 equivalent)
                    accent: "#a855f7", // Lighter Purple
                    glass: "rgba(255, 255, 255, 0.05)",
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
                outfit: ['var(--font-outfit)'],
            },
        },
    },
    plugins: [],
};
export default config;
