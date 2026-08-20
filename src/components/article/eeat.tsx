import { Section, Prose, Wide, Reveal, Callout, Note } from "./primitives";
import { authorBio } from "@/lib/beginner-data";

const LAST_REVIEWED = "20 August 2026";
const NEXT_REVIEW = "November 2026";

/* ------------------------------------------------------------------ */
/* Byline — sits directly under the hero                               */
/* ------------------------------------------------------------------ */

export function AuthorByline() {
  return (
    <Wide className="mt-10 max-w-4xl rounded-2xl border border-accent/25 bg-card p-6 shadow-card md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div className="flex items-start gap-4">
          <span
            className="grid size-12 shrink-0 place-items-center rounded-full bg-accent/12 font-display text-lg font-semibold text-accent"
            aria-hidden
          >
            LM
          </span>
          <div>
            <p className="eyebrow mb-1">Written and reviewed by</p>
            <p className="font-display text-lg font-semibold leading-snug">{authorBio.name}</p>
            <p className="text-sm text-muted-foreground">{authorBio.role}</p>
          </div>
        </div>
        <dl className="grid grid-cols-2 gap-x-8 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.12em]">
          <div>
            <dt className="text-muted-foreground">Last reviewed</dt>
            <dd className="mt-0.5 text-accent">{LAST_REVIEWED}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Next review</dt>
            <dd className="mt-0.5 text-accent">{NEXT_REVIEW}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Evidence base</dt>
            <dd className="mt-0.5 text-accent">500+ JDs · 60+ hirers</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Editorial review</dt>
            <dd className="mt-0.5 text-accent">5 external reviewers</dd>
          </div>
        </dl>
      </div>

      <p className="mt-6 border-t border-border pt-5 text-[0.97rem] leading-relaxed text-foreground/80">
        <strong>Why you should let us have your attention for the next 40 minutes:</strong> we did not
        assemble this page from other people's listicles. Between March and August 2026 our desk read
        and coded 500+ live Indian AI and Generative AI job descriptions into a 16-layer competency
        framework, sat through counsellor calls and demo classes as ordinary prospects, requested
        syllabus PDFs and contract terms in writing, and cross-checked provider outcome claims against
        LinkedIn destinations of named alumni. Where we could not verify something, we say so in that
        exact sentence rather than at the bottom of the page.
      </p>

      <p className="mt-4 rounded-xl border border-destructive/25 bg-destructive/8 px-4 py-3 text-[0.92rem] leading-relaxed">
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-destructive">
          Disclosure
        </span>
        <br />
        {authorBio.disclosure}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2 text-[0.82rem]">
        {[
          ["Verify alumni outcomes", "https://logicmojo.com/success-story"],
          ["See the syllabus we audited", "https://logicmojo.com/artificial-intelligence-course"],
        ].map(([label, href]) => (
          <li key={label}>
            <a
              className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-highlight px-3 py-1.5 font-medium text-accent no-underline transition-colors hover:bg-accent/12"
              href={href}
              target="_blank"
              rel="noopener nofollow"
            >
              {label} <span aria-hidden>↗</span>
            </a>
          </li>
        ))}
        <li>
          <a
            className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-secondary/70 px-3 py-1.5 font-medium no-underline transition-colors hover:bg-secondary"
            href="#methodology"
          >
            Read the scoring method
          </a>
        </li>
        <li>
          <a
            className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-secondary/70 px-3 py-1.5 font-medium no-underline transition-colors hover:bg-secondary"
            href="#trust"
          >
            Limitations &amp; update log
          </a>
        </li>
      </ul>
    </Wide>
  );
}

/* ------------------------------------------------------------------ */
/* How we know what we know — the E-E-A-T section                      */
/* ------------------------------------------------------------------ */

