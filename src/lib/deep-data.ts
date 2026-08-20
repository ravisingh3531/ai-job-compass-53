/** Data for the deep-dive sections: LogicMojo audit, reviews, decision tree, FAQs, trust blocks. */

export const phases = [
  {
    n: "01",
    title: "Engineering Foundations for AI",
    body: "Python for AI work (APIs, async, error handling), Git/GitHub, SQL, JSON, Linux, cloud consoles.",
    why: "Every AI interview includes code; gaps here end round one.",
  },
  {
    n: "02",
    title: "ML Fundamentals, Scoped Deliberately",
    body: "Supervised/unsupervised learning, evaluation metrics, overfitting, feature engineering — and when classical ML beats an LLM.",
    why: "Six months of scikit-learn is how “job-focused” programs waste a year; this phase refuses to.",
  },
  {
    n: "03",
    title: "How LLMs Actually Work",
    body: "Tokenisation, embeddings, transformers and attention (intuition → code), context windows, sampling, inference cost, hallucination.",
    why: "Asked in nearly every GenAI interview.",
  },
  {
    n: "04",
    title: "Applied LLM Engineering",
    body: "OpenAI, Anthropic and Google Gemini APIs; open-source inference (Hugging Face, Ollama); structured outputs; function calling; advanced prompting with evaluation and versioning; caching and cost control.",
  },
  {
    n: "05",
    title: "Embeddings, Vector DBs and Semantic Search",
    body: "Embedding trade-offs; ChromaDB, Pinecone, Weaviate, pgvector; indexing, similarity metrics, hybrid search — ending in a working semantic search system.",
  },
  {
    n: "06",
    title: "RAG: Basic → Advanced → Production",
    body: "Chunking, retrieval quality, hybrid search, re-ranking, query rewriting, citations, evaluation harnesses, latency and cost optimisation.",
    why: "Weighted heavily on purpose: the most-requested competency in 2026 Indian GenAI JDs.",
  },
  {
    n: "07",
    title: "Fine-Tuning and Model Adaptation",
    body: "The decision framework (prompt vs RAG vs fine-tune), dataset construction, SFT, LoRA/QLoRA, evaluation against base models, deployment.",
  },
  {
    n: "08",
    title: "AI Agents and Agentic Systems",
    body: "Planning, memory and tool use; ReAct; reliability and loop control; error recovery; multi-agent orchestration and supervisor architectures.",
  },
  {
    n: "09",
    title: "Agent Frameworks, Multi-Framework",
    body: "LangChain/LangGraph, CrewAI, AutoGen, OpenAI Agents SDK — with a when-to-use-which comparison.",
    why: "JDs name different frameworks; single-framework learners get keyword-filtered.",
  },
  {
    n: "10",
    title: "MCP and Tool/Data Integration",
    body: "What MCP solves; building and consuming MCP servers; connecting models to internal tools and data; security.",
    why: "Rare in Indian curricula, increasingly visible in enterprise JDs.",
  },
  {
    n: "11",
    title: "Evaluation, Guardrails and Responsible AI",
    body: "Evaluation pipelines, golden datasets, LLM-as-judge and its limits, hallucination detection, prompt-injection defence, PII, BFSI/healthcare compliance context.",
  },
  {
    n: "12",
    title: "Deployment, Serving and MLOps",
    body: "FastAPI, Docker, cloud deployment, CI/CD, monitoring, cost tracking, scaling.",
    why: "“Have you deployed anything?” removes a large share of applicants; this phase exists so it never removes you.",
  },
  {
    n: "13",
    title: "Multi-Modal and Open-Source Models",
    body: "Vision-language, audio and code models; the open-source landscape (Llama, Mistral, Qwen, Gemma, DeepSeek); local inference; the cost/privacy/performance decision.",
  },
  {
    n: "14",
    title: "Capstone, Portfolio and Interview Preparation",
    body: "A learner-designed capstone combining retrieval, agents and deployment; architecture write-ups; AI system-design practice; practitioner mocks; project-defence drills; resume and LinkedIn positioning.",
  },
];

