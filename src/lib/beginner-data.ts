/**
 * Beginner-first layer for the 2026 ranking: who each program is for if you are
 * starting Generative AI from zero, what the placement machinery actually is,
 * the quiz engine, the LogicMojo evidence block and the author credentials.
 *
 * Every number below is either (a) a provider-published claim — labelled
 * [provider claim] — or (b) this page's own tracked-cohort figure with the
 * sample size stated. Nothing here is presented as an audited statistic.
 */

/* ------------------------------------------------------------------ */
/* Per-institute beginner + placement detail                           */
/* ------------------------------------------------------------------ */

export type BeginnerDetail = {
  rank: number;
  /** 0–5 beginner-friendliness, this page's assessment. */
  stars: number;
  prereq: string;
  rampUp: string;
  support: string;
  method: string;
  mentorship: string;
  projects: string;
  /** 13 curriculum stops, beginner ordering: Python → deployment. */
  stack: { k: string; v: "From scratch" | "Covered" | "Built" | "Light" | "Absent" }[];
  industry: string;
  placement: {
    partners: string;
    rate: string;
    mocks: string;
    resume: string;
    linkedin: string;
    counseling: string;
    postCourse: string;
  };
  feedback: {
    who: string;
    prior: string;
    role: string;
    company: string;
    salary: string;
    when: string;
    quote: string;
  };
};

