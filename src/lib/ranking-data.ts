export type Row = string[];

export const tocItems = [
  { id: "your-profile", label: "Personalise for Your Profile" },
  { id: "how-we-know", label: "How We Know What We Claim" },
  { id: "hiring-reality", label: "The 2026 AI Hiring Reality" },
  { id: "skills-stack", label: "The Skills That Must Be Taught" },
  { id: "methodology", label: "Methodology" },
  { id: "research-process", label: "How I Researched & Ranked 10" },
  { id: "rankings", label: "Rankings & Comparison Tables" },
  { id: "compare", label: "Comparison Mode: Any Three" },
  { id: "beginner-pick", label: "Best Pick for Beginners" },
  { id: "logicmojo-deep-dive", label: "The #1 Pick, Audited" },
  { id: "reviews", label: "In-Depth Reviews of All 10" },
  { id: "quiz", label: "Course Finder Quiz (8 Qs)" },
  { id: "how-to-choose", label: "How to Choose as a Beginner" },
  { id: "which-for-you", label: "Which Is Best for You" },
  { id: "decision-tree", label: "Six-Question Decision Tree" },
  { id: "beyond-marketing", label: "Beyond the Marketing" },
  { id: "red-flags", label: "Red Flags & Contract Traps" },
  { id: "roadmap", label: "Roadmap to Offer" },
  { id: "verdict-2026", label: "The 2026 Verdict" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "trust", label: "Limitations, Log & Author" },
];


export const tiers = {
  head: ["Tier", "Role examples", "What hiring screens for", "Entry path", "Typical CTC band (2026)*"],
  rows: [
    [
      "Tier 1 — AI-adjacent / AI-enabled",
      "AI Business Analyst, AI Product Manager, GenAI Solutions Consultant, AI Support Engineer",
      "Domain expertise + AI literacy; scoping and evaluating AI solutions; light or no coding",
      "Non-tech reachable in 3–6 months",
      "₹5–18 LPA (domain-dependent)",
    ],
    [
      "Tier 2 — Applied AI / GenAI engineering",
      "AI Engineer, GenAI/LLM Engineer, AI Agent Developer, ML Engineer (applied), RAG Engineer",
      "Can you build? Deployed systems, retrieval pipelines, agents, evaluation, production concerns; strong coding",
      "Software/data background 6–12 months; from scratch 9–18",
      "₹8–35 LPA (₹6–12 freshers; ₹18–35 for 4–8 yrs with proven AI work)",
    ],
    [
      "Tier 3 — Core ML / research / applied science",
      "Applied Scientist, Research Engineer, Foundation Model Engineer",
      "Mathematical depth, publications, strong CS fundamentals — usually MS/PhD",
      "Rarely reachable via a short program",
      "₹25 LPA–₹1Cr+",
    ],
  ] as Row[],
};

export const barShift = {
  head: ["Hiring signal", "2023 reality", "2026 reality"],
  rows: [
    ["AI certificate on resume", "Differentiating — few had one", "Baseline noise — nearly everyone has one"],
    ["Kaggle notebook / classroom project", "Often enough for a fresher screen", "Ignored unless deployed and non-templated"],
    ["Prompt engineering skill", "Marketable standalone", "Baseline literacy; rarely a role"],
    ["RAG experience", "Rare and differentiating", "Expected for most GenAI roles"],
    ["Agent / multi-agent work", "Cutting-edge, rarely asked", "Fastest-growing JD requirement"],
    ["Deployment + monitoring", '"Nice to have"', "Frequently a screening filter"],
    ["Model evaluation / guardrails", "Rarely mentioned", "Increasingly mandatory, esp. BFSI/enterprise"],
    ["Domain + AI combination", "Uncommon", "Strongly preferred — AI-in-BFSI/healthcare/retail"],
  ] as Row[],
};

export const timeline = {
  head: ["Your starting point", "Time to job-ready", "Time to offer", "Main bottleneck"],
  rows: [
    ["Software engineer, 2–6 yrs, strong coding", "4–7 months", "6–10 months", "AI-specific evidence, not learning"],
    ["Data analyst / BI, SQL + some Python", "6–9 months", "8–13 months", "Engineering depth and deployment"],
    ["Fresher, CS degree, decent coding", "7–11 months", "10–16 months", "Projects must be exceptional"],
    ["Fresher, non-CS degree", "9–14 months", "12–20 months", "Fundamentals and credibility"],
    ["QA / support / DevOps, 2–8 yrs", "7–11 months", "10–16 months", "Coding depth, role-change resistance"],
    ["Non-tech professional (Tier 1 roles)", "3–6 months", "5–10 months", "Positioning and domain-AI translation"],
    ["Career-break returner", "6–10 months", "9–15 months", "Recency and interview confidence"],
  ] as Row[],
};

