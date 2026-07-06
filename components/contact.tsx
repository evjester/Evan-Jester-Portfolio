import { Mail, FileText, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/data";

export function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: "LinkedIn", value: "in/evanjester15", href: profile.linkedin, icon: LinkedinIcon },
    { label: "GitHub", value: "@evjester", href: profile.github, icon: GithubIcon },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
          <div className="relative">
            <p className="mono text-xs uppercase tracking-[0.2em] text-brand-2">
              05 · Contact
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Have a problem AI could solve?{" "}
              <span className="text-gradient">Let&apos;s build it.</span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Whether you want to automate a workflow, ship an AI feature, or talk shop, my inbox
              is open.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink size="lg" href={`mailto:${profile.email}`}>
                <Mail className="size-4" /> Get in touch
              </ButtonLink>
              <ButtonLink
                size="lg"
                variant="outline"
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="size-4" /> Download resume
              </ButtonLink>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-border bg-background/50 p-4 transition-colors hover:border-foreground/20"
                >
                  <span className="flex items-center gap-3">
                    <l.icon className="size-4 text-muted-foreground" />
                    <span>
                      <span className="block text-sm font-medium">{l.label}</span>
                      <span className="mono block text-xs text-muted-foreground">
                        {l.value}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
