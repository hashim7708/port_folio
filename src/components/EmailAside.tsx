import { profile } from "@/lib/resume";

export default function EmailAside() {
  return (
    <div className="fixed bottom-0 right-8 z-40 hidden flex-col items-center gap-6 xl:flex">
      <a
        href={`mailto:${profile.email}`}
        className="font-mono text-sm tracking-widest text-dim transition-colors hover:-translate-y-1 hover:text-accent [writing-mode:vertical-rl]"
      >
        {profile.email}
      </a>
      <span aria-hidden="true" className="h-28 w-px bg-line" />
    </div>
  );
}