export const salaryBands = {
  head: ["Profile", "Realistic first AI role CTC (India, 2026)"],
  rows: [
    ["Fresher, strong portfolio, product co./startup", "₹6–14 LPA"],
    ["Fresher, service-company AI practice", "₹4–8 LPA"],
    ["2–4 yrs SDE moving to AI Engineer", "₹12–24 LPA"],
    ["5–8 yrs engineer → Senior AI/GenAI Engineer", "₹20–40 LPA"],
    ["Data analyst → AI/ML Engineer", "₹9–18 LPA"],
    ["Non-tech → Tier 1 AI-adjacent role", "₹5–15 LPA (domain-dependent)"],
    ["GCC AI roles (all levels)", "Typically 15–35% above services bands"],
  ] as Row[],
};

export const layers = [
  { n: "Layer 0", title: "Programming and data foundations", body: "Python fluency — debugging, structuring code, APIs, async — plus Git/GitHub, SQL, JSON, basic Linux.", reality: "You will write or read code live; gaps here end interviews in round one." },
  { n: "Layer 1", title: "ML fundamentals (enough, not exhaustive)", body: "Supervised vs unsupervised, train/validation/test discipline, overfitting, evaluation metrics — and when classical ML beats an LLM.", reality: "Conceptual questions, not derivations, for applied roles." },
  { n: "Layer 2", title: "How LLMs actually work", body: "Tokenisation; embeddings; the transformer and attention at a practical level; context windows; sampling; inference cost; hallucination.", reality: '"Explain an embedding to a product manager" is a common question.' },
  { n: "Layer 3", title: "Applied LLM engineering", body: "OpenAI, Anthropic and Google APIs plus open-source models; structured outputs; function calling; prompting beyond basics; caching, cost and latency.", reality: '"How would you cut this system\'s cost by half?"' },
  { n: "Layer 4", title: "RAG (Retrieval-Augmented Generation)", body: "Chunking; embedding models; vector databases (ChromaDB, Pinecone, Weaviate, pgvector); semantic vs hybrid search; re-ranking; grounding; RAG evaluation. The single most-requested competency in 2026 Indian GenAI JDs.", reality: "Expect a system-design question on document Q&A." },
  { n: "Layer 5", title: "Agents and agentic AI", body: "Tool use; ReAct and planning; memory; multi-agent orchestration; LangGraph, CrewAI, AutoGen, OpenAI Agents SDK; MCP; loop control.", reality: "The fastest-growing question area and the easiest place to differentiate." },
  { n: "Layer 6", title: "Fine-tuning and model adaptation", body: "When to fine-tune vs RAG vs prompt; dataset prep; SFT; LoRA/QLoRA; Hugging Face; evaluating against the base model.", reality: '"When would you fine-tune?" is asked far more than "implement LoRA."' },
  { n: "Layer 7", title: "Deployment, MLOps and production", body: "Containerisation; API serving (FastAPI); cloud basics; CI/CD; monitoring; cost tracking; security and PII.", reality: '"Have you deployed anything?" is the fastest filter in the market.' },
  { n: "Layer 8", title: "Evaluation, guardrails and responsible AI", body: "Automated evaluation; LLM-as-judge and its limits; golden datasets; hallucination detection; prompt-injection defence; compliance awareness.", reality: "A mandatory round at more and more enterprises." },
  { n: "Layer 9", title: "Portfolio, communication and interview craft", body: "Documented projects; READMEs; architecture diagrams; writing about your work; whiteboarding an AI system; career-switch framing.", reality: "Where technically capable candidates most often lose offers." },
];