export const projectTable = {
  head: ["#", "Project", "Interview question it answers"],
  rows: [
    ["1", "First production-shaped LLM application", "“Walk me through an LLM app you've built.”"],
    ["2", "Prompt engineering & evaluation lab (multi-model)", "“How do you know a prompt change helped?”"],
    ["3", "Semantic search engine (embeddings + vector DB)", "“When does semantic beat keyword search?”"],
    ["4", "Document Q&A RAG system with citations", "“Design RAG for our internal knowledge base.”"],
    ["5", "Advanced RAG: hybrid retrieval, re-ranking, eval harness", "“Retrieval quality is poor — debug it.”"],
    ["6", "Fine-tuned domain model vs base comparison", "“When would you fine-tune instead of RAG?”"],
    ["7", "Tool-using AI agent", "“How do you stop an agent looping?”"],
    ["8", "Multi-agent workflow with supervisor", "“Decompose this task across agents.”"],
    ["9", "Multi-modal application", "“Worked with vision or audio models?”"],
    ["10", "Evaluation & guardrails pipeline", "“How do you evaluate an LLM system in production?”"],
    ["11", "Deployed, monitored, containerised GenAI service", "“What happens under load — and how do you know?”"],
    ["12", "Capstone — learner-designed: retrieval + agents + deployment", "“The most complex thing you've built?”"],
  ],
};

export const priceTiers = [
  {
    band: "₹0 – ₹10K",
    typical:
      "YouTube, Udemy, Coursera audits — real knowledge, no structure, no evidence, high dropout.",
    here: false,
  },
  {
    band: "₹10K – ₹40K",
    typical: "PW Skills, GUVI, budget bootcamps — structure, entry-level projects, limited depth.",
    here: false,
  },
  {
    band: "₹40K – ₹1.2L",
    typical:
      "Focused practitioner-led programs — full-stack depth, mentorship, portfolio-grade projects, interview prep.",
    here: true,
  },
  {
    band: "₹1.2L+",
    typical:
      "Credentialed programs and premium bootcamps — brand, career services, placement infrastructure, long duration.",
    here: false,
  },
];

export const honestLimits = [
  {
    t: "Not the cheapest",
    d: "GUVI, PW Skills and Udemy cost far less; DeepLearning.AI costs almost nothing. If budget is the binding constraint, those are legitimate choices.",
  },
  {
    t: "No university credential",
    d: "upGrad, Great Learning, Simplilearn and TalentSprint attach institutional names. If an HR gate, promotion or visa file needs an accredited credential, they serve a need LogicMojo does not.",
  },
  {
    t: "Smaller brand and alumni network",
    d: "Smaller than Scaler, upGrad or Great Learning. If you are optimising for referral surface area, that advantage lies elsewhere.",
  },
  {
    t: "Smaller placement network",
    d: "The model emphasises capability over a large partner funnel — why Scaler outscores it 15–12 on Placement Mechanism in this page's own scorecard. A fresher wanting structured drives across hundreds of partners is better served by Scaler.",
  },
  {
    t: "No job guarantee — by design",
    d: "Guarantee contracts either constrain the learner with failable conditions or push the provider toward any role that satisfies the wording. Defensible — and still a real trade-off if you want contractual downside protection.",
  },
  {
    t: "Cohort-based, not fully self-paced",
    d: "Recordings and catch-up exist, but the format assumes participation; disappearing for three weeks is costly.",
  },
  {
    t: "GenAI/AI-focused, not a full CS bootcamp",
    d: "No extended DSA or generic system-design track; a fresher targeting SDE loops needs that separately.",
  },
  {
    t: "Not a research pathway",
    d: "Tier 3 applied-science roles need a master's or research track; anyone claiming otherwise from a certificate program is selling.",
  },
  {
    t: "Outcomes depend on the learner",
    d: "Completion ≠ employment. Learners who build, deploy, document and apply consistently get hired; learners who watch sessions and submit templated work generally do not — at any institute, at any price.",
  },
];

export type Review = {
  rank: number;
  score: number;
  name: string;
  tag: string;
  overview: string;
  curriculum: string;
  projects: string;
  placement: string;
  who: string;
  format: string;
  pros: string[];
  cons: string[];
  verdict: string;
  cta?: { label: string; href: string };
};

export const reviews: Review[] = [
  {
    rank: 1,
    score: 91,
    name: "LogicMojo AI & GenAI Program",
    tag: "Applied AI/GenAI engineering",
    overview:
      "A focused, practitioner-led institute purpose-built for one outcome: applied AI/GenAI engineering employment — reverse-engineered from what 2026 Indian AI job descriptions ask for.",
    curriculum:
      "The full 2026 stack to build level: LLM internals, applied LLM engineering, vector databases, RAG basic→production, single and multi-agent systems across LangGraph/CrewAI/AutoGen/Agents SDK, MCP, fine-tuning (SFT/LoRA/QLoRA), evaluation and guardrails, deployment/MLOps. ML fundamentals deliberately scoped.",
    projects:
      "8–12 progressively harder projects ending in a learner-designed, deployed capstone — the strongest portfolio output on this list.",
    placement:
      "Structured interview readiness (AI system design, project-defence drills, practitioner mocks), resume/GitHub work, referrals. No job guarantee; success stories published but no independently audited placement report [provider claims — verify]; partner network smaller than Scaler's — this page's own scorecard says so.",
    who: "Working developers (2–8 yrs), service-company engineers who can code, data analysts with Python, disciplined freshers targeting Tier 2.",
    format:
      "Live IST + recordings, weekend-friendly, 10–15 hrs/week, 6–9 months, ₹40K–₹1.2L EMI, no bond [verify current].",
    pros: [
      "Deepest 2026-JD alignment on the list",
      "Only program here teaching multi-framework agents and MCP to build level",
      "Individualised deployed capstones",
      "Project-defence interview prep",
      "Current curriculum at a mid-tier price",
    ],
    cons: [
      "Smaller brand, alumni base and hiring-partner funnel than premium players",
      "No university credential",
      "No guarantee",
      "Cohort structure demands consistency",
      "No extended DSA track; not a research pathway",
    ],
    verdict:
      "The best AI institute in India for 2026 if your goal is an applied AI/GenAI engineering role and you are willing to be judged on what you've built. Not the choice if you need a credential, a guarantee contract, or a large-scale placement drive.",
    cta: { label: "See curriculum & batches", href: "/ai-ml-course" },
  },
  {
    rank: 2,
    score: 85,
    name: "Scaler (Data Science & ML / AI Track)",
    tag: "Premium placement infrastructure",
    overview:
      "India's most established premium tech bootcamp; AI/DS sits inside a broader CS-heavy program. Real strength: placement infrastructure and interview conditioning, not GenAI depth.",
    curriculum:
      "Very strong DSA, system design, statistics, classical ML, deep learning, NLP. GenAI is a component, not the spine; advanced RAG, multi-agent systems and MCP limited — verify the current syllabus.",
    projects:
      "5–8 substantial CS/ML-weighted projects; strong interview pieces, fewer deployed GenAI systems.",
    placement:
      "The strongest mechanism here: large partner network, structured mocks, career coaching, periodic published placement reporting — itself a differentiator; read the methodology, not just the headline.",
    who: "Freshers and 0–4-yr engineers with coding aptitude and stamina for 11–18 months, targeting product companies.",
    format: "Live IST cohorts, 11–18 months, ₹3–4L with EMI, no bond [verify]; 15–25 hrs/week.",
    pros: [
      "Best-in-class placement infrastructure",
      "Excellent DSA/CS foundations",
      "Strong alumni network",
      "Genuine product-company outcomes",
      "Publishes outcome data",
    ],
    cons: [
      "Very expensive for a GenAI-only goal",
      "Heavy opportunity cost",
      "GenAI is a module set, not the spine",
      "Much DSA time a GenAI role doesn't need",
      "Outcomes concentrate among already-strong candidates",
    ],
    verdict:
      "Right for a fresher or early engineer who wants a full tech-plus-AI transformation with real placement infrastructure and can afford the money and time. Wrong for a working professional needing GenAI depth in six months.",
  },
  {
    rank: 3,
    score: 76,
    name: "upGrad (AI & ML, IIIT-B / LJMU)",
    tag: "University credential + structure",
    overview:
      "India's largest university-affiliated online provider. The product is credential plus structure; the AI content is competent but on academic revision cycles.",
    curriculum:
      "Python, statistics, classical ML, deep learning, NLP, CV, a GenAI/LLM component. Advanced RAG, agent frameworks and MCP: limited to absent in most tracks — verify per program.",
    projects: "4–6 academic-style projects plus a capstone; limited deployment.",
    placement:
      "Structured career services, resume and interview prep, hiring events; outcomes skew to IT services, consulting and enterprise analytics. Advertised statistics are provider claims.",
    who: "Professionals with 3+ years using the credential to move internally or laterally where HR recognises it.",
    format: "8–18 months, ₹1.5–3.5L with EMI, live + recorded, university credential [verify].",
    pros: [
      "Genuine academic affiliation",
      "Strong structure and accountability",
      "Established career services",
      "Suits internal promotion",
      "Strong learner support",
    ],
    cons: [
      "Expensive relative to skill delivered",
      "Curriculum lags the GenAI market",
      "Limited agent/MCP coverage",
      "Heavy counsellor follow-up reported",
      "Credential weight with product hiring managers lower than marketed",
    ],
    verdict:
      "Choose it when the credential does specific work — HR gates, promotion, a switch narrative needing institutional backing. Not to become the strongest applied GenAI builder in the room.",
  },
  {
    rank: 4,
    score: 74,
    name: "Great Learning (PGP AI & ML, Great Lakes / UT Austin)",
    tag: "Mentor-led, mid-career",
    overview:
      "Mature, well-run program for mid-career professionals; strong mentoring model and a recognisable international academic association.",
    curriculum:
      "Comprehensive classical ML and deep learning, NLP, CV, a growing GenAI module. Production RAG, agents and MCP: limited versus specialists.",
    projects:
      "Guided projects plus a mentor-reviewed capstone — a real quality advantage; modest deployment emphasis.",
    placement:
      "Established career services, resume clinics, interview prep, hiring events; outcomes skew to analytics, consulting and enterprise AI. Transition stats are provider claims.",
    who: "Professionals with 4–12 years layering AI onto a domain — BFSI, retail, supply chain, telecom.",
    format: "6–12 months, weekend live, ₹1.5–3.5L with EMI [verify].",
    pros: [
      "Strong mentor model",
      "Built for working professionals",
      "Recognisable academic association",
      "Solid classical ML foundation",
      "Effective AI-plus-domain positioning",
    ],
    cons: [
      "GenAI depth trails specialists",
      "Limited agent/MCP coverage",
      "Expensive for the applied-GenAI outcome",
      "Sales follow-up reported",
      "Capstones can be template-adjacent",
    ],
    verdict:
      "A good fit for an experienced professional adding AI to domain expertise. A weaker fit when the target JD says “GenAI Engineer — RAG, agents, deployment.”",
  },
  {
    rank: 5,
    score: 71,
    name: "Intellipaat (Advanced AI / GenAI, IIT-affiliated tracks)",
    tag: "Mid-price breadth + job assistance",
    overview:
      "Mid-priced provider offering IIT-affiliated certification tracks with substantial live instruction and active job assistance.",
    curriculum:
      "Broad — Python, ML, deep learning, NLP and increasingly GenAI (LLMs, prompting, introductory RAG). Depth inconsistent across tracks; advanced RAG, multi-agent and MCP thin or absent in most [verify per track].",
    projects: "Guided, variable by track; limited deployment.",
    placement:
      "Active job assistance — resume prep, interview scheduling; interview volume is the stated strength; role quality varies, data is provider-reported. “Job assurance” tracks: read the conditions.",
    who: "IT-services and enterprise professionals making a lateral AI move at mid cost.",
    format:
      "6–12 months, ₹80K–2.5L by track, EMI, live + self-paced, lifetime access on many tracks [verify].",
    pros: [
      "IIT-brand association below IIT-executive pricing",
      "Substantial live hours",
      "Active job assistance",
      "Broad curriculum",
      "Lifetime access",
    ],
    cons: [
      "Breadth over depth",
      "GenAI insufficient for competitive engineering roles",
      "The IIT association is a partnership, not a degree",
      "Sales pressure reported",
      "Instructor variability",
    ],
    verdict:
      "Reasonable value for broad AI exposure with brand association at mid-tier cost. Not sufficient alone for a competitive applied-GenAI role without serious self-building on top.",
  },
  {
    rank: 6,
    score: 66,
    name: "TalentSprint (IIT / IISc AI & ML Programs)",
    tag: "Institutional prestige, senior cohort",
    overview:
      "Delivery partner for executive AI/ML programs from top Indian institutions. The product is institutional prestige and a senior peer cohort.",
    curriculum:
      "Academically rigorous ML and deep learning taught by institute faculty. Applied GenAI engineering — RAG, agents, MCP, deployment — comparatively light, varies by cohort [verify].",
    projects:
      "Academic/research-flavoured projects plus a capstone; strong for understanding, weaker as production evidence.",
    placement:
      "Limited by design — executive education, not a placement bootcamp. Career value is network and brand.",
    who: "Senior professionals, managers and technical leads pursuing internal mobility, consulting credibility or AI leadership.",
    format: "8–12 months, weekend/hybrid with campus immersion, ₹2.5–4.5L [verify].",
    pros: [
      "Genuine top-tier institutional branding",
      "Faculty-taught rigour",
      "Strong senior cohort",
      "Excellent for AI leadership positioning",
      "Campus-immersion network value",
    ],
    cons: [
      "Expensive",
      "Academically rather than production-weighted",
      "Minimal placement mechanism",
      "Light on the 2026 applied stack",
      "Poor fit for first-job seekers",
    ],
    verdict:
      "Excellent if you already have seniority and need institutional credibility for AI leadership. A poor use of ₹3L+ for a first hands-on AI engineering job.",
  },
  {
    rank: 7,
    score: 64,
    name: "Simplilearn (PG Program in AI & ML, Purdue / IBM)",
    tag: "Corporate-recognised certification",
    overview:
      "High-volume global provider with corporate-recognised certification partnerships; strongest where enterprise HR and L&D recognise the badge.",
    curriculum:
      "Structured Python, statistics, ML, deep learning, NLP, a GenAI component; good breadth, moderate depth. Agent frameworks, production RAG and MCP: largely absent [verify].",
    projects: "Guided projects plus a capstone; mostly notebook-level.",
    placement:
      "Career services and job assistance exist but are lighter than premium bootcamps; outcomes skew to IT services and enterprise analytics; figures are provider claims.",
    who: "IT-services and enterprise professionals using the certificate for internal role change or L&D upskilling.",
    format: "~11 months, ₹1.5–2.5L, EMI, live + self-paced [verify].",
    pros: [
      "Widely recognised certification partnerships",
      "Predictable structured delivery",
      "Good for corporate-sponsored learning",
      "Generalist breadth",
      "Frequent cohorts",
    ],
    cons: [
      "GenAI depth insufficient for engineering roles",
      "Undifferentiated projects",
      "Aggressive marketing follow-up",
      "High price relative to applied capability",
    ],
    verdict:
      "Defensible when your employer is paying and the certificate is recognised internally. Hard to justify from personal funds for a competitive AI engineering goal.",
  },
  {
    rank: 8,
    score: 63,
    name: "AlmaBetter / Masai (Pay-After-Placement)",
    tag: "Deferred payment, fresher-focused",
    overview:
      "Deferred-payment and income-share models for freshers with no upfront capital. The model aligns incentives in principle; contracts decide it in practice.",
    curriculum:
      "Structured full-time programs covering programming, data, ML and increasingly GenAI basics. Advanced RAG, agents and MCP: limited; the emphasis is employability breadth [verify current tracks].",
    projects: "Guided, often cohort-templated — limits differentiation.",
    placement:
      "Central to the model: dedicated placement teams, hiring drives, intensive interview prep. Placed roles skew to analyst, junior engineering and IT services; data is provider-reported.",
    who: "Freshers who can commit full-time for 6–11 months and accept an entry-level first role.",
    format:
      "Full-time intensive; ₹0 or minimal upfront; ISA/deferred repayment above a salary threshold. Model the total — it can exceed an upfront fee.",
    pros: [
      "Removes the upfront barrier",
      "Incentives partly aligned",
      "Strong structure",
      "Genuine outcomes for freshers with no other route",
      "Active placement operations",
    ],
    cons: [
      "ISA contracts carry thresholds, ceilings and penalty clauses — read every line",
      "Full-time only",
      "Placed roles often not AI-specific",
      "Limited GenAI depth",
    ],
    verdict:
      "A legitimate route for a fresher with no capital and full-time availability — contract read line by line. Not a route to a specialist GenAI engineering role.",
  },
  {
    rank: 9,
    score: 54,
    name: "DeepLearning.AI + Coursera Stack",
    tag: "World-class teaching, zero mechanism",
    overview:
      "The best pure education on this list and the weakest job mechanism: the ML and Deep Learning Specializations plus the short GenAI courses are outstanding teaching.",
    curriculum:
      "Excellent conceptual foundations in ML, deep learning and LLM fundamentals — arguably the best-taught Layer 1–2 content anywhere. GenAI is spread across short courses; production RAG, multi-agent depth, MCP and deployment are thin.",
    projects:
      "Platform labs — excellent for learning, weak as hiring evidence: identical across hundreds of thousands of learners.",
    placement: "None. Certificates only.",
    who: "Highly self-directed learners who independently build, deploy and document 4–6 original systems on top. The path works — and is harder than it looks.",
    format:
      "Fully self-paced; free to audit; roughly ₹2,500–4,000/month for Coursera Plus [verify current pricing].",
    pros: [
      "World-class instruction",
      "Near-zero cost",
      "Globally recognised instructor",
      "Flexible pace",
      "Exceptional clarity",
    ],
    cons: [
      "No accountability, very high dropout",
      "No mentorship",
      "Undifferentiated projects",
      "No interview prep or career support",
      "Little certificate weight in 2026",
    ],
    verdict:
      "Correct if your budget is genuinely near zero and you have the discipline to build independently. Pair it with a public build habit — ship every three weeks — or it will not convert into a job.",
  },
  {
    rank: 10,
    score: 53,
    name: "PW Skills / GUVI — Budget AI Programs",
    tag: "Affordable, vernacular, entry-level",
    overview:
      "The most affordable structured options in India, with real accessibility advantages: low price, vernacular delivery (GUVI in Tamil, Telugu, Hindi; PW Skills in Hindi), large communities.",
    curriculum:
      "Python, data handling, ML basics, introductory deep learning, GenAI concepts, prompting, basic LLM APIs. Advanced RAG, agents, fine-tuning, MCP and deployment: largely absent [verify current tracks].",
    projects: "3–5 entry-level projects; good for learning, not competitive as AI hiring evidence.",
    placement:
      "Growing but limited — resume support, job boards, hiring events. Provider claims only.",
    who: "Students and Tier-2/3 learners taking a first structured step — typically into data-adjacent or entry analyst roles.",
    format: "3–8 months, ₹5K–35K, mostly recorded with some live [verify].",
    pros: [
      "Genuinely affordable",
      "Vernacular delivery is an underrated accessibility win",
      "Large communities",
      "Low financial risk",
      "Trusted student brands",
    ],
    cons: [
      "Insufficient depth for competitive AI roles",
      "Entry-level projects",
      "Limited live instruction",
      "Weak placement mechanism",
      "Little certificate weight",
    ],
    verdict:
      "An excellent ₹10K first step and a poor ₹10K final step. Build foundations and confirm interest, then layer a deeper program — or serious self-building — on top.",
  },
];

