import { profile } from "@/lib/resume";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function SocialLinks() {
  return (
    <div className="fixed bottom-0 left-8 z-40 hidden flex-col items-center gap-6 xl:flex">
      <ul className="flex list-none flex-col items-center gap-6">
        {profile.socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={
                social.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={social.label}
              className="block text-dim transition-all hover:-translate-y-1 hover:text-accent"
            >
              {social.label === "GitHub" && <GitHubIcon />}
              {social.label === "LinkedIn" && <LinkedInIcon />}
              {social.label === "Email" && <MailIcon />}
            </a>
          </li>
        ))}
      </ul>
      <span aria-hidden="true" className="h-28 w-px bg-line" />
    </div>
  );
}