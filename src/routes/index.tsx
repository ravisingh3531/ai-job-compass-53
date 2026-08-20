import { createFileRoute } from "@tanstack/react-router";
import {
  Section,
  Prose,
  Wide,
  TableCard,
  DataTable,
  Callout,
  CoverageTable,
  Reveal,
} from "@/components/article/primitives";
import {
  LogicMojoDeepDive,
  InDepthReviews,
  DecisionTree,
  FinalVerdict,
  Faq,
  TrustBlocks,
  AboutContact,
} from "@/components/article/deep-sections";
import {
  tocItems,
  tiers,
  barShift,
  timeline,
  salaryBands,
  layers,
  coverageTest,
  criteria,
  masterRanking,
  scorecard,
  coverageRowLabels,
  coverageA,
  coverageB,
  placementTable,
  costTable,
  formatTable,
  roleTable,
  backgroundTable,
  budgetTable,
  redFlags,
  roadmap,
  managerSignals,
  costScenarios,
} from "@/lib/ranking-data";

const title = "Top 10 Best AI Institutes in India (2026) — Job-Outcome Ranking";
const description =
  "An honest, methodology-first ranking of the top 10 AI institutes in India for 2026 — scored on JD alignment, portfolio output, interview readiness, placement mechanism, currency and cost.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <main className="px-5 md:px-8">
        <Hero />
        <FailurePatterns />
        <CostOfWrongChoice />
        <ShortAnswer />
        <TableOfContents />
        <HiringReality />
        <SkillsStack />
        <Methodology />
        <Rankings />
        <WhyLogicMojo />
        <LogicMojoDeepDive />
        <InDepthReviews />
        <WhichForYou />
        <DecisionTree />
        <RedFlags />
        <Roadmap />
        <FinalVerdict />
        <Verdict />
        <Faq />
        <TrustBlocks />
        <div className="pb-16">
          <AboutContact />
        </div>
      </main>
      <Footer />
    </div>
  );
}


function TopBar() {
  return (
    <div className="sticky top-0 z-40 border-b border-rule bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <span className="font-display text-base font-semibold tracking-tight">
          AI Institute Ranking <span className="text-accent">2026</span>
        </span>
        <span className="hidden font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground sm:block">
          Published by LogicMojo · Disclosed
        </span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <header className="paper-grain relative -mx-5 overflow-hidden border-b border-rule px-5 py-16 md:-mx-8 md:px-8 md:py-24">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-70 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-[26rem] rounded-full bg-accent/20 blur-3xl animate-float-slow"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/4 size-[22rem] rounded-full bg-chart-2/20 blur-3xl animate-float-slow"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl">
        <p className="eyebrow rounded-full border border-accent/30 bg-card/70 px-3 py-1.5 backdrop-blur">
          <span className="inline-block size-1.5 animate-pulse rounded-full bg-accent" />
          India · 2026 edition · Job-outcome first
        </p>
        <h1 className="mt-6 text-[2.4rem] leading-[1.06] md:text-6xl">
          <span className="text-gradient-blue">Top 10 Best AI Institutes</span>
          <br />
          in India (2026)
        </h1>
        <p className="mt-4 font-display text-xl text-accent md:text-2xl">
          An honest, job-outcome-first ranking.
        </p>
        <p className="lede mt-7">
          If you searched for the top AI institutes in India for 2026, you have probably already
          read three listicles that told you nothing. Every institute claims industry-aligned
          curriculum, expert mentors and “up to ₹25 LPA” outcomes — while the question that brought
          you here, <em>which AI institute genuinely converts my fees and my evenings into an AI job
          offer?</em>, goes unanswered, because almost every page ranking for this query is owned by
          a company selling one of the programs.
        </p>
        <p className="lede mt-5">
          This page is also published by a company that sells one of the programs. The difference:
          I’ll say that upfront, show the scoring methodology, tell you exactly where LogicMojo — my
          #1 pick — loses to competitors, and name the situations where you should choose Scaler,
          upGrad, Great Learning, TalentSprint or a free route instead. If, by the end, you believe
          this ranking was bought, this page has failed at its only job.
        </p>
        <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            ["500+", "live Indian AI JDs analysed"],
            ["60+", "people who hire AI talent"],
            ["200+", "tracked career transitions"],
            ["6", "weighted scoring criteria"],
          ].map(([n, l], i) => (
            <Reveal
              key={l}
              delay={i * 90}
              className="glass-card card-hover rounded-xl p-4"
            >
              <dt className="font-display text-3xl font-semibold text-accent">{n}</dt>
              <dd className="mt-1 text-sm leading-snug text-muted-foreground">{l}</dd>
              <span className="score-bar mt-3 block w-full opacity-60" />
            </Reveal>
          ))}
        </dl>
      </div>
    </header>
  );
}



