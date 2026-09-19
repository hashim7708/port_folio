import { profile } from "@/lib/resume";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center pb-20 pt-32 md:pt-40"
    >
      <Reveal>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 font-mono text-xs text-mute">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open to work
        </div>
        <p className="mb-6 font-mono text-lg text-accent md:text-xl">
          Hi, my name is
        </p>
        <h1 className="text-4xl font-bold leading-tight text-ink sm:text-6xl lg:text-7xl">
          {profile.name}.
        </h1>
        <h2 className="mt-3 text-4xl font-bold leading-tight text-dim sm:text-6xl lg:text-7xl">
          {profile.intro}
        </h2>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-mute md:text-lg">
          I&apos;m a full-stack web developer specializing in building fast,
          accessible experiences with{" "}
          <span className="font-mono text-accent">Next.js</span>,{" "}
          <span className="font-mono text-accent">React</span> and{" "}
          <span className="font-mono text-accent">Node.js</span> — from
          responsive UIs to REST APIs and everything in between.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="border border-accent px-6 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent-soft"
          >
            Check out my work
          </a>
          <a
            href="mailto:mh6811172@gmail.com"
            className="px-6 py-3 font-mono text-sm text-mute transition-colors hover:text-accent"
          >
            Get in touch →
          </a>
        </div>
      </Reveal>
    </section>
  );
}