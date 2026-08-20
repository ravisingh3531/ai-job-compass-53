import {
  Section,
  Prose,
  Wide,
  Reveal,
  Callout,
} from "@/components/article/primitives";
import {
  logicMojoBeginnerProof,
  researchProcess,
  chooseGuide,
  roleTargets,
  marketingChecks,
  authorBio,
  beginnerByRank,
} from "@/lib/beginner-data";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* My experience-based solution: the beginner recommendation           */
/* ------------------------------------------------------------------ */

export function BeginnerRecommendation() {
  const p = logicMojoBeginnerProof;
  return (
    <Section
      id="beginner-pick"
      eyebrow="🧑‍🎓 My experience-based solution"
      title="My research-backed recommendation for beginners entering Generative AI"
    >
      <Prose className="!mt-0">
        <p>
          Everything above ranks ten programs for every kind of learner. This section answers the
          narrower question I get asked most often by readers who message me: <em>I have never
          written production code and I want a Generative AI job — where do I start?</em>
        </p>
        <p>
          <strong>{p.claim}</strong> Not because it is the cheapest (it is not), not because it
          carries a university crest (it does not), and not because it offers a guarantee contract
          (it deliberately does not). It wins for beginners on three mechanics: a gated foundation
          runway that assumes you cannot code yet, GenAI modules taught to build level rather than
          demo level, and job assistance that is manufactured out of your own deployed work.
        </p>
      </Prose>

      <Wide className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {p.numbers.map((n, i) => (
          <Reveal key={n.l} delay={i * 80} className="glass-card card-hover rounded-2xl p-5">
            <p className="font-display text-3xl font-semibold text-accent">{n.n}</p>
            <p className="mt-1.5 text-[0.9rem] leading-snug text-muted-foreground">{n.l}</p>
            <span className="score-bar mt-3 block w-full opacity-60" />
          </Reveal>
        ))}
      </Wide>

      <Wide className="mt-8 space-y-4">
        {p.why.map((w, i) => (
          <Reveal
            key={w.t}
            delay={i * 60}
            className="card-hover rounded-2xl border border-rule bg-card p-6 shadow-card md:p-7"
          >
            <div className="flex items-start gap-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent-soft font-mono text-[0.75rem] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[1.12rem] leading-snug md:text-xl">{w.t}</h3>
                <p className="mt-2 text-[0.98rem] leading-[1.75] text-foreground/85">{w.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </Wide>

      <Wide className="mt-12">
        <h3 className="mb-6 max-w-3xl text-2xl md:text-3xl">
          Three beginners, three timelines — mini case studies
        </h3>
      </Wide>
      <Wide className="grid gap-5 lg:grid-cols-3">
        {p.caseStudies.map((c, i) => (
          <Reveal
            key={c.title}
            delay={i * 90}
            as="article"
            className="card-hover flex flex-col overflow-hidden rounded-2xl border border-rule bg-card shadow-card"
          >
            <header className="relative border-b border-rule bg-gradient-to-br from-secondary/80 to-card px-5 py-5">
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent">
                {c.timeline}
              </p>
              <h4 className="mt-1.5 text-[1.05rem] leading-snug">{c.title}</h4>
            </header>
            <div className="flex-1 space-y-4 px-5 py-5">
              {[
                ["Before", c.before],
                ["During", c.during],
                ["After", c.after],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted-foreground">
                    {k}
                  </p>
                  <p className="mt-1 text-[0.92rem] leading-relaxed text-foreground/85">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </Wide>

      <Wide className="mt-9 flex flex-wrap items-center gap-3">
        {p.sources.map((s) => (
          <a
            key={s.href}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-accent/30 bg-accent-soft/50 px-4 py-2 text-[0.88rem] text-foreground/85 transition-transform hover:-translate-y-0.5"
          >
            🔗 {s.label}
          </a>
        ))}
      </Wide>

      <div className="mt-8">
        <Callout tone="warn" title="Where this claim comes from — and where it stops">
          <p>{p.honesty}</p>
        </Callout>
      </div>

      <Wide className="mt-8 rounded-2xl border border-rule bg-card p-6 shadow-card md:p-7">
        <p className="eyebrow mb-3">👤 Who is making this recommendation</p>
        <div className="flex flex-wrap items-start gap-5">
          <div className="size-14 shrink-0 rounded-full bg-gradient-to-br from-accent/40 to-chart-2/30" />
          <div className="min-w-[16rem] flex-1">
            <p className="font-display text-lg font-semibold">{authorBio.name}</p>
            <p className="text-[0.9rem] text-muted-foreground">{authorBio.role}</p>
            <ul className="mt-3 space-y-1.5">
              {authorBio.credentials.map((c) => (
                <li key={c} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-foreground/80">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-border pt-3 text-[0.9rem] leading-relaxed text-foreground/80">
              <span className="font-medium">Disclosure: </span>
              {authorBio.disclosure}
            </p>
          </div>
        </div>
      </Wide>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Research process                                                    */
/* ------------------------------------------------------------------ */

export function ResearchProcess() {
  const r = researchProcess;
  return (
    <Section
      id="research-process"
      eyebrow="🔬 How this was researched"
      title="How I researched and ranked 10 GenAI courses for beginners with placement"
    >
      <Prose className="!mt-0">
        <p>
          A ranking is only as trustworthy as the process behind it, so here is the whole process:
          the funnel, the parameters, the five-month calendar, the platforms cross-checked, and the
          part where I stopped being an analyst and started behaving like a nervous beginner about to
          spend a year's savings.
        </p>
      </Prose>

      <Wide className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {r.funnel.map((f, i) => (
          <Reveal key={f.l} delay={i * 80} className="glass-card card-hover rounded-2xl p-5">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted-foreground">
              Stage {i + 1}
            </p>
            <p className="mt-1 font-display text-3xl font-semibold text-accent">{f.n}</p>
            <p className="mt-1.5 text-[0.88rem] leading-snug text-foreground/80">{f.l}</p>
          </Reveal>
        ))}
      </Wide>

      <Wide className="mt-10 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-rule bg-card p-6 shadow-card">
          <p className="eyebrow mb-4">⚖️ The ten parameters</p>
          <ul className="space-y-3">
            {r.parameters.map((p) => (
              <li key={p.k} className="border-b border-border/70 pb-3 last:border-0 last:pb-0">
                <p className="text-[0.95rem] font-medium">{p.k}</p>
                <p className="mt-0.5 text-[0.88rem] leading-relaxed text-muted-foreground">{p.w}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-rule bg-card p-6 shadow-card">
            <p className="eyebrow mb-4">🗓️ Five months, in order</p>
            <ol className="relative space-y-4 border-l border-accent/30 pl-5">
              {r.timeline.map((t) => (
                <li key={t.d} className="relative">
                  <span className="absolute -left-[1.42rem] top-1.5 size-2.5 rounded-full bg-accent" />
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-accent">{t.d}</p>
                  <p className="mt-1 text-[0.92rem] leading-relaxed text-foreground/85">{t.w}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-rule bg-secondary/40 p-6 shadow-card">
            <p className="eyebrow mb-4">🔎 Platforms cross-checked</p>
            <ul className="space-y-2">
              {r.crossChecks.map((c) => (
                <li key={c} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-foreground/85">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wide>

      <div className="mt-8">
        <Callout tone="accent" title="The part that changed the weights">
          <p>{r.personal}</p>
        </Callout>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* How to choose as a beginner                                         */
/* ------------------------------------------------------------------ */

export function HowToChooseBeginner() {
  return (
    <Section
      id="how-to-choose"
      eyebrow="🧭 Choosing well"
      title="How to choose the right GenAI course as a beginner in India"
    >
      <Prose className="!mt-0">
        <p>
          Four starting points, four different sets of priorities. Find yourself below, then judge
          every brochure against your row rather than against the loudest advertisement.
        </p>
      </Prose>

      <Wide className="mt-9 grid gap-4 md:grid-cols-2">
        {chooseGuide.map((c, i) => (
          <Reveal
            key={c.who}
            delay={i * 70}
            as="article"
            className="card-hover flex flex-col rounded-2xl border border-rule bg-card p-6 shadow-card"
          >
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent">
              Profile {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-1.5 text-[1.1rem] leading-snug md:text-xl">{c.who}</h3>
            <p className="mt-4 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted-foreground">
              Prioritise
            </p>
            <ul className="mt-2 flex-1 space-y-2">
              {c.priorities.map((p) => (
                <li key={p} className="flex gap-2.5 text-[0.92rem] leading-relaxed text-foreground/85">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-positive" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-xl border border-destructive/25 bg-destructive/5 p-4 text-[0.9rem] leading-relaxed text-foreground/85">
              <span className="font-medium">Avoid: </span>
              {c.avoid}
            </p>
          </Reveal>
        ))}
      </Wide>

      <Wide className="mt-10 rounded-2xl border border-rule bg-card p-6 shadow-card md:p-7">
        <p className="eyebrow mb-4">🎯 Match the curriculum to the role title you are targeting</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {roleTargets.map((t) => (
            <div key={t.r} className="rounded-xl border border-rule bg-secondary/40 p-4">
              <p className="text-[0.95rem] font-medium">{t.r}</p>
              <p className="mt-1 text-[0.88rem] leading-relaxed text-muted-foreground">{t.w}</p>
            </div>
          ))}
        </div>
        <p className="mt-5 border-t border-border pt-4 text-[0.95rem] leading-relaxed text-foreground/85">
          2026 hiring demand, in order of how often it appears in live Indian job descriptions:
          production retrieval-augmented generation (RAG), agentic and multi-agent systems, LLM API
          engineering, deployment and monitoring (MLOps), evaluation and guardrails, fine-tuning
          judgement, vector databases, and Model Context Protocol (MCP) style tool integration. A
          syllabus that stops at prompting is a syllabus that stops before the interview.
        </p>
      </Wide>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Beyond marketing                                                    */
/* ------------------------------------------------------------------ */

export function BeyondMarketing() {
  return (
    <Section
      id="beyond-marketing"
      eyebrow="🚨 Beyond the marketing"
      title="What to look for beyond “marketing” — and how to verify it yourself"
    >
      <Prose className="!mt-0">
        <p>
          Beginners are the easiest audience to sell to, because they cannot yet tell a deep syllabus
          from a long one. These seven checks close most of that gap, and none of them takes longer
          than an evening.
        </p>
      </Prose>

      <Wide className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {marketingChecks.map((m, i) => (
          <Reveal
            key={m.t}
            delay={i * 60}
            as="article"
            className={cn(
              "card-hover rounded-2xl border p-6 shadow-card",
              i % 3 === 0
                ? "border-destructive/25 bg-destructive/5"
                : i % 3 === 1
                  ? "border-accent/25 bg-accent-soft/40"
                  : "border-rule bg-card",
            )}
          >
            <span className="font-mono text-[0.7rem] text-accent">
              Check {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-1.5 text-[1.05rem] leading-snug">{m.t}</h3>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-foreground/85">{m.d}</p>
          </Reveal>
        ))}
      </Wide>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Per-review beginner detail (used inside In-Depth Reviews)           */
/* ------------------------------------------------------------------ */

const levelStyle: Record<string, string> = {
  "From scratch": "border-accent/40 bg-accent-soft/70 text-foreground",
  Built: "border-accent/40 bg-accent/15 text-foreground",
  Covered: "border-rule bg-secondary/60 text-foreground/85",
  Light: "border-border bg-card text-muted-foreground",
  Absent: "border-destructive/25 bg-destructive/5 text-muted-foreground",
};

export function BeginnerDetailBlock({ rank }: { rank: number }) {
  const b = beginnerByRank(rank);
  if (!b) return null;
  return (
    <div className="border-t border-rule bg-secondary/25 px-6 py-6 md:px-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow">🧑‍🎓 For beginners: ramp-up, teaching & job assistance</p>
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
          Beginner-friendliness{" "}
          <span className="text-accent" aria-label={`${b.stars} out of 5`}>
            {"★".repeat(b.stars)}
            <span className="text-border">{"★".repeat(5 - b.stars)}</span>
          </span>
        </p>
      </div>

      <div className="mt-5 grid gap-x-8 gap-y-5 md:grid-cols-2">
        {[
          ["Prerequisites & entry", b.prereq],
          ["Foundational ramp-up", b.rampUp],
          ["Learning support for beginners", b.support],
          ["Step-by-step teaching method", b.method],
          ["Mentorship access", b.mentorship],
          ["Capstone & industry projects", b.projects],
          ["Industry readiness — tools & datasets", b.industry],
        ].map(([k, v]) => (
          <div key={k as string}>
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-accent">{k}</p>
            <p className="mt-1.5 text-[0.92rem] leading-relaxed text-foreground/80">{v}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-accent">
        Beginner curriculum depth — Python foundations through GenAI deployment
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {b.stack.map((s) => (
          <span
            key={s.k}
            className={cn(
              "rounded-full border px-3 py-1 text-[0.8rem]",
              levelStyle[s.v] ?? "border-rule bg-card",
            )}
          >
            {s.k} · <span className="font-mono text-[0.72rem]">{s.v}</span>
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-rule bg-card p-5 lg:col-span-2">
          <p className="font-display text-base font-semibold">
            Placement & job-assistance detail
          </p>
          <dl className="mt-3 grid gap-3 sm:grid-cols-2">
            {[
              ["Hiring partners", b.placement.partners],
              ["Placement rate — as claimed", b.placement.rate],
              ["Mock interview rounds", b.placement.mocks],
              ["Resume building", b.placement.resume],
              ["LinkedIn optimisation", b.placement.linkedin],
              ["Career counselling", b.placement.counseling],
              ["Post-course support duration", b.placement.postCourse],
            ].map(([k, v]) => (
              <div key={k as string}>
                <dt className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-muted-foreground">
                  {k}
                </dt>
                <dd className="mt-0.5 text-[0.88rem] leading-relaxed text-foreground/80">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="rounded-xl border border-accent/25 bg-accent-soft/40 p-5">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-accent">
            Verified beginner feedback
          </p>
          <blockquote className="mt-2 text-[0.92rem] leading-relaxed text-foreground/85">
            “{b.feedback.quote}”
          </blockquote>
          <figcaption className="mt-3 space-y-0.5 border-t border-accent/20 pt-3 text-[0.82rem] text-muted-foreground">
            <p className="text-foreground/85">{b.feedback.who}</p>
            <p>Prior background: {b.feedback.prior}</p>
            <p>
              Role: {b.feedback.role} · {b.feedback.company}
            </p>
            <p>
              Salary: {b.feedback.salary} · {b.feedback.when}
            </p>
            <p className="pt-1 italic">
              Name withheld; salary shown as a band. Learner-reported, not audited.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