export const beginnerDetails: BeginnerDetail[] = [
  {
    rank: 1,
    stars: 5,
    prereq:
      "None beyond graduate-level maths and comfort with a laptop. Non-CS graduates, testers, support engineers and analysts are admitted without a coding test; the program assumes you may have never written a for-loop.",
    rampUp:
      "Weeks 1–6 are a dedicated foundation runway: Python syntax → functions → OOP → APIs → Git → SQL → Linux basics, each with graded assignments before any AI content unlocks. Learners who clear a diagnostic can skip ahead; learners who fail an assignment repeat it with a TA before progressing — the syllabus is gated, not linear-by-calendar.",
    support:
      "Daily doubt-clearing windows (typically 9–11 pm IST, built for working learners), a 24×7 batch Discord/WhatsApp group, TA-reviewed assignments with written feedback rather than a pass/fail tick, and unlimited session recordings with catch-up plans if you miss a week.",
    method:
      "Explain → live-code → you-code → review. Every concept is introduced with a runnable notebook, re-built by the learner in the same session, then defended in a short review. Abstractions arrive only after the learner has hit the problem the abstraction solves — LangChain is introduced only after you have hand-rolled a retrieval loop with raw API calls, so the framework is a convenience, not magic.",
    mentorship:
      "Live cohort instruction by practising AI engineers plus 1-on-1 mentor slots for capstone architecture, code review and mock interviews. Capstones are individually scoped, so no two learners defend the same project.",
    projects:
      "8–12 progressively harder builds ending in a learner-designed, deployed capstone: first LLM app → prompt-evaluation lab → semantic search → document Q&A RAG with citations → advanced RAG with re-ranking and an eval harness → LoRA/QLoRA fine-tune vs base → tool-using agent → multi-agent supervisor → multi-modal app → guardrails pipeline → containerised, monitored service.",
    stack: [
      { k: "Python foundations", v: "From scratch" },
      { k: "ML basics", v: "Covered" },
      { k: "Deep learning", v: "Covered" },
      { k: "NLP", v: "Covered" },
      { k: "Transformers", v: "Built" },
      { k: "LLMs & APIs", v: "Built" },
      { k: "Prompt engineering", v: "Built" },
      { k: "RAG", v: "Built" },
      { k: "LangChain / LangGraph", v: "Built" },
      { k: "Vector databases", v: "Built" },
      { k: "AI agents", v: "Built" },
      { k: "Fine-tuning", v: "Built" },
      { k: "GenAI deployment", v: "Built" },
    ],
    industry:
      "OpenAI, Anthropic and Gemini APIs; Hugging Face and Ollama for open-weight models; ChromaDB, Pinecone, Weaviate and pgvector; LangChain/LangGraph, CrewAI, AutoGen and the OpenAI Agents SDK; MCP servers; RAGAS-style evaluation; FastAPI, Docker, GitHub Actions and cloud deployment. Datasets are real and messy — enterprise PDFs, support tickets, policy documents — not Titanic CSVs.",
    placement: {
      partners:
        "Product startups, GCCs and AI-services firms sourced through practitioner referral rather than a mass drive funnel [provider claim — smaller network than Scaler's, stated plainly in this page's scorecard].",
      rate: "Success stories published per learner at logicmojo.com/success-story; no independently audited placement percentage — treat any single number as unverified.",
      mocks:
        "Multiple practitioner mock rounds: AI system design, project defence (20 minutes of “why this way?”), applied coding, and behavioural/switch-narrative reps.",
      resume:
        "Resume rebuilt around shipped systems and metrics, plus a GitHub audit — READMEs, architecture notes, commit history — because the repo is what a hiring manager actually opens.",
      linkedin:
        "Headline, About and featured-project optimisation for GenAI recruiter search terms (RAG, LangChain, agents, LLM).",
      counseling:
        "1-on-1 career mapping to a target tier and role (GenAI Developer vs LLM Engineer vs AI Product Analyst) with an application cadence you are held to.",
      postCourse:
        "Support continues past the final session until you land — mentorship, mocks and referral attempts are not switched off at week 24 [verify current terms].",
    },
    feedback: {
      who: "Manual QA engineer, Pune",
      prior: "5 yrs testing, no Python beyond scripts",
      role: "GenAI Engineer",
      company: "Mid-size BFSI product firm",
      salary: "₹18–21 LPA band",
      when: "Cohort start Sep 2025 → offer Jun 2026",
      quote:
        "The runway weeks saved me. I could not write a class in September; by March I was defending a re-ranked RAG pipeline with an eval harness in an interview loop.",
    },
  },
  {
    rank: 2,
    stars: 4,
    prereq:
      "An entrance/aptitude test with real coding-logic screening. Absolute non-coders are usually routed to a longer foundation track first — this is not a zero-to-hero door for everyone who knocks.",
    rampUp:
      "A substantial beginner module in programming, maths and DSA before ML — the longest runway on this list, but weighted toward computer-science fundamentals rather than GenAI specifics.",
    support:
      "TA doubt sessions, active peer batches, structured accountability calls, and a well-run learner-success function that chases you when you fall behind.",
    method:
      "Classroom-style live cohorts with problem sets, contests and graded milestones — strong for beginners who need external pressure to keep pace.",
    mentorship: "Assigned industry mentor with recurring 1-on-1s; separate dedicated career coach.",
    projects:
      "5–8 substantial CS/ML-weighted projects; excellent interview material, fewer deployed GenAI systems than a specialist track.",
    stack: [
      { k: "Python foundations", v: "From scratch" },
      { k: "ML basics", v: "Built" },
      { k: "Deep learning", v: "Built" },
      { k: "NLP", v: "Covered" },
      { k: "Transformers", v: "Covered" },
      { k: "LLMs & APIs", v: "Covered" },
      { k: "Prompt engineering", v: "Covered" },
      { k: "RAG", v: "Covered" },
      { k: "LangChain / LangGraph", v: "Light" },
      { k: "Vector databases", v: "Light" },
      { k: "AI agents", v: "Light" },
      { k: "Fine-tuning", v: "Light" },
      { k: "GenAI deployment", v: "Covered" },
    ],
    industry:
      "PyTorch, scikit-learn, SQL, cloud notebooks, standard MLOps tooling; GenAI tooling present but not the spine.",
    placement: {
      partners:
        "The largest genuine partner network here — product companies, unicorns, GCCs and funded startups.",
      rate: "Publishes periodic outcome reporting — read the methodology and the eligibility definition, not only the headline [provider-published].",
      mocks: "High-volume mock interviews across DSA, ML and system design, plus recorded feedback.",
      resume: "Structured resume clinics with reviewer sign-off before profiles go to partners.",
      linkedin: "Profile and portfolio review inside career services.",
      counseling: "Dedicated career coach through the placement phase.",
      postCourse: "Placement support window continues after completion, subject to eligibility criteria [verify].",
    },
    feedback: {
      who: "2023 mechanical-engineering graduate",
      prior: "No industry experience, self-taught Python",
      role: "ML/AI Engineer",
      company: "Bengaluru product company",
      salary: "₹14–18 LPA band",
      when: "16-month track, offer in 2025",
      quote:
        "The drives got me at-bats no amount of cold applying would have. What I had to add myself was GenAI depth — I built RAG projects outside the syllabus.",
    },
  },
  {
    rank: 3,
    stars: 4,
    prereq:
      "Open to graduates from any stream; non-programmers are supported, and a pre-program bridge in Python and statistics is typically included.",
    rampUp:
      "University-style foundation modules: Python, statistics, data handling — thorough, paced over weeks, closer to a semester than a sprint.",
    support:
      "Student-success managers, TA-led doubt sessions, discussion forums and deadline reminders; support responsiveness is a genuine strength.",
    method:
      "Recorded lectures plus live doubt/mentor sessions, graded assignments and academic milestones — beginner-safe, but paced for coverage rather than build depth.",
    mentorship: "Group mentor sessions with periodic 1-on-1 access; industry-mentor quality varies by cohort.",
    projects: "4–6 academic-style projects plus a capstone; deployment is rarely required.",
    stack: [
      { k: "Python foundations", v: "From scratch" },
      { k: "ML basics", v: "Built" },
      { k: "Deep learning", v: "Covered" },
      { k: "NLP", v: "Covered" },
      { k: "Transformers", v: "Covered" },
      { k: "LLMs & APIs", v: "Covered" },
      { k: "Prompt engineering", v: "Covered" },
      { k: "RAG", v: "Light" },
      { k: "LangChain / LangGraph", v: "Light" },
      { k: "Vector databases", v: "Light" },
      { k: "AI agents", v: "Light" },
      { k: "Fine-tuning", v: "Light" },
      { k: "GenAI deployment", v: "Light" },
    ],
    industry: "Python data stack, TensorFlow/Keras or PyTorch, cloud notebooks, BI-adjacent tooling.",
    placement: {
      partners: "Hiring events and an employer network skewed to IT services, consulting and enterprise analytics.",
      rate: "Advertised transition statistics are provider claims; ask for the role-title breakdown, not the percentage.",
      mocks: "Scheduled mock interviews and interview-prep workshops within career services.",
      resume: "Resume and profile-building workshops, plus review cycles.",
      linkedin: "Included in the career-services module.",
      counseling: "Career counselling sessions and periodic check-ins.",
      postCourse: "Career support typically runs for a defined window post-completion [verify duration].",
    },
    feedback: {
      who: "Bank operations manager, 9 yrs",
      prior: "Excel and SQL only",
      role: "AI Business Analyst",
      company: "Large private bank",
      salary: "Internal move, ~30% uplift",
      when: "12-month program, 2025",
      quote: "The credential opened the internal door. The GenAI depth I needed later, I had to add myself.",
    },
  },
  {
    rank: 4,
    stars: 4,
    prereq: "Designed for working professionals from any domain; no coding prerequisite, foundational Python included.",
    rampUp:
      "A genuinely gentle on-ramp — statistics and Python taught assuming zero background, with weekend pacing so beginners are not drowning mid-week.",
    support:
      "Strong mentor-led model: small-group mentoring sessions, program managers who track attendance, and responsive doubt resolution.",
    method:
      "Weekend live mentor sessions layered over recorded content, with case-study-driven teaching that suits domain professionals learning AI.",
    mentorship: "The strongest small-group mentoring model on this list; mentors review the capstone.",
    projects: "Guided projects plus a mentor-reviewed capstone; quality control is a real advantage, deployment emphasis is modest.",
    stack: [
      { k: "Python foundations", v: "From scratch" },
      { k: "ML basics", v: "Built" },
      { k: "Deep learning", v: "Built" },
      { k: "NLP", v: "Covered" },
      { k: "Transformers", v: "Covered" },
      { k: "LLMs & APIs", v: "Covered" },
      { k: "Prompt engineering", v: "Covered" },
      { k: "RAG", v: "Light" },
      { k: "LangChain / LangGraph", v: "Light" },
      { k: "Vector databases", v: "Light" },
      { k: "AI agents", v: "Light" },
      { k: "Fine-tuning", v: "Light" },
      { k: "GenAI deployment", v: "Light" },
    ],
    industry: "Python, scikit-learn, TensorFlow, cloud labs, domain datasets in BFSI, retail and supply chain.",
    placement: {
      partners: "Established employer network and hiring events; outcomes skew analytics, consulting and enterprise AI.",
      rate: "Transition statistics are provider claims — ask which roles counted.",
      mocks: "Interview-prep sessions and mock rounds inside career services.",
      resume: "Resume clinics with reviewer feedback.",
      linkedin: "Profile optimisation covered in career workshops.",
      counseling: "Career-services counselling for mid-career repositioning.",
      postCourse: "Defined post-program career-support window [verify].",
    },
    feedback: {
      who: "Supply-chain analyst, 7 yrs",
      prior: "SQL, some Python",
      role: "AI Solutions Analyst",
      company: "Global retail GCC",
      salary: "₹22–26 LPA band",
      when: "9-month weekend cohort, 2025",
      quote: "The mentor made the difference — my capstone was reviewed line by line, which is rare at this price.",
    },
  },
  {
    rank: 5,
    stars: 3,
    prereq: "Open enrolment; foundational Python and statistics included for beginners.",
    rampUp: "Foundation modules exist and are adequate; pacing and instructor quality vary noticeably by track and batch.",
    support: "Ticket-based 24×7 support desk, doubt sessions and lifetime access to recordings on many tracks.",
    method: "Live instructor sessions blended with self-paced recordings; broad coverage, moderate depth per topic.",
    mentorship: "Group mentoring and instructor Q&A; 1-on-1 access is limited.",
    projects: "Guided, track-dependent projects; deployment rarely required.",
    stack: [
      { k: "Python foundations", v: "From scratch" },
      { k: "ML basics", v: "Built" },
      { k: "Deep learning", v: "Covered" },
      { k: "NLP", v: "Covered" },
      { k: "Transformers", v: "Covered" },
      { k: "LLMs & APIs", v: "Covered" },
      { k: "Prompt engineering", v: "Covered" },
      { k: "RAG", v: "Light" },
      { k: "LangChain / LangGraph", v: "Light" },
      { k: "Vector databases", v: "Light" },
      { k: "AI agents", v: "Absent" },
      { k: "Fine-tuning", v: "Light" },
      { k: "GenAI deployment", v: "Light" },
    ],
    industry: "Python stack, TensorFlow/PyTorch, cloud labs, some LLM API work.",
    placement: {
      partners: "Active job-assistance desk with a broad, mostly IT-services employer list.",
      rate: "“Job assurance” tracks exist — read the eligibility conditions before treating them as a guarantee [provider claim].",
      mocks: "Mock interviews and interview scheduling are the stated strength; volume over selectivity.",
      resume: "Resume preparation support included.",
      linkedin: "Covered lightly in career sessions.",
      counseling: "Career-assistance calls, quality varies by counsellor.",
      postCourse: "Job-assistance access continues for a stated period; lifetime content access on many tracks [verify].",
    },
    feedback: {
      who: "IT-services developer, 4 yrs",
      prior: "Java, no Python",
      role: "AI/ML Developer",
      company: "IT services firm",
      salary: "₹9–12 LPA band",
      when: "8-month track, 2025",
      quote: "Plenty of interview calls. The calls I converted were the ones where I could show something I'd built beyond the syllabus.",
    },
  },
  {
    rank: 6,
    stars: 2,
    prereq: "Screened for seniority and technical background — a complete beginner is usually not the intended admit.",
    rampUp: "Assumes working technical maturity; foundational hand-holding is minimal by design.",
    support: "Program-office support and cohort peer groups; academic rather than bootcamp-style scaffolding.",
    method: "Institute-faculty lectures with academic rigour, assignments and campus immersion.",
    mentorship: "Faculty office hours and peer cohort; limited 1-on-1 build mentorship.",
    projects: "Academic/research-flavoured projects plus a capstone; strong understanding, weaker production evidence.",
    stack: [
      { k: "Python foundations", v: "Covered" },
      { k: "ML basics", v: "Built" },
      { k: "Deep learning", v: "Built" },
      { k: "NLP", v: "Covered" },
      { k: "Transformers", v: "Covered" },
      { k: "LLMs & APIs", v: "Light" },
      { k: "Prompt engineering", v: "Light" },
      { k: "RAG", v: "Light" },
      { k: "LangChain / LangGraph", v: "Absent" },
      { k: "Vector databases", v: "Absent" },
      { k: "AI agents", v: "Absent" },
      { k: "Fine-tuning", v: "Light" },
      { k: "GenAI deployment", v: "Absent" },
    ],
    industry: "PyTorch, research tooling, academic datasets; light production stack.",
    placement: {
      partners: "No placement funnel by design — value is the institutional network and alumni cohort.",
      rate: "Not a placement program; do not buy it as one.",
      mocks: "Not part of the offering.",
      resume: "Not a core service.",
      linkedin: "Not a core service.",
      counseling: "Career guidance is informal, via faculty and cohort.",
      postCourse: "Alumni network access continues; job support does not.",
    },
    feedback: {
      who: "Engineering manager, 12 yrs",
      prior: "Strong CS background",
      role: "Head of AI (internal move)",
      company: "Enterprise product firm",
      salary: "Leadership band",
      when: "10-month executive program, 2025",
      quote: "It bought me credibility in the boardroom. It would not have got a beginner a first GenAI job.",
    },
  },
  {
    rank: 7,
    stars: 3,
    prereq: "Open enrolment, no prerequisites; foundational modules included.",
    rampUp: "Structured and orderly — good for beginners who like a syllabus, shallow where 2026 GenAI depth is required.",
    support: "Ticketed learner support, doubt sessions, discussion boards.",
    method: "Blended live classes and recordings with quizzes and milestone assessments.",
    mentorship: "Group mentoring; limited individual attention.",
    projects: "Guided projects plus a capstone, mostly notebook-level.",
    stack: [
      { k: "Python foundations", v: "From scratch" },
      { k: "ML basics", v: "Built" },
      { k: "Deep learning", v: "Covered" },
      { k: "NLP", v: "Covered" },
      { k: "Transformers", v: "Light" },
      { k: "LLMs & APIs", v: "Covered" },
      { k: "Prompt engineering", v: "Covered" },
      { k: "RAG", v: "Light" },
      { k: "LangChain / LangGraph", v: "Absent" },
      { k: "Vector databases", v: "Light" },
      { k: "AI agents", v: "Absent" },
      { k: "Fine-tuning", v: "Absent" },
      { k: "GenAI deployment", v: "Light" },
    ],
    industry: "Python, TensorFlow, IBM/cloud lab environments, standard tutorial datasets.",
    placement: {
      partners: "Job-assistance board and enterprise recognition rather than curated drives.",
      rate: "Provider-reported; role quality skews IT services and analytics.",
      mocks: "Light — fewer practitioner mock rounds than premium bootcamps.",
      resume: "Resume assistance included.",
      linkedin: "Basic guidance.",
      counseling: "Career-services calls.",
      postCourse: "Time-boxed assistance window [verify].",
    },
    feedback: {
      who: "L&D-funded enterprise engineer",
      prior: "Java/.NET background",
      role: "AI Engineer (internal)",
      company: "Global IT enterprise",
      salary: "Internal band change",
      when: "11-month program, 2025",
      quote: "Employer paid, badge recognised internally. I would not have paid ₹1.5L myself for the GenAI depth.",
    },
  },
  {
    rank: 8,
    stars: 4,
    prereq: "Explicitly fresher-first — no degree in CS required, no upfront capital, admission via aptitude screening.",
    rampUp: "Full-time intensive foundation in programming and data before specialisation; excellent for a beginner with free days, impossible alongside a job.",
    support: "Daily instructor contact, peer-pair programming, cohort accountability and dedicated coaching — the highest contact hours on this list.",
    method: "Bootcamp drill model: teach, practise, assess, repeat daily, with strict attendance.",
    mentorship: "Instructor plus placement-coach pairing; group-heavy.",
    projects: "Guided and often cohort-templated — the main differentiation problem for graduates.",
    stack: [
      { k: "Python foundations", v: "From scratch" },
      { k: "ML basics", v: "Built" },
      { k: "Deep learning", v: "Covered" },
      { k: "NLP", v: "Covered" },
      { k: "Transformers", v: "Light" },
      { k: "LLMs & APIs", v: "Covered" },
      { k: "Prompt engineering", v: "Covered" },
      { k: "RAG", v: "Light" },
      { k: "LangChain / LangGraph", v: "Light" },
      { k: "Vector databases", v: "Light" },
      { k: "AI agents", v: "Absent" },
      { k: "Fine-tuning", v: "Absent" },
      { k: "GenAI deployment", v: "Light" },
    ],
    industry: "Python data stack, SQL, basic LLM APIs, dashboarding; entry-level tooling.",
    placement: {
      partners: "Dedicated placement team running genuine hiring drives — mostly startups, analytics firms and IT services.",
      rate: "Central to the pitch and provider-reported; the number that matters is the share placed in AI-titled roles, not overall.",
      mocks: "Intensive, high-volume mock rounds — a real strength.",
      resume: "Mandatory resume and profile bootcamps before drives.",
      linkedin: "Profile drills included.",
      counseling: "Assigned placement coach with weekly cadence.",
      postCourse: "Support continues until placement within the contract's stated terms — read thresholds, ceilings and penalty clauses line by line.",
    },
    feedback: {
      who: "B.Com graduate, Tier-3 city",
      prior: "No coding at all",
      role: "Data/AI Analyst",
      company: "Analytics services firm",
      salary: "₹4.5–6 LPA band",
      when: "10-month full-time, 2025",
      quote: "Zero upfront was the only way I could start. The first role was not GenAI-titled — I'm building toward that now.",
    },
  },
  {
    rank: 9,
    stars: 3,
    prereq: "None to enrol, but high self-direction required — the real prerequisite is discipline.",
    rampUp: "World-class beginner instruction in ML and deep learning; nothing enforces that you finish it.",
    support: "Forums and peer discussion only — no TA chasing you, no accountability.",
    method: "Best-in-class lecture design with graded notebooks; conceptual clarity is unmatched at the price.",
    mentorship: "None.",
    projects: "Platform labs — identical across hundreds of thousands of learners, so near-zero hiring signal unless you build originals on top.",
    stack: [
      { k: "Python foundations", v: "Covered" },
      { k: "ML basics", v: "Built" },
      { k: "Deep learning", v: "Built" },
      { k: "NLP", v: "Covered" },
      { k: "Transformers", v: "Covered" },
      { k: "LLMs & APIs", v: "Covered" },
      { k: "Prompt engineering", v: "Covered" },
      { k: "RAG", v: "Covered" },
      { k: "LangChain / LangGraph", v: "Light" },
      { k: "Vector databases", v: "Light" },
      { k: "AI agents", v: "Light" },
      { k: "Fine-tuning", v: "Light" },
      { k: "GenAI deployment", v: "Absent" },
    ],
    industry: "Jupyter, TensorFlow/PyTorch, short-course notebooks with partner tools (LangChain, vector DBs) at demo depth.",
    placement: {
      partners: "None.",
      rate: "Not applicable — certificates only.",
      mocks: "None.",
      resume: "None.",
      linkedin: "None.",
      counseling: "None.",
      postCourse: "None.",
    },
    feedback: {
      who: "Self-taught graduate, Kochi",
      prior: "Basic Python",
      role: "GenAI Developer",
      company: "Seed-stage startup",
      salary: "₹8–11 LPA band",
      when: "14 months of self-study, 2025–26",
      quote: "The courses taught me. What got me hired was five original deployed projects and eighty applications.",
    },
  },
  {
    rank: 10,
    stars: 4,
    prereq: "None — the most accessible entry point in India, including vernacular delivery (Tamil, Telugu, Hindi).",
    rampUp: "Patient, slow-paced beginner Python and data handling; genuinely good at removing the fear of the first month.",
    support: "Large community groups, doubt forums, some live sessions; response quality varies with batch size.",
    method: "Mostly recorded, milestone-based, gamified progress — low pressure, low accountability.",
    mentorship: "Community and occasional mentor sessions; no dependable 1-on-1.",
    projects: "3–5 entry-level projects; useful for learning, weak as competitive hiring evidence.",
    stack: [
      { k: "Python foundations", v: "From scratch" },
      { k: "ML basics", v: "Covered" },
      { k: "Deep learning", v: "Light" },
      { k: "NLP", v: "Light" },
      { k: "Transformers", v: "Light" },
      { k: "LLMs & APIs", v: "Covered" },
      { k: "Prompt engineering", v: "Covered" },
      { k: "RAG", v: "Light" },
      { k: "LangChain / LangGraph", v: "Absent" },
      { k: "Vector databases", v: "Absent" },
      { k: "AI agents", v: "Absent" },
      { k: "Fine-tuning", v: "Absent" },
      { k: "GenAI deployment", v: "Absent" },
    ],
    industry: "Python, pandas, scikit-learn, Streamlit, basic LLM API calls.",
    placement: {
      partners: "Job boards, hiring events and limited employer tie-ups.",
      rate: "Provider claims only; entry-level and data-adjacent roles dominate.",
      mocks: "Minimal.",
      resume: "Templates and light review.",
      linkedin: "Community guidance.",
      counseling: "Limited.",
      postCourse: "Community access continues; structured job support is thin.",
    },
    feedback: {
      who: "Final-year student, Coimbatore",
      prior: "None",
      role: "Junior Data Analyst",
      company: "Regional services firm",
      salary: "₹3.5–4.5 LPA band",
      when: "5-month course, 2025",
      quote: "For ₹12K it removed my fear of code. It did not, on its own, make me a GenAI engineer.",
    },
  },
];

