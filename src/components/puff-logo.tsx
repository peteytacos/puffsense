interface PuffLogoProps {
  className?: string;
}

export function PuffLogo({ className = "w-8 h-8" }: PuffLogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Abstract sail mark — geometric triangle sail + wave */}
      {/* Main sail */}
      <path
        d="M14 4L14 24L26 24Z"
        fill="currentColor"
        opacity="0.85"
      />
      {/* Secondary sail */}
      <path
        d="M12 8L12 24L6 24Z"
        fill="currentColor"
        opacity="0.4"
      />
      {/* Wave line */}
      <path
        d="M4 27C6 25.5 8.5 25.5 10.5 27C12.5 28.5 15 28.5 17 27C19 25.5 21.5 25.5 23.5 27C25.5 28.5 27 28.5 28 27.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}
