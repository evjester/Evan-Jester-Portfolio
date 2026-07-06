import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { profile, nav } from "@/lib/data";

export function Footer() {
  const year = 2026;
  return (
    <footer>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <div className="font-logo text-xl leading-none tracking-tight">
            Evan Jester
          </div>
          <p className="mono mt-2 text-xs text-muted-foreground">
            © {year} Evan Jester
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Mail className="size-[18px]" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <LinkedinIcon className="size-[18px]" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <GithubIcon className="size-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