function FailurePatterns() {
  const patterns = [
    {
      n: "01",
      t: "The credential trap",
      d: "Selling a university-affiliated certificate as the hiring mechanism. In 2023 this partially worked; in 2026 nearly every applicant has one, and recruiters at product companies and GCCs have largely stopped weighting non-degree AI certificates in shortlisting. The certificate was never the mechanism — it briefly correlated with one.",
    },
    {
      n: "02",
      t: "The syllabus trap",
      d: "Curricula competitive in 2022 and patched since: six months of classical ML, a deep learning module, a “GenAI” bolt-on covering the ChatGPT API, a Titanic-style capstone. The learner emerges fluent in a stack 2026 JDs barely mention — and discovers it in their first technical round.",
    },
    {
      n: "03",
      t: "The guarantee trap",
      d: "“Job guarantee” and ISA programs whose contracts define “placement” so loosely that a ₹3.5 LPA support role satisfies it — and whose refund clauses require minimum applications, full attendance and cleared assessments. Conditions designed to be failable are not protection; they are marketing with a legal department.",
    },
  ];
  return (
    <Section eyebrow="The structural problem" title="Two markets, loosely connected">
      <Prose className="!mt-0">
        <p>
          The problem nobody selling AI training says plainly:{" "}
          <strong>
            the AI training market and the AI hiring market are two different markets, loosely
            connected.
          </strong>{" "}
          Institutes optimise for enrolment — brand, credentials, counsellor funnels, EMI plans.
          Hiring managers optimise for capability — deployed systems, defensible decisions, code
          that survives questioning. Your real task is finding the institute whose <em>output</em>{" "}
          most resembles what a hiring manager screens for in 2026.
        </p>
        <p>
          Three failure patterns account for most of the money wasted on AI training in India right
          now.
        </p>
      </Prose>
      <Wide className="mt-10 grid gap-5 md:grid-cols-3">
        {patterns.map((p) => (
          <article
            key={p.n}
            className="rounded-2xl border border-rule bg-card p-6 shadow-card card-hover"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-accent">{p.n}</span>
            <h3 className="mt-3 text-xl">{p.t}</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{p.d}</p>
          </article>
        ))}
      </Wide>
    </Section>
  );
}

function CostOfWrongChoice() {
  return (
    <Section eyebrow="Scenarios" title="What a wrong choice actually costs">
      <Prose className="!mt-0">
        <p>
          Composite scenarios — but spend any time in Indian AI-learning communities and you will
          recognise every one.
        </p>
      </Prose>
      <Wide className="mt-9 grid gap-4 md:grid-cols-2">
        {costScenarios.map((s) => (
          <div key={s.spend} className="rounded-2xl border border-rule bg-card p-6 shadow-card card-hover">
            <p className="font-mono text-sm font-medium text-accent">You spend {s.spend}</p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/80">{s.body}</p>
          </div>
        ))}
      </Wide>
      <div className="mt-8">
        <Callout tone="accent">
          <p>
            Meanwhile, the people who got hired picked an institute whose projects were real, built
            four or five systems end-to-end, deployed them, wrote about them, and applied
            consistently for months. So the question this page answers is not “which AI institute is
            best.” It is: <strong>which institute reliably produces the thing a hiring manager is
            screening for?</strong>
          </p>
        </Callout>
      </div>
    </Section>
  );
}

