import { masterRanking, scorecard } from "./ranking-data";

export type ProfileId = "switcher" | "professional" | "student";

export const criteriaKeys = [
  "jd",
  "portfolio",
  "interview",
  "placement",
  "currency",
  "cost",
] as const;
export type CriterionKey = (typeof criteriaKeys)[number];

export const criterionLabels: Record<CriterionKey, string> = {
  jd: "JD alignment",
  portfolio: "Portfolio output",
  interview: "Interview readiness",
  placement: "Placement mechanism",
  currency: "Content currency",
  cost: "Cost-to-outcome",
};

/** The published (default) weights that produce the headline /100 scores. */
export const baseWeights: Record<CriterionKey, number> = {
  jd: 25,
  portfolio: 20,
  interview: 20,
  placement: 15,
  currency: 10,
  cost: 10,
};

export type Profile = {
  id: ProfileId;
  label: string;
  short: string;
  icon: string;
  who: string;
  weights: Record<CriterionKey, number>;
  /** Per-institute fit adjustment (points) with a one-line reason. */
  fit: Record<string, { delta: number; why: string }>;
  constraints: string[];
  timeline: string;
  budget: string;
  firstMove: string;
};

const zero = () => ({}) as Record<string, { delta: number; why: string }>;

export const profiles: Profile[] = [
  {
    id: "switcher",
    label: "Career switcher",
    short: "Switcher",
    icon: "↗",
    who: "2–8 years in a non-AI role (SDE, QA, support, analyst, non-tech) moving into an AI title.",
    weights: { jd: 28, portfolio: 24, interview: 22, placement: 14, currency: 8, cost: 4 },
    timeline: "Job-ready in 6–11 months, offer in 9–16",
    budget: "Cost matters least here — a ₹2L difference is under two months of post-switch salary",
    firstMove:
      "Build one deployed, domain-flavoured RAG or agent project that reframes your current job as an AI advantage.",
    constraints: [
      "Your bottleneck is evidence and narrative, not learning hours",
      "Switch-resistance in interviews must be answered with deployed work",
      "Live cohorts beat recorded content because you need mock-interview reps",
    ],
    fit: {
      ...zero(),
      LogicMojo: { delta: 3, why: "Deepest build-level JD coverage at switcher-friendly price and hours" },
      Scaler: { delta: 1, why: "Strong mocks and referrals, but duration and fee are heavy mid-career" },
      upGrad: { delta: 1, why: "Credential helps if HR filters on degrees for the switch" },
      "Great Learning": { delta: 2, why: "Explicitly designed around domain + AI repositioning" },
      Intellipaat: { delta: 0, why: "Adequate coverage; interview manufacturing is thinner" },
      TalentSprint: { delta: -1, why: "Branding-heavy, weakest on interview readiness for switchers" },
      Simplilearn: { delta: -1, why: "Breadth over build depth; portfolio stays templated" },
      "AlmaBetter / Masai": { delta: -4, why: "Full-time intensive is impractical with a running job" },
      "DeepLearning.AI + Coursera": { delta: -5, why: "No interview or placement scaffolding when you need it most" },
      "PW Skills / GUVI": { delta: -5, why: "Tier-1 outcomes only — rarely clears a mid-career switch" },
    },
  },
  {
    id: "professional",
    label: "Working professional",
    short: "Professional",
    icon: "◱",
    who: "Employed in tech and staying there — adding AI scope, an internal move, or a promotion case.",
    weights: { jd: 26, portfolio: 18, interview: 12, placement: 8, currency: 22, cost: 14 },
    timeline: "Useful in 8–12 weeks, promotion-grade in 5–9 months",
    budget: "Often reimbursable — check L&D before you self-fund",
    firstMove:
      "Pick a real problem inside your current company and ship an evaluated GenAI prototype for it.",
    constraints: [
      "6–10 study hours a week is the real ceiling — weekend/async delivery wins",
      "You need current stack (agents, MCP, evals), not placement services",
      "Recordings and catch-up policy matter more than cohort energy",
    ],
    fit: {
      ...zero(),
      LogicMojo: { delta: 2, why: "Live IST + recordings and the most current agentic syllabus" },
      Scaler: { delta: -3, why: "11–18 months of cohort pace is hard to sustain alongside delivery pressure" },
      upGrad: { delta: 2, why: "Flexible recorded track plus a credential your manager recognises" },
      "Great Learning": { delta: 3, why: "Weekend-live format built for full-time employees" },
      Intellipaat: { delta: 2, why: "Self-paced blend with IIT branding at mid price" },
      TalentSprint: { delta: 3, why: "Senior-professional hybrid format and institutional signalling" },
      Simplilearn: { delta: 2, why: "The classic L&D-funded enterprise option" },
      "AlmaBetter / Masai": { delta: -6, why: "Full-time model plus income-share terms make no sense here" },
      "DeepLearning.AI + Coursera": { delta: 3, why: "Cheapest way to close specific gaps around a day job" },
      "PW Skills / GUVI": { delta: 0, why: "Fine as a low-cost supplement, not a promotion case" },
    },
  },
  {
    id: "student",
    label: "Full-time student",
    short: "Student",
    icon: "◎",
    who: "Final-year or recent graduate with time, low budget, and no work experience to trade on.",
    weights: { jd: 22, portfolio: 22, interview: 18, placement: 20, currency: 8, cost: 10 },
    timeline: "Job-ready in 7–14 months, offer in 10–20",
    budget: "Upfront capital is the binding constraint — EMI, ISA and free tiers are in play",
    firstMove:
      "Optimise for a program with real drives or referrals, then out-build your batch on deployment.",
    constraints: [
      "With no experience, placement mechanism does the heavy lifting",
      "You have full-time hours — intensive formats are an advantage, not a risk",
      "Your projects must be exceptional; templated capstones are screened out",
    ],
    fit: {
      ...zero(),
      LogicMojo: { delta: 1, why: "Best build depth per rupee; placement engine is smaller than Scaler's" },
      Scaler: { delta: 4, why: "Strongest partner drives and mocks for freshers targeting product companies" },
      upGrad: { delta: -1, why: "Credential value is lower when you already hold a fresh degree" },
      "Great Learning": { delta: -2, why: "Built around existing domain expertise you don't have yet" },
      Intellipaat: { delta: 0, why: "Reasonable middle option with job support" },
      TalentSprint: { delta: -3, why: "Priced and formatted for senior professionals" },
      Simplilearn: { delta: -2, why: "Enterprise-oriented; weak fresher pipeline" },
      "AlmaBetter / Masai": { delta: 5, why: "Zero upfront, full-time intensive, fresher-focused placement" },
      "DeepLearning.AI + Coursera": { delta: -2, why: "No placement path at all — only if you are fiercely self-directed" },
      "PW Skills / GUVI": { delta: 2, why: "Genuinely affordable for students, incl. vernacular delivery" },
    },
  },
];

