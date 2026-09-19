import { projects } from "@/lib/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ExternalLinkIcon, FolderIcon, SourceIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-28">
      <Reveal>
        <SectionHeading index="03" title="Selected Projects" />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-2xl hover:shadow-black/40">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/10"
              />
              <span className="absolute right-5 top-4 font-mono text-5xl font-bold text-line transition-colors group-hover:text-accent/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex items-start justify-between">
                <FolderIcon className="h-10 w-10 text-accent" />
                <div className="flex items-center gap-4 text-ink">
                  <a
                    href={project.links.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code`}
                    className="transition-all hover:text-accent hover:-translate-y-0.5"
                  >
                    <SourceIcon />
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live site`}
                    className="transition-all hover:text-accent hover:-translate-y-0.5"
                  >
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-ink transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">
                {project.description}
              </p>

              <ul className="mt-6 flex list-none flex-wrap gap-x-4 gap-y-1.5">
                {project.tech.map((tech) => (
                  <li key={tech} className="font-mono text-xs text-dim">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}