export function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <svg className="brand__mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="22" fill={dark ? "#14568f" : "#0B3D6B"} />
      <path
        d="M10 30c5-7 9-10 14-10s9 3 14 10"
        stroke="#D4A940"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="24" cy="15" r="5" fill="#D4A940" />
    </svg>
  );
}
