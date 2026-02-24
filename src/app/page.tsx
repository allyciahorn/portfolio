import Link from "next/link";

const projects = [
  {
    title: "Court Companion — Full-stack web application",
    tagline:
      "Built with React, Next.js, FastAPI, and Python.",
    demoUrl: "https://www.youtube.com/watch?v=qeKf1ykQ3Kk",
    githubUrl: "https://github.com/allyciahorn/court-companion",
  },
];

const vibes = [
  "Public Interest Technology",
  "Civic Tech",
  "Digital Access",
  "Data for Good",
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
              className="h-50 w-50 sm:h-58 sm:w-58 rounded-full object-cover bg-card shadow-[0_6px_26px_rgba(0,0,0,0.10)]"
            />
          </div>
        </div>

        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Allycia Horn{" "}
            <span className="text-foreground/60">— Software Engineer</span>
          </h1>

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
            className="rounded-2xl border border-border bg-card p-5 space-y-4"
          >
            {/* What it is */}
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="text-foreground/70">
                {p.tagline}
              </p>
            </div>

            {/* Why it exists / what it does */}
            <div className="space-y-2 text-foreground/60">
              <p>
                A web application that helps people navigate civil court documents 
                without legal representation. Court Companion clarifies what a document means, 
                surfaces important deadlines, and helps users draft appropriate responses.
              </p>

              <p>
                The tool is intentionally simple and privacy first, with no accounts and no 
                long term data storage.
              </p>
            </div>

            {/* Features) */}
            <div className="space-y-2">
              <p className="text-foreground/70">
                Key features
              </p>
              <ul className="list-disc pl-5 text-sm text-foreground/70 space-y-1">
                <li>Document intake and parsing</li>
                <li>Deadline and task identification</li>
                <li>Guided document drafting</li>
                <li>Case organization checklists</li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-1">
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
                  Prepared and analyzed financial reports to evaluate performance, 
                  identify trends, and inform strategic decisions for consumer banking products.
                </li>
                <li>
                  Analyzed monthly P&L, balance sheet, and cash flow statements to identify performance
                  drivers, variances to forecasts, and emerging risks. 
                </li>
                <li>
                  Conducted industry and competitor analysis, including market sizing, benchmarking,
                  and pricing comparisons to support strategic planning.
                </li>
                <li>
                  Created executive level presentations that summarized key financial insights, risks and reccommendations.
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
                  Collaborated with team members to develop and refine survey questionnaires.
                </li>
                <li>
                  Programmed, tested, and monitored surveys to ensure accuracy and smooth deployment. 
                </li>
                <li>
                  Produced key deliverables, including crosstabs and topline summaries for client review.
                </li>
                <li>
                  Analyzed survey data and helped prepare presentations and written reports outlining findings.
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
                <span className="font-medium text-foreground">Languages & Frameworks:</span> |
                React, Node.js, Next.js, FastAPI, Python, Java, JavaScript, SQL, HTML/CSS
              </p>
              <p>
                <span className="font-medium text-foreground">Databases & Tools:</span> |
                BigQuery, Tableau, PostgreSQL, MySQL, VS Code
              </p>
              <p>
                <span className="font-medium text-foreground">Development:</span> |
                RESTful APIs, responsive design, unit testing, Agile/Scrum debugging, documentation
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

          <div className="rounded-2xl border border-border bg-background p-5 space-y-1">
            <div className="flex justify-between flex-wrap gap-2">
              <p className="font-medium text-foreground">
                John Carroll University
              </p>
              <p className="text-sm text-foreground/60">
                December 2025
              </p>
            </div>

            <p className="text-foreground/70">
              Bachelor of Science in Computer Science, <span className="italic">cum laude</span>
            </p>
          </div>
        </section>

        {/* Interests */}
        <section id="interests" className="scroll-mt-24 space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-foreground">Interests</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="space-y-4">
            <p className="border-l-2 border-emerald-500/30 pl-4 text-foreground/80 leading-relaxed italic">
              I’m interested in building web apps that simplify complex processes and expand access to essential
              systems. I am especially interested in civic and data-driven projects.
            </p>

            <div className="flex flex-wrap justify-left gap-2">
              {vibes.map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-emerald-500/30 px-4 py-2 text-sm"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer className="pt-2 text-sm text-foreground/70 text-center italic">
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
