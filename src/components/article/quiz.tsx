import { useMemo, useState } from "react";
import { Section, Prose, Reveal } from "@/components/article/primitives";
import { quizQuestions, recommend, type QuizAnswers } from "@/lib/beginner-data";
import { cn } from "@/lib/utils";

/**
 * Eight-question beginner course finder. Answers map deterministically to one of
 * the ten reviewed programs, shown in a modal result card.
 */
export function CourseQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [open, setOpen] = useState(false);

  const total = quizQuestions.length;
  const q = quizQuestions[Math.min(step, total - 1)]!;
  const answered = Object.keys(answers).length;
  const progress = Math.round((answered / total) * 100);
  const result = useMemo(() => (open ? recommend(answers) : null), [open, answers]);

  const choose = (v: string) => {
    const next = { ...answers, [q.id]: v };
    setAnswers(next);
    if (step + 1 >= total) setOpen(true);
    else setStep(step + 1);
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    setOpen(false);
  };

  return (
    <Section
      id="quiz"
      eyebrow="🧪 Course finder"
      title="Which GenAI course fits you as a beginner? Answer 8 questions."
    >
      <Prose className="!mt-0">
        <p>
          The ranking above is generic; your situation is not. This finder asks the eight questions a
          counsellor should ask before quoting you a price — experience level, background, goal,
          budget, placement need, learning mode, weekly hours and whether you need Python and machine
          learning foundations before Generative AI — then names one of the ten reviewed programs and
          explains the reasoning, including where the pick is weak.
        </p>
      </Prose>

      <Reveal className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-highlight/40 via-card to-card shadow-lift">
        <div className="border-b border-rule px-6 py-5 md:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
              Question {Math.min(step + 1, total)} of {total}
            </p>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent">
              {progress}% complete
            </p>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="score-bar !h-1.5 transition-all duration-500"
              style={{ width: `${Math.max(progress, 4)}%` }}
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {quizQuestions.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setStep(i)}
                aria-label={`Go to question ${i + 1}`}
                className={cn(
                  "h-1.5 w-7 rounded-full transition-colors",
                  answers[item.id] ? "bg-accent" : i === step ? "bg-accent/50" : "bg-border",
                )}
              />
            ))}
          </div>
        </div>

        <div className="px-6 py-7 md:px-8">
          <h3 className="text-xl leading-snug md:text-2xl">{q.q}</h3>
          <p className="mt-2 text-[0.92rem] text-muted-foreground">{q.hint}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {q.opts.map((o, i) => {
              const active = answers[q.id] === o.v;
              return (
                <button
                  key={o.v}
                  type="button"
                  onClick={() => choose(o.v)}
                  className={cn(
                    "group flex items-start gap-3 rounded-xl border px-4 py-4 text-left transition-all duration-200",
                    active
                      ? "border-accent bg-accent-soft/70 shadow-card"
                      : "border-rule bg-card hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-card",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border font-mono text-[0.7rem]",
                      active ? "border-accent bg-accent text-accent-foreground" : "border-border text-muted-foreground",
                    )}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-[0.97rem] leading-snug text-foreground/90">{o.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-5">
            <button
              type="button"
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="rounded-full border border-rule px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground disabled:opacity-40"
            >
              ← Back
            </button>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={reset}
                className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setOpen(true)}
                disabled={answered < total}
                className="rounded-full bg-accent px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent-foreground shadow-card transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Show my recommendation
              </button>
            </div>
          </div>
          {answered < total && (
            <p className="mt-3 text-right text-[0.82rem] text-muted-foreground">
              {total - answered} question{total - answered === 1 ? "" : "s"} left
            </p>
          )}
        </div>
      </Reveal>

      {open && result && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Your recommended GenAI course"
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-foreground/45 p-4 backdrop-blur-sm md:items-center"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="reveal reveal-in my-6 w-full max-w-2xl overflow-hidden rounded-3xl border border-accent/30 bg-card shadow-lift"
          >
            <div className="relative overflow-hidden border-b border-rule bg-gradient-to-br from-accent/18 via-highlight/50 to-card px-6 py-7 md:px-8">
              <div
                className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-accent/25 blur-3xl"
                aria-hidden
              />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow mb-2">
                    <span className="inline-block size-1.5 animate-pulse rounded-full bg-accent" />
                    Your best-fit match · rank #{result.rank} of 10
                  </p>
                  <h3 className="text-2xl leading-tight md:text-3xl">{result.name}</h3>
                  <p className="mt-2 font-display text-lg text-accent">{result.tag}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="grid size-9 shrink-0 place-items-center rounded-full border border-rule bg-card/80 text-lg text-muted-foreground transition-colors hover:text-foreground"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="max-h-[62vh] overflow-y-auto px-6 py-6 md:px-8">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent">
                Why this fits you as a beginner
              </p>
              <ul className="mt-3 space-y-2.5">
                {result.why.map((w) => (
                  <li key={w} className="flex gap-2.5 text-[0.95rem] leading-relaxed text-foreground/85">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {w}
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent">
                Key GenAI modules you will cover
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {result.modules.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-accent/25 bg-accent-soft/50 px-3 py-1 text-[0.82rem] text-foreground/85"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent">
                Placement & support snapshot
              </p>
              <dl className="mt-3 grid gap-3 sm:grid-cols-2">
                {result.stats.map((s) => (
                  <div key={s.k} className="rounded-xl border border-rule bg-secondary/40 p-4">
                    <dt className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-muted-foreground">
                      {s.k}
                    </dt>
                    <dd className="mt-1 text-[0.9rem] leading-snug text-foreground/85">{s.v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 rounded-xl border border-l-4 border-border border-l-destructive/60 bg-destructive/8 p-5">
                <p className="font-display text-base font-semibold">Read this before you pay</p>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed text-foreground/85">{result.caution}</p>
              </div>

              <p className="mt-4 text-[0.9rem] text-muted-foreground">
                Runner-up for your answers: <span className="text-foreground/85">{result.runnerUp}</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-rule bg-secondary/40 px-6 py-5 md:px-8">
              <a
                href={result.cta.href}
                target={result.cta.href.startsWith("http") ? "_blank" : undefined}
                rel={result.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-full bg-accent px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent-foreground shadow-card transition-transform hover:-translate-y-0.5"
              >
                {result.cta.label} →
              </a>
              <a
                href={`#review-${result.rank}`}
                onClick={() => setOpen(false)}
                className="rounded-full border border-rule px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
              >
                Read the full review
              </a>
              <button
                type="button"
                onClick={reset}
                className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"
              >
                Retake quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
