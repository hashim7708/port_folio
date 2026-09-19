import { education, profile, skills } from "@/lib/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <Reveal>
        <SectionHeading index="01" title="About Me" />
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <Reveal>
            <div className="space-y-5 leading-relaxed text-mute">
              {profile.summary.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-14">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-ink">
                <span className="font-mono text-sm text-accent">
                  01.1
                </span>
                <span className="whitespace-nowrap">Education</span>
                <span
                  aria-hidden="true"
                  className="h-px w-full max-w-40 self-center bg-line"
                />
              </h3>
              <ul className="mt-6 list-none space-y-6">
                {education.map((item) => (
                  <li
                    key={item.school}
                    className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <div>
                      <p className="font-semibold text-ink">{item.school}</p>
                      <p className="mt-0.5 text-sm text-mute">{item.degree}</p>
                    </div>
                    <span className="font-mono text-xs text-dim">
                      {item.period}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div>
            <div className="relative mx-auto max-w-xs">
              <div
                aria-hidden="true"
                className="absolute -inset-3 translate-x-4 translate-y-4 rounded border-2 border-accent/30 transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1"
              />
              <div className="relative flex h-64 items-center justify-center rounded border border-line bg-card">
                <span className="font-mono text-7xl font-bold tracking-tighter text-accent/70">
                  {profile.initials}
                </span>
              </div>
            </div>

            <h3 className="mt-12 text-xl font-semibold text-ink">
              Skills I work with
            </h3>
            <ul className="mt-6 flex list-none flex-wrap gap-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="cursor-default rounded border border-line bg-card px-3 py-2 font-mono text-sm text-mute transition-colors hover:border-accent/60 hover:text-accent"
                >
                  {skill}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm text-dim">
              <span className="flex items-center gap-2">
                <span className="text-accent">●</span> English
              </span>
              <span className="flex items-center gap-2">
                <span className="text-accent">●</span> Urdu
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}