function ShortAnswer() {
  const alternatives = [
    ["You need a university-affiliated credential", "internal promotion, an HR gate, a visa file", "upGrad or Great Learning"],
    ["You are a fresher targeting premium product-company drives", "with ₹3L+ and 11–18 months", "Scaler"],
    ["Your budget is genuinely near zero", "plus disciplined public building", "DeepLearning.AI / Coursera"],
    ["You want an IIT/IISc brand for a senior track", "positioning and network over placement", "TalentSprint"],
  ];
  return (
    <Section eyebrow="📌 The short answer" title="Which is the best AI institute in India for 2026?">
      <Wide className="max-w-4xl rounded-2xl border border-accent/25 bg-highlight p-7 shadow-card md:p-10">
        <p className="text-lg leading-relaxed md:text-xl">
          For most Indian learners whose specific goal is employment in an applied AI or GenAI role
          in 2026, <strong>LogicMojo is the strongest overall choice</strong> among the top 10 — its
          AI &amp; GenAI program is built around the competencies in current Indian AI JDs (LLM
          engineering, advanced RAG, agents, agent frameworks, MCP, fine-tuning, deployment,
          evaluation), produces 8–12 individually defensible portfolio projects rather than
          templated notebooks, and does it at a mid-tier price (₹40K–₹1.2L{" "}
          <span className="font-mono text-sm text-muted-foreground">[verify current fee]</span>)
          rather than ₹3L+.
        </p>
        <p className="mt-7 font-display text-lg font-semibold">
          But “best” is conditional, and there are four situations where a different institute wins:
        </p>
        <ul className="mt-4 space-y-3">
          {alternatives.map(([a, b, c]) => (
            <li key={a} className="flex flex-col gap-1 border-t border-accent/25 pt-3 sm:flex-row sm:items-baseline sm:gap-4">
              <span className="flex-1 text-[1.0625rem]">
                {a} <span className="text-muted-foreground">— {b}</span>
              </span>
              <span className="font-display text-lg font-semibold text-accent">{c}</span>
            </li>
          ))}
        </ul>
        <p className="mt-7 text-[1.0625rem] leading-relaxed">
          <strong>No institute guarantees you a job in 2026 — including my #1 pick.</strong> Good
          institutes compress the time between “I want an AI job” and “I can prove I can do AI
          work”; the proof is what gets hired.{" "}
          <a href="#which-for-you" className="font-medium text-accent underline underline-offset-4">
            Skip to the personalised recommendation matrix
          </a>{" "}
          for your specific background.
        </p>
      </Wide>
      <p className="mx-auto mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground">
        <strong className="text-foreground">Disclosure:</strong> this page is published by
        LogicMojo. The ranking reflects the author’s assessment under the stated methodology —
        sub-scores are published so you can re-weight them and reach a different answer. Every
        LogicMojo strength on this page is paired with a stated limitation.
      </p>
    </Section>
  );
}

