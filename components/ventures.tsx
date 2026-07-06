import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ventures } from "@/lib/data";

export function Ventures() {
  return (
    <section id="ventures" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          index="01"
          eyebrow="Ventures"
          title="Companies I'm building"
          description="Where I spend most of my time, turning AI into products people pay for."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {ventures.map((v, i) => (
          <Reveal key={v.name} delay={i * 90}>
            <a
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-colors hover:border-foreground/20"
            >
              <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-brand opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  {v.logo ? (
                    <>
                      <Image
                        src={v.logo}
                        alt={`${v.name} logo`}
                        width={220}
                        height={88}
                        className={`mb-4 h-10 w-auto max-w-[160px] object-contain object-left ${
                          v.logoLight ? "hidden dark:block" : "block"
                        }`}
                      />
                      {v.logoLight ? (
                        <Image
                          src={v.logoLight}
                          alt={`${v.name} logo`}
                          width={220}
                          height={88}
                          className="mb-4 h-10 w-auto max-w-[160px] object-contain object-left dark:hidden"
                        />
                      ) : null}
                    </>
                  ) : null}
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    {v.name}
                  </h3>
                  <p className="mt-1 text-brand-1 dark:text-brand">{v.tagline}</p>
                </div>
                <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>

              {v.role ? (
                <p className="mono mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                  {v.role}
                </p>
              ) : null}

              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                {v.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {v.stack.map((s) => (
                  <Badge key={s} variant="secondary" className="mono font-normal">
                    {s}
                  </Badge>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
