import {
  masterRanking,
  coverageRowLabels,
  coverageA,
  coverageB,
  placementTable,
  costTable,
  formatTable,
} from "./ranking-data";
import { reviews } from "./deep-data";

export type CompareItem = {
  name: string;
  program: string;
  rank: number;
  fees: string;
  duration: string;
  format: string;
  tier: string;
  best: string;
  /** 16 coverage levels aligned to coverageRowLabels (0–3). */
  coverage: number[];
  projects: string;
  placement: string;
  who: string;
  pros: string[];
  cons: string[];
  verdict: string;
  placementModel: string;
  outcomeData: string;
  partners: string;
  guarantee: string;
  costVerdict: string;
  outcomeBand: string;
  hoursPerWeek: string;
  liveVsRecorded: string;
  withJob: string;
};

function coverageFor(rank: number): number[] {
  const inA = rank <= 5;
  const src = inA ? coverageA : coverageB;
  const col = inA ? rank - 1 : rank - 6;
  return coverageRowLabels.map((_, row) => src.values[row]?.[col] ?? 0);
}

export const compareItems: CompareItem[] = masterRanking.map((inst) => {
  const review = reviews.find((r) => r.rank === inst.rank);
  const place = placementTable.rows[inst.rank - 1] ?? [];
  const cost = costTable.rows[inst.rank - 1] ?? [];
  const fmt = formatTable.rows[inst.rank - 1] ?? [];
  return {
    name: inst.name,
    program: inst.program,
    rank: inst.rank,
    fees: inst.fees,
    duration: inst.duration,
    format: inst.format,
    tier: inst.tier,
    best: inst.best,
    coverage: coverageFor(inst.rank),
    projects: review?.projects ?? "—",
    placement: review?.placement ?? "—",
    who: review?.who ?? "—",
    pros: review?.pros ?? [],
    cons: review?.cons ?? [],
    verdict: review?.verdict ?? "—",
    placementModel: place[1] ?? "—",
    outcomeData: place[2] ?? "—",
    partners: place[3] ?? "—",
    guarantee: place[6] ?? "—",
    costVerdict: cost[6] ?? "—",
    outcomeBand: cost[5] ?? "—",
    hoursPerWeek: fmt[4] ?? "—",
    liveVsRecorded: fmt[1] ?? "—",
    withJob: fmt[8] ?? "—",
  };
});

export const compareByName = (name: string) =>
  compareItems.find((c) => c.name === name);

export const coverageLabelShort = coverageRowLabels;
