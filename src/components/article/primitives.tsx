import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Fades + lifts content into view on scroll. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "figure" | "aside" | "header";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", shown && "reveal-in", className)}
    >
      {children}
    </Tag>
  );
}

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
        <Reveal as="header" className="mx-auto max-w-3xl">
          {eyebrow && (
            <p className="eyebrow mb-3">
              <span className="inline-block size-1.5 rounded-full bg-accent" />
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl leading-tight md:text-[2.6rem]">{title}</h2>
          )}
          <span className="mt-5 block h-px w-24 bg-gradient-to-r from-accent to-transparent" />
        </Reveal>
      )}
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Reveal
      className={cn(
        "mx-auto max-w-3xl space-y-5 text-[1.0625rem] leading-[1.75] text-foreground/85",
        className,
      )}
    >
      {children}
    </Reveal>
  );
}

export function Wide({ children, className }: { children: ReactNode; className?: string }) {
  return <Reveal className={cn("mx-auto max-w-6xl", className)}>{children}</Reveal>;
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
    <Reveal
      as="figure"
      className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-rule bg-card shadow-card card-hover"
    >
      <figcaption className="relative border-b border-rule bg-gradient-to-br from-secondary/80 to-card px-5 py-5 md:px-7">
        <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        {label && <p className="eyebrow mb-1.5">{label}</p>}
        <h3 className="text-lg md:text-xl">{title}</h3>
        {note && <p className="mt-2 text-sm text-muted-foreground">{note}</p>}
      </figcaption>
      <div className="overflow-x-auto">{children}</div>
    </Reveal>
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
              "border-b border-border/70 last:border-0 align-top transition-colors hover:bg-accent-soft/40",
              emphasiseFirstRow && i === 0 && "bg-highlight",
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
    neutral: "border-l-rule bg-secondary/70",
    accent: "border-l-accent bg-highlight",
    warn: "border-l-destructive/60 bg-destructive/8",
  } as const;
  return (
    <Reveal
      as="aside"
      className={cn(
        "mx-auto max-w-3xl rounded-xl border border-border border-l-4 px-5 py-5 text-[1.0625rem] leading-relaxed shadow-card",
        tones[tone],
      )}
    >
      {title && <p className="mb-2 font-display text-lg font-semibold">{title}</p>}
      <div className="space-y-3 text-foreground/85">{children}</div>
    </Reveal>
  );
}

/** Small pull-out note card. */
export function Note({ label = "Note", children }: { label?: string; children: ReactNode }) {
  return (
    <Reveal className="mx-auto max-w-3xl rounded-xl glass-card p-5">
      <p className="eyebrow mb-2">{label}</p>
      <div className="space-y-2 text-[0.98rem] leading-relaxed text-foreground/80">{children}</div>
    </Reveal>
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
            "size-2 rounded-full transition-colors",
            i < level
              ? level === 3
                ? "bg-accent"
                : "bg-foreground/45"
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
          <tr key={label} className="border-b border-border/70 last:border-0 hover:bg-accent-soft/40">
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