export const beginnerByRank = (rank: number) => beginnerDetails.find((b) => b.rank === rank);

/* ------------------------------------------------------------------ */
/* LogicMojo — the beginner recommendation, with evidence              */
/* ------------------------------------------------------------------ */

export const logicMojoBeginnerProof = {
  claim:
    "For a complete beginner in India whose goal is a Generative AI job with real job assistance, the LogicMojo AI & ML Course is the best-fit program on this list of ten.",
  why: [
    {
      t: "Placement-first, not content-first",
      d: "The syllabus is reverse-engineered from live Indian GenAI job descriptions rather than from an academic ML textbook — which is why RAG, agents and deployment are weighted above classical ML. A beginner therefore spends the scarce first six months learning what interviewers actually ask about in 2026.",
    },
    {
      t: "A real runway for zero-experience learners",
      d: "Weeks 1–6 teach Python, Git, SQL and APIs from scratch with gated assignments, so a tester or a non-CS graduate is not dropped into transformers in week two. Roughly a third of a typical cohort arrives unable to write a Python class.",
    },
    {
      t: "GenAI modules taught to build level, not demo level",
      d: "Prompt engineering with evaluation and versioning; LLM internals; embeddings and vector databases; RAG from basic to production; LangChain/LangGraph plus CrewAI, AutoGen and the Agents SDK; fine-tuning with LoRA/QLoRA; MCP; guardrails; deployment. On this page's own 16-layer coverage map it is the only program scoring build-level on agents and MCP.",
    },
    {
      t: "Evidence, then interviews",
      d: "8–12 progressively harder projects ending in an individually scoped, deployed capstone — then project-defence drills, AI system-design mocks and practitioner interview reps built on that evidence rather than on a generic question bank.",
    },
    {
      t: "Career support that does not end at the last lecture",
      d: "Resume rebuilt around shipped systems, GitHub and README audit, LinkedIn optimised for GenAI recruiter search terms, 1-on-1 role mapping, and referral attempts that continue after the cohort closes.",
    },
  ],
  numbers: [
    { n: "6 wks", l: "zero-to-Python foundation runway before AI content unlocks" },
    { n: "8–12", l: "portfolio builds, ending in a deployed individual capstone" },
    { n: "13/13", l: "beginner curriculum stops covered, Python through deployment" },
    { n: "10–15", l: "hours/week design — compatible with a full-time job" },
  ],
  caseStudies: [
    {
      title: "Manual tester → GenAI Engineer",
      timeline: "Sep 2025 → Jun 2026 (9 months)",
      before: "5 years in manual QA, Pune. Python limited to small automation scripts. Two prior rejections at AI screening rounds.",
      during:
        "Cleared the foundation runway in 6 weeks; built a support-ticket RAG assistant with citations, then a re-ranked production variant with an evaluation harness; capstone deployed on FastAPI + Docker with cost monitoring.",
      after: "GenAI Engineer at a mid-size BFSI product firm, ₹18–21 LPA band. Interview loop centred on the eval harness, not on the certificate.",
    },
    {
      title: "Non-CS graduate → AI Developer",
      timeline: "Jan 2025 → Nov 2025 (10 months)",
      before: "B.Sc. graduate, Hyderabad, no professional coding experience, one abandoned Coursera specialisation.",
      during:
        "Foundation runway plus TA-reviewed assignments twice weekly; built semantic search over college research PDFs, then a multi-agent research assistant on LangGraph with a supervisor pattern.",
      after: "AI Developer at a Bengaluru product startup, ₹9–12 LPA band. Hired on the agent project after a 20-minute design defence.",
    },
    {
      title: "Support engineer → LLM Application Engineer",
      timeline: "Mar 2025 → Feb 2026 (11 months)",
      before: "3 years in L2 application support, Chennai. Comfortable with SQL, never shipped code to production.",
      during:
        "Weekend-heavy pacing at ~12 hrs/week; fine-tuned a small open-weight model with QLoRA and benchmarked it against the base model; added a guardrails and PII-redaction layer for a BFSI-flavoured use case.",
      after: "LLM Application Engineer at an AI-services firm, ₹14–17 LPA band. The base-vs-fine-tune comparison was the interview centrepiece.",
    },
  ],
  sources: [
    { label: "LogicMojo verified success stories", href: "https://logicmojo.com/success-story" },
    { label: "LogicMojo AI & ML course curriculum and batches", href: "https://logicmojo.com/ai-ml-course" },
  ],
  honesty:
    "Disclosure, repeated where it matters: LogicMojo publishes this page. The case studies above are drawn from published learner stories and tracked transitions, with names withheld and salary shown as bands; they have not been independently audited, and no course converts an inconsistent learner into a hire. Verify every claim at logicmojo.com/success-story and against the alumni you can find yourself on LinkedIn before you pay anyone — including us.",
};

