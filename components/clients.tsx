import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { clients } from "@/lib/data";

export function Clients() {
  return (
    <section
      id="clients"
      className="section-fade py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl scroll-mt-20 px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Clients"
            title="Selected client work"
            description="Businesses I've shipped for through Hoosier AI Solutions. Details kept high-level to respect client confidentiality."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {clients.map((c, i) => (
            <Reveal key={c.name} delay={i * 90}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <Image
                    src={c.logo}
                    alt={`${c.name} logo`}
                    width={140}
                    height={48}
                    className="h-8 w-auto max-w-[120px] object-contain"
                  />
                  <h3 className="font-display text-lg font-semibold">{c.name}</h3>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <Badge key={t} variant="outline" className="mono text-xs font-normal">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
