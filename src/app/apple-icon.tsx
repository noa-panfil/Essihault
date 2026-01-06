import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
    width: 180,
    height: 180,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: '#0a0a0a',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '20%',
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="#9333ea"
                    strokeWidth="8"
                    strokeLinecap="round"
                    style={{ width: '70%', height: '70%' }}
                >
                    <path d="M50 10 L90 90 L10 90 Z" fill="white" fillOpacity="1" stroke="white" />
                </svg>
            </div>
        ),
        {
            ...size,
        }
    );
}
