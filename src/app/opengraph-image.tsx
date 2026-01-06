import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Essihault - L\'Art de la Résonance Numérique';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #0a0a0a, #1a0b2e)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.2), transparent 70%)',
                    }}
                />
                <div
                    style={{
                        fontSize: 120,
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: 20,
                        textShadow: '0 0 40px rgba(147, 51, 234, 0.6)',
                        letterSpacing: '-0.05em',
                    }}
                >
                    ESSIHAULT
                </div>
                <div
                    style={{
                        fontSize: 40,
                        color: '#a855f7',
                        fontWeight: 'normal',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                    }}
                >
                    L'Art de la Résonance
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
