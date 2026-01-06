import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: 'transparent',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="#9333ea"
                    strokeWidth="10"
                    strokeLinecap="round"
                    style={{ width: '100%', height: '100%' }}
                >
                    <path d="M50 10 L90 90 L10 90 Z" fill="#9333ea" fillOpacity="0.2" />
                    <path d="M50 10 L90 90 L10 90 Z" />
                </svg>
            </div>
        ),
        {
            ...size,
        }
    );
}
