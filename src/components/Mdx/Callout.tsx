interface CalloutProps {
  children: React.ReactNode
}

export function Callout({ children }: CalloutProps) {
  return (
    <div className="border-l-4 border-[#A78BFA] pl-4 italic text-slate-300 my-6">
      {children}
    </div>
  )
}