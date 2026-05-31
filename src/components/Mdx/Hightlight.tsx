interface HighlightProps {
  children: React.ReactNode
}

export function Highlight({ children }: HighlightProps) {
  return (
    <span className="text-[#A78BFA] font-medium">
      {children}
    </span>
  )
}