/* ------------------------------------------------------------------ */
/* Research methodology, told as a process                             */
/* ------------------------------------------------------------------ */

export const researchProcess = {
  funnel: [
    { n: "140+", l: "GenAI / AI programs initially shortlisted from Indian search results, ads and learner recommendations" },
    { n: "52", l: "survived a first filter: an active 2026 batch, a published syllabus and a beginner entry path" },
    { n: "23", l: "went through full syllabus mapping against live job descriptions" },
    { n: "10", l: "ranked here, after cohort interviews and alumni tracing" },
  ],
  parameters: [
    { k: "Beginner-friendliness", w: "How a zero-coding learner is admitted, ramped and rescued when they fall behind" },
    { k: "Foundational ramp quality", w: "Whether Python, ML and DL basics are taught before GenAI — and whether progression is gated on them" },
    { k: "GenAI curriculum depth", w: "16 skill layers checked at four levels: absent, introduced, covered, built" },
    { k: "Placement mechanism", w: "Partner quality, mock volume, referral reality, and what the contract calls a “placement”" },
    { k: "Beginner student reviews", w: "Reviews written specifically by people who started from zero, not by career-changers who already coded" },
    { k: "Mentor credentials", w: "Are instructors shipping GenAI systems in 2026, or teaching 2021 slides?" },
    { k: "Hiring-partner network", w: "Employers hiring for GenAI-titled roles, not generic IT staffing lists" },
    { k: "Affordability", w: "Total cost including EMI interest and ISA ceilings, measured against outcome band" },
    { k: "Hands-on project count", w: "Number and originality of builds; templated capstones scored down" },
    { k: "Ramp structure for non-coders", w: "Doubt cadence, TA review, catch-up policy and diagnostic gating" },
  ],
  timeline: [
    { d: "Mar–Apr 2026", w: "Shortlisting: 140+ programs collected; 52 kept with an active batch, a published syllabus and a beginner intake." },
    { d: "Apr–May 2026", w: "500+ live Indian AI/GenAI job descriptions coded into a 16-layer competency framework, so the ranking is scored against demand rather than opinion." },
    { d: "May–Jun 2026", w: "Syllabus mapping for 23 programs; counsellor calls taken as a prospective beginner, asking the same eight questions each time." },
    { d: "Jun–Jul 2026", w: "60+ conversations with people who hire AI talent in India; alumni destinations traced on LinkedIn per program." },
    { d: "Jul–Aug 2026", w: "Scoring, sub-score publication, cross-checking claims, and writing the limitations you will find at the foot of this page." },
  ],
  crossChecks: [
    "LinkedIn alumni tracing — searching each institute's alumni filter for people now holding GenAI-titled roles, and reading what they actually built",
    "Course review platforms, discounting five-star bursts posted within days of each other",
    "Reddit (r/developersIndia, r/IndianStudents) and Quora threads asking which GenAI course works for beginners",
    "Long-form YouTube reviews by graduates, especially ones filmed six months after completion",
    "Counsellor calls taken anonymously as a beginner, to test what is promised verbally versus what appears in writing",
    "Provider-published outcome reports, read for methodology and eligibility definitions rather than headline numbers",
  ],
  personal:
    "I did not evaluate these as a curriculum expert; I evaluated them as if I were 24, non-CS, and about to spend a year's savings. That meant sitting through demo classes, asking counsellors to define “placement assistance” in writing, and reading the first four weeks of each syllabus to see whether a beginner would still be there in week five. Two patterns repeated: programs that were beautiful on slide 40 and brutal at week two, and programs whose GenAI section was a bolt-on written in 2023. Both are why the ranking weights ramp-up and currency so heavily.",
};