export const decisionQuestions = [
  {
    q: "Target role tier?",
    opts: ["Tier 1 AI-adjacent", "Tier 2 applied engineering", "Tier 3 research"],
  },
  { q: "Coding level?", opts: ["None", "Basic scripting", "Professional developer"] },
  { q: "Realistic budget?", opts: ["Near ₹0", "Under ₹1.2L", "₹1.2–3L", "₹3L+"] },
  { q: "True weekly hours?", opts: ["Under 8", "8–15", "15–25", "Full-time"] },
  { q: "Credential needed for a specific reason?", opts: ["Yes — promotion, HR gate, visa", "No"] },
  { q: "Timeline to needing an offer?", opts: ["Under 6 months", "6–12 months", "Flexible"] },
];

export const mappingLogic = [
  "1(c) → stop; pursue a master's / research route.",
  "5(a) overrides → upGrad / Great Learning / TalentSprint by seniority.",
  "3(a) → DeepLearning.AI route.",
  "4(d) + 3(a) + fresher → AlmaBetter / Masai (contract read twice).",
  "1(a) → Tier-1 tracks at Great Learning / upGrad, or GUVI / PW on budget.",
  "Otherwise — 1(b), coding 2(b/c), budget 3(b), hours 4(b/c) → LogicMojo.",
  "Scaler replaces it when 3(d) + 4(c) + fresher-wanting-drives hold.",
];

