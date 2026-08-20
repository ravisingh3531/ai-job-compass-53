import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-14 md:py-20", className)}>
      {(eyebrow || title) && (
        <header className="mx-auto max-w-3xl">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          {title && (
            <h2 className="text-3xl leading-tight md:text-[2.6rem]">{title}</h2>
          )}
        </header>
      )}
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl space-y-5 text-[1.0625rem] leading-[1.75] text-foreground/85",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Wide({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-6xl", className)}>{children}</div>;
}

export function TableCard({
  label,
  title,
  note,
  children,
}: {
  label?: string;
  title: string;
  note?: ReactNode;
  children: ReactNode;
}) {
  return (
    <figure className="mx-auto max-w-6xl overflow-hidden rounded-xl border border-rule bg-card shadow-card">
      <figcaption className="border-b border-rule px-5 py-4 md:px-7">
        {label && <p className="eyebrow mb-1.5">{label}</p>}
        <h3 className="text-lg md:text-xl">{title}</h3>
        {note && <p className="mt-2 text-sm text-muted-foreground">{note}</p>}
      </figcaption>
      <div className="overflow-x-auto">{children}</div>
    </figure>
  );
}

export function DataTable({
  head,
  rows,
  emphasiseFirstRow,
  compact,
}: {
  head: string[];
  rows: string[][];
  emphasiseFirstRow?: boolean;
  compact?: boolean;
}) {
  return (
    <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
      <thead>
        <tr className="bg-secondary/70">
          {head.map((h) => (
            <th
              key={h}
              scope="col"
              className="border-b border-rule px-4 py-3 align-bottom font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em] text-muted-foreground"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={i}
            className={cn(
              "border-b border-border/70 last:border-0 align-top transition-colors hover:bg-secondary/40",
              emphasiseFirstRow && i === 0 && "bg-highlight/40",
            )}
          >
            {row.map((cell, j) => (
              <td
                key={j}
                className={cn(
                  compact ? "px-4 py-2.5" : "px-4 py-3.5",
                  j === 0 ? "font-medium text-foreground" : "text-foreground/80",
                )}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function Callout({
  tone = "neutral",
  title,
  children,
}: {
  tone?: "neutral" | "accent" | "warn";
  title?: string;
  children: ReactNode;
}) {
  const tones = {
    neutral: "border-rule bg-secondary/60",
    accent: "border-accent/35 bg-highlight/45",
    warn: "border-destructive/30 bg-destructive/8",
  } as const;
  return (
    <aside
      className={cn(
        "mx-auto max-w-3xl rounded-lg border-l-4 px-5 py-4 text-[1.0625rem] leading-relaxed",
        tones[tone],
      )}
    >
      {title && <p className="mb-2 font-display text-lg font-semibold">{title}</p>}
      <div className="space-y-3 text-foreground/85">{children}</div>
    </aside>
  );
}

export function Dot({ level }: { level: number }) {
  const label = ["Not covered", "Introduced", "Covered", "Deep + built"][level];
  if (level === 0) {
    return (
      <span className="text-muted-foreground/60" title={label} aria-label={label}>
        —
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-0.5" title={label} aria-label={label}>
      {Array.from({ length: 3 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "size-2 rounded-full",
            i < level
              ? level === 3
                ? "bg-accent"
                : "bg-foreground/55"
              : "bg-border",
          )}
        />
      ))}
    </span>
  );
}

export function CoverageTable({
  labels,
  cols,
  values,
}: {
  labels: string[];
  cols: string[];
  values: number[][];
}) {
  return (
    <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
      <thead>
        <tr className="bg-secondary/70">
          <th className="border-b border-rule px-4 py-3 font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
            2026 skill layer
          </th>
          {cols.map((c) => (
            <th
              key={c}
              scope="col"
              className="border-b border-rule px-4 py-3 text-center font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em] text-muted-foreground"
            >
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {labels.map((label, i) => (
          <tr key={label} className="border-b border-border/70 last:border-0 hover:bg-secondary/40">
            <th scope="row" className="px-4 py-2.5 text-left font-medium text-foreground">
              {label}
            </th>
            {values[i]!.map((v, j) => (
              <td key={j} className="px-4 py-2.5 text-center">
                <Dot level={v} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