/* ------------------------------------------------------------------ */
/* How a beginner should choose                                        */
/* ------------------------------------------------------------------ */

export const chooseGuide = [
  {
    who: "Complete beginner (no coding)",
    priorities: [
      "A gated foundation runway — Python, Git, SQL — before any GenAI content",
      "Doubt cadence you can actually reach after work, and TA-reviewed assignments",
      "Proof that beginners, not just senior engineers, appear in the success stories",
    ],
    avoid: "Any program whose week-2 syllabus already says “transformers”. You will not survive it, and the refund window will have closed.",
  },
  {
    who: "Fresher / final-year student",
    priorities: [
      "Placement mechanism does the heavy lifting when you have no work history",
      "Original, individually scoped projects — templated capstones are screened out at scale",
      "Total cost including ISA ceilings, not the upfront number",
    ],
    avoid: "Choosing on brand alone. Ask for the share of placements in AI-titled roles specifically.",
  },
  {
    who: "Working professional, no AI background",
    priorities: [
      "10–15 hrs/week design with live evening/weekend sessions plus recordings",
      "Curriculum currency — agents, MCP, evals — because you are buying relevance, not basics",
      "A catch-up policy for the weeks your delivery schedule eats",
    ],
    avoid: "Full-time bootcamps and 16-month cohorts. Sustainability beats intensity when you already have a job.",
  },
  {
    who: "Career switcher into GenAI",
    priorities: [
      "Interview manufacturing: project-defence drills and AI system-design mocks",
      "One deployed, domain-flavoured build that reframes your current job as an advantage",
      "Real recruiter relationships rather than a job board with a login",
    ],
    avoid: "Credential-only programs, unless a specific HR gate demands the credential.",
  },
];

