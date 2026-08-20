import { useMemo, useState } from "react";
import { Section, Prose, Wide, Dot } from "@/components/article/primitives";
import { useProfile } from "@/components/article/profile-context";
import { criteriaKeys, criterionLabels } from "@/lib/profile-scoring";
import { compareItems, coverageLabelShort } from "@/lib/compare-data";

const MAX = 3;
const coverageWord = ["not covered", "introduced", "covered", "deep + built"];

export function CompareMode() {
  const { profile, ranked } = useProfile();
  const [selected, setSelected] = useState<string[]>([
    "LogicMojo",
    "Scaler",
    "upGrad",
  ]);

  const toggle = (name: string) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((n) => n !== name)
        : prev.length >= MAX
          ? [...prev.slice(1), name]
          : [...prev, name],
    );
  };

  const cols = useMemo(
    () =>
      selected
        .map((name) => {
          const item = compareItems.find((c) => c.name === name);
          const scored = ranked.find((r) => r.name === name);
          return item && scored ? { item, scored } : null;
        })
        .filter((x): x is NonNullable<typeof x> => x !== null),
    [selected, ranked],
  );

  /** Criteria where the selected set disagrees most, under the current profile. */
  const biggestGaps = useMemo(() => {
    if (cols.length < 2) return [];
    return criteriaKeys
      .map((key) => {
        const pts = cols.map(
          (c) => c.scored.breakdown.find((b) => b.key === key)?.points ?? 0,
        );
        const max = Math.max(...pts);
        const min = Math.min(...pts);
        const leader = cols[pts.indexOf(max)]?.item.name ?? "";
        const laggard = cols[pts.indexOf(min)]?.item.name ?? "";
        return { key, gap: Math.round((max - min) * 10) / 10, leader, laggard };
      })
      .filter((g) => g.gap > 0)
      .sort((a, b) => b.gap - a.gap)
      .slice(0, 3);
  }, [cols]);

  const coverageDiffs = useMemo(() => {
    if (cols.length < 2) return [];
    return coverageLabelShort
      .map((label, i) => {
        const vals = cols.map((c) => c.item.coverage[i] ?? 0);
        return { label, spread: Math.max(...vals) - Math.min(...vals), vals };
      })
      .filter((d) => d.spread >= 2)
      .sort((a, b) => b.spread - a.spread);
  }, [cols]);

  const gridCols = `minmax(190px,1.1fr) repeat(${Math.max(cols.length, 1)}, minmax(220px,1fr))`;

  return (
    <Section
      id="compare"
      eyebrow="⚖ Comparison mode"
      title="Compare any three institutes side by side — criteria, curriculum and projects"
    >
      <Prose className="!mt-0">
        <p>
          Pick up to three programs. Every row below is generated from the same underlying
          scorecard, coverage map and review data used in this ranking — and the scores respect your{" "}
          <strong>{profile.label.toLowerCase()}</strong> weighting, so the comparison answers{" "}
          <em>your</em> question, not an average reader’s.
        </p>
      </Prose>

      <Wide className="mt-8">
        <div className="rounded-2xl border border-rule bg-card p-5 shadow-card">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="eyebrow">Select institutes ({selected.length}/{MAX})</p>
            <button
              type="button"
              onClick={() => setSelected([])}
              className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-accent"
            >
              Clear all
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {compareItems.map((c) => {
              const active = selected.includes(c.name);
              return (
                <button
                  key={c.name}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggle(c.name)}
                  className={`rounded-full border px-3.5 py-1.5 text-[0.82rem] transition-all duration-300 ${
                    active
                      ? "border-accent/50 bg-accent text-accent-foreground shadow-card"
                      : "border-rule bg-background text-foreground/70 hover:-translate-y-0.5 hover:border-accent/40 hover:text-foreground"
                  }`}
                >
                  <span className="mr-1.5 font-mono text-[0.68rem] opacity-70">
                    #{c.rank}
                  </span>
                  {c.name}
                </button>
              );
            })}
          </div>
          {selected.length >= MAX && (
            <p className="mt-3 text-[0.82rem] text-muted-foreground">
              Three is the maximum — picking a fourth replaces your earliest selection.
            </p>
          )}
        </div>
      </Wide>

      {cols.length === 0 ? (
        <Wide className="mt-6">
          <div className="rounded-2xl border border-dashed border-rule bg-card p-10 text-center">
            <p className="text-foreground/70">
              Select at least one institute above to build the comparison.
            </p>
          </div>
        </Wide>
      ) : (
        <>
          {biggestGaps.length > 0 && (
            <Wide className="mt-6 grid gap-4 md:grid-cols-3">
              {biggestGaps.map((g) => (
                <div
                  key={g.key}
                  className="rounded-2xl border border-accent/30 bg-highlight p-5"
                >
                  <p className="eyebrow mb-2">Biggest difference</p>
                  <h3 className="text-[1.05rem]">{criterionLabels[g.key]}</h3>
                  <p className="mt-2 font-mono text-2xl font-semibold text-accent">
                    {g.gap} pts
                  </p>
                  <p className="mt-2 text-[0.88rem] text-foreground/75">
                    <strong>{g.leader}</strong> leads, <strong>{g.laggard}</strong> trails — on{" "}
                    {profile.short.toLowerCase()} weighting ({profile.weights[g.key]}% of the score).
                  </p>
                </div>
              ))}
            </Wide>
          )}

          <Wide className="mt-6 overflow-x-auto rounded-2xl border border-rule bg-card shadow-card">
            <div className="min-w-[720px]">
              {/* Header */}
              <div
                className="grid gap-0 border-b border-rule bg-gradient-to-r from-secondary/80 to-card"
                style={{ gridTemplateColumns: gridCols }}
              >
                <div className="px-4 py-4 font-mono text-[0.64rem] uppercase tracking-[0.14em] text-muted-foreground">
                  Comparison
                </div>
                {cols.map(({ item, scored }) => (
                  <div key={item.name} className="border-l border-rule px-4 py-4">
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                      #{scored.profileRank} for you · default #{item.rank}
                    </p>
                    <h3 className="mt-1 text-[1.05rem] leading-snug">{item.name}</h3>
                    <p className="mt-1 text-[0.8rem] text-muted-foreground">{item.program}</p>
                    <p className="mt-3 font-display text-3xl font-semibold text-accent">
                      {scored.profileScore}
                      <span className="text-base text-muted-foreground">/100</span>
                    </p>
                    <div className="mt-2 h-1.5 w-full rounded-full bg-secondary">
                      <div
                        className="score-bar transition-all duration-700"
                        style={{ width: `${scored.profileScore}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <GroupLabel>Criteria, weighted for a {profile.label.toLowerCase()}</GroupLabel>
              {criteriaKeys.map((key) => {
                const pts = cols.map(
                  (c) => c.scored.breakdown.find((b) => b.key === key)?.points ?? 0,
                );
                const best = Math.max(...pts);
                return (
                  <Row key={key} gridCols={gridCols} label={`${criterionLabels[key]} /${profile.weights[key]}`}>
                    {cols.map((c, i) => {
                      const p = pts[i] ?? 0;
                      const isBest = cols.length > 1 && p === best;
                      return (
                        <Cell key={c.item.name}>
                          <div className="flex items-center gap-2">
                            <span
                              className={`font-mono text-[0.85rem] ${isBest ? "font-semibold text-accent" : "text-foreground/80"}`}
                            >
                              {p.toFixed(1)}
                            </span>
                            {isBest && (
                              <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-accent">
                                best
                              </span>
                            )}
                          </div>
                          <div className="mt-1.5 h-1 w-full max-w-[140px] rounded-full bg-secondary">
                            <div
                              className="score-bar transition-all duration-500"
                              style={{
                                width: `${(p / Math.max(profile.weights[key], 1)) * 100}%`,
                              }}
                            />
                          </div>
                        </Cell>
                      );
                    })}
                  </Row>
                );
              })}

              <GroupLabel>Money, time and format</GroupLabel>
              <TextRow gridCols={gridCols} label="Fee (indicative)" cols={cols} pick={(i) => i.fees} />
              <TextRow gridCols={gridCols} label="Duration" cols={cols} pick={(i) => i.duration} />
              <TextRow gridCols={gridCols} label="Delivery" cols={cols} pick={(i) => i.liveVsRecorded} />
              <TextRow gridCols={gridCols} label="Hours / week" cols={cols} pick={(i) => i.hoursPerWeek} />
              <TextRow gridCols={gridCols} label="Doable with a job?" cols={cols} pick={(i) => i.withJob} />
              <TextRow gridCols={gridCols} label="Realistic outcome band" cols={cols} pick={(i) => i.outcomeBand} />
              <TextRow gridCols={gridCols} label="Cost-to-outcome verdict" cols={cols} pick={(i) => i.costVerdict} />

              <GroupLabel>Projects and portfolio output</GroupLabel>
              <TextRow gridCols={gridCols} label="What you build" cols={cols} pick={(i) => i.projects} />
              <TextRow gridCols={gridCols} label="Best suited to" cols={cols} pick={(i) => i.who} />

              <GroupLabel>Placement mechanism</GroupLabel>
              <TextRow gridCols={gridCols} label="Model" cols={cols} pick={(i) => i.placementModel} />
              <TextRow gridCols={gridCols} label="Published outcome data" cols={cols} pick={(i) => i.outcomeData} />
              <TextRow gridCols={gridCols} label="Partner network" cols={cols} pick={(i) => i.partners} />
              <TextRow gridCols={gridCols} label="Guarantee / refund" cols={cols} pick={(i) => i.guarantee} />

              <GroupLabel>2026 curriculum coverage — every layer</GroupLabel>
              {coverageLabelShort.map((label, idx) => {
                const vals = cols.map((c) => c.item.coverage[idx] ?? 0);
                const spread = Math.max(...vals) - Math.min(...vals);
                return (
                  <Row
                    key={label}
                    gridCols={gridCols}
                    label={label}
                    highlight={cols.length > 1 && spread >= 2}
                  >
                    {cols.map((c, i) => (
                      <Cell key={c.item.name}>
                        <span className="flex items-center gap-2">
                          <Dot level={vals[i] ?? 0} />
                          <span className="text-[0.78rem] text-muted-foreground">
                            {coverageWord[vals[i] ?? 0]}
                          </span>
                        </span>
                      </Cell>
                    ))}
                  </Row>
                );
              })}

              <GroupLabel>Strengths, weaknesses and verdict</GroupLabel>
              <Row gridCols={gridCols} label="Strongest points">
                {cols.map(({ item }) => (
                  <Cell key={item.name}>
                    <ul className="space-y-1.5 text-[0.86rem] text-foreground/80">
                      {item.pros.slice(0, 4).map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="text-accent">+</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </Cell>
                ))}
              </Row>
              <Row gridCols={gridCols} label="Trade-offs">
                {cols.map(({ item }) => (
                  <Cell key={item.name}>
                    <ul className="space-y-1.5 text-[0.86rem] text-foreground/80">
                      {item.cons.slice(0, 4).map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="text-destructive">−</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </Cell>
                ))}
              </Row>
              <TextRow gridCols={gridCols} label="Verdict" cols={cols} pick={(i) => i.verdict} />
            </div>
          </Wide>

          {coverageDiffs.length > 0 && (
            <Wide className="mt-6 rounded-2xl border border-rule bg-card p-6 shadow-card">
              <p className="eyebrow mb-3">
                Where the curriculum genuinely diverges ({coverageDiffs.length}{" "}
                {coverageDiffs.length === 1 ? "layer" : "layers"})
              </p>
              <ul className="grid gap-2 md:grid-cols-2">
                {coverageDiffs.map((d) => (
                  <li
                    key={d.label}
                    className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-rule bg-background px-4 py-3 text-[0.88rem]"
                  >
                    <span className="font-medium">{d.label}</span>
                    <span className="flex items-center gap-2 font-mono text-[0.7rem] text-muted-foreground">
                      {cols.map((c, i) => (
                        <span key={c.item.name} className="flex items-center gap-1">
                          <Dot level={d.vals[i] ?? 0} />
                          {c.item.name.split(" ")[0]}
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[0.9rem] text-foreground/75">
                These are the rows worth asking counsellors about directly — a two-step gap between
                “introduced” and “deep + built” is the difference between mentioning a technology in
                an interview and defending a deployed system that uses it.
              </p>
            </Wide>
          )}
        </>
      )}
    </Section>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-y border-rule bg-secondary/60 px-4 py-2.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
      {children}
    </div>
  );
}

function Row({
  gridCols,
  label,
  children,
  highlight,
}: {
  gridCols: string;
  label: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`grid border-b border-rule last:border-b-0 ${highlight ? "bg-highlight" : ""}`}
      style={{ gridTemplateColumns: gridCols }}
    >
      <div className="px-4 py-3 text-[0.86rem] font-medium text-foreground/85">{label}</div>
      {children}
    </div>
  );
}

function Cell({ children }: { children: React.ReactNode }) {
  return <div className="border-l border-rule px-4 py-3">{children}</div>;
}

function TextRow({
  gridCols,
  label,
  cols,
  pick,
}: {
  gridCols: string;
  label: string;
  cols: { item: import("@/lib/compare-data").CompareItem }[];
  pick: (item: import("@/lib/compare-data").CompareItem) => string;
}) {
  return (
    <Row gridCols={gridCols} label={label}>
      {cols.map(({ item }) => (
        <Cell key={item.name}>
          <p className="text-[0.86rem] leading-relaxed text-foreground/80">{pick(item)}</p>
        </Cell>
      ))}
    </Row>
  );
}
