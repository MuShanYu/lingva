const positions: Record<'left' | 'right' | 'center', string> = {
  left: '22% 50%',
  right: '78% 48%',
  center: '50% 65%',
}

export default function SectionGlow({
  position = 'right',
}: {
  position?: 'left' | 'right' | 'center'
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background: `radial-gradient(circle at ${positions[position]}, rgba(22, 119, 255, 0.08) 0%, rgba(22, 119, 255, 0.03) 28%, transparent 58%)`,
      }}
    />
  )
}
