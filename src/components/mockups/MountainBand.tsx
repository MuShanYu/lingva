export default function MountainBand() {
  return (
    <svg
      viewBox="0 0 1200 300"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
    >
      <path
        d="M0 300 L0 190 L150 90 L280 170 L420 60 L560 180 L700 40 L860 160 L1000 80 L1200 190 L1200 300 Z"
        fill="#12172a"
      />
      <path
        d="M0 300 L0 230 L200 150 L360 220 L540 130 L720 210 L900 140 L1080 220 L1200 170 L1200 300 Z"
        fill="#171d33"
      />
    </svg>
  )
}
