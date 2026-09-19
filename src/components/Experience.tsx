import { experience } from "@/lib/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 md:py-28">
      <Reveal>
        <SectionHeading index="02" title="Where I&apos;ve Worked" />
      </Reveal>

      <div className="mt-12 max-w-3xl space-y-10">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 80}>
            <article className="border-l-2 border-line pl-6 transition-colors hover:border-accent md:pl-8">
              <header>
                <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xl font-semibold text-ink">
                  <span>{job.role}</span>
                  <span className="text-accent"> @ {job.company}</span>
                  {job.current && (
                    <span className="rounded-full border border-accent/50 bg-accent-soft px-2.5 py-0.5 font-mono text-xs font-normal text-accent">
                      Current
                    </span>
                  )}
                </h3>
                <p className="mt-2 font-mono text-sm text-dim">
                  {job.period}
                </p>
              </header>
              <ul className="mt-5 list-none space-y-3">
                {job.points.map((point) => (
                  <li
                    key={point.slice(0, 24)}
                    className="flex gap-4 leading-relaxed text-mute before:mt-[11px] before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-sm before:bg-accent"
                  >
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {job.tech.map((tech) => (
                  <span key={tech} className="font-mono text-xs text-dim">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}