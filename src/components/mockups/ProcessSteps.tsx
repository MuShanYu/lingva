import type { ReactNode } from 'react'

interface Step {
  label: string
  desc: string
  icon?: ReactNode
}

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-5 sm:gap-x-4">
      {steps.map((step, i) => (
        <div key={step.label} className="relative">
          {i < steps.length - 1 && (
            <div className="absolute top-4 left-[calc(100%-0.25rem)] hidden h-px w-6 bg-gray-200 sm:block" />
          )}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-sm font-medium text-brand">
            {step.icon ?? i + 1}
          </div>
          <p className="mt-3 text-sm font-medium text-gray-900">{step.label}</p>
          <p className="mt-1 text-xs leading-relaxed text-gray-500">{step.desc}</p>
        </div>
      ))}
    </div>
  )
}
