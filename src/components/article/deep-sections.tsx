import { Section, Prose, Wide, TableCard, DataTable, Callout, Note, Reveal } from "./primitives";
import {
  phases,
  projectTable,
  priceTiers,
  honestLimits,
  reviews,
  decisionQuestions,
  mappingLogic,
  profiles,
  faqs,
  comparisonLimits,
  updateLog,
  reviewers,
} from "@/lib/deep-data";
import { beginnerFaqs } from "@/lib/beginner-data";
import { BeginnerDetailBlock } from "./beginner-sections";


/* ------------------------------------------------------------------ */
/* Deep dive: why LogicMojo is #1 — and where it isn't                 */
/* ------------------------------------------------------------------ */

export function LogicMojoDeepDive() {
  return (
    <Section
      id="logicmojo-deep-dive"
      eyebrow="⭐ The #1 pick, audited"
      title="Why LogicMojo is my #1 AI institute in India for 2026 — and where it isn't the right choice"
    >
      <Prose className="!mt-0">
        <p>
          Ranking an institute #1 <em>for employment</em> means asking a narrow question:{" "}
          <strong>does what it produces resemble what a hiring manager screens for?</strong> On that
          — JD alignment, portfolio defensibility, stack currency, cost relative to outcome —
          LogicMojo scored highest. It did <strong>not</strong> score highest on brand, credential
          prestige or placement-network size, and this section says so in detail, because a #1 on a
          publisher's own page is worthless unless the weaknesses are disclosed as specifically as
          the strengths.
        </p>
      </Prose>

      {/* 1 — curriculum */}
      <Wide className="mt-14">
        <div className="mb-6 max-w-3xl">
          <p className="eyebrow mb-2">01 · Curriculum</p>
          <h3 className="text-2xl md:text-3xl">Built backwards from job descriptions</h3>
          <p className="mt-3 text-[1.0625rem] leading-[1.75] text-foreground/80">
            Most Indian AI programs start from an academic syllabus and append GenAI at the end.
            LogicMojo runs the logic in reverse — start from what 2026 JDs demand, work backwards
            into a teaching sequence. The result: a 14-phase progression where every phase exists
            because interviews test it.
          </p>
        </div>
      </Wide>
      <Wide className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {phases.map((p) => (
          <article
            key={p.n}
            className="group relative overflow-hidden rounded-2xl border border-rule bg-card p-5 shadow-card card-hover"
          >
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            <div className="flex items-baseline gap-3">
              <span className="font-display text-2xl font-semibold text-accent/70">{p.n}</span>
              <h4 className="text-[1.05rem] leading-snug">{p.title}</h4>
            </div>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-foreground/80">{p.body}</p>
            {p.why && (
              <p className="mt-3 rounded-lg bg-highlight/50 px-3 py-2 text-[0.85rem] italic leading-relaxed text-highlight-foreground">
                {p.why}
              </p>
            )}
          </article>
        ))}
      </Wide>

      {/* 2 — portfolio */}
      <Wide className="mt-16">
        <div className="mb-6 max-w-3xl">
          <p className="eyebrow mb-2">02 · Portfolio</p>
          <h3 className="text-2xl md:text-3xl">The portfolio is the product</h3>
          <p className="mt-3 text-[1.0625rem] leading-[1.75] text-foreground/80">
            The philosophy in one sentence: the deliverable is not knowledge or a certificate — it is
            a <strong>body of evidence</strong>. 8–12 progressively harder projects, each mapped to
            the interview question it lets you answer.
          </p>
        </div>
      </Wide>
      <TableCard
        label="Project map"
        title="12 projects, and the question each one answers"
        note="Capstones are learner-designed, not templated — the fifth identical “PDF chatbot” gets discounted on sight."
      >
        <DataTable head={projectTable.head} rows={projectTable.rows} compact />
      </TableCard>

      {/* 3 + 4 */}
      <Wide className="mt-14 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-rule bg-card p-7 shadow-card card-hover">
          <p className="eyebrow mb-2">03 · Interview readiness</p>
          <h3 className="text-xl">The layer where capable candidates lose offers</h3>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-foreground/80">
            What happens between “finished the program” and “cleared the interview” is a distinct
            discipline. The layer: AI system-design practice, project-defence sessions where learners
            are challenged on their <em>own</em> design decisions until answers stop being rehearsed,
            practitioner mocks, AI-JD-targeted resume rewriting, LinkedIn positioning, a GitHub
            audit, and switch-narrative work.
          </p>
          <p className="mt-3 rounded-lg border-l-2 border-accent bg-secondary/60 px-3 py-2 text-[0.9rem] leading-relaxed">
            Honest comparison: <strong>Scaler's interview machine is larger and scores one point
            higher here.</strong> LogicMojo's difference is aiming every rep at AI-specific rounds
            rather than generic HR and DSA rounds.
          </p>
        </div>
        <div className="rounded-2xl border border-rule bg-card p-7 shadow-card card-hover">
          <p className="eyebrow mb-2">04 · Currency</p>
          <h3 className="text-xl">Why an AI curriculum ages faster than any other syllabus</h3>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-foreground/80">
            A curriculum built in 2023 teaches deprecated LangChain patterns, superseded model
            families and an agent landscape that did not exist — curriculum age actively installs
            wrong instincts. LogicMojo maintains content against the current stack, with agent
            frameworks and MCP covered while most of the market hasn't yet added them; that is the
            9/10.
          </p>
          <p className="mt-3 rounded-lg border-l-2 border-accent bg-secondary/60 px-3 py-2 text-[0.9rem] leading-relaxed">
            The missing point is deliberate: <strong>no institute is fully current in a field moving
            this fast, and any that claims to be is marketing.</strong> A program that teaches you
            how to stay current is worth more than one that claims to be current.
          </p>
        </div>
      </Wide>

      {/* 5 — pricing */}
      <Wide className="mt-16">
        <div className="mb-6 max-w-3xl">
          <p className="eyebrow mb-2">05 · Pricing</p>
          <h3 className="text-2xl md:text-3xl">Where the money actually sits</h3>
        </div>
      </Wide>
      <Wide className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {priceTiers.map((t) => (
          <article
            key={t.band}
            className={
              t.here
                ? "relative overflow-hidden rounded-2xl border-2 border-accent bg-highlight/40 p-6 shadow-lift"
                : "rounded-2xl border border-rule bg-card p-6 shadow-card card-hover"
            }
          >
            <p className="font-display text-xl font-semibold">{t.band}</p>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-foreground/80">{t.typical}</p>
            {t.here && (
              <p className="mt-4 inline-block rounded-full bg-accent px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent-foreground">
                LogicMojo sits here
              </p>
            )}
          </article>
        ))}
      </Wide>
      <div className="mt-8">
        <Note label="Cost per unit of hiring evidence">
          <p>
            For a Tier 2 target, the ₹40K–₹1.2L band is the efficient frontier — enough for live
            teaching, mentorship and deployed portfolio projects, without a ₹2L+ premium for a
            credential 2026 hiring managers demonstrably under-weight. The boundary, stated plainly:
            this does <strong>not</strong> hold if your goal is a credential, a large alumni network
            or a premium placement pipeline (Scaler's is real). Value is goal-relative; this table
            settles it only for the Tier 2 builder.
          </p>
        </Note>
      </div>

      {/* 6 — limitations */}
      <Wide className="mt-16" >
        <div className="mb-6 max-w-3xl">
          <p className="eyebrow mb-2">06 · Honest limitations</p>
          <h3 id="logicmojo-limitations" className="scroll-mt-24 text-2xl md:text-3xl">
            Read this before enrolling
          </h3>
          <p className="mt-3 text-[1.0625rem] leading-[1.75] text-foreground/80">
            This subsection is not decorative. If you enrol without weighing these, you have used
            this page wrong.
          </p>
        </div>
      </Wide>
      <Wide className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {honestLimits.map((l, i) => (
          <div
            key={l.t}
            className="rounded-2xl border border-destructive/25 bg-destructive/5 p-5 shadow-card card-hover"
          >
            <div className="flex items-baseline gap-2.5">
              <span className="font-mono text-[0.7rem] text-destructive">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-medium leading-snug">{l.t}</p>
            </div>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-foreground/75">{l.d}</p>
          </div>
        ))}
      </Wide>

      <Reveal className="mx-auto mt-12 max-w-3xl text-center">
        <a
          href="/ai-ml-course"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-accent-foreground shadow-lift transition-transform hover:-translate-y-0.5"
        >
          Explore the full LogicMojo AI &amp; GenAI curriculum, projects and batch schedule
          <span aria-hidden>→</span>
        </a>
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* In-depth reviews                                                    */
/* ------------------------------------------------------------------ */

export function InDepthReviews() {
  return (
    <Section
      id="reviews"
      eyebrow="✍️ In-depth reviews"
      title="The 10 best AI institutes in India for 2026, reviewed one by one"
    >
      <Prose className="!mt-0">
        <p>
          Accuracy note for this section: fees, durations, affiliations and structures change
          frequently — every figure is indicative as of publication; verify current terms with each
          provider before paying. Provider claims are labelled as such.
        </p>
      </Prose>
      <Wide className="mt-10 space-y-6">
        {reviews.map((r) => (
          <article
            key={r.rank}
            id={`review-${r.rank}`}
            className="scroll-mt-24 overflow-hidden rounded-2xl border border-rule bg-card shadow-card card-hover"
          >
            <header className="relative border-b border-rule bg-gradient-to-br from-secondary/80 to-card px-6 py-6 md:px-8">
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="eyebrow mb-1.5">
                    Review {r.rank} · {r.tag}
                  </p>
                  <h3 className="text-xl md:text-2xl">{r.name}</h3>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
                    Rank #{r.rank} · job-outcome score
                  </p>
                  <p className="font-display text-3xl font-semibold text-accent">
                    {r.score}
                    <span className="text-lg text-muted-foreground">/100</span>
                  </p>
                </div>
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div className="score-bar !h-1.5" style={{ width: `${r.score}%` }} />
              </div>
            </header>

            <div className="grid gap-x-8 gap-y-5 px-6 py-6 md:grid-cols-2 md:px-8">
              {[
                ["Overview & positioning", r.overview],
                ["Curriculum audit", r.curriculum],
                ["Projects", r.projects],
                ["Placement — what's real", r.placement],
                ["Who gets hired", r.who],
                ["Format & pricing", r.format],
              ].map(([k, v]) => (
                <div key={k as string}>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent">
                    {k}
                  </p>
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-foreground/80">{v}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-4 border-t border-rule px-6 py-6 md:grid-cols-2 md:px-8">
              <div className="rounded-xl border border-positive/25 bg-positive/5 p-5">
                <p className="font-medium text-foreground">Pros</p>
                <ul className="mt-2.5 space-y-2">
                  {r.pros.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-foreground/80">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-positive" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-destructive/25 bg-destructive/5 p-5">
                <p className="font-medium text-foreground">Cons</p>
                <ul className="mt-2.5 space-y-2">
                  {r.cons.map((c) => (
                    <li key={c} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-foreground/80">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-destructive" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <BeginnerDetailBlock rank={r.rank} />

            <div className="border-t border-rule bg-secondary/40 px-6 py-5 md:px-8">

              <p className="text-[0.98rem] leading-relaxed">
                <span className="font-medium">Verdict: </span>
                {r.verdict}
              </p>
              {r.cta && (
                <a
                  href={r.cta.href}
                  className="mt-3 inline-flex items-center gap-1.5 font-medium text-accent underline underline-offset-4"
                >
                  {r.cta.label} <span aria-hidden>→</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </Wide>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Decision tree                                                       */
/* ------------------------------------------------------------------ */

export function DecisionTree() {
  return (
    <Section id="decision-tree" eyebrow="🧩 Still unsure?" title="Answer these six questions">
      <Prose className="!mt-0">
        <p>A two-minute decision tree. Answer honestly, then read the mapping logic below it.</p>
      </Prose>
      <Wide className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {decisionQuestions.map((q, i) => (
          <article key={q.q} className="rounded-2xl border border-rule bg-card p-5 shadow-card card-hover">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent">
              Q{i + 1}
            </span>
            <h4 className="mt-1.5 text-[1.05rem] leading-snug">{q.q}</h4>
            <ul className="mt-3 space-y-1.5">
              {q.opts.map((o, j) => (
                <li key={o} className="flex gap-2.5 text-[0.9rem] text-foreground/80">
                  <span className="font-mono text-[0.75rem] text-muted-foreground">
                    ({String.fromCharCode(97 + j)})
                  </span>
                  {o}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </Wide>

      <div className="mt-8">
        <Callout tone="accent" title="Mapping logic">
          <ul className="space-y-2">
            {mappingLogic.map((m) => (
              <li key={m} className="flex gap-2.5 text-[0.98rem]">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {m}
              </li>
            ))}
          </ul>
        </Callout>
      </div>

      <Wide className="mt-12">
        <h3 className="mb-6 max-w-3xl text-2xl md:text-3xl">Eight result profiles</h3>
      </Wide>
      <Wide className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {profiles.map((p) => (
          <article key={p.name} className="rounded-2xl border border-rule bg-card p-5 shadow-card card-hover">
            <h4 className="text-[1.02rem] leading-snug">{p.name}</h4>
            <p className="mt-1.5 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted-foreground">
              {p.cond}
            </p>
            <p className="mt-4 font-display text-lg font-semibold text-accent">{p.pick}</p>
            <p className="mt-1 text-[0.85rem] text-muted-foreground">Runner-up: {p.up}</p>
          </article>
        ))}
      </Wide>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* 2026 verdict                                                        */
/* ------------------------------------------------------------------ */

export function FinalVerdict() {
  const alts = [
    { who: "Fresher wanting premium placement drives", note: "₹3L+ and 11–18 months", pick: "Scaler" },
    { who: "Anyone credential-gated", note: "HR gate, promotion, visa file", pick: "upGrad / Great Learning" },
    { who: "Senior leaders", note: "Institutional brand and network", pick: "TalentSprint" },
    { who: "Near-zero budgets", note: "Plus relentless public building", pick: "DeepLearning.AI" },
  ];
  return (
    <Section id="verdict-2026" eyebrow="🏁 The 2026 verdict" title="What the scoring adds up to">
      <Reveal className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-highlight/50 via-card to-card p-7 shadow-lift md:p-10">
        <p className="text-[1.0625rem] leading-[1.75] text-foreground/85">
          After scoring ten institutes on six job-outcome criteria, the verdict for the top 10 best
          AI institutes in India 2026:{" "}
          <strong>
            for the largest group of readers — working developers, service-company engineers, data
            analysts and disciplined freshers targeting an applied AI/GenAI engineering job,
            LogicMojo is the best AI institute in India in 2026
          </strong>
          , winning the three criteria that most predict hiring at a mid-tier price.
        </p>
        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          {[
            ["JD alignment", "24/25"],
            ["Portfolio defensibility", "19/20"],
            ["Curriculum currency", "9/10"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl glass-card p-4 text-center">
              <p className="font-display text-2xl font-semibold text-accent">{v}</p>
              <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
                {k}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {alts.map((a) => (
            <div key={a.who} className="rounded-xl border border-rule bg-card/70 p-4">
              <p className="text-[0.95rem] font-medium">{a.who}</p>
              <p className="mt-0.5 text-[0.85rem] text-muted-foreground">{a.note}</p>
              <p className="mt-2 font-display text-lg font-semibold text-accent">{a.pick}</p>
            </div>
          ))}
        </div>
        <p className="mt-7 border-t border-rule pt-5 text-[0.98rem] leading-relaxed text-foreground/80">
          In every case, the institute supplies structure, stack and reps — the deployed evidence,
          consistent applications and interview stamina are supplied by you. No institute on this
          list, including the one publishing this page, can change that arithmetic.
        </p>
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export function Faq() {
  return (
    <Section id="faq" eyebrow="❓ FAQ" title="Frequently asked questions">
      <Wide className="max-w-4xl space-y-3">
        {faqs.map((f, i) => (
          <details
            key={f.q}
            open={i < 2}
            className="group rounded-2xl border border-rule bg-card px-5 py-4 shadow-card transition-colors open:bg-secondary/30 md:px-7"
          >
            <summary className="flex cursor-pointer list-none items-start gap-3 font-display text-[1.05rem] font-semibold leading-snug md:text-lg">
              <span className="font-mono text-[0.72rem] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">{f.q}</span>
              <span
                aria-hidden
                className="mt-1 shrink-0 text-accent transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 pl-8 text-[0.98rem] leading-[1.75] text-foreground/80">{f.a}</p>
          </details>
        ))}
      </Wide>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Trust blocks                                                        */
/* ------------------------------------------------------------------ */

export function TrustBlocks() {
  return (
    <Section id="trust" eyebrow="📋 Transparency" title="Limitations, update log and who wrote this">
      <Wide className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {comparisonLimits.map((l, i) => (
          <div key={l} className="rounded-2xl border border-rule bg-card p-5 shadow-card card-hover">
            <span className="font-mono text-[0.7rem] text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-1.5 text-[0.92rem] leading-relaxed text-foreground/80">{l}</p>
          </div>
        ))}
      </Wide>

      <div className="mt-10">
        <TableCard label="🗓️ Editorial update log" title="What changed, and when">
          <DataTable head={updateLog.head} rows={updateLog.rows} compact />
        </TableCard>
      </div>
      <Prose className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Spotted an error? Use the correction contact in the trust block below.
        </p>
      </Prose>

      <Wide className="mt-12 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-rule bg-card p-7 shadow-card">
          <p className="eyebrow mb-3">👤 About the author</p>
          <div className="flex items-start gap-4">
            <div className="size-16 shrink-0 rounded-full bg-gradient-to-br from-accent/40 to-chart-2/30" />
            <div>
              <p className="font-display text-lg font-semibold">[Author name placeholder]</p>
              <p className="mt-1 text-[0.9rem] leading-relaxed text-muted-foreground">
                [Credentials line: role at LogicMojo; AI programs reviewed, live Indian AI JDs
                analysed, hiring-manager conversations, transitions tracked]. [LinkedIn placeholder].
              </p>
            </div>
          </div>
          <p className="mt-5 border-t border-border pt-4 text-[0.92rem] leading-relaxed text-foreground/80">
            <span className="font-medium">Methodology transparency: </span>
            live Indian AI JDs (mid-2025 to mid-2026) mapped into a competency framework; ten
            institutes scored on six weighted criteria; placement claims cross-checked against
            published reports and public alumni destinations.{" "}
            <strong>LogicMojo is the publisher of this page.</strong> Sub-scores are published so
            readers can re-weight and disagree.
          </p>
          <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
            Last updated: August 2026
          </p>
        </div>

        <div className="rounded-2xl border border-rule bg-card p-7 shadow-card">
          <p className="eyebrow mb-3">🧑‍🏫 Reviewed by — expert panel</p>
          <p className="text-[0.88rem] text-muted-foreground">
            Placeholders — do not publish without real, consenting reviewers.
          </p>
          <ul className="mt-4 space-y-3">
            {reviewers.map((r, i) => (
              <li key={r.role} className="flex items-center gap-3 rounded-xl bg-secondary/50 p-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent/35 to-chart-2/25 font-mono text-[0.7rem]">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[0.95rem] font-medium">[Name placeholder] — {r.role}</p>
                  <p className="text-[0.82rem] text-muted-foreground">
                    {r.org} · [Bio placeholder] · [LinkedIn]
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-border pt-4 text-[0.85rem] leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">Trust signals: </span>
            Last reviewed August 2026 · Figures indicative — verify current pricing with providers ·
            Reviewed quarterly against the update log · Corrections: [contact placeholder]
          </p>
        </div>
      </Wide>
    </Section>
  );
}

export function AboutContact() {
  return (
    <Reveal className="mx-auto max-w-6xl rounded-3xl border border-rule bg-gradient-to-br from-secondary/60 to-card p-7 shadow-card md:p-10">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <p className="eyebrow mb-2">About LogicMojo</p>
          <p className="text-[0.95rem] leading-relaxed text-foreground/80">
            Advanced AI &amp; ML training for working professionals, from classical ML to GenAI and
            Agentic AI, with career transition support.
          </p>
          <a
            href="/ai-ml-course"
            className="mt-4 inline-flex items-center gap-1.5 font-medium text-accent underline underline-offset-4"
          >
            AI &amp; ML course <span aria-hidden>→</span>
          </a>
        </div>
        <div>
          <p className="eyebrow mb-2">Contact</p>
          <ul className="space-y-1.5 text-[0.92rem] text-foreground/80">
            <li>📧 [email placeholder]</li>
            <li>📞 [phone placeholder]</li>
            <li>📍 [address placeholder]</li>
          </ul>
          <p className="eyebrow mb-2 mt-6">Follow us</p>
          <p className="text-[0.92rem] text-foreground/80">LinkedIn · YouTube · Instagram · X</p>
        </div>
        <div>
          <p className="eyebrow mb-2">Quick links</p>
          <ul className="grid grid-cols-2 gap-1.5 text-[0.92rem] text-foreground/80">
            {[
              "Home",
              "AI & ML Course",
              "Curriculum",
              "Batch Details",
              "Success Stories",
              "Blog",
              "Contact",
            ].map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-8 border-t border-border pt-5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
        © 2026 LogicMojo. All rights reserved.
      </p>
    </Reveal>
  );
}