export const coverageTest = {
  head: ["Question to ask the counsellor", "A good answer sounds like", "Warning sign"],
  rows: [
    ["Which layers do you teach to a build level?", "Specific layers with named projects", '"We cover everything"'],
    ["When was the curriculum last updated, and what changed?", "A dated, specific answer", '"Continuously updated"'],
    ["Can I see a past learner's capstone repository?", '"Yes — here are three links"', '"Projects are proprietary"'],
    ["How many projects are deployed vs notebook-only?", "A number", "Deflection"],
    ["What exactly does \u201cplacement assistance\u201d include?", "A step-by-step process", "A brochure line"],
    ["Is placement support conditional? On what?", "Clear, written criteria", '"We\'ll discuss after enrolment"'],
    ["Refund policy and lock-in?", "Written, specific, shared pre-payment", "Verbal assurance only"],
    ["Who teaches — practitioners?", "Named, verifiable instructors", '"Industry experts"'],
    ["Class size and doubt-resolution SLA?", "Concrete numbers and hours", "Unanswered"],
    ["What roles did last quarter's cohort get?", "Designations and company types", "CTC averages only"],
    ["Do you cover agents and MCP?", '"Yes" with framework names', '"GenAI is covered"'],
    ["What if I fall behind?", "A described catch-up system", '"Recordings are available"'],
  ] as Row[],
};

export const criteria = [
  { weight: 25, name: "Job-description alignment", body: "The share of competencies extracted from 500+ live Indian AI JDs (mid-2025 to mid-2026) that the institute teaches to a build-and-defend level. A syllabus mention scores zero; a graded, deployed project scores full." },
  { weight: 20, name: "Portfolio output", body: "Not project count — project defensibility: deployed vs notebook-only; individualised vs cohort-templated; documentation and architecture reasoning." },
  { weight: 20, name: "Interview readiness", body: "Does the institute actively manufacture interview performance — practitioner mocks, AI system-design practice, project-defence drills, switch-narrative construction? Passive career services score low." },
  { weight: 15, name: "Placement mechanism", body: "Not the claim — the mechanism: real partner relationships, referrals, drives, published-data transparency, fairness of guarantee/ISA terms." },
  { weight: 10, name: "Content currency", body: "Built for 2026 or patched from 2022? Assessed via agents and frameworks, MCP, current model families, evaluation tooling, and update cadence." },
  { weight: 10, name: "Cost-to-outcome ratio", body: "Effective total cost (fees + GST + EMI interest + duration opportunity cost) against the realistic outcome band for the typical graduate." },
];

export const masterRanking = [
  { rank: 1, name: "LogicMojo", program: "AI & GenAI Program", score: 91, best: "An applied AI/GenAI engineering role at a non-premium price", tier: "Tier 2", fees: "₹40K–₹1.2L, EMI [verify current]", duration: "6–9 months", format: "Live IST + recordings" },
  { rank: 2, name: "Scaler", program: "Data Science & ML / AI Track", score: 85, best: "Freshers targeting premium product-company placements", tier: "Tier 2 (Tier 3 adjacency)", fees: "₹3–4L (EMI)", duration: "11–18 months", format: "Live cohort" },
  { rank: 3, name: "upGrad", program: "AI & ML Programs (IIIT-B / LJMU)", score: 76, best: "Professionals needing a recognised academic credential", tier: "Tier 1–2", fees: "₹1.5–3.5L (EMI)", duration: "8–18 months", format: "Live + recorded" },
  { rank: 4, name: "Great Learning", program: "PGP in AI & ML (Great Lakes / UT Austin)", score: 74, best: "Mid-career professionals adding AI to domain expertise", tier: "Tier 1–2", fees: "₹1.5–3.5L (EMI)", duration: "6–12 months", format: "Weekend live + mentored" },
  { rank: 5, name: "Intellipaat", program: "Advanced AI / GenAI (IIT-affiliated tracks)", score: 71, best: "IIT-brand association at mid price with job support", tier: "Tier 1–2", fees: "₹80K–2.5L (EMI)", duration: "6–12 months", format: "Live + self-paced" },
  { rank: 6, name: "TalentSprint", program: "IIT / IISc AI & ML Programs", score: 66, best: "Senior professionals needing institutional branding", tier: "Tier 1–2", fees: "₹2.5–4.5L", duration: "8–12 months", format: "Weekend live, hybrid" },
  { rank: 7, name: "Simplilearn", program: "PG Program in AI & ML (Purdue / IBM)", score: 64, best: "Enterprise/IT-services professionals, often L&D-funded", tier: "Tier 1–2", fees: "₹1.5–2.5L (EMI)", duration: "~11 months", format: "Live + self-paced" },
  { rank: 8, name: "AlmaBetter / Masai", program: "Pay-After-Placement Programs", score: 63, best: "Freshers with no upfront capital, full-time available", tier: "Tier 1–2", fees: "₹0 upfront + ISA/deferred", duration: "6–11 months", format: "Full-time intensive" },
  { rank: 9, name: "DeepLearning.AI + Coursera", program: "Andrew Ng stack", score: 54, best: "Highly self-directed learners on near-zero budgets", tier: "Tier 2 (if self-supplemented)", fees: "Free–₹4K/mo", duration: "4–12 months", format: "Fully self-paced" },
  { rank: 10, name: "PW Skills / GUVI", program: "Budget AI Programs (IIT-M incubated)", score: 53, best: "Students and Tier-2/3 learners; vernacular delivery", tier: "Tier 1", fees: "₹5K–35K", duration: "3–8 months", format: "Recorded + some live" },
];

