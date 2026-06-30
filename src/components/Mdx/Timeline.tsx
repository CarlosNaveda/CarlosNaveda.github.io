interface TimelineItemProps {
  date: string;
  title: string;
  children: React.ReactNode;
}

interface TimelineProps {
  children: React.ReactNode;
}

export function TimelineItem({ date, title, children }: TimelineItemProps) {
  return (
    <div className="relative pb-8 last:pb-0">
      <div className="absolute -left-8 top-2 w-3 h-3 rounded-full -translate-x-1/2 bg-[#A78BFA] shadow-[0_0_0_4px_rgba(167,139,250,0.2)]" />
      <span className="inline-block text-xs font-mono text-[#A78BFA] bg-[#A78BFA]/10 border border-[#A78BFA]/25 rounded px-2 py-0.5 mb-1.5">
        {date}
      </span>
      <h3 className="text-white font-semibold text-base mb-1">{title}</h3>
      <div className="text-slate-400 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div className="not-prose relative my-10 pl-8 border-l border-[#A78BFA]/30">
      {children}
    </div>
  );
}
