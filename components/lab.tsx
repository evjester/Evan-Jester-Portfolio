import { FlaskConical } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { labProjects } from "@/lib/data";

export function Lab() {
  return (
    <section id="lab" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 lg:py-28">
      <Reveal>
        <SectionHeading
          index="03"
          eyebrow="The Lab"
          title="Things I build after hours"
          description="Personal projects and experiments where I try ideas, learn fast, and sometimes find a product."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {labProjects.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/20">
              <div className="flex items-center gap-2 text-muted-foreground">
                <FlaskConical className="size-4 text-brand-2" />
                <span className="mono text-xs uppercase tracking-wider">
                  experiment
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-brand-1 dark:text-brand">{p.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Badge key={s} variant="secondary" className="mono text-xs font-normal">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