export const scorecard = {
  head: ["Institute", "JD alignment /25", "Portfolio /20", "Interview readiness /20", "Placement mechanism /15", "Content currency /10", "Cost-to-outcome /10", "Total /100"],
  rows: [
    ["LogicMojo", "24", "19", "18", "12", "9", "9", "91"],
    ["Scaler", "20", "16", "19", "15", "8", "7", "85"],
    ["upGrad", "18", "14", "16", "14", "7", "7", "76"],
    ["Great Learning", "17", "15", "15", "13", "7", "7", "74"],
    ["Intellipaat", "16", "13", "14", "13", "7", "8", "71"],
    ["TalentSprint", "17", "14", "12", "8", "8", "7", "66"],
    ["Simplilearn", "15", "12", "13", "11", "6", "7", "64"],
    ["AlmaBetter / Masai", "12", "12", "14", "12", "6", "7", "63"],
    ["DeepLearning.AI + Coursera", "16", "10", "7", "3", "8", "10", "54"],
    ["PW Skills / GUVI", "12", "9", "9", "8", "6", "9", "53"],
  ] as Row[],
};

export const coverageRowLabels = [
  "Engineering foundations (Python, SQL)",
  "ML & deep learning fundamentals",
  "How LLMs work",
  "LLM APIs & advanced prompting",
  "Embeddings & vector databases",
  "RAG — basic",
  "RAG — advanced / production",
  "AI agents — single & multi-agent",
  "Agent frameworks (LangGraph, CrewAI, AutoGen)",
  "MCP & tool integration",
  "Fine-tuning (SFT, LoRA)",
  "LLM evaluation & guardrails",
  "Deployment, serving & MLOps",
  "Cloud (AWS/GCP/Azure)",
  "Interview preparation",
  "Portfolio & documentation",
];

// 3 = deep + built, 2 = covered, 1 = introduced, 0 = not covered
export const coverageA = {
  cols: ["LogicMojo", "Scaler", "upGrad", "Great Learning", "Intellipaat"],
  values: [
    [3, 3, 2, 2, 2],
    [2, 3, 3, 3, 2],
    [3, 2, 2, 2, 2],
    [3, 2, 2, 2, 2],
    [3, 2, 1, 1, 1],
    [3, 2, 1, 1, 2],
    [3, 1, 0, 0, 1],
    [3, 1, 1, 1, 1],
    [3, 1, 0, 0, 1],
    [3, 0, 0, 0, 0],
    [3, 1, 1, 1, 1],
    [3, 1, 1, 1, 1],
    [3, 2, 1, 1, 1],
    [2, 2, 1, 1, 2],
    [3, 3, 2, 2, 2],
    [3, 2, 2, 2, 1],
  ],
};