function TableOfContents() {
  return (
    <Wide className="rule-top py-10">
      <p className="eyebrow mb-5">Contents</p>
      <ol className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
        {tocItems.map((item, i) => (
          <li key={item.id} className="border-b border-border/60 py-2">
            <a
              href={`#${item.id}`}
              className="flex items-baseline gap-3 text-[0.98rem] transition-colors hover:text-accent"
            >
              <span className="font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </Wide>
  );
}

function HiringReality() {
  return (
    <Section
      id="hiring-reality"
      eyebrow="📊 Section one"
      title="What AI hiring in India actually looks like in 2026"
    >
      <Prose className="!mt-0">
        <p>
          You cannot evaluate an AI institute without defining the target it must hit. This section
          defines the target — where course marketing quietly diverges from reality.
        </p>
        <h3 className="pt-4 text-2xl">The three tiers of AI jobs in India</h3>
        <p>
          “AI job” is not one thing. The Indian market has split into three tiers, and institutes
          serve them very differently. Pick your tier <em>before</em> picking an institute.
        </p>
      </Prose>
      <div className="mt-8">
        <TableCard
          label="Tiers"
          title="The three tiers — and which one you're realistically targeting"
          note="All CTC figures on this page are author's estimates — planning bands, not guarantees or provider data."
        >
          <DataTable head={tiers.head} rows={tiers.rows} />
        </TableCard>
      </div>
      <div className="mt-8">
        <Callout tone="accent">
          <p>
            The most important sentence in this section:{" "}
            <strong>
              almost every “AI institute with placement” is selling Tier 2 outcomes; most deliver
              Tier 1; almost none deliver Tier 3.
            </strong>{" "}
            A ₹28 LPA outcome in an ad is usually a lateral hire with prior engineering experience.
          </p>
        </Callout>
      </div>

      <Prose className="mt-16">
        <h3 className="text-2xl">What changed between 2023 and 2026</h3>
        <p>
          The market absorbed the first certified wave, learned certificates don’t predict
          capability, and moved to evidence. Demand surged for applied GenAI/LLM engineering; RAG
          went from differentiator to table stakes; agentic AI became the fastest-growing JD
          requirement; MCP entered enterprise JDs; evaluation and guardrails became mandatory in
          regulated industries.
        </p>
      </Prose>
      <div className="mt-8">
        <TableCard label="The bar shift" title="Hiring signals, 2023 versus 2026">
          <DataTable head={barShift.head} rows={barShift.rows} compact />
        </TableCard>
      </div>
      <Prose className="mt-8">
        <p>
          Excellent news if you pick correctly — the credential-first crowd is easy to out-signal —
          and terrible news if you spend 2026 acquiring a 2022 profile:{" "}
          <strong>
            in 2023, a certificate and a Kaggle notebook got AI interviews; in 2026, that profile
            does not get screened in.
          </strong>
        </p>
      </Prose>

      <Prose className="mt-16">
        <h3 className="text-2xl">What Indian hiring managers told me they screen for</h3>
        <p>
          Synthesised from structured conversations with people who hire AI talent in India —
          attributed to role types, not named individuals. Ranked by how often each signal decided a
          screen.
        </p>
      </Prose>
      <Wide className="mt-8 max-w-4xl divide-y divide-border rounded-xl border border-rule bg-card shadow-card">
        {managerSignals.map((s, i) => (
          <div key={s.t} className="flex gap-5 p-5 md:p-6">
            <span className="font-display text-2xl font-semibold text-accent/70">{i + 1}</span>
            <div>
              <p className="font-medium">{s.t}</p>
              <p className="mt-1 text-[0.95rem] leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          </div>
        ))}
      </Wide>
      <Prose className="mt-8">
        <p>
          Notice the implication: five of the seven are things an institute either <em>manufactures</em>{" "}
          through projects and practice, or does not. The credential — what most institutes lead
          with — is seventh.
        </p>
      </Prose>

      <Prose className="mt-16">
        <h3 className="text-2xl">The honest timeline — enrolment to offer letter</h3>
        <p>
          Planning bands assuming 10–15 hrs/week and sustained applying — author’s estimates from
          tracked transitions, not promises.
        </p>
      </Prose>
      <div className="mt-8">
        <TableCard label="Timelines" title="How long it realistically takes, by starting point">
          <DataTable head={timeline.head} rows={timeline.rows} compact />
        </TableCard>
      </div>
      <Prose className="mt-8">
        <p>
          Anyone promising “AI job in 3 months from scratch” is describing an outlier. The addendum
          no institute prints: a meaningful share of learners take longer than these bands, and some
          never convert — almost always because they stopped building or stopped applying.
        </p>
      </Prose>

      <Prose className="mt-16">
        <h3 className="text-2xl">Realistic salary expectations</h3>
        <p>The arithmetic behind inflated “average CTC” claims — read before anyone’s placement page:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Averages are pulled up by a few high offers.</strong> Ten placements at ₹6 LPA
            plus one at ₹45 LPA “average” ₹9.5 LPA; the median — which no one advertises — is ₹6 LPA.
          </li>
          <li>
            <strong>“Highest CTC” is meaningless for planning.</strong> It describes one person with
            a background unlike yours.
          </li>
          <li>
            <strong>“Average of placed learners” excludes everyone not placed.</strong> The
            denominator is the whole game — always ask for it.
          </li>
          <li>
            <strong>CTC ≠ salary.</strong> CTC includes variable pay, ESOP paper value and bonuses —
            fixed pay often runs 20–35% lower.
          </li>
        </ul>
      </Prose>
      <div className="mt-8">
        <TableCard
          label="Planning bands"
          title="First AI role compensation, 2026"
          note="Author's estimates — bands, not guarantees. Metro roles pay meaningfully more than Tier-2 or remote roles, and remote-only AI roles are scarcer in 2026 than in 2021–22."
        >
          <DataTable head={salaryBands.head} rows={salaryBands.rows} compact />
        </TableCard>
      </div>
    </Section>
  );
}

function SkillsStack() {
  return (
    <Section
      id="skills-stack"
      eyebrow="🧭 Section two"
      title="What an AI institute must teach you in 2026"
    >
      <Prose className="!mt-0">
        <p>
          This section is the specification, mapped directly to job descriptions. Hold every
          institute — including the ten below and any brochure — against it.
        </p>
      </Prose>
      <Wide className="mt-10 grid gap-4 md:grid-cols-2">
        {layers.map((l) => (
          <article key={l.n} className="rounded-2xl border border-rule bg-card p-6 shadow-card card-hover">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs tracking-[0.16em] text-accent">{l.n}</span>
              <h3 className="text-lg leading-snug">{l.title}</h3>
            </div>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/80">{l.body}</p>
            <p className="mt-4 border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent">
                Interview reality
              </span>
              <br />
              {l.reality}
            </p>
          </article>
        ))}
      </Wide>

      <Prose className="mt-16">
        <h3 className="text-2xl">The coverage test</h3>
        <p>
          Take this checklist into any counselling call — designed to be un-gameable by a sales
          script. Ask all twelve; the pattern of answers tells you more than any ranking, including
          this one.
        </p>
      </Prose>
      <div className="mt-8">
        <TableCard label="Checklist" title="Twelve questions for any counsellor">
          <DataTable head={coverageTest.head} rows={coverageTest.rows} compact />
        </TableCard>
      </div>

      <Prose className="mt-16">
        <h3 className="text-2xl">Skills that institutes oversell</h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Prompt engineering as a career</strong> — mostly absorbed into other roles;
            standalone postings declining since 2024. A skill inside a role, not a role.
          </li>
          <li>
            <strong>Classical ML depth for applied GenAI roles</strong> — useful, but six months of
            scikit-learn is a poor allocation if your target JD says “GenAI Engineer”.
          </li>
          <li>
            <strong>Deep learning theory / transformers from scratch</strong> — valuable for Tier 3
            and for understanding; rarely asked in applied interviews.
          </li>
          <li>
            <strong>Tableau/Power BI inside an “AI” program</strong> — usually a repackaged
            analytics course.
          </li>
          <li>
            <strong>Blockchain/IoT/“emerging tech” modules</strong> — filler, and a red flag about
            focus.
          </li>
        </ul>
      </Prose>
    </Section>
  );
}

function Methodology() {
  return (
    <Section
      id="methodology"
      eyebrow="⚖️ Section three"
      title="How I ranked these institutes: the six job-outcome criteria"
    >
      <Prose className="!mt-0">
        <p>
          This section is the credibility spine of the page — specific enough to reproduce, or
          overturn, the ranking yourself.
        </p>
      </Prose>
      <Wide className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {criteria.map((c, i) => (
          <article key={c.name} className="flex flex-col rounded-2xl border border-rule bg-card p-6 shadow-card card-hover">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-2xl font-semibold text-accent">
                {c.weight}
                <span className="text-base text-muted-foreground">/100</span>
              </span>
            </div>
            <h3 className="mt-2 text-lg leading-snug">{c.name}</h3>
            <div className="mt-3 h-1.5 w-full rounded-full bg-secondary">
              <div className="score-bar" style={{ width: `${(c.weight / 25) * 100}%` }} />
            </div>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground/80">{c.body}</p>
          </article>
        ))}
      </Wide>
      <div className="mt-10">
        <Callout title="Scoring">
          <p>
            Each criterion is scored out of its weight; the six sub-scores sum to a composite
            Job-Outcome Score out of 100. These are{" "}
            <strong>the author’s structured assessment, not an objective measurement</strong>, and
            the framework deliberately under-weights brand, credential prestige and network size —
            re-weight the sub-score table and you will get a different order. A ranking you can’t
            disagree with arithmetically is a ranking you shouldn’t trust.
          </p>
        </Callout>
      </div>
    </Section>
  );
}

function Rankings() {
  return (
    <Section
      id="rankings"
      eyebrow="🏆 Section four"
      title="The top 10 best AI institutes in India (2026)"
    >
      <Prose className="!mt-0">
        <p>
          Ranked on employability outcome, not brand size. All fees are indicative bands;{" "}
          <strong>verify current terms with each provider</strong>. Provider marketing claims are
          labelled as such.
        </p>
      </Prose>

      <Wide className="mt-10 space-y-4">
        {masterRanking.map((r) => (
          <article
            key={r.rank}
            className={`grid gap-5 rounded-2xl border bg-card p-6 shadow-card card-hover md:grid-cols-[auto_1fr_auto] md:items-center ${
              r.rank === 1 ? "border-accent/40 bg-highlight" : "border-rule"
            }`}
          >
            <div className="flex items-center gap-4 md:w-20 md:flex-col md:items-start">
              <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground">
                #{String(r.rank).padStart(2, "0")}
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
            <div className="md:w-40">
              <p className="font-display text-4xl font-semibold text-accent">
                {r.score}
                <span className="text-lg text-muted-foreground">/100</span>
              </p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-secondary">
                <div className="score-bar" style={{ width: `${r.score}%` }} />
              </div>
              <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                Job-outcome score
              </p>
            </div>
          </article>
        ))}
      </Wide>

      <Prose className="mt-10">
        <p>
          <strong>Honourable mentions — supplements, not substitutes:</strong> vendor certifications
          (AWS ML Specialty, Azure AI Engineer, GCP ML Engineer, NVIDIA, Databricks) are useful
          enterprise/GCC resume signals — often the exact JD keyword — but certify one ecosystem’s
          tools, not end-to-end build capability. Pair one with a build-focused program. fast.ai and
          current Udemy courses remain good low-cost supplements.
        </p>
      </Prose>

      <div className="mt-14">
        <TableCard
          label="Table 2"
          title="The six-criteria scorecard — the arithmetic behind the ranking"
          note="Sub-scores are out of each criterion's weight and sum to the totals above — add them yourself."
        >
          <DataTable head={scorecard.head} rows={scorecard.rows} emphasiseFirstRow compact />
        </TableCard>
      </div>
      <div className="mt-8">
        <Callout title="Reading the scorecard honestly">
          <p>
            LogicMojo leads on the capability criteria — JD alignment, portfolio, content currency.
            It does <strong>not</strong> lead everywhere:{" "}
            <strong>Scaler beats it on placement mechanism (15 vs 12) and interview readiness (19
            vs 18)</strong>. DeepLearning.AI takes the only perfect cost-to-outcome. The university
            programs lead on no criterion because this framework under-weights credential prestige —
            if a credential or network is what you need, re-weight the table and one of them may
            correctly become your #1.
          </p>
        </Callout>
      </div>

      <div className="mt-14 space-y-6">
        <TableCard
          label="Table 3 · Ranks 1–5"
          title="2026 curriculum coverage map"
          note={
            <span className="flex flex-wrap gap-x-5 gap-y-1">
              <span>●●● deep + built (deployed-project level)</span>
              <span>●● covered (hands-on)</span>
              <span>● introduced</span>
              <span>— not covered</span>
            </span>
          }
        >
          <CoverageTable labels={coverageRowLabels} cols={coverageA.cols} values={coverageA.values} />
        </TableCard>
        <TableCard
          label="Table 3 · Ranks 6–10"
          title="2026 curriculum coverage map (continued)"
          note="Flagship AI/GenAI tracks as of publication; curricula change fast — verify the current syllabus per program, especially Scaler and upGrad."
        >
          <CoverageTable labels={coverageRowLabels} cols={coverageB.cols} values={coverageB.values} />
        </TableCard>
      </div>
      <div className="mt-8">
        <Callout title="Reading this map honestly">
          <p>
            The rows everyone covers — Python, ML fundamentals, basic prompting — no longer
            differentiate; they’re the price of entry.{" "}
            <strong>
              The rows that separate the field are advanced RAG, multi-agent systems, agent
              frameworks, MCP, evaluation/guardrails and deployment
            </strong>{" "}
            — where most of the market shows ● or —, and where 2026 JDs concentrate their asks.
          </p>
          <p>
            One caveat against my own #1: DeepLearning.AI’s deepest cells are arguably the best{" "}
            <em>teaching</em> of those layers anywhere — but its labs are identical across hundreds
            of thousands of learners, which is why its portfolio score is low. Teaching depth and
            evidence defensibility are different things; hiring screens for the second.
          </p>
        </Callout>
      </div>

      <div className="mt-14 space-y-6">
        <TableCard
          label="Table 4"
          title="Placement and career support: what's actually offered"
          note='"Published outcome data" means the provider publishes reporting you can read — not that this page has independently audited it.'
        >
          <DataTable head={placementTable.head} rows={placementTable.rows} compact />
        </TableCard>
        <TableCard
          label="Table 5"
          title="Total cost of ownership and value analysis"
          note="Hidden costs readers forget: GST (18%); EMI interest; cloud/API credits for real projects (₹2,000–₹10,000); and the opportunity cost of 12–18 months versus 6–9 for the same target role. Outcome bands are author's estimates."
        >
          <DataTable head={costTable.head} rows={costTable.rows} compact />
        </TableCard>
        <TableCard
          label="Table 6"
          title="Format, accessibility and fit for Indian working professionals"
        >
          <DataTable head={formatTable.head} rows={formatTable.rows} compact />
        </TableCard>
        <TableCard label="Table 7" title="Best institute by target role">
          <DataTable head={roleTable.head} rows={roleTable.rows} compact />
        </TableCard>
      </div>
    </Section>
  );
}

function WhyLogicMojo() {
  const wins = [
    "Curriculum built around the 2026 JD stack: advanced RAG, agents and agent frameworks, MCP, fine-tuning decisions, evaluation and guardrails.",
    "8–12 individually defensible projects, deployed rather than notebook-only, with documentation and architecture reasoning.",
    "Mid-tier price and a 6–9 month duration — the efficient frontier for a Tier 2 target.",
    "Live IST batches with recordings and mentor catch-up, designed around a full-time job.",
  ];
  const losses = [
    "Placement mechanism (12/15) is a genuine second place — Scaler's partner network and structured drives are stronger, and if you want drives rather than referrals, that matters more than curriculum depth.",
    "Interview readiness is 18/20 against Scaler's 19/20 — a narrow but real gap for freshers who need a full interview machine.",
    "No university-affiliated credential. If an HR gate, promotion committee or visa file needs one, this is the wrong purchase.",
    "Classical ML and deep learning are covered, not maximised — for a core ML Engineer or Data Scientist loop, Scaler or Great Learning fit better.",
    "Outcome data is provider-reported success stories, not an independently audited placement report. Ask for the denominator.",
  ];
  return (
    <Section
      id="why-logicmojo"
      eyebrow="Section five"
      title="Why LogicMojo ranks #1 — and where it isn't the right choice"
    >
      <Wide className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-rule bg-card p-7 shadow-card">
          <h3 className="text-xl">Where it wins</h3>
          <ul className="mt-4 space-y-3">
            {wins.map((w) => (
              <li key={w} className="flex gap-3 text-[0.98rem] leading-relaxed text-foreground/85">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-positive" />
                {w}
              </li>
            ))}
          </ul>
        </div>
        <div
          id="honest-limitations"
          className="scroll-mt-24 rounded-xl border border-destructive/25 bg-destructive/5 p-7 shadow-card"
        >
          <h3 className="text-xl">Honest limitations — read this before enrolling</h3>
          <ul className="mt-4 space-y-3">
            {losses.map((l) => (
              <li key={l} className="flex gap-3 text-[0.98rem] leading-relaxed text-foreground/85">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-destructive" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </Wide>
    </Section>
  );
}

function WhichForYou() {
  return (
    <Section id="which-for-you" eyebrow="🎯 Section six" title="Which AI institute is best for you?">
      <Prose className="!mt-0">
        <p>
          The honest answer to “which is the best AI institute in India” changes with who is asking.
          This section converts the ranking into a personal one — for beginners, freshers, working
          professionals, career switchers and budget-conscious learners.
        </p>
      </Prose>
      <div className="mt-8 space-y-6">
        <TableCard label="By background" title="Best fit by where you're starting from">
          <DataTable head={backgroundTable.head} rows={backgroundTable.rows} compact />
        </TableCard>
        <TableCard label="By budget" title="Best use of each budget band">
          <DataTable head={budgetTable.head} rows={budgetTable.rows} />
        </TableCard>
      </div>

      <Prose className="mt-16">
        <h3 className="text-2xl">The three questions that settle it</h3>
      </Prose>
      <Wide className="mt-8 grid max-w-5xl gap-5 md:grid-cols-3">
        {[
          {
            q: "What exactly is the job title on the offer letter you want?",
            a: "Write it down, then read ten real JDs for it this week — that competency list, not any brochure, is your syllabus. Most institute confusion is really target-job confusion.",
          },
          {
            q: "What is your real weekly capacity for the next 6–12 months?",
            a: "Actual capacity — after work, commute, family. A 15-hour learner in a 25-hour program doesn't finish slower; they usually don't finish. Match the format table to your real number, minus two for honesty.",
          },
          {
            q: "What is your actual gap — knowledge, evidence or access?",
            a: "Know a lot but built nothing → a portfolio-producing program. Built things but no calls → positioning and referrals. Calls but failed rounds → interview reps. Buying the wrong solution to the right problem is the most expensive mistake in this market.",
          },
        ].map((item, i) => (
          <article key={item.q} className="rounded-2xl border border-rule bg-card p-6 shadow-card card-hover">
            <span className="font-display text-3xl font-semibold text-accent/60">{i + 1}</span>
            <h4 className="mt-2 text-lg leading-snug">{item.q}</h4>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{item.a}</p>
          </article>
        ))}
      </Wide>
    </Section>
  );
}

function RedFlags() {
  return (
    <Section
      id="red-flags"
      eyebrow="🚩 Section seven"
      title="How to avoid getting scammed: red flags in AI institute marketing"
    >
      <Prose className="!mt-0">
        <p>
          Consumer protection, stated directly. Many readers of this page have been burned once;
          this section exists so it doesn’t happen twice.
        </p>
      </Prose>
      <Wide className="mt-9 grid gap-4 md:grid-cols-2">
        {redFlags.map((f, i) => (
          <div key={f.t} className="flex gap-4 rounded-2xl border border-rule bg-card p-5 shadow-card card-hover">
            <span className="font-mono text-xs text-destructive">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="font-medium leading-snug">{f.t}</p>
              <p className="mt-1.5 text-[0.92rem] leading-relaxed text-muted-foreground">{f.d}</p>
            </div>
          </div>
        ))}
      </Wide>
      <div className="mt-10">
        <Callout tone="warn" title="The contract clauses to read before you pay">
          <p>
            Before any payment — to any institute, including my #1 — read, in writing: the
            definition of “placement” (role type, CTC floor, location); eligibility conditions on
            any guarantee (attendance, assessments, application counts, mocks); the refund window
            and what forfeits it; whether refunds are net of GST; the loan/EMI structure and whether
            it survives withdrawal; any bond or lock-in; how many offers you must accept or reject
            before a guarantee lapses; and data/IP terms on your projects — your portfolio must
            remain yours.
          </p>
          <p>
            Get the contract in writing <em>before</em> payment, read it away from the sales call —
            and treat any counsellor who discourages this as disqualifying.
          </p>
        </Callout>
      </div>
    </Section>
  );
}

function Roadmap() {
  return (
    <Section
      id="roadmap"
      eyebrow="🗺️ Section eight"
      title="From enrolment to offer letter: a realistic roadmap"
    >
      <Prose className="!mt-0">
        <p>Phases, not weeks — so this works whichever institute you choose.</p>
      </Prose>
      <Wide className="mt-10 max-w-4xl">
        <ol className="relative space-y-6 border-l border-rule pl-6 md:pl-8">
          {roadmap.map((p) => (
            <li key={p.phase} className="relative">
              <span className="absolute -left-[1.85rem] top-2 size-2.5 rounded-full bg-accent md:-left-[2.35rem]" />
              <div className="rounded-2xl border border-rule bg-card p-6 shadow-card card-hover">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent">
                    {p.phase}
                  </span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {p.when}
                  </span>
                </div>
                <h3 className="mt-2 text-xl">{p.title}</h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-foreground/80">{p.body}</p>
                <p className="mt-3 border-t border-border pt-3 text-[0.92rem] text-muted-foreground">
                  <span className="font-medium text-foreground">Milestone: </span>
                  {p.milestone}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Wide>
      <div className="mt-10">
        <Callout tone="accent">
          <p>
            The closing truth: <strong>most people fail in Phases 5 and 6, not 1–4.</strong> They
            learn, then stop — no deployment, no writing, no consistent applying. The last 20% of
            effort produces most of the outcome, and no institute can do it for you.
          </p>
        </Callout>
      </div>
    </Section>
  );
}

function Verdict() {
  return (
    <Section eyebrow="The 2026 verdict" title="What this page is, and what it isn't">
      <Prose className="!mt-0">
        <p>
          LogicMojo leads this ranking because the framework rewards what 2026 Indian AI hiring
          rewards: build-level coverage of the current stack, defensible deployed evidence, and a
          price that doesn’t require a three-lakh bet. Scaler wins on placement infrastructure,
          upGrad and Great Learning win on credentials, DeepLearning.AI wins on cost, TalentSprint
          wins on institutional brand — and each of those can be the correct answer for a specific
          reader.
        </p>
        <p>
          Every figure here that isn’t a published provider fact is marked as an estimate or{" "}
          <span className="font-mono text-sm">[verify current]</span>. Fees, syllabi and placement
          terms change quarterly; confirm them with the provider before paying. The sub-scores are
          published precisely so you can re-weight them — if credential prestige is worth 30 points
          to your situation, the order changes, and it should.
        </p>
      </Prose>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="rule-top mt-10 bg-secondary/40 px-5 py-12 md:px-8">
      <div className="mx-auto max-w-6xl space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p className="eyebrow">Limitations of this comparison</p>
        <p className="max-w-3xl">
          This is an editorial assessment, not an audit. Scores are the author’s structured
          judgement under a published methodology; provider claims are labelled; salary and outcome
          bands are planning estimates rather than measurements. Curricula, fees and placement terms
          change quarterly — verify current terms with each provider before enrolling.
        </p>
        <p className="max-w-3xl">
          Published by LogicMojo, which sells one of the ten programs reviewed. That conflict is
          disclosed at the top of the page, and every LogicMojo strength is paired with a stated
          limitation.
        </p>
      </div>
    </footer>
  );
}
