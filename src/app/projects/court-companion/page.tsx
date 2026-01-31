import Image from "next/image";
import Link from "next/link";

export default function CourtCompanionPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      {/* Back link */}
      <Link
        href="/"
        className="text-sm underline underline-offset-4 text-muted-foreground"
      >
        ← Back to projects
      </Link>

      {/* Header */}
      <header className="mt-6 space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Court Companion
        </h1>
        <p className="text-lg text-muted-foreground">
          A self-help tool that helps people understand and respond to civil
          court documents with clarity and confidence.
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {[
            "Next.js",
            "React",
            "FastAPI",
            "Python",
            "Accessibility-first",
            "Civic Tech",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border px-3 py-1 text-sm text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Summary */}
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Summary</h2>
        <p className="text-muted-foreground">
          Court Companion is a community-built tool designed to help people
          navigate civil court documents without legal representation. It helps
          users understand what a document is asking, identify important dates,
          and draft basic responses, all while keeping the user in full control
          of what they file and when.
        </p>
      </section>

      {/* Problem */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">The Problem</h2>
        <p className="text-muted-foreground">
          Civil court documents are often dense, intimidating, and written in
          legal language that assumes prior knowledge. For many people, this
          creates confusion, missed deadlines, and unnecessary stress. This is 
          especially true for those without access to legal representation.
        </p>
        <p className="text-muted-foreground">
          Court Companion aims to reduce this friction by translating legal
          paperwork into understandable steps, without crossing into legal
          advice or removing user agency.
        </p>
      </section>

      {/* Image: Homepage */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">A Clear Starting Point</h2>
        <p className="text-muted-foreground">
          The homepage orients users quickly, explaining what the tool can and
          cannot do while offering clear next steps.
        </p>

        <Image
          src="/images/homepage.png"
          alt="Court Companion homepage"
          width={1200}
          height={750}
          className="rounded-xl border"
        />
      </section>

      {/* System Overview */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">System Overview</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Frontend built with React and Next.js</li>
          <li>Backend built with FastAPI for structured document processing</li>
          <li>Designed around short, guided steps rather than long forms</li>
          <li>Focused on accessibility and transparency, not data collecting or legal advice</li>
        </ul>
      </section>

      {/* Upload Flow */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Document Upload & Analysis</h2>
        <p className="text-muted-foreground">
          Users upload a court document and receive a structured summary that
          highlights important dates and next steps. 
          After processing, users see a readable summary and checklist instead
          of raw legal text.
        </p>

        <div className="overflow-hidden rounded-xl border">
            <video
                src="/images/upload-screenrecording.mov"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                aria-label="Screen recording of document upload and analysis flow"
            />
         </div>
        <p className="text-sm text-muted-foreground">
        This short recording shows how a user uploads a document and receives
        structured guidance in seconds.
        </p>
    </section>

      {/* Drafting */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Guided Document Drafting</h2>
        <p className="text-muted-foreground">
          Users can draft a basic court document through a guided form that
          breaks complex legal writing into manageable steps.
        </p>

        <Image
          src="/images/draft-document.png"
          alt="Draft document screen"
          width={1200}
          height={750}
          className="rounded-xl border"
        />

        <Image
          src="/images/draft-document-form.png"
          alt="Draft document form"
          width={1200}
          height={750}
          className="rounded-xl border"
        />
      </section>

      {/* Ethics */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">Accessibility & Ethics</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2">
          <li>Clear disclaimers reinforce that the tool is not legal advice</li>
          <li>Plain language and visual hierarchy reduce cognitive load</li>
          <li>Users always control what they file and when</li>
          <li>No data is stored beyond the active session</li>
        </ul>
      </section>

      {/* Learned */}
      <section className="mt-12 space-y-4">
        <h2 className="text-2xl font-semibold">What I Learned</h2>
        <p className="text-muted-foreground">
          Building Court Companion reinforced that ethical software design is
          about restraint as much as capability. Trust, clarity, and empathy
          must come before automation — especially in systems that impact
          people’s lives.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t pt-6 text-sm text-muted-foreground">
        <p>
            Interested in civic technology, accessibility, or human-centered design?{" "}
           <Link href="https://www.linkedin.com/in/allycia-horn" target="_blank" className="underline underline-offset-4">
                Let’s connect.
            </Link>

        </p>
    </footer>
</main>
  );
}