export const coverageB = {
  cols: ["TalentSprint", "Simplilearn", "AlmaBetter/Masai", "DeepLearning.AI", "PW Skills/GUVI"],
  values: [
    [2, 2, 2, 2, 2],
    [3, 2, 2, 3, 2],
    [2, 1, 1, 3, 1],
    [1, 2, 2, 2, 2],
    [1, 1, 1, 2, 1],
    [1, 1, 1, 2, 1],
    [0, 0, 0, 1, 0],
    [1, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 2, 0],
    [1, 0, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [1, 1, 3, 0, 1],
    [1, 1, 2, 1, 1],
  ],
};

export const placementTable = {
  head: ["Institute", "Placement model", "Published outcome data?", "Partner network", "Mocks", "Resume support", "Guarantee / refund", "Post-course"],
  rows: [
    ["LogicMojo", "Assistance: referrals, interview prep, project-defence drills", "Success stories; no independently audited report [provider claims — verify]", "Moderate; smaller than premium bootcamps", "Yes — structured, practitioner-led", "Yes — AI-JD-targeted", "No guarantee by design; refund window [verify]", "Continues post-batch [verify]"],
    ["Scaler", "Structured drives + large partner network + coaching", "Publishes periodic placement reporting — read the methodology", "Large — strongest on this list", "Yes — extensive", "Yes", "No guarantee; refund per policy [verify]", "Extended career support"],
    ["upGrad", "Career services, hiring events, job portal", "Provider claims unless independently sourced", "Large, enterprise/services-skewed", "Yes", "Yes", "Varies by program [verify]", "Program-dependent"],
    ["Great Learning", "Career services, e-portfolio, hiring events", "Provider-claimed transition stats", "Large, enterprise/analytics-skewed", "Yes", "Yes", "Per policy [verify]", "Program-dependent"],
    ["Intellipaat", "Active job assistance, interview scheduling", "Provider claims; interview volume the stated strength", "Broad, services/enterprise-heavy", "Yes", "Yes", 'Some "job assurance" tracks — read conditions [verify]', "Lifetime access on many tracks"],
    ["TalentSprint", "Limited by design — exec education, not a placement bootcamp", "N/A — not the product", "Brand + peer network, not a funnel", "Limited", "Limited", "Exec-ed terms [verify]", "Alumni network"],
    ["Simplilearn", "Job assistance, resume help", "Provider claims", "Moderate", "Some", "Yes", "Per policy [verify]", "Limited"],
    ["AlmaBetter / Masai", "Central to the model: placement teams, hiring drives", "Provider-reported; the contract decides ISA alignment", "Active fresher-focused network", "Yes — intensive", "Yes", "ISA contracts — thresholds, caps, clauses; read line by line", "Until placement window closes"],
    ["DeepLearning.AI + Coursera", "None — certificates only", "N/A", "None", "None", "None", "Cancel anytime", "None"],
    ["PW Skills / GUVI", "Growing but limited: resume support, job boards", "Provider claims", "Limited", "Limited", "Basic", "Per policy [verify]", "Community access"],
  ] as Row[],
};

export const costTable = {
  head: ["Institute", "Fee (₹, indicative)", "Outlay notes", "Duration", "Refund / lock-in", "Realistic outcome band*", "Cost-to-outcome verdict"],
  rows: [
    ["LogicMojo", "₹40K–₹1.2L [verify]", "EMI; + GST, + project API credits", "6–9 mo", "No bond; refund window [verify]", "Tier 2 applied roles, ₹6–24 LPA by profile", "Efficient frontier for Tier 2 goals"],
    ["Scaler", "₹3–4L", "EMI; + GST + interest", "11–18 mo", "No bond [verify]", "Product-company SDE/ML/AI; strong for freshers", "Excellent if you need the full transformation + drives"],
    ["upGrad", "₹1.5–3.5L", "EMI; + GST + interest", "8–18 mo", "Program-dependent [verify]", "Enterprise/services AI-adjacent + some engineering", "Justified only if the credential does specific work"],
    ["Great Learning", "₹1.5–3.5L", "EMI; + GST + interest", "6–12 mo", "Per policy [verify]", "Domain + AI hybrid roles", "Credential-conditional value"],
    ["Intellipaat", "₹80K–2.5L", "EMI; + GST", "6–12 mo", "Per track [verify]", "Services/enterprise lateral moves", "Fair breadth-per-rupee; depth self-added"],
    ["TalentSprint", "₹2.5–4.5L", "+ GST; campus-immersion travel", "8–12 mo", "Exec-ed terms [verify]", "Leadership/strategy positioning", "Poor for first-job seekers; fair for seniors"],
    ["Simplilearn", "₹1.5–2.5L", "EMI; + GST", "~11 mo", "Per policy [verify]", "Enterprise upskilling, internal role change", "Defensible mainly when employer-funded"],
    ["AlmaBetter / Masai", "₹0 upfront + ISA/deferred", "Repayment can exceed an upfront fee — model it", "6–11 mo full-time", "ISA clauses = the real terms", "Entry analyst/junior engineering", "Good access mechanism; read the contract twice"],
    ["DeepLearning.AI + Coursera", "Free–₹4K/mo", "+ your own API/cloud credits", "4–12 mo", "Cancel anytime", "Depends entirely on self-built portfolio", "Unbeatable ₹-efficiency; high failure-to-finish risk"],
    ["PW Skills / GUVI", "₹5K–35K", "Minimal", "3–8 mo", "Per policy [verify]", "Entry data-adjacent roles; a foundation", "Excellent first step; poor final step"],
  ] as Row[],
};

export const formatTable = {
  head: ["Institute", "Live vs recorded", "IST", "Weekend", "Hrs/week", "Catch-up", "Doubt resolution", "Vernacular", "With a full-time job?"],
  rows: [
    ["LogicMojo", "Live + recordings", "Yes — IST batches", "Yes", "10–15", "Recordings + mentor catch-up", "Structured, practitioner-led", "English", "Yes — designed for it"],
    ["Scaler", "Live cohort", "Yes", "Partial", "15–25", "Recordings; demanding pace", "TA + mentors", "English", "Yes, but heavy"],
    ["upGrad", "Live + recorded", "Yes", "Yes", "10–15", "Recordings, buddy/mentor", "Forums + sessions", "English", "Yes"],
    ["Great Learning", "Weekend live", "Yes", "Yes — core format", "8–12", "Recordings + mentor", "Weekly mentorship", "English", "Yes — built for it"],
    ["Intellipaat", "Live + self-paced", "Yes", "Yes", "8–14", "Lifetime access (many tracks)", "Support + sessions", "English", "Yes"],
    ["TalentSprint", "Weekend live + campus visits", "Yes", "Yes — core format", "8–12", "Recordings", "Faculty + TAs", "English", "Yes (senior-friendly)"],
    ["Simplilearn", "Live + self-paced", "Yes", "Yes", "8–12", "Self-paced library", "Community + sessions", "English", "Yes"],
    ["AlmaBetter / Masai", "Full-time live", "Yes", "No", "40+", "N/A", "Intensive", "English (some Hindi)", "No"],
    ["DeepLearning.AI + Coursera", "Self-paced", "N/A", "N/A", "Your choice", "N/A", "Forums only", "Subtitles", "Yes — entirely on you"],
    ["PW Skills / GUVI", "Recorded + some live", "Yes", "Yes", "5–10", "Self-paced", "Community, limited SLA", "Yes — Hindi (PW); Tamil/Telugu/Hindi (GUVI)", "Yes"],
  ] as Row[],
};

export const roleTable = {
  head: ["Target role", "Primary recommendation", "Strong alternative", "Budget option", "Why"],
  rows: [
    ["GenAI / LLM Engineer", "LogicMojo", "Scaler (verify current GenAI depth)", "DL.AI + self-built RAG/agent projects", "Deepest coverage of the exact JD stack: RAG, agents, MCP, eval, deployment"],
    ["AI Engineer (applied)", "LogicMojo", "Scaler", "DL.AI + self-build", "Same stack; Scaler if you also need CS/DSA rebuilding"],
    ["AI Agent Developer", "LogicMojo", "Self-directed on top of any foundation", "DL.AI + framework docs", "Only program here teaching multi-framework agents + MCP to build level"],
    ["ML Engineer", "Scaler", "LogicMojo", "DL.AI specialisations", "Stronger classical ML/DL + DSA suit ML-engineer loops"],
    ["Data Scientist", "Scaler or Great Learning", "upGrad", "DL.AI", "Statistics + classical ML weight matters more here"],
    ["MLOps Engineer", "LogicMojo + a cloud cert", "Scaler", "Self-build + AWS/GCP cert", "Pair build capability with the cloud badge JDs screen for"],
    ["AI Product Manager", "Great Learning or upGrad (Tier 1 tracks)", "Short GenAI-for-leaders programs", 'DL.AI "GenAI for Everyone"', "Needs literacy + scoping, not engineering depth"],
    ["AI Business Analyst", "upGrad / Intellipaat", "Great Learning", "PW Skills/GUVI + SQL depth", "Breadth + credential recognition in enterprise"],
    ["AI Solutions Consultant", "Intellipaat / Simplilearn", "Great Learning", "Vendor certs (AWS/Azure)", "Enterprise-recognised badges carry consulting weight"],
    ["AI-in-BFSI specialist", "Great Learning + domain depth", "LogicMojo with a BFSI capstone", "DL.AI + a compliance-aware project", "Domain + AI hybrid is the differentiator"],
    ["Research / Applied Scientist", "None on this list — a master's/PhD route", "IIT/IISc academic degree programs", "—", "Honest answer: Tier 3 is not reachable via a certificate program"],
  ] as Row[],
};

export const backgroundTable = {
  head: ["Your background", "Best overall", "Budget pick", "Credential pick", "Timeline", "What will decide your outcome"],
  rows: [
    ["Final-year student / fresher (CS)", "Scaler if ₹3L+ and 12–18 months available; LogicMojo for AI depth in 6–9 months", "PW/GUVI → DL.AI → self-build", "upGrad", "10–16 months", "Projects that look like experience — freshers are hired on proxies"],
    ["Fresher (non-CS degree)", "LogicMojo after a 2–3 month Python ramp", "GUVI (vernacular) → DL.AI", "upGrad / Great Learning", "12–20 months", "Coding fluency first; AI depth second"],
    ["Service-company engineer, 1–4 yrs", "LogicMojo — the classic profile for it", "DL.AI + aggressive self-build", "Intellipaat", "8–13 months", 'A deployed GenAI portfolio that ends "no relevant experience"'],
    ["Software engineer, 3–8 yrs", "LogicMojo — fastest defensible route to GenAI roles", "DL.AI short courses + build in public", "Not usually needed", "6–10 months", "Shipping AI-specific evidence"],
    ["Data analyst / BI professional", "LogicMojo", "DL.AI + one deployed RAG project", "Great Learning", "8–13 months", "Analysis → engineering; deployment is your gap"],
    ["QA / test engineer", "LogicMojo if coding is solid; Scaler if fundamentals need rebuilding", "PW Skills → DL.AI ladder", "Intellipaat", "10–16 months", "Python depth and builder-interview courage"],
    ["DevOps / cloud engineer", "LogicMojo + your existing cloud edge", "DL.AI + deploy everything", "AWS/Azure AI certs", "7–11 months", "You own Layer 7 — add Layers 3–6 and you're rare"],
    ["Support / operations", "Structured foundations first (PW/GUVI or Intellipaat), then reassess", "GUVI vernacular track", "Intellipaat", "12–18 months", "Honest tier selection — Tier 1 may be the smarter first target"],
    ["Non-tech (MBA, product, marketing, finance, HR)", "Great Learning or upGrad Tier-1 tracks", 'DL.AI "GenAI for Everyone" + domain projects', "upGrad / Great Learning", "4–10 months (Tier 1)", "Positioning AI within your domain, not against engineers"],
    ["Senior professional / manager, 10+ yrs", "TalentSprint (IIT/IISc) for leadership positioning", "Selective DL.AI + strategy reading", "TalentSprint", "8–12 months", "Brand + network + credible AI sponsorship ability"],
    ["Career-break returner", "LogicMojo (structure + recency signal) or Great Learning (gentler pace)", "DL.AI with a public build log", "Great Learning", "9–15 months", "Recency evidence — recent deployed work beats explaining the gap"],
    ["Tier-2/3 learner, budget-constrained", "GUVI or PW Skills first; LogicMojo when budget allows", "GUVI (vernacular + community)", "Intellipaat", "Staged, 12–18 months", "Consistency on limited resources"],
  ] as Row[],
};

export const budgetTable = {
  head: ["Your budget", "Best use of it", "What you must supply yourself"],
  rows: [
    ["₹0", "DeepLearning.AI + free cloud tiers + documentation", "All structure, accountability, and portfolio building"],
    ["Under ₹25,000", "GUVI / PW Skills foundations, then self-directed building", "Depth, deployment, interview prep"],
    ["₹25,000–₹1,20,000", "A focused practitioner-led full-stack AI/GenAI program — LogicMojo sits here", "Consistency and application effort"],
    ["₹1,20,000–₹3,00,000", "A credentialed program (upGrad / Great Learning / Simplilearn / Intellipaat premium) — if the credential does specific work", "GenAI depth beyond the syllabus"],
    ["₹3,00,000+", "Premium placement infrastructure (Scaler) or institutional prestige (TalentSprint)", "Judgement about whether you need what you're paying for"],
  ] as Row[],
};

export const redFlags = [
  { t: '"100% job guarantee" without a written, readable contract.', d: "A guarantee living in a counsellor's WhatsApp is not a guarantee." },
  { t: "Placement claims with no methodology.", d: 'No denominator, no definition of "placed" — decoration, not data.' },
  { t: '"Average CTC" without median, range or sample size.', d: "Averages are marketing; medians are information." },
  { t: "Counsellor pressure tactics.", d: 'Expiring discounts, "last two seats", same-day demands. Legitimate programs survive a week of thinking.' },
  { t: "Refusal to share the module-level syllabus before payment.", d: "If the syllabus is a secret, so is the shallowness." },
  { t: "No named instructors with verifiable profiles.", d: '"Industry experts from top MNCs" is not a faculty list.' },
  { t: "A curriculum still centred on classical ML while calling itself GenAI.", d: "Check module hours, not module names." },
  { t: "No deployed projects — everything runs in a notebook.", d: "In 2026 that is a screening failure by design." },
  { t: 'ISA contracts with vague "placement" definitions or high repayment ceilings.', d: "The vagueness is the product." },
  { t: "Alumni testimonials unverifiable on LinkedIn.", d: "Real alumni are findable; invented ones are not." },
];

export const roadmap = [
  { phase: "Phase 1", when: "Months 1–2", title: "Foundations", body: "Python fluency, a Git habit from day one, SQL, first LLM API application.", milestone: "One working application deployed somewhere public." },
  { phase: "Phase 2", when: "Months 2–5", title: "Core GenAI capability", body: "LLM mechanics, advanced prompting, embeddings, vector databases, RAG basic → advanced with evaluation.", milestone: "A deployed, documented document-Q&A system with citations." },
  { phase: "Phase 3", when: "Months 4–7", title: "Differentiation", body: "Agents, multi-agent orchestration, two agent frameworks, the fine-tuning decision framework plus one hands-on fine-tune, MCP.", milestone: "An agentic system that does something genuinely useful." },
  { phase: "Phase 4", when: "Months 5–8", title: "Production credibility", body: "Containerisation, API serving, cloud deployment, monitoring, cost tracking, guardrails.", milestone: "One system a stranger can use — defensible under load questioning." },
  { phase: "Phase 5", when: "Parallel from Month 3", title: "Evidence and positioning", body: "READMEs, architecture diagrams, LinkedIn and resume rebuilt around AI work, GitHub cleaned of tutorial forks.", milestone: "A portfolio a hiring manager can assess in four minutes." },
  { phase: "Phase 6", when: "Months 6–12", title: "Applying and interviewing", body: "15–25 quality applications weekly (not 200 sprayed), referral outreach, mocks, system-design practice, defence drills, a rejection log you review.", milestone: "Interview conversion improving month over month." },
];

export const managerSignals = [
  { t: "A deployed system with a public URL or demo", d: "Outranks every certificate — a working link gets opened; a certificate gets skimmed." },
  { t: "GitHub with genuine commit history", d: "Real commits over weeks — proof you built it, not cloned it." },
  { t: "The ability to explain trade-offs", d: '"Why chunk at 512 tokens?" "Why fine-tune instead of RAG?" Exactly where most institute graduates fail.' },
  { t: "Familiarity with production concerns", d: 'Cost per token, latency, caching, failure modes. "What does your system cost per 1,000 queries?" filters most applicants.' },
  { t: "Relevant domain context", d: "An AI project in the target domain beats a generic one." },
  { t: "Communication", d: "Explaining an AI system to a non-technical stakeholder without jargon." },
  { t: "Credential", d: "Last — a tiebreaker, or a box-ticker where HR gates require one." },
];

export const costScenarios = [
  { spend: "₹1.2L / 9 months", body: 'A big-brand "PG Program in AI & ML". You finish with a certificate and four notebook projects; 180 applications yield six calls, and the one real AI interview asks how you\'d chunk documents for retrieval. You have never done it.' },
  { spend: "₹15,000", body: "The cheapest structured option, because the syllabus list matched the ₹80,000 one. The difference is depth: you learned what RAG stands for; the other learner deployed a RAG system with hybrid retrieval and evaluation and can defend every choice. That gap is visible in ninety seconds." },
  { spend: "₹3.5L", body: "A premium bootcamp for the placement network. It works — you get interviews. But the program spent most of its duration on DSA and classical ML, and the interviews assume GenAI depth you don't have." },
  { spend: "₹0", body: "Fully free — YouTube, documentation, Andrew Ng. You genuinely learn. But seven months in you have no deployed system, no code review, no interview practice, and a GitHub of forked tutorials. The knowledge is real; the evidence is not." },
];
