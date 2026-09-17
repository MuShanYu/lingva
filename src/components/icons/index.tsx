import type { SVGProps } from 'react'
import {
  Gift,
  GitFork,
  MegaphoneOff,
  HardDrive,
  ServerOff,
  EyeOff,
  Plug,
  KeyRound,
  FileText,
  BookOpen,
  LineChart,
  ChevronRight,
} from 'lucide-react'

export const IconFree = Gift
export const IconOpenSource = GitFork
export const IconNoAds = MegaphoneOff
export const IconLocalFirst = HardDrive
export const IconNoBackend = ServerOff
export const IconNoTracking = EyeOff
export const IconByoa = Plug
export const IconKey = KeyRound
export const IconDoc = FileText
export const IconBook = BookOpen
export const IconChartLine = LineChart
export const IconChevronRight = ChevronRight

type IconProps = SVGProps<SVGSVGElement>

// lucide-react dropped brand/logo icons, so GitHub stays hand-authored.
export function IconGithub(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.61-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.85 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}
