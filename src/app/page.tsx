import Link from "next/link";

const projects = [
  {
    title: "Court Companion",
    tagline:
      "A community-centered web tool that empowers individuals to understand civil court paperwork and navigate legal processes with clarity and confidence.",
    demoUrl: "https://www.youtube.com/watch?v=qeKf1ykQ3Kk",
    githubUrl: "https://github.com/allyciahorn/court-companion",
  },
];

const vibes = [
  "civic technology",
  "human-centered design",
  "equitable access",
  "public good",
];

export default function HomePage() {
  return (
    <main
      id="top"
      className="mx-auto max-w-5xl px-6 py-10 bg-background text-foreground"
    >
      <div className="mx-auto max-w-4xl space-y-10">
        {/* Selfie */}
        <div className="flex justify-center">
          <div className="rounded-full p-1 bg-muted rotate-[-1deg] border border-border">
            <img
              src="/Allycia.png"
              alt="Allycia Horn"
              className="h-36 w-36 sm:h-44 sm:w-44 rounded-full object-cover bg-card shadow-[0_6px_26px_rgba(0,0,0,0.10)]"
            />
          </div>
        </div>

        {/* Header */}
        <header className="text-center space-y-4">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2">
            {vibes.map((v) => (
              <span
                key={v}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground/70"
              >
                {v}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Allycia Horn{" "}
            <span className="text-foreground/60">— Software Engineer</span>
          </h1>

          <p className="text-base sm:text-lg text-foreground/80 mx-auto max-w-2xl leading-relaxed">
            I build technology that helps people{" "}
            <span className="underline decoration-emerald-300 underline-offset-4">
              understand and engage
            </span>{" "}
            with complex systems. My work focuses on{" "}
            <span className="underline decoration-rose-300 underline-offset-4">
              transparency
            </span>
            ,{" "}
            <span className="underline decoration-sky-300 underline-offset-4">
              equity
            </span>
            , and creating tools that strengthen public participation in civic
            processes.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <a
              href="https://www.linkedin.com/in/allycia-horn"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border bg-card px-4 py-2 text-foreground/80 hover:bg-muted transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/allyciahorn"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border bg-card px-4 py-2 text-foreground/80 hover:bg-muted transition"
            >
              GitHub
            </a>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border bg-card px-4 py-2 text-foreground/80 hover:bg-muted transition"
            >
              Resume
            </Link>
          </div>
        </header>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-foreground">Projects</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-border bg-card p-5 space-y-3"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="text-foreground/70">{p.tagline}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-muted transition"
                >
                  ▶ Demo
                </a>
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-muted transition"
                >
                  Code
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24 space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-foreground">
              Experience
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="rounded-2xl border border-border bg-background p-5 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between flex-wrap gap-2">
                <h3 className="font-medium text-foreground">
                  KeyBank — Consumer Analyst
                </h3>
                <span className="text-sm text-foreground/60">
                  Cleveland, OH | 06/2022 – Present
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-foreground/70">
                <li>
                  Designed consumer insights frameworks to prioritize product
                  features, clarifying roadmaps and guiding investment decisions
                  with measurable outcomes.
                </li>
                <li>
                  Conducted segmentation analyses to reveal customer behavior
                  patterns, improving targeted outreach and increasing campaign
                  relevance with measurable results.
                </li>
                <li>
                  Facilitated weekly stakeholder workshops to align data needs,
                  reduce rework, and accelerate delivery of actionable reports.
                </li>
                <li>
                  Standardized data validation checks across pipelines to detect
                  anomalies early and strengthen confidence in consumer metrics
                  for decision-making.
                </li>
              </ul>
            </div>

            <div className="border-t border-border pt-5 space-y-2">
              <div className="flex justify-between flex-wrap gap-2">
                <h3 className="font-medium text-foreground">
                  Change Research — Associate Analyst
                </h3>
                <span className="text-sm text-foreground/60">
                  Remote | 05/2022 – 12/2022
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-foreground/70">
                <li>
                  Designed sampling strategies to expand respondent diversity,
                  improving representativeness and study validity.
                </li>
                <li>
                  Built reproducible data pipelines to convert raw survey exports
                  into analysis-ready tables for faster reporting.
                </li>
                <li>
                  Collaborated with researchers and project managers to align
                  questionnaires with study goals and ensure actionable metrics.
                </li>
                <li>
                  Condensed complex results into concise executive briefs that
                  translated findings into clear client recommendations.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-foreground">Skills</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="rounded-2xl border border-border bg-background p-5">
            <div className="grid gap-2 sm:grid-cols-1 text-foreground/80">
              <p>
                <span className="font-medium text-foreground">Build</span> —
                React, Node.js, Next.js, FastAPI
              </p>
              <p>
                <span className="font-medium text-foreground">Languages</span> —
                Python, Java, JavaScript, SQL, HTML/CSS
              </p>
              <p>
                <span className="font-medium text-foreground">Data</span> —
                BigQuery, Tableau, PostgreSQL, MySQL
              </p>
              <p>
                <span className="font-medium text-foreground">Workflow</span> —
                Git, testing, debugging, documentation
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-24 space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-foreground">Education</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="rounded-2xl border border-border bg-background p-5">
            <p className="font-medium text-foreground">John Carroll University</p>
            <p className="text-foreground/70">
              B.S. Computer Science — <span className="italic">cum laude</span>
            </p>
          </div>
        </section>

        {/* Interests */}
        <section id="interests" className="scroll-mt-24 space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-foreground">Interests</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <p className="text-foreground/80 leading-relaxed italic">
            I’m interested in technology that expands access to essential
            systems, strengthens public understanding, supports ethical data use,
            and promotes inclusivity in decision-making tools.
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-2 text-sm text-foreground/70 text-center italic">
          Interested in using tech to make the world a little kinder?{" "}
          <a
            href="https://www.linkedin.com/in/allycia-horn"
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            Let’s connect.
          </a>
        </footer>
      </div>
    </main>
  );
}