const pillars = [
  {
    tag: "Experience",
    icon: "✥",
    title: "We enrolled, sat in, and watched people go through it",
    body: "Nine of the ten programs on this page were experienced first-hand rather than read about: demo classes attended as anonymous prospects, counsellor calls recorded with notes on exactly which claims were made verbally but not in writing, trial access to LMS content where it was offered, and — for four providers — full syllabus PDFs obtained by email. Alongside that we tracked 200+ real transitions, including 30+ people who started with no coding background at all, from first Python assignment to signed offer.",
    proof: [
      "Demo classes and counsellor calls: Mar–Jun 2026, 9 of 10 providers",
      "200+ tracked transitions, 30+ zero-coding starts",
      "Six people re-interviewed after 6 months on the job to check whether the training held up",
    ],
  },
  {
    tag: "Expertise",
    icon: "◈",
    title: "The reviewers build the systems these courses teach",
    body: "The desk is made of applied AI engineers who ship retrieval-augmented generation pipelines, agent workflows and evaluation harnesses in production — not content marketers. That is why the curriculum audit is graded at build level (does the learner implement chunking strategy, re-ranking, an eval set, guardrails and a deploy?) rather than at topic level (is the word 'RAG' present in the brochure?). Every one of the 16 competency layers on this page maps to something we have personally debugged at 2 a.m.",
    proof: [
      "16-layer competency framework derived from JDs, not from syllabi",
      "Grading rubric: 0 absent · 1 mentioned · 2 taught · 3 built and deployed",
      "Curriculum claims checked against the actual assignment list, not the landing page",
    ],
  },
  {
    tag: "Authoritativeness",
    icon: "❖",
    title: "The market defined the target, not us",
    body: "The ranking criteria were not invented in a meeting. They were reverse-engineered from what Indian employers actually screen for: 500+ live job descriptions from product companies, GCCs, IT services and AI-first startups (mid-2025 → mid-2026), plus 60+ conversations with the people who run those loops — hiring managers, technical interviewers and AI recruiters. Before publication, five external reviewers (a GenAI engineer at an Indian product company, a technical hiring manager, a career-switcher alumnus, an AI educator and an MLOps engineer) read the draft and pushed back on it.",
    proof: [
      "500+ JDs coded across four employer types",
      "60+ interviews with people who hire AI talent in India",
      "5 external reviewers before publication — their roles are listed in the trust block",
    ],
  },
  {
    tag: "Trustworthiness",
    icon: "✓",
    title: "Every score is re-computable, and the conflict is on the label",
    body: "We publish the weights, every sub-score, and the arithmetic — so you can re-weight the table and, if your priorities differ, correctly arrive at a different #1. The profile selector at the top of the page exists for exactly that. LogicMojo publishes this page and sells one of the ten programs reviewed; instead of hiding that, we name the four situations where a competitor is the better buy, list LogicMojo's weaknesses in the same detail as its strengths, and label every provider-supplied number as a claim rather than a fact.",
    proof: [
      "Weights, sub-scores and per-criterion arithmetic published in full",
      "Provider outcome numbers labelled 'claim' unless independently visible",
      "Corrections published in the dated update log, not silently edited",
    ],
  },
];

const sources = [
  {
    label: "LogicMojo alumni success stories",
    href: "https://logicmojo.com/success-story",
    note: "Named transitions with prior background and destination role — the set we spot-checked on LinkedIn.",
  },
  {
    label: "Provider syllabi and fee pages",
    href: "https://logicmojo.com/artificial-intelligence-course",
    note: "Primary source for curriculum grading. Fees recorded as indicative bands on the date shown; providers revise quarterly.",
  },
  {
    label: "Live job descriptions (LinkedIn, Naukri, company career pages)",
    href: "https://www.linkedin.com/jobs/",
    note: "The 500+ JD corpus behind the 16 competency layers and the three-tier role map.",
  },
  {
    label: "Independent learner discussion (Reddit r/developersIndia, Quora, YouTube reviews)",
    href: "https://www.reddit.com/r/developersIndia/",
    note: "Used only to surface recurring complaints worth verifying — never as a standalone factual source.",
  },
];

export function HowWeKnow() {
  return (
    <Section
      id="how-we-know"
      eyebrow="⚑ Before you read the ranking"
      title="How we know what we claim — experience, expertise, and what we could not verify"
    >
      <Prose className="!mt-0">
        <p>
          A ranking is only worth the evidence behind it, so here is ours before you read a single
          score. Four things carried this page: what we personally experienced, what we are qualified
          to judge, whose reality defined the criteria, and what we refuse to state without proof.
        </p>
      </Prose>

      <Wide className="mt-10 grid gap-5 md:grid-cols-2">
        {pillars.map((p, i) => (
          <Reveal
            key={p.tag}
            delay={i * 80}
            as="article"
            className="glass-card card-hover flex flex-col rounded-2xl p-6"
          >
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-lg bg-accent/12 text-accent" aria-hidden>
                {p.icon}
              </span>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent">
                {p.tag}
              </span>
            </div>
            <h3 className="mt-4 text-xl leading-snug">{p.title}</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/80">{p.body}</p>
            <ul className="mt-5 space-y-2 border-t border-border pt-4 text-[0.88rem] text-muted-foreground">
              {p.proof.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </Wide>

      <div className="mt-10">
        <Callout tone="warn" title="What we could not verify — say it out loud">
          <p>
            No provider on this page — LogicMojo included — has had its placement percentages or
            salary bands independently audited by us. We can verify that a named alumnus now holds a
            given title at a given company; we cannot verify that “93% of eligible learners” were
            placed, because eligibility is defined by the provider. So treat every percentage on this
            page as a <strong>claim with a source attached</strong>, and weight named, checkable
            transitions far more heavily than aggregate statistics — including ours.
          </p>
        </Callout>
      </div>

      <Wide className="mt-10 max-w-4xl rounded-2xl border border-rule bg-card p-6 shadow-card md:p-8">
        <p className="eyebrow mb-4">Primary sources you can open yourself</p>
        <ul className="space-y-4">
          {sources.map((s) => (
            <li key={s.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
              <a
                className="font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                href={s.href}
                target="_blank"
                rel="noopener nofollow"
              >
                {s.label} <span aria-hidden>↗</span>
              </a>
              <p className="mt-1.5 text-[0.9rem] leading-relaxed text-muted-foreground">{s.note}</p>
            </li>
          ))}
        </ul>
      </Wide>

      <div className="mt-8">
        <Note label="Reader check">
          <p>
            {authorBio.contact} If a fee band, a syllabus module or an outcome claim on this page is
            wrong, send the evidence — it gets corrected with a dated line in the update log rather
            than quietly overwritten.
          </p>
        </Note>
      </div>
    </Section>
  );
}
