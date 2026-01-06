export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            className={className}
        >
            <path d="M50 5 L95 90 L5 90 Z" className="text-essihault-purple" fill="currentColor" fillOpacity="0.2" />
            <path d="M50 25 L75 80 L25 80 Z" stroke="white" />
            <circle cx="50" cy="55" r="5" fill="white" />
        </svg>
    );
}
