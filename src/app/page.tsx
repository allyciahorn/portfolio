import Link from "next/link";

const projects = [
  {
    title: "Court Companion",
    tagline:
      "A self-help tool designed to help people understand and stay on track with civil court documents.",
    demoUrl: "https://www.youtube.com/watch?v=qeKf1ykQ3Kk",
    githubUrl: "https://github.com/allyciahorn/court-companion",
  },
];

const vibes = ["civic tech", "access to justice", "calm software", "data systems"];

export default function HomePage() {
  return (
    <main id="top" className="mx-auto max-w-5xl px-6 py-10">
      <div className="mx-auto max-w-4xl space-y-10">
        {/* Selfie */}
        <div className="flex justify-center">
          <div className="rounded-full p-1 bg-stone-100 rotate-[-1deg]">
            <img
              src="/Allycia.png"
              alt="Allycia Horn"
              className="h-38 w-38 sm:h-46 sm:w-46 rounded-full object-cover bg-background shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
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
                className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs text-stone-600"
              >
                {v}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-800">
            Allycia Horn{" "}
            <span className="text-stone-500">— Software Engineer</span>
          </h1>

          <p className="text-base sm:text-lg text-stone-700 mx-auto max-w-2xl leading-relaxed">
            I use technology to{" "}
            <span className="underline decoration-emerald-300 underline-offset-4">
              reduce harm
            </span>
            ,{" "}
            <span className="underline decoration-rose-300 underline-offset-4">
              increase transparency
            </span>
            , and make{" "}
            <span className="underline decoration-sky-300 underline-offset-4">
              complex systems
            </span>{" "}
            easier for everyday people to navigate.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <a
              href="https://www.linkedin.com/in/allycia-horn"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-stone-300 px-4 py-2 text-stone-700 hover:bg-stone-100"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/allyciahorn"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-stone-300 px-4 py-2 text-stone-700 hover:bg-stone-100"
            >
              GitHub
            </a>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-stone-300 px-4 py-2 text-stone-700 hover:bg-stone-100"
            >
              Resume
            </Link>
          </div>
        </header>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-stone-800">Projects</h2>
            <div className="h-px flex-1 bg-stone-200" />
          </div>

          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-stone-200 bg-stone-50 p-5 space-y-3"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-stone-800">{p.title}</h3>
                <p className="text-stone-600">{p.tagline}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100"
                >
                  ▶ Demo
                </a>
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100"
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
            <h2 className="text-xl font-semibold text-stone-800">Experience</h2>
            <div className="h-px flex-1 bg-stone-200" />
          </div>

          <div className="rounded-2xl border border-stone-200 bg-background p-5 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between flex-wrap gap-2">
                <h3 className="font-medium text-stone-800">KeyBank — Consumer Analyst</h3>
                <span className="text-sm text-stone-500">
                  Cleveland, OH | 06/2022 – Present
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-stone-600">
                <li>
                  Designed consumer insights frameworks to prioritize product features, clarifying roadmaps and guiding investment decisions with measurable outcomes.
                </li>
                <li>
                  Conducted segmentation analyses to reveal customer behavior patterns, improving targeted outreach and increasing campaign relevance with measurable results.
                </li>
                <li>
                  Facilitated weekly stakeholder workshops to align data needs, reduce rework, and accelerate delivery of actionable reports.
                </li>
                <li>
                  Standardized data validation checks across pipelines to detect anomalies early and strengthen confidence in consumer metrics for decision-making.
                </li>
              </ul>
            </div>

            <div className="border-t border-stone-200 pt-5 space-y-2">
              <div className="flex justify-between flex-wrap gap-2">
                <h3 className="font-medium text-stone-800">Change Research — Associate Analyst</h3>
                <span className="text-sm text-stone-500">
                  Remote | 05/2022 – 12/2022
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-stone-600">
                <li>Designed sampling strategies to expand respondent diversity, improving representativeness and study validity.</li>
                <li>Built reproducible data pipelines to convert raw survey exports into analysis-ready tables for faster reporting.</li>
                <li>Collaborated with researchers and project managers to align questionnaires with study goals and ensure actionable metrics.</li>
                <li>Condensed complex results into concise executive briefs that translated findings into clear client recommendations.</li>

              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-stone-800">Skills</h2>
            <div className="h-px flex-1 bg-stone-200" />
          </div>

          <div className="rounded-2xl border border-stone-200 bg-background p-5">
            <div className="grid gap-2 sm:grid-cols-1 text-stone-700">
              <p>
                <span className="font-medium text-stone-800">Build</span> — React, Node.js, Next.js, FastAPI
              </p>
              <p>
                <span className="font-medium text-stone-800">Languages</span> — Python, Java, JavaScript, SQL, HTML/CSS
              </p>
              <p>
                <span className="font-medium text-stone-800">Data</span> — BigQuery, Tableau, PostgreSQL, MySQL
              </p>
              <p>
                <span className="font-medium text-stone-800">Workflow</span> — Git, testing, debugging, documentation
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-24 space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-stone-800">Education</h2>
            <div className="h-px flex-1 bg-stone-200" />
          </div>

          <div className="rounded-2xl border border-stone-200 bg-background p-5">
            <p className="font-medium text-stone-800">John Carroll University</p>
            <p className="text-stone-600">
              B.S. Computer Science — <span className="italic">cum laude</span>
            </p>
          </div>
        </section>

        {/* Interests */}
        <section id="interests" className="scroll-mt-24 space-y-4">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-stone-800">Interests</h2>
            <div className="h-px flex-1 bg-stone-200" />
          </div>

          <p className="text-stone-700 leading-relaxed italic">
            Civic technology, access to justice, transparency and accountability, 
            community-built tools, and designing calm, 
            accessible software.
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-2 text-sm text-stone-600 text-center italic">
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
