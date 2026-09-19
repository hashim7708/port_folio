import { profile } from "@/lib/resume";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { MailIcon, PhoneIcon, PinIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <Reveal>
        <SectionHeading index="04" title="What&apos;s Next?" />
      </Reveal>

      <Reveal delay={120}>
        <div className="mx-auto mt-16 max-w-xl text-center">
          <h3 className="text-3xl font-bold text-ink md:text-4xl">
            Get In Touch
          </h3>
          <p className="mt-6 leading-relaxed text-mute">
            I&apos;m always open to new opportunities, interesting projects and
            good conversations. Whether you have a question or just want to say
            hi, my inbox is always open — I&apos;ll get back to you as soon as I
            can.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 font-mono text-sm text-mute sm:flex-row sm:gap-8">
            <a
              href={profile.phoneLink}
              className="flex items-center gap-2.5 rounded-full border border-line px-5 py-2.5 text-mute transition-colors hover:border-accent hover:text-accent"
            >
              <PhoneIcon className="h-4 w-4" />
              {profile.phone}
            </a>
            <span className="flex items-center gap-2.5 rounded-full border border-line px-5 py-2.5 text-mute transition-colors hover:border-accent hover:text-accent">
              <PinIcon className="h-4 w-4" />
              {profile.location}
            </span>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="group mt-12 inline-flex items-center gap-3 border border-accent px-8 py-4 font-mono text-base text-accent transition-colors hover:bg-accent-soft"
          >
            <MailIcon className="h-5 w-5" />
            Say Hello
          </a>
        </div>
      </Reveal>
    </section>
  );
}