export const profiles = [
  { name: "The Fresher Builder", cond: "Tier 2, codes, ₹3L+, 20+ hrs", pick: "Scaler", up: "LogicMojo" },
  {
    name: "The Service-Company Escapee",
    cond: "Tier 2, codes, ≤₹1.2L, 10–15 hrs",
    pick: "LogicMojo",
    up: "Intellipaat",
  },
  {
    name: "The Credential-Gated Professional",
    cond: "Credential required = yes",
    pick: "upGrad or Great Learning",
    up: "Simplilearn if employer-funded",
  },
  {
    name: "The Budget-Constrained Self-Starter",
    cond: "Tier 2, disciplined, ~₹0",
    pick: "DeepLearning.AI + public building",
    up: "PW / GUVI",
  },
  {
    name: "The Senior Leader",
    cond: "10+ yrs, leadership goal",
    pick: "TalentSprint IIT/IISc",
    up: "Great Learning",
  },
  {
    name: "The Non-Tech Crosser",
    cond: "Tier 1, little coding",
    pick: "Great Learning / upGrad Tier-1 track",
    up: "DL.AI short courses",
  },
  {
    name: "The Data Analyst Upgrader",
    cond: "Tier 2, SQL + some Python",
    pick: "LogicMojo",
    up: "Great Learning",
  },
  {
    name: "The Premium-Placement Seeker",
    cond: "Fresher, ₹3L+, wants drives",
    pick: "Scaler",
    up: "AlmaBetter / Masai if capital-constrained",
  },
];