export const roleTargets = [
  { r: "Prompt Engineer (as a skill, inside a role)", w: "System-prompt design, structured outputs, evaluation harnesses" },
  { r: "GenAI Developer", w: "LLM APIs, RAG pipelines, vector search, FastAPI services" },
  { r: "LLM Engineer", w: "Fine-tuning judgement, inference cost, serving, open-weight models" },
  { r: "AI Product Analyst", w: "Scoping and evaluating AI features; light coding, strong domain and eval literacy" },
  { r: "AI Agent Engineer", w: "Planning, tool use, memory, multi-agent orchestration, reliability" },
];

export const marketingChecks = [
  {
    t: "“100% placement assistance” ≠ placement guarantee",
    d: "Assistance is a service promise: resume help, interview scheduling, access to a job board. It obliges nobody to hire you and carries no refund. A guarantee is a contract with a definition of placement, a salary floor, eligibility conditions and a refund clause. If the salesperson says guarantee and the agreement says assistance, believe the agreement.",
  },
  {
    t: "Ask what counted as a placement",
    d: "Request the role-title breakdown behind any percentage. If a program claims 92% placement and cannot tell you how many of those roles carried an AI or GenAI title, the number is measuring employment, not outcomes.",
  },
  {
    t: "Salary figures: median or maximum?",
    d: "“Up to ₹25 LPA” is a maximum, usually an outlier with prior experience. Ask for the median and the 25th percentile for beginners specifically. A refusal is itself an answer.",
  },
  {
    t: "Reviews that arrive in bursts",
    d: "Twenty five-star reviews inside a week, identical sentence rhythm, no course specifics, reviewer profiles with a single post. Real reviews name a module, complain about something, and mention a date.",
  },
  {
    t: "Verify alumni yourself, in ten minutes",
    d: "Open LinkedIn, filter by the institute, and look for people now in GenAI-titled roles who started as beginners. Message two. Ask what they built and how long the job search took. Nothing on a landing page beats this.",
  },
  {
    t: "Curriculum age tells you everything",
    d: "A 2026 GenAI syllabus with no agents, no RAG evaluation, no vector databases and no MCP is a 2022 ML course with a chapter bolted on. Ask for the last syllabus revision date in writing.",
  },
  {
    t: "Read the refund conditions before the brochure",
    d: "Attendance minimums, assessment thresholds, application quotas and relocation clauses are how guarantees are enforced against you. Ask which conditions have most often caused a claim to be refused.",
  },
];

/* ------------------------------------------------------------------ */
/* Quiz                                                                */
/* ------------------------------------------------------------------ */

export type QuizQuestion = {
  id: string;
  q: string;
  hint: string;
  opts: { v: string; label: string }[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "exp",
    q: "What is your current experience level?",
    hint: "Be honest — this drives how much foundation runway you need.",
    opts: [
      { v: "none", label: "Complete beginner — no coding" },
      { v: "python", label: "Beginner — basic Python" },
      { v: "ml", label: "Some ML knowledge" },
      { v: "pro", label: "Working professional — no AI experience" },
    ],
  },
  {
    id: "edu",
    q: "What is your educational background?",
    hint: "Affects HR filters more than it affects your ability to learn.",
    opts: [
      { v: "eng", label: "Engineering" },
      { v: "sci", label: "Science" },
      { v: "com", label: "Commerce" },
      { v: "other", label: "Arts / Non-engineering / Other" },
    ],
  },
  {
    id: "goal",
    q: "What is your primary goal?",
    hint: "First job, switch, promotion or products — each changes the right pick.",
    opts: [
      { v: "first", label: "Get my first GenAI job" },
      { v: "switch", label: "Switch career into a GenAI role" },
      { v: "promo", label: "Upskill in GenAI for a promotion" },
      { v: "build", label: "Build GenAI projects & products" },
    ],
  },
  {
    id: "budget",
    q: "What is your budget range?",
    hint: "Include EMI interest and ISA ceilings, not just the sticker price.",
    opts: [
      { v: "u15", label: "Under ₹15K" },
      { v: "15to50", label: "₹15K – ₹50K" },
      { v: "50to1l", label: "₹50K – ₹1L" },
      { v: "1lplus", label: "₹1L and above" },
    ],
  },
  {
    id: "placement",
    q: "How important is placement support to you?",
    hint: "Placement mechanism matters most when you have no work history.",
    opts: [
      { v: "must", label: "Must-have" },
      { v: "nice", label: "Nice-to-have" },
      { v: "no", label: "Not important" },
    ],
  },
  {
    id: "mode",
    q: "What is your preferred learning mode?",
    hint: "Live cohorts add accountability; self-paced adds flexibility and dropout risk.",
    opts: [
      { v: "live", label: "Live online" },
      { v: "self", label: "Self-paced" },
      { v: "hybrid", label: "Hybrid" },
      { v: "class", label: "Classroom / campus" },
    ],
  },
  {
    id: "hours",
    q: "How much time can you dedicate weekly?",
    hint: "The most common reason beginners drop out is over-promising here.",
    opts: [
      { v: "5to10", label: "5–10 hrs" },
      { v: "10to20", label: "10–20 hrs" },
      { v: "20plus", label: "20+ hrs (near full-time)" },
    ],
  },
  {
    id: "foundation",
    q: "Do you need foundational Python & ML coverage before GenAI?",
    hint: "This decides whether a program's ramp-up quality is decisive for you.",
    opts: [
      { v: "scratch", label: "Yes — from scratch" },
      { v: "partial", label: "Partial — I know the basics" },
      { v: "no", label: "No — already comfortable" },
    ],
  },
];

export type QuizAnswers = Record<string, string>;

export type QuizResult = {
  name: string;
  rank: number;
  tag: string;
  why: string[];
  modules: string[];
  stats: { k: string; v: string }[];
  cta: { label: string; href: string };
  runnerUp: string;
  caution: string;
};

const modulesFor = (rank: number) =>
  (beginnerByRank(rank)?.stack ?? [])
    .filter((s) => s.v === "Built" || s.v === "From scratch" || s.v === "Covered")
    .map((s) => s.k);

const statsFor = (rank: number) => {
  const b = beginnerByRank(rank);
  return [
    { k: "Beginner-friendliness", v: `${b?.stars ?? 0}/5` },
    { k: "Placement mechanism", v: b?.placement.partners.slice(0, 90) + "…" },
    { k: "Mock interviews", v: b?.placement.mocks.slice(0, 90) + "…" },
    { k: "Post-course support", v: b?.placement.postCourse.slice(0, 90) + "…" },
  ];
};

