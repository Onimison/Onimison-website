// ─────────────────────────────────────────────────────────────────────────────
// AI Tools & Systems — Project Data
//
// Each entry here powers a full case study page at /work/ai-tools/[slug].
// When you're ready to add a real project, copy the placeholder below,
// fill in each field, and the page builds itself.
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectStatus = "live" | "in-progress" | "archived";

export interface FlowStep {
  step: string;
  label: string;
  desc: string;
}

export interface ReliabilityItem {
  challenge: string;
  solution: string;
}

export interface ResultMetric {
  value: string;
  label: string;
}

export interface AiProject {
  slug: string;
  title: string;
  tagline: string; // One punchy line shown on the listing card
  category: string; // e.g. "Automation", "AI Tool", "Content System"
  tools: string[]; // Tech stack badges
  status: ProjectStatus;
  year: string;
  liveUrl?: string; // Optional: deployed/live link

  // ── Case Study Sections ──────────────────────────────────────────────────

  problem: {
    heading: string;
    body: string[]; // Array of paragraphs
  };

  build: {
    heading: string;
    body: string[];
    steps?: {
      // Optional: break down the build into named stages
      title: string;
      desc: string;
    }[];
  };

  howItWorks: {
    heading: string;
    body: string[];
    flow?: FlowStep[]; // Optional: visual flow diagram (step → label → desc)
  };

  reliability: {
    heading: string;
    body: string[];
    items?: ReliabilityItem[]; // Optional: challenge/solution pairs
  };