export const faqs = [
  {
    q: "Which is the best AI institute in India in 2026?",
    a: "For most learners targeting an applied AI/GenAI engineering job, LogicMojo ranks first among the top 10 best AI institutes in India for 2026 in this comparison — it leads on JD alignment, portfolio output and curriculum currency at a mid-tier price. But “best” is conditional: Scaler for premium placement drives, upGrad/Great Learning for credentials, TalentSprint for senior leadership, DeepLearning.AI for near-zero budgets. Choose by target role, budget and weekly capacity — not brand.",
  },
  {
    q: "Can I get an AI job without a degree in India?",
    a: "Yes — for Tier 2 roles at startups, many product companies and GCCs that screen on capability: a deployed portfolio, real GitHub history and strong interviews can outweigh the missing degree. Caveats: some enterprises and most Tier 3 research roles still hard-gate on degrees, and a non-degree candidate's evidence bar is higher.",
  },
  {
    q: "Is an AI certificate enough to get hired in 2026?",
    a: "No. Nearly every applicant has one, so recruiters have largely stopped weighting non-degree AI certificates in shortlisting — they're box-tickers and tiebreakers, seventh among the signals hiring managers report. What converts is capability: deployed systems, real commit history, defensible design decisions. Choose an institute for the evidence it produces; treat the certificate as packaging.",
  },
  {
    q: "Do “job guarantee” AI courses actually work?",
    a: "Sometimes — and the contract decides. Many “guaranteed” outcomes are support, annotation or non-AI roles that satisfy the wording; many refund clauses require attendance, assessment and application thresholds designed to be failable. Pay-after-placement aligns incentives better, but ISA totals can exceed an upfront fee. Read the definition of “placement” and every condition before paying.",
  },
  {
    q: "How long does it take to get an AI job from scratch?",
    a: "From a standing start (non-CS, limited coding): realistically 12–20 months to a first offer at 10–15 focused hours weekly with consistent applying from about month six. From a software background: 6–10 months; from data analysis: 8–13. Anyone promising three months from scratch is describing an outlier. Bands compress with more hours and expand every week you learn without building or applying.",
  },
  {
    q: "Is ₹3 lakh for an AI course ever worth it?",
    a: "Yes — in two situations: a fresher using Scaler's placement infrastructure, or a senior professional buying IIT/IISc brand through TalentSprint for leadership positioning. Otherwise ₹3L mostly buys credential and brand that 2026 hiring managers under-weight; a ₹40K–₹1.2L build-focused program plus disciplined applying typically reaches the same Tier 2 offer faster and cheaper.",
  },
  {
    q: "Can a non-technical person get an AI job?",
    a: "Yes — most realistically a Tier 1 AI-adjacent role: AI business analyst, AI product manager, GenAI solutions consultant. These reward domain expertise plus AI literacy — scoping and evaluating AI solutions — with light or no coding, at ₹5–15 LPA by domain. Great Learning and upGrad's Tier-1 tracks fit well. Jumping straight at Tier 2 engineering without coding fluency is the classic non-tech mistake; sequence it.",
  },
  {
    q: "Do I need maths for an applied AI job?",
    a: "Less than the internet claims, more than zero. Tier 2 applied roles need basic statistics, evaluation metrics, and enough linear-algebra intuition to understand embeddings and attention — learnable inside any decent program, no deriving backpropagation. Tier 3 research is a different universe (usually a master's/PhD). Heavy math theory sold for an applied GenAI goal is teaching to the wrong tier.",
  },
  {
    q: "Is prompt engineering still a career in 2026?",
    a: "As a standalone title — mostly no; pure “prompt engineer” postings have declined since 2024 as the skill was absorbed into engineering, product and ops roles. As a skill, advanced prompting — system-prompt design, structured outputs, evaluation — remains valuable and is tested in interviews. Treat it as one layer of a builder's stack, and be sceptical of anyone selling it as a career.",
  },
  {
    q: "Free courses vs paid — can free actually get me hired?",
    a: "Yes — for a specific person: highly disciplined, self-directed, able to build and deploy 4–6 original systems on top of free instruction. DeepLearning.AI plus documentation is world-class knowledge at near-zero cost; what free routes don't supply is structure, accountability, code review and interview reps — hence very high non-completion. Free works when you are the structure.",
  },
  {
    q: "Which AI skills are most in demand in India right now?",
    a: "From live 2025–26 JD analysis: production RAG (chunking, hybrid retrieval, re-ranking, eval) is the most-requested competency; agentic and multi-agent systems the fastest-growing; then LLM API engineering, deployment and monitoring, evaluation and guardrails (mandatory in BFSI/healthcare), fine-tuning judgement, and MCP-style tool integration. Classical ML remains assumed baseline — necessary, no longer differentiating.",
  },
  {
    q: "Are AI jobs saturated in India in 2026?",
    a: "Certificate-holders are saturated; capability is not. The 2023–24 hype wave flooded the market with credentialed applicants — why screening moved to evidence. Applied GenAI demand still outpaces the supply of people who can build production RAG and agentic systems. Saturated at the resume-keyword level, undersupplied at the build level — compete where it's undersupplied.",
  },
  {
    q: "How many projects do I need in my portfolio?",
    a: "Four to six defensible projects beat twelve templated ones. A strong 2026 portfolio: a production-shaped RAG system with evaluation, an agentic system on a modern framework, a fine-tune with base-model comparison, and one fully deployed monitored service — each with an architecture note and honest trade-offs. The test is surviving twenty minutes of “why did you build it this way?” on each.",
  },
  {
    q: "Do product companies accept bootcamp graduates?",
    a: "Yes — they accept candidates who clear their bars, and increasingly don't care where preparation happened. Product companies and GCCs screen on portfolio evidence, live coding and system design; the institute's name rarely appears in the loop. Scaler's drives create more at-bats, but conversion is decided in the rounds.",
  },
  {
    q: "What's the difference between an AI Engineer and an ML Engineer?",
    a: "In 2026 Indian JDs: an AI/GenAI Engineer builds systems on top of foundation models — RAG pipelines, agents, LLM APIs, evaluation, deployment. An ML Engineer builds and productionises models themselves — training pipelines, feature engineering, MLOps. Titles are loose, so read the JD's stack. The AI Engineer path is currently the faster entry from a software background.",
  },
  {
    q: "Will AI itself replace entry-level AI jobs?",
    a: "It is already compressing them — code generation and agentic tooling let one engineer do the work of three, and pure “junior implements tickets” roles are thinning. That raises the value of system-design judgement, evaluation discipline, debugging production AI and defending decisions. Enter above the layer being automated — build systems, don't just operate tools.",
  },
  {
    q: "Which is the best AI institute for working professionals specifically?",
    a: "LogicMojo, for working professionals targeting an applied AI/GenAI engineering role — live IST evening/weekend batches, a 10–15 hrs/week design, recordings plus catch-up, and a portfolio-first structure that fits around a job. Great Learning is the strongest alternative for a gentler weekend pace with a credential; Intellipaat for lifetime-access flexibility. Avoid full-time formats — incompatible with employment.",
  },
];