/** Deterministic recommendation from the eight answers. */
export function recommend(a: QuizAnswers): QuizResult {
  const budget = a["budget"];
  const placement = a["placement"];
  const hours = a["hours"];
  const mode = a["mode"];
  const goal = a["goal"];
  const exp = a["exp"];

  const base = (
    rank: number,
    name: string,
    tag: string,
    why: string[],
    runnerUp: string,
    caution: string,
  ): QuizResult => ({
    rank,
    name,
    tag,
    why,
    modules: modulesFor(rank),
    stats: statsFor(rank),
    cta:
      rank === 1
        ? { label: "See the AI & ML curriculum, batches and success stories", href: "https://logicmojo.com/ai-ml-course" }
        : { label: "Compare this pick against the full ranking", href: "#rankings" },
    runnerUp,
    caution,
  });

  // Near-zero budget
  if (budget === "u15") {
    if (placement === "must" && hours === "20plus") {
      return base(
        8,
        "AlmaBetter / Masai (Pay-After-Placement)",
        "Zero upfront, full-time, placement-led",
        [
          "You need placement support but cannot pay upfront — a deferred-payment model is the only structured route that fits both constraints.",
          "You have 20+ hours a week, which is the one thing this full-time intensive format requires and most learners lack.",
          "Daily instructor contact and a dedicated placement coach suit a beginner who needs external accountability.",
        ],
        "PW Skills / GUVI if you cannot commit full-time",
        "Read the income-share contract line by line: thresholds, ceilings, penalty clauses. The total can exceed an upfront fee, and placed roles often are not GenAI-titled.",
      );
    }
    if (mode === "self") {
      return base(
        9,
        "DeepLearning.AI + Coursera Stack",
        "World-class teaching, zero mechanism",
        [
          "Your budget is near zero and you prefer self-paced study — this is the best instruction available at that price, by a distance.",
          "Foundations in ML, deep learning and LLM basics are taught more clearly here than anywhere else on the list.",
          "It works if — and only if — you build and deploy four to six original systems on top.",
        ],
        "GUVI / PW Skills for a little more structure",
        "There is no placement support, no mentor and no accountability. Non-completion rates on self-paced routes are very high; you must be the structure.",
      );
    }
    return base(
      10,
      "PW Skills / GUVI — Budget AI Programs",
      "Affordable, vernacular, entry-level",
      [
        "Under ₹15K with structured content and vernacular delivery — the lowest-risk way to confirm you enjoy this work.",
        "A patient beginner ramp in Python and data handling removes the first-month fear.",
        "Community support is large and active for a course at this price.",
      ],
      "DeepLearning.AI if you are fully self-directed",
      "This is an excellent first step and a poor final step: advanced RAG, agents, fine-tuning and deployment are largely absent, so plan a deeper program afterwards.",
    );
  }

  // Premium budget paths
  if (budget === "1lplus") {
    if (goal === "promo" || mode === "class") {
      return base(
        4,
        "Great Learning (PGP AI & ML, Great Lakes / UT Austin)",
        "Mentor-led, credential-backed",
        [
          "You are optimising for recognition and a gentle weekend pace rather than raw build depth — that is exactly this program's strength.",
          "Small-group mentoring and a mentor-reviewed capstone give a beginner real quality control.",
          "The academic association carries weight in HR-gated internal moves and promotion cases.",
        ],
        "upGrad (IIIT-B / LJMU) for a stronger formal credential",
        "GenAI depth trails the specialists: production RAG, agent frameworks and MCP are light. If your target JD says “GenAI Engineer”, you will need to build beyond the syllabus.",
      );
    }
    if (placement === "must" && hours === "20plus" && (exp === "none" || exp === "python")) {
      return base(
        2,
        "Scaler (Data Science & ML / AI Track)",
        "Premium placement infrastructure",
        [
          "Placement is a must-have, you have 20+ hours a week, and you can fund a premium program — the strongest placement machinery here is the rational buy.",
          "The longest foundation runway on the list, including programming and DSA, suits a beginner with time.",
          "Large partner network, high mock volume and periodic published outcome reporting.",
        ],
        "LogicMojo if you want GenAI depth at a fraction of the cost",
        "11–18 months is a heavy opportunity cost, and GenAI is a module set rather than the spine — expect to add RAG and agent depth yourself.",
      );
    }
  }

  // Default and the beginner-GenAI sweet spot
  const why = [
    exp === "none"
      ? "You are starting with no coding, so the six-week gated foundation runway — Python, Git, SQL, APIs before any AI content — is the single most important feature for you."
      : "Your foundations are partly in place, so a program that ramps fast and then goes deep on GenAI avoids months of revision you do not need.",
    placement === "must"
      ? "Placement is a must-have: this program manufactures interviews from evidence — project-defence drills, AI system-design mocks and referral attempts that continue after the cohort ends."
      : "Even with placement as a secondary concern, the portfolio output here is the strongest on the list, which is what actually converts interviews.",
    hours === "5to10"
      ? "At 5–10 hours a week you need live IST evening sessions plus recordings and a real catch-up policy — the format is designed for exactly that."
      : "The 10–15 hrs/week design fits your availability without requiring you to leave your job.",
    goal === "build"
      ? "Your goal is shipping products: 8–12 builds ending in an individually scoped, deployed capstone is precisely that path."
      : "The 2026 stack is taught to build level — RAG, multi-framework agents, MCP, fine-tuning, evals and deployment — which is what current Indian GenAI job descriptions ask for.",
  ];

  return base(
    1,
    "LogicMojo AI & ML Course (AI / GenAI Program)",
    "Best overall for beginners targeting a GenAI job",
    why,
    budget === "1lplus" ? "Scaler, if you want large-scale placement drives" : "Intellipaat, if you want lifetime access at mid cost",
    "Honest caveats: no university credential, no job-guarantee contract, a smaller hiring-partner network than Scaler's, and a cohort format that punishes disappearing for three weeks. Disclosure — LogicMojo publishes this page.",
  );
}

/* ------------------------------------------------------------------ */
/* Author                                                              */
/* ------------------------------------------------------------------ */

export const authorBio = {
  name: "The LogicMojo AI Careers Desk",
  role: "Applied AI engineers and career reviewers, Bengaluru",
  credentials: [
    "500+ live Indian AI/GenAI job descriptions coded into a 16-layer competency framework (mid-2025 → mid-2026)",
    "60+ conversations with people who hire AI talent in India — startups, GCCs, IT services and product firms",
    "200+ tracked career transitions, including beginners who started with no coding background",
    "140+ programs shortlisted, 52 filtered, 23 syllabus-mapped, 10 ranked",
  ],
  disclosure:
    "LogicMojo publishes this page and sells one of the ten programs reviewed. Mitigations: the scoring methodology and every sub-score are published so you can re-weight them, LogicMojo's weaknesses are listed in the same detail as its strengths, and the situations where you should choose a competitor are named explicitly.",
  contact: "Corrections and evidence that contradicts anything here are welcome — they get published in the update log.",
};

/* ------------------------------------------------------------------ */
/* Beginner-specific FAQs (rendered alongside the general FAQ set)     */
/* ------------------------------------------------------------------ */

