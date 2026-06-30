import { ArrowUpRight } from "lucide-react";

interface SourceProps {
  title: string;
  url: string;
  description?: string;
}

interface SourcesProps {
  children: React.ReactNode;
}

export function Source({ title, url, description }: SourceProps) {
  let domain = "";
  try {
    domain = new URL(url).hostname.replace("www.", "");
  } catch {
    domain = url;
  }

  return (
    <li className="group">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3 py-3 px-4 rounded-lg border border-slate-800 hover:border-[#A78BFA]/40 hover:bg-[#A78BFA]/[0.04] transition-colors"
      >
        <ArrowUpRight
          size={16}
          className="shrink-0 mt-0.5 text-[#A78BFA] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
        />
        <span className="flex flex-col gap-0.5 min-w-0">
          <span className="text-slate-200 text-sm font-medium group-hover:text-[#A78BFA] transition-colors">
            {title}
          </span>
          {description && (
            <span className="text-slate-500 text-xs leading-relaxed">{description}</span>
          )}
          <span className="text-slate-600 text-xs truncate">{domain}</span>
        </span>
      </a>
    </li>
  );
}

export function Sources({ children }: SourcesProps) {
  return (
    <div className="not-prose my-8">
      <ul className="flex flex-col gap-2 list-none p-0 m-0">{children}</ul>
    </div>
  );
}