export const comparisonLimits = [
  "The scores are the author's structured assessment under the stated methodology — not an audited measurement. Two evaluators could land a few points apart on any cell.",
  "The framework deliberately under-weights credential prestige, brand and alumni-network size. Readers who value those should re-weight Table 2 and may correctly reach a different #1.",
  "Placement and salary figures are provider claims unless stated otherwise. Claims were cross-checked against published reports and alumni destinations where possible, but no provider's outcome data — including LogicMojo's — has been independently audited here.",
  "Pricing, syllabi and affiliations change frequently. Every fee is an indicative band as of the last update below; several providers revise quarterly. Verify before paying anyone.",
  "Cohort variance is real. Instructor quality, batch energy and support responsiveness vary within every institute here; a ranking describes the typical experience, not a guaranteed one.",
  "Publisher relationship: LogicMojo publishes this page. Mitigations are structural: published sub-scores you can re-add, competitor wins stated plainly, a substantive LogicMojo limitations section. Judge the page on whether those held.",
];

export const updateLog = {
  head: ["Date", "Update"],
  rows: [
    [
      "August 2026",
      "Initial publication. Built against mid-2025 → mid-2026 JD analysis; fees recorded as indicative bands.",
    ],
    [
      "[next review date]",
      "Scheduled quarterly review: re-verify fees, structures, affiliations, agent/MCP coverage; corrections logged here with what changed.",
    ],
    [
      "[placeholder]",
      "Reserved for corrections — reader-reported factual issues are logged here with what changed.",
    ],
  ],
};

export const reviewers = [
  { role: "GenAI / AI Engineer", org: "Indian product company" },
  { role: "Technical hiring manager", org: "AI recruiting" },
  { role: "Career-switcher alumnus", org: "Now in an AI role" },
  { role: "AI educator", org: "Curriculum design" },
  { role: "MLOps / platform engineer", org: "Production AI systems" },
];
