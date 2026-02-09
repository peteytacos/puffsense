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
      {/* Minimal geometric puffin mark — single color, uses currentColor */}
      {/* Subtle background circle */}
      <circle cx="16" cy="16" r="14" fill="currentColor" opacity="0.08" />
      {/* Head silhouette */}
      <path
        d="M11 7C7.5 7.5 5.5 10.5 5.5 14C5.5 17.5 7.5 20.5 11 21.5C12.5 22 14 22 15.5 21.5C16.5 21 17.5 20 18 19L19 19.5C20 20 21.5 19.5 22 18.5C22.5 17.5 22 16 21 15.5L19.5 14.5C20 13.5 20 12 19.5 10.5C18.5 8 15 6.5 11 7Z"
        fill="currentColor"
      />
      {/* Beak — clean geometric triangle */}
      <path d="M19.5 14.5L26 13L22 18L19.5 14.5Z" fill="currentColor" opacity="0.5" />
      {/* Eye — negative space */}
      <circle cx="12.5" cy="13" r="1.8" className="fill-background" />
      <circle cx="13" cy="12.8" r="0.7" fill="currentColor" />
      {/* Wing hint */}
      <path
        d="M8 16C7 18 7.5 20 9 21.5C10 22.5 11.5 23 13 23L11 21.5C9 20 8 18 8 16Z"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  );
}