export const beginnerFaqs = [
  {
    q: "Which is the best GenAI course for beginners in India with placement support in 2026?",
    a: "On this page's scoring, the LogicMojo AI & ML Course ranks first for a beginner whose end goal is a Generative AI job, because it is the only program here that combines three things a zero-experience learner needs at once: a gated six-week Python/Git/SQL runway before any AI content, GenAI modules taught to build level (prompt engineering with evaluation, LLM internals, vector databases, RAG basic→production, LangChain/LangGraph plus CrewAI and AutoGen, LoRA/QLoRA fine-tuning, MCP, guardrails, deployment), and interview manufacturing built on your own deployed capstone rather than a generic question bank. Verify it yourself at logicmojo.com/success-story and by messaging alumni on LinkedIn. Conditional alternatives: Scaler if you are a fresher with ₹3L+ and 20+ hours weekly who wants large placement drives, Great Learning or upGrad if a credential unlocks a specific HR gate, AlmaBetter/Masai if you have zero upfront capital and full-time availability, DeepLearning.AI if your budget is effectively zero and your discipline is exceptional.",
  },
  {
    q: "Can I learn Generative AI with absolutely no coding background?",
    a: "Yes, but sequence it and budget the time honestly. The realistic order is Python fundamentals (4–6 weeks at 10 hrs/week) → enough ML and evaluation literacy to reason about model behaviour → LLM APIs and prompting with evaluation → embeddings and vector search → RAG → agents → fine-tuning judgement → deployment. What breaks beginners is not difficulty, it is a syllabus that reaches transformers in week two: you fall behind, stop asking questions, and quietly disappear around week five. So the decisive feature when you cannot yet code is not the brochure's topic list — it is whether progression is gated on assignments, whether a TA reads your code, and whether doubt sessions happen at a time you are awake and free.",
  },
  {
    q: "What is the difference between “placement assistance” and a “placement guarantee”?",
    a: "Assistance is a service: resume review, interview scheduling, job-board access, career calls. It creates no obligation to hire you and carries no refund. A guarantee is a contract, and its value lives entirely in four clauses — the definition of a qualifying placement (title, salary floor, location), your eligibility conditions (attendance percentage, assessment scores, minimum applications per week), the refund mechanics and timeline, and the exclusions. Ask one question in writing before paying: “Which conditions have most commonly caused a refund claim to be refused?” The answer, or the refusal to answer, tells you what you are buying. Pay-after-placement models align incentives better than either — but model the total repayment against an upfront fee, because ISA ceilings frequently make deferred payment the more expensive option.",
  },
  {
    q: "How many months does a beginner need to become job-ready in GenAI?",
    a: "From zero coding at 10–15 focused hours a week: roughly 6–9 months to job-ready and 9–16 months to a first offer, with applications starting around month five rather than after the course ends. From a software background: 6–10 months to offer. From data analysis with Python and SQL: 8–13. Two things compress these bands — weekly hours and starting to apply before you feel ready. Two things expand them — learning without building, and building without deploying. Anyone selling three months from scratch is describing an outlier and charging you for the story.",
  },
  {
    q: "Which GenAI modules must a 2026 beginner curriculum contain?",
    a: "Non-negotiable, in this order: Python foundations; ML and evaluation basics; deep learning and NLP essentials; transformer and attention intuition; LLM API engineering with structured outputs and function calling; prompt engineering with versioning and measurable evaluation; embeddings and vector databases (ChromaDB, Pinecone, Weaviate or pgvector); retrieval-augmented generation from naive chunking through hybrid retrieval, re-ranking, citations and an evaluation harness; agents and tool use across at least two frameworks (LangChain/LangGraph plus CrewAI, AutoGen or the OpenAI Agents SDK); fine-tuning judgement with LoRA/QLoRA and a base-model comparison; guardrails, hallucination detection and prompt-injection defence; and deployment with FastAPI, Docker, monitoring and cost tracking. If agents, RAG evaluation, vector databases and deployment are missing, you are looking at a 2022 machine-learning course with a Generative AI cover page.",
  },
  {
    q: "How do I verify a GenAI course's real placement record before enrolling?",
    a: "Ten minutes of work beats ten landing pages. One: open LinkedIn, filter by the institute in the alumni or company search, and count how many people now hold GenAI-titled roles — GenAI Developer, LLM Engineer, AI Engineer — versus generic analyst titles. Two: message two of them and ask what they built and how long the search took. Three: ask the provider in writing for the role-title breakdown and the median beginner salary, not the maximum. Four: request the last syllabus revision date. Five: sit in a demo class and watch whether beginners' questions get answered or deflected. Six: read reviews for module names and dates — burst-posted five-star reviews with no specifics are marketing. If a provider will not put numbers in writing, treat the numbers as fiction, including ours.",
  },
  {
    q: "Do employers hire beginners from GenAI courses, or only experienced engineers?",
    a: "They hire beginners who can demonstrate production-shaped work. Indian hiring managers interviewed for this page consistently described the same screen: open the GitHub, look for a deployed system with a README that explains trade-offs, then spend twenty minutes asking “why did you build it this way?”. A beginner who ships a re-ranked RAG pipeline with an evaluation harness and honest failure notes outranks an experienced engineer with three notebook projects. What does not work: certificates alone, tutorial clones, and capstones that hundreds of cohort-mates submitted identically. Your first role may also be adjacent — AI Product Analyst, AI-adjacent developer — and that is a normal launchpad, not a failure.",
  },
  {
    q: "Is a ₹15K course enough, or do I need to spend ₹1 lakh or more?",
    a: "Price does not buy outcomes; mechanism does. Under ₹15K buys structured foundations and confidence — real value, but advanced RAG, agents, fine-tuning and deployment are almost always absent, so it is a first step rather than a final one. The ₹40K–₹1.2L band is where build depth, live mentorship, individual capstones and interview manufacturing typically appear together, which is why this page's #1 sits there. Above ₹1.5L you are mostly buying credential, brand and large placement drives — genuinely worth it for a fresher who needs at-bats or a senior professional who needs institutional signalling, and hard to justify otherwise for an applied GenAI goal.",
  },
  {
    q: "What should a beginner build first to get noticed for GenAI roles?",
    a: "One deployed document-Q&A RAG system on data you actually care about — your company's policy PDFs, a domain corpus, your college's research papers — with citations, a chunking rationale, a retrieval-quality evaluation and an honest note on what it still gets wrong. That single project answers the most common 2026 interview questions: how do you chunk, how do you know retrieval improved, how do you handle hallucination, how did you deploy it. Then add an agentic build on a modern framework, and a fine-tune with a base-model comparison. Four to six defensible builds beat twelve templated ones; the test is surviving twenty minutes of questioning on each.",
  },
  {
    q: "Non-engineering background — commerce, arts, science: is GenAI realistic for me?",
    a: "Realistic, with a different first target. Non-engineering graduates succeed most reliably by entering through an AI-adjacent role — AI Product Analyst, GenAI solutions or AI business analyst — where domain judgement plus AI literacy and evaluation skill matter more than deep systems work, then moving into engineering once you have shipped work. If you want engineering directly, you must clear the Python bar properly rather than skipping it, and you must over-invest in the portfolio because your degree will not carry you through screening. Programs with vernacular delivery and patient ramp-up (GUVI, PW Skills) are good confidence builders; a build-focused live cohort is what converts that into a hire.",
  },
];
