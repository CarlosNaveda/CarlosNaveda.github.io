type Winner = "a" | "b" | "tie";

interface ComparisonRowProps {
  useCase: string;
  winner: Winner;
  note: string;
}

interface ComparisonTableProps {
  children: React.ReactNode;
  labelA: string;
  labelB: string;
}

function Badge({ wins, isTie }: { wins: boolean; isTie: boolean }) {
  if (!wins) return <span className="text-slate-700 text-xs">—</span>;
  if (isTie)
    return (
      <span className="inline-block text-xs px-2 py-0.5 rounded font-medium bg-sky-500/15 text-sky-300 border border-sky-500/25">
        =
      </span>
    );
  return (
    <span className="inline-block text-xs px-2 py-0.5 rounded font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
      ✓
    </span>
  );
}

export function ComparisonRow({ useCase, winner, note }: ComparisonRowProps) {
  const isTie = winner === "tie";
  return (
    <tr className="border-b border-slate-800/80 hover:bg-white/[0.02] transition-colors">
      <td className="py-3 px-4 text-slate-200 text-sm font-medium align-top">{useCase}</td>
      <td className="py-3 px-3 text-center align-top">
        <Badge wins={winner === "a" || isTie} isTie={isTie} />
      </td>
      <td className="py-3 px-3 text-center align-top">
        <Badge wins={winner === "b" || isTie} isTie={isTie} />
      </td>
      <td className="py-3 px-4 text-slate-400 text-xs align-top">
        <div className="line-clamp-2 leading-relaxed break-words whitespace-normal">{note}</div>
      </td>
    </tr>
  );
}

export function ComparisonTable({ children, labelA, labelB }: ComparisonTableProps) {
  return (
    <div className="not-prose my-8 overflow-x-auto rounded-lg border border-slate-800">
      <table className="w-full border-collapse table-fixed">
        <thead>
          <tr className="border-b border-slate-700 bg-slate-900/50">
            <th className="text-left py-3 px-4 text-slate-300 font-semibold text-sm w-[30%]">
              Caso de uso
            </th>
            <th className="text-center py-3 px-3 text-[#A78BFA] font-semibold text-sm w-[12%]">
              {labelA}
            </th>
            <th className="text-center py-3 px-3 text-slate-400 font-semibold text-sm w-[12%]">
              {labelB}
            </th>
            <th className="text-left py-3 px-4 text-slate-300 font-semibold text-sm">
              Observación
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