  result: {
    heading: string;
    body: string[];
    metrics?: ResultMetric[]; // Optional: headline numbers
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Projects
// ─────────────────────────────────────────────────────────────────────────────

export const aiProjects: AiProject[] = [
  {
    slug: "appliq",
    title: "Appliq",
    tagline:
      "AI that rewrites your CV for every job — without inventing a single thing you haven't done.",
    category: "AI Tool",
    tools: ["Next.js", "Google Gemini", "Supabase", "TypeScript"],
    status: "live",
    year: "2026",
    liveUrl: "https://useappliq.vercel.app/",

    problem: {
      heading:
        "Job seekers were sending the same CV everywhere and wondering why they weren't hearing back.",
      body: [
        "Most people apply for jobs by tweaking the same CV slightly — maybe swapping a word here, moving a bullet there. They know it's not ideal, but doing it properly for every application takes 30–60 minutes of careful reading, rewriting, and second-guessing. For someone applying to 10, 20, or 50 roles, that's an enormous amount of time just to get to the first conversation.",
        'There\'s also a technical side to this problem that most applicants don\'t see: many large companies run CVs through an ATS (Applicant Tracking System) before a human ever looks at them. If your CV doesn\'t contain the exact keywords the job description uses, it can get filtered out automatically — regardless of how qualified you actually are. A senior marketing manager might miss an interview because their CV says "customer acquisition" and the job posting said "demand generation."',
        "The services that existed to help with this either charged a lot for a human to rewrite the CV (slow, expensive, not repeatable) or used AI in a way that was frankly dangerous — adding skills, tools, and job titles the person had never had. Getting caught embellishing a CV is a career-ending moment.",
      ],
    },

    build: {
      heading: "Built as a full web application — not a script, not a chatbot.",
      body: [
        "The goal from the start was to build something that felt like a proper product: an account, a dashboard, persistent data, and a clean interface that a non-technical person could use without any guidance. That meant building a full web app, not just a prompt wrapper.",
        "The stack chosen was Next.js for the web application, Supabase for user accounts and the database, and Google's Gemini AI for the intelligence layer. Each piece had a specific job and was chosen because it was the right fit — not just because it was fashionable.",
        'One of the most important architectural decisions was building a "Fact Sheet" system before any tailoring happens. When you upload your CV, the AI reads it and produces a structured list of your actual skills, actual tools, actual achievements, and actual years of experience. This Fact Sheet becomes the hard boundary for everything that follows. The rewrite AI can only work with what\'s in that list — nothing more.',
      ],
      steps: [
        {
          title: "The Fact Sheet: establishing your source of truth",
          desc: 'Before any tailoring can happen, the user uploads their master CV (PDF, DOCX, or plain text). The AI reads it and extracts a structured "Fact Sheet" — hard skills, tools, key achievements with metrics, and years of experience. This is saved to the database and becomes the single source of truth for every future tailored version. The AI is instructed explicitly: do not hallucinate. If something isn\'t in the Fact Sheet, it cannot appear in the output.',
        },
        {
          title: "The Gap Analysis: reading the job description intelligently",
          desc: "When the user pastes a job description, the AI compares it against the Fact Sheet and produces a gap analysis: which skills are direct matches, which are transferable (the user has something close that can be reframed), and which are genuine gaps the user simply doesn't have. It also automatically identifies the company name, job title, and salary from the JD — so the user doesn't have to type anything extra.",
        },
        {
          title: "The Constrained Rewrite: targeted, honest, keyword-rich",
          desc: "With the gap analysis in hand, the AI rewrites the CV to lead with direct matches, reframe transferable skills using the job's language, and preserve the original structure of the CV exactly — same section order, same section names. It integrates the keywords hiring managers and ATS systems scan for, but only using skills the person actually has. The output is clean markdown, ready to copy or export.",
        },
        {
          title: "The Compliance Check: an AI auditing another AI",
          desc: 'After the rewrite, a separate AI call reads the tailored CV and checks it against the Fact Sheet. It flags any sentence that contains a claim not present in the original data. This is shown to the user as a "Verified — No hallucinations" badge or a specific list of issues to review. This step was added after testing revealed that without it, the AI would occasionally rephrase things in a way that implied a stronger claim than the original.',
        },
      ],
    },

    howItWorks: {
      heading:
        "The system in motion — from CV upload to tailored application in under two minutes.",
      body: [
        "The user experience is designed to be as frictionless as possible. Once the Fact Sheet is set up (a one-time step), tailoring a new application takes less than 90 seconds. The user pastes a job description, hits a button, and watches the system work through four visible steps in real time.",
        "The output is a side-by-side view: the original CV on the left, the tailored version on the right. Keywords that were integrated from the job description are highlighted so the user can see exactly what changed and why. The tailored version is fully editable, so the user can make any final adjustments before downloading or saving.",
      ],
      flow: [
        {
          step: "01",
          label: "Upload your master CV",
          desc: "Upload once as a PDF, DOCX, or paste text directly. The AI reads it and builds your personal Fact Sheet — your permanent source of truth.",
        },
        {
          step: "02",
          label: "Paste the job description",
          desc: "Copy the full JD from LinkedIn, Indeed, or any job listing and paste it into the Tailoring Studio.",
        },
        {
          step: "03",
          label: "Gap analysis runs",
          desc: "The AI compares your Fact Sheet against the JD. It identifies direct skill matches, skills that can be reframed, and genuine gaps — and automatically pulls the company name, role, and salary from the listing.",
        },
        {
          step: "04",
          label: "CV is rewritten",
          desc: "Your CV is rewritten to lead with the skills that matter most to this employer. ATS keywords are woven in, bullet points are rephrased with strong action verbs, and your original structure is preserved exactly.",
        },
        {
          step: "05",
          label: "Compliance check",
          desc: "A second AI call audits the tailored version against your Fact Sheet and flags any hallucinations before you ever see the output.",
        },
        {
          step: "06",
          label: "Review, edit, and save",
          desc: "Side-by-side editor with keyword highlights. Edit anything, then download as PDF or save to your Application Tracker to manage the full pipeline.",
        },
      ],
    },

    reliability: {
      heading:
        "The hardest problem wasn't writing the AI — it was keeping it honest.",
      body: [
        "The biggest risk with any AI writing tool is hallucination: the model confidently adding things that aren't true. For a standard blog post, that's annoying. For a CV, it could get someone fired. So a significant portion of the build was dedicated specifically to preventing, detecting, and surfacing any instance of the AI going beyond what the person actually said.",
        "Beyond that, building on top of a third-party AI service introduces operational risks that have to be planned for. The Gemini API sometimes runs at high demand and returns errors. The app had to handle that gracefully — not just crash with a technical error message.",
      ],
      items: [
        {
          challenge:
            "The AI occasionally rewrites an achievement in a way that implies a bigger result than what was originally stated.",
          solution:
            'The compliance check step runs a second, separate AI call that reads the tailored output and compares every claim against the Fact Sheet. It returns a structured list of specific violations — shown to the user with exact quotes — rather than a generic warning. The user sees either a green "Verified" badge or the precise sentences that need review.',
        },
        {
          challenge:
            "Gemini's API returns 503 errors during periods of high demand, which would fail the user's tailoring job completely.",
          solution:
            'An exponential backoff retry system was built into every AI call. If the API returns a 503 or overload error, the system automatically waits 2 seconds and retries, then 4 seconds, then 8 seconds — up to three attempts before surfacing a clear, human-readable error message with a one-click "Try Again" button. A fallback model (Gemini 2.0 Flash) is also available if the primary model (2.5 Flash) is unavailable.',
        },
        {
          challenge:
            "Users uploading large or complex PDF files would sometimes get empty or garbled text back.",
          solution:
            "The PDF parsing uses Gemini's native document understanding rather than a local text extraction library. This means even complex, multi-column, designed CVs can be read accurately. File size is validated at 10MB before any processing starts, and clear error messages tell the user if their PDF isn't text-searchable.",
        },
        {
          challenge:
            "AI calls are expensive. Without limits, a single user could generate thousands of requests.",
          solution:
            "A rate limiting system was built using the Supabase database to track requests per user per hour. Tailoring is limited to 10 jobs per hour, file parsing to 20, and general AI calls to 30. The system is designed to degrade gracefully — if the rate limit table doesn't exist (e.g. during early setup), it defaults to allowing requests rather than blocking users.",
        },
        {
          challenge:
            "Input validation — what happens if someone passes in malicious or malformed data to the AI endpoints?",
          solution:
            "Every input to every AI function is validated using Zod schemas before it reaches the AI. CV text must be between 50 and 100,000 characters. Job descriptions must be at least 20 characters. All AI-generated HTML shown in the editor is sanitized using DOMPurify to prevent XSS injection from AI-generated content.",
        },
      ],
    },

    result: {
      heading: "A working product — not a demo.",
      body: [
        "Appliq is a fully functional web application with user authentication, persistent data across sessions, PDF upload and parsing, a four-stage AI pipeline, a side-by-side editing interface, multi-template PDF export, and an application tracker. It runs in production.",
        "The core capability — taking a generic CV and producing a tailored, keyword-matched, compliance-checked version in under 90 seconds — works reliably. The gap analysis gives users something genuinely useful beyond the rewrite itself: a clear picture of where they're strong for a role and where they're not, which also helps them prepare for interviews.",
        "This is the kind of tool that would typically cost a job seeker £100–£300 per application from a professional CV service, or hours of their own time. Appliq compresses that into 90 seconds and makes it repeatable for every role they apply to.",
      ],
      metrics: [
        { value: "< 90s", label: "Time to tailored CV" },
        {
          value: "4-stage",
          label: "AI pipeline (gap → rewrite → verify → save)",
        },
        { value: "3", label: "CV export templates (Classic, Modern, Minimal)" },
        { value: "In Progress", label: "Status" },
      ],
    },
  },
  {
    slug: "nigcomsat-media-intel",
    title: "NIGCOMSAT Media Intelligence Dashboard",
    tagline:
      "An autonomous PR engine that tracks, reads, and scores national news mentions in real-time.",
    category: "AI & Automation",
    tools: ["Next.js", "Groq AI", "Redis", "Automated Pipelines"],
    status: "live",
    year: "2026",
    liveUrl:
      "https://nigcomsat-media-intel-6qf04g70h-onimisons-projects.vercel.app",

    problem: {
      heading: "The blind spot in public relations.",
      body: [
        "For a national satellite communications company, public image and media coverage are critical. But tracking mentions across dozens of Nigerian news outlets, blogs, and social platforms was a massive, soul-crushing time sink.",
        "Before this tool, tracking required staff to act like human search engines—endlessly hitting refresh on news feeds, reading articles to gauge public sentiment, and manually copy-pasting data into Google Sheets. It was slow, highly subjective, and cost countless hours. Worse, the manual delay made it dangerously easy to miss critical news stories that required a rapid PR response.",
      ],
    },

    build: {
      heading: "From manual data entry to an autonomous intelligence engine.",
      body: [
        "We needed a system that didn’t just collect news, but actually understood it and logged it. The goal was to build a pipeline that could run entirely in the background, acting like a senior PR analyst and a data-entry clerk working 24/7.",
        "One of our biggest iterations was improving how we gathered the news. Initially, we relied on general Google News alerts, but the data was messy and often attributed to the wrong publishers. We pivoted to building direct integrations with top-tier Nigerian publications (like Premium Times, Nairametrics, and LinkedIn). This ensured the data was pristine and incredibly reliable.",
      ],
      steps: [
        {
          title: "01. The Intelligence Rubric",
          desc: "Before writing any code, we mapped out exactly how a human PR expert judges an article: Sentiment, Brand Visibility, Urgency, and Strategic Alignment.",
        },
        {
          title: "02. The Autonomous Pipeline",
          desc: "We built a scheduled engine that continuously fetches news from over 15 targeted sources, ignoring duplicate or irrelevant noise.",
        },
        {
          title: "03. The AI Analyst & Live Backup",
          desc: "We integrated a high-speed AI to score each article, surfaced the results on an executive dashboard, and built a seamless connection to automatically sync every mention to a master Google Sheet.",
        },
      ],
    },

    howItWorks: {
      heading: "The automated newsroom in motion.",
      body: [
        "The entire system runs silently in the background without any human intervention required. Staff no longer need to refresh feeds or manage spreadsheets.",
        "When a new article is published, the system catches it, reads the context, determines if it is positive or negative, and scores its importance. It instantly flags urgent articles on the dashboard while simultaneously writing the raw data into a secure Google Sheet for historical records.",
      ],
      flow: [
        {
          step: "01",
          label: "Listen",
          desc: "The system scans 15+ top-tier news sites and LinkedIn for brand mentions.",
        },
        {
          step: "02",
          label: "Analyze",
          desc: "An AI reads the article, scoring its sentiment, urgency, and PR impact.",
        },
        {
          step: "03",
          label: "Report & Sync",
          desc: "Data is instantly visualized on the dashboard AND safely backed up to Google Sheets.",
        },
      ],
    },

    reliability: {
      heading: "Built for the unpredictable web.",
      body: [
        "News websites change their layouts constantly, and AI can sometimes be inconsistent. We designed this system to survive both of those realities so the client never experiences downtime.",
      ],
      items: [
        {
          challenge:
            "News sites constantly change their website designs, breaking automated web scrapers.",
          solution:
            "We shifted from fragile web scraping to robust RSS feed tracking. If a website changes how it looks, our system still reliably catches the news.",
        },
        {
          challenge:
            "AI models can sometimes hallucinate or give inconsistent scoring.",
          solution:
            'We implemented a "Dual-Stage Reflection" process. The AI scores the article once, then a second AI process reviews and double-checks that score before approving it for the dashboard.',
        },
      ],
    },

    result: {
      heading: "Real-time clarity, countless hours saved.",
      body: [
        "The dashboard provides an instant, executive-level view of the company's public image. What used to take staff countless hours of manual refreshing and spreadsheet data entry every single day now happens instantly and automatically.",
        "The PR team can now focus entirely on strategy, relationships, and rapid response, knowing that their media tracking and database management are running flawlessly on autopilot.",
      ],
      metrics: [
        { value: "20+", label: "Hours Saved / Week" },
        { value: "100%", label: "Manual Data Entry Eliminated" },
        { value: "24/7", label: "Real-time Monitoring & Sync" },
      ],
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

export function getAllProjects(): AiProject[] {
  return aiProjects;
}

export function getProjectBySlug(slug: string): AiProject | undefined {
  return aiProjects.find((p) => p.slug === slug);
}