export const profileById = (id: ProfileId) =>
  profiles.find((p) => p.id === id) ?? profiles[0];

const subScores: Record<string, Record<CriterionKey, number>> = Object.fromEntries(
  scorecard.rows.map((row) => [
    row[0],
    {
      jd: Number(row[1]),
      portfolio: Number(row[2]),
      interview: Number(row[3]),
      placement: Number(row[4]),
      currency: Number(row[5]),
      cost: Number(row[6]),
    },
  ]),
);

export type ScoredInstitute = (typeof masterRanking)[number] & {
  profileScore: number;
  baseScore: number;
  profileRank: number;
  rankShift: number;
  fitWhy: string;
  breakdown: { key: CriterionKey; points: number; weight: number }[];
};

export function scoreForProfile(id: ProfileId): ScoredInstitute[] {
  const profile = profileById(id);
  const scored = masterRanking.map((inst) => {
    const subs = subScores[inst.name];
    const breakdown = criteriaKeys.map((key) => {
      const ratio = subs ? subs[key] / baseWeights[key] : 0;
      return {
        key,
        weight: profile.weights[key],
        points: Math.round(ratio * profile.weights[key] * 10) / 10,
      };
    });
    const weighted = breakdown.reduce((sum, b) => sum + b.points, 0);
    const fit = profile.fit[inst.name] ?? { delta: 0, why: "" };
    const profileScore = Math.max(0, Math.min(100, Math.round(weighted + fit.delta)));
    return {
      ...inst,
      baseScore: inst.score,
      profileScore,
      fitWhy: fit.why,
      breakdown,
      profileRank: 0,
      rankShift: 0,
    };
  });

  scored.sort((a, b) => b.profileScore - a.profileScore || a.rank - b.rank);
  return scored.map((inst, i) => ({
    ...inst,
    profileRank: i + 1,
    rankShift: inst.rank - (i + 1),
  }));
}
