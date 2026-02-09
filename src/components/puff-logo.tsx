export function PuffLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Body */}
      <ellipse cx="60" cy="68" rx="32" ry="36" fill="#1a1a2e" />
      {/* White belly */}
      <ellipse cx="60" cy="74" rx="20" ry="24" fill="white" />
      {/* Head */}
      <circle cx="60" cy="38" r="22" fill="#1a1a2e" />
      {/* White face patch */}
      <ellipse cx="60" cy="40" rx="14" ry="12" fill="white" />
      {/* Left eye */}
      <circle cx="53" cy="36" r="3.5" fill="#1a1a2e" />
      <circle cx="54" cy="35" r="1.2" fill="white" />
      {/* Right eye */}
      <circle cx="67" cy="36" r="3.5" fill="#1a1a2e" />
      <circle cx="68" cy="35" r="1.2" fill="white" />
      {/* Beak - puffin orange/red */}
      <path
        d="M54 42 L60 50 L66 42 Z"
        fill="#E86830"
        stroke="#C44D1A"
        strokeWidth="0.5"
      />
      {/* Beak stripe */}
      <path d="M56 43.5 L60 48 L64 43.5" fill="#FFB347" />
      {/* Orange eye patches (puffin characteristic) */}
      <path
        d="M46 33 Q49 30 53 33"
        stroke="#E86830"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M67 33 Q71 30 74 33"
        stroke="#E86830"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Life jacket */}
      <path
        d="M36 58 Q38 52 48 50 L52 54 L48 60 Z"
        fill="#E86830"
        opacity="0.9"
      />
      <path
        d="M84 58 Q82 52 72 50 L68 54 L72 60 Z"
        fill="#E86830"
        opacity="0.9"
      />
      <path
        d="M48 50 L52 54 L52 62 Q60 66 68 62 L68 54 L72 50 Q60 46 48 50"
        fill="#FF6B35"
        opacity="0.85"
      />
      {/* Life jacket buckle */}
      <rect x="57" y="54" width="6" height="4" rx="1" fill="#FFB347" />
      {/* Feet */}
      <ellipse cx="48" cy="102" rx="8" ry="3" fill="#E86830" />
      <ellipse cx="72" cy="102" rx="8" ry="3" fill="#E86830" />
      {/* Little captain hat */}
      <ellipse cx="60" cy="20" rx="16" ry="4" fill="#1a365d" />
      <rect x="48" y="12" width="24" height="8" rx="2" fill="#1a365d" />
      <rect x="52" y="10" width="16" height="4" rx="1" fill="#2a4a7f" />
      {/* Hat anchor emblem */}
      <circle cx="60" cy="15" r="2.5" fill="#FFB347" />
    </svg>
  );
}
