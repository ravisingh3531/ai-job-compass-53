import { Section, Prose, Wide, Reveal } from "@/components/article/primitives";
import { useProfile } from "@/components/article/profile-context";
import {
  profiles,
  baseWeights,
  criteriaKeys,
  criterionLabels,
} from "@/lib/profile-scoring";

/** Sticky compact switcher so the choice is always one tap away. */
export function ProfileBar() {
  const { profileId, setProfileId } = useProfile();
  return (
    <div className="sticky top-[57px] z-30 -mx-5 border-b border-rule bg-background/85 px-5 py-2.5 backdrop-blur md:-mx-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-2">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
          Ranking for
        </span>
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Reader profile">
          {profiles.map((p) => {
            const active = p.id === profileId;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setProfileId(p.id)}
                className={`rounded-full border px-3.5 py-1.5 text-[0.8rem] font-medium transition-all duration-300 ${
                  active
                    ? "border-accent/50 bg-accent text-accent-foreground shadow-card"
                    : "border-rule bg-card text-foreground/70 hover:border-accent/40 hover:text-foreground"
                }`}
              >
                <span className="mr-1.5 font-mono text-[0.7rem]">{p.icon}</span>
                {p.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function ProfileSelector() {
  const { profileId, setProfileId, profile, ranked } = useProfile();
  const top3 = ranked.slice(0, 3);

  return (
    <Section
      id="your-profile"
      eyebrow="🎯 Personalise this ranking"
      title="Pick your profile — the ranking, weights and scores reshuffle around you"
    >
      <Prose className="!mt-0">
        <p>
          One ranking cannot serve a mid-career switcher, a busy senior engineer and a final-year
          student equally. So choose your situation and every score below is recomputed: the six
          criteria are re-weighted for what actually blocks <em>you</em>, and a fit adjustment is
          applied per institute for format, price and cohort reality.
        </p>
      </Prose>

      <Wide className="mt-10 grid gap-4 md:grid-cols-3">
        {profiles.map((p) => {
          const active = p.id === profileId;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setProfileId(p.id)}
              aria-pressed={active}
              className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 ${
                active
                  ? "border-accent/50 bg-highlight shadow-card"
                  : "border-rule bg-card hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
              }`}
            >
              <span
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent transition-opacity ${
                  active ? "opacity-100" : "opacity-0 group-hover:opacity-70"
                }`}
              />
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl text-accent">{p.icon}</span>
                <span
                  className={`font-mono text-[0.6rem] uppercase tracking-[0.16em] ${
                    active ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {active ? "Selected" : "Select"}
                </span>
              </div>
              <h3 className="mt-4 text-xl">{p.label}</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-foreground/75">{p.who}</p>
            </button>
          );
        })}
      </Wide>

      <Wide className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-2xl border border-rule bg-card p-6 shadow-card">
          <p className="eyebrow mb-4">How the weights change for a {profile.label.toLowerCase()}</p>
          <ul className="space-y-3">
            {criteriaKeys.map((key) => {
              const w = profile.weights[key];
              const base = baseWeights[key];
              const diff = w - base;
              return (
                <li key={key}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-[0.92rem] text-foreground/85">
                      {criterionLabels[key]}
                    </span>
                    <span className="font-mono text-[0.72rem] text-muted-foreground">
                      {w}%{" "}
                      <span
                        className={
                          diff === 0
                            ? "text-muted-foreground"
                            : diff > 0
                              ? "text-accent"
                              : "text-destructive"
                        }
                      >
                        ({diff > 0 ? "+" : ""}
                        {diff} vs default)
                      </span>
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-secondary">
                    <div
                      className="score-bar transition-all duration-500"
                      style={{ width: `${(w / 30) * 100}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-accent/30 bg-highlight p-6">
            <p className="eyebrow mb-3">Your top 3 under this weighting</p>
            <ol className="space-y-3">
              {top3.map((r) => (
                <li key={r.name} className="flex items-start gap-3">
                  <span className="mt-0.5 font-mono text-xs text-muted-foreground">
                    #{r.profileRank}
                  </span>
                  <span>
                    <span className="font-display text-[1.05rem] font-semibold">{r.name}</span>{" "}
                    <span className="font-mono text-[0.72rem] text-accent">
                      {r.profileScore}/100
                    </span>
                    <span className="block text-[0.88rem] text-foreground/75">{r.fitWhy}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-rule bg-card p-6 shadow-card">
            <p className="eyebrow mb-3">Your constraints</p>
            <ul className="space-y-2 text-[0.92rem] text-foreground/80">
              {profile.constraints.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <dl className="mt-5 space-y-2 border-t border-rule pt-4 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground">
              <div>
                <dt className="inline">Timeline · </dt>
                <dd className="inline text-foreground/75">{profile.timeline}</dd>
              </div>
              <div>
                <dt className="inline">Budget · </dt>
                <dd className="inline text-foreground/75">{profile.budget}</dd>
              </div>
              <div>
                <dt className="inline">First move · </dt>
                <dd className="inline normal-case tracking-normal text-foreground/75">
                  {profile.firstMove}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Wide>
    </Section>
  );
}

/** Profile-aware replacement for the static top-10 card list. */
export function ProfileRankingList() {
  const { profile, ranked } = useProfile();
  return (
    <Wide className="mt-10 space-y-4">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
        Sorted for: {profile.label} · default order in grey
      </p>
      {ranked.map((r, i) => (
        <Reveal
          as="article"
          key={r.name}
          delay={i * 30}
          className={`grid gap-5 rounded-2xl border bg-card p-6 shadow-card card-hover transition-all duration-500 md:grid-cols-[auto_1fr_auto] md:items-center ${
            r.profileRank === 1 ? "border-accent/40 bg-highlight" : "border-rule"
          }`}
        >
          <div className="flex items-center gap-3 md:w-24 md:flex-col md:items-start">
            <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground">
              #{String(r.profileRank).padStart(2, "0")}
            </span>
            {r.rankShift !== 0 && (
              <span
                className={`font-mono text-[0.62rem] ${
                  r.rankShift > 0 ? "text-accent" : "text-destructive"
                }`}
              >
                {r.rankShift > 0 ? "▲" : "▼"} {Math.abs(r.rankShift)} vs default
              </span>
            )}
            <span className="font-mono text-[0.6rem] text-muted-foreground/70">
              was #{String(r.rank).padStart(2, "0")}
            </span>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl">
              {r.name}{" "}
              <span className="font-sans text-base font-normal text-muted-foreground">
                — {r.program}
              </span>
            </h3>
            <p className="mt-2 text-[0.98rem] text-foreground/80">{r.best}</p>
            {r.fitWhy && (
              <p className="mt-2 text-[0.92rem] text-accent">
                For a {profile.short.toLowerCase()}: {r.fitWhy}
              </p>
            )}
            <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted-foreground">
              <div>
                <dt className="inline">Fees · </dt>
                <dd className="inline text-foreground/75">{r.fees}</dd>
              </div>
              <div>
                <dt className="inline">Duration · </dt>
                <dd className="inline text-foreground/75">{r.duration}</dd>
              </div>
              <div>
                <dt className="inline">Format · </dt>
                <dd className="inline text-foreground/75">{r.format}</dd>
              </div>
              <div>
                <dt className="inline">Target · </dt>
                <dd className="inline text-foreground/75">{r.tier}</dd>
              </div>
            </dl>
          </div>
          <div className="md:w-44">
            <p className="font-display text-4xl font-semibold text-accent">
              {r.profileScore}
              <span className="text-lg text-muted-foreground">/100</span>
            </p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-secondary">
              <div
                className="score-bar transition-all duration-700"
                style={{ width: `${r.profileScore}%` }}
              />
            </div>
            <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
              {profile.short} fit score · default {r.baseScore}
            </p>
          </div>
        </Reveal>
      ))}
    </Wide>
  );
}

/** Re-weighted scorecard arithmetic for the selected profile. */
export function ProfileScorecard() {
  const { profile, ranked } = useProfile();
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[760px] border-collapse text-left text-[0.88rem]">
        <thead>
          <tr className="bg-gradient-to-r from-secondary/80 to-card">
            <th className="border-b border-rule px-4 py-3 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted-foreground">
              Institute
            </th>
            {criteriaKeys.map((k) => (
              <th
                key={k}
                className="border-b border-rule px-4 py-3 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted-foreground"
              >
                {criterionLabels[k]} /{profile.weights[k]}
              </th>
            ))}
            <th className="border-b border-rule px-4 py-3 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted-foreground">
              Fit adj.
            </th>
            <th className="border-b border-rule px-4 py-3 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-accent">
              Total /100
            </th>
          </tr>
        </thead>
        <tbody>
          {ranked.map((r) => {
            const adj = r.profileScore - Math.round(
              r.breakdown.reduce((s, b) => s + b.points, 0),
            );
            return (
              <tr key={r.name} className={r.profileRank === 1 ? "bg-highlight" : undefined}>
                <td className="border-b border-rule px-4 py-3 font-medium">{r.name}</td>
                {r.breakdown.map((b) => (
                  <td
                    key={b.key}
                    className="border-b border-rule px-4 py-3 font-mono text-[0.8rem] text-foreground/80"
                  >
                    {b.points.toFixed(1)}
                  </td>
                ))}
                <td className="border-b border-rule px-4 py-3 font-mono text-[0.8rem] text-muted-foreground">
                  {adj > 0 ? "+" : ""}
                  {adj}
                </td>
                <td className="border-b border-rule px-4 py-3 font-mono text-[0.85rem] font-semibold text-accent">
                  {r.profileScore}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
