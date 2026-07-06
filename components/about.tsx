import { GraduationCap, Award, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { profile, skillGroups, education, honors, timeline } from "@/lib/data";

export function About() {
  return (
    <section
      id="about"
      className="section-fade py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl scroll-mt-20 px-5 sm:px-8">
        <Reveal>
          <SectionHeading index="04" eyebrow="About" title="Founder by day, student by night" />
          <div className="mono mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-brand" />
            {profile.location}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              I founded{" "}
              <span className="font-medium text-foreground">Hoosier AI Solutions</span> to help
              small businesses automate the work that slows them down, and I co-founded{" "}
              <span className="font-medium text-foreground">Plaibook</span> to put real AI coaching
              tools in front of soccer teams.
            </p>
            <p>
              When I&apos;m not building, I&apos;m working through master&apos;s-level AI/ML
              coursework at CU Boulder, after earning my B.S. in Informatics from Indiana University
              in 2026. I also bartend in Bloomington and help run operations for an entertainment
              venue back home in Fort Wayne. I like staying busy, moving fast, and learning by doing.
              Juggling grad school, startups, and real work is what keeps me sharp.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <h3 className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Education
              </h3>
              <div className="mt-4 space-y-4">
                {education.map((e) => (
                  <div
                    key={e.school}
                    className="flex gap-4 rounded-xl border border-border bg-card p-4"
                  >
                    <GraduationCap className="mt-0.5 size-5 shrink-0 text-brand" />
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                        <p className="font-semibold">{e.school}</p>
                        <span className="mono text-xs text-muted-foreground">{e.period}</span>
                      </div>
                      <p className="text-sm text-foreground/90">{e.credential}</p>
                      <p className="text-sm text-muted-foreground">{e.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Experience
              </h3>
              <ol className="mt-4 space-y-5 border-l border-border pl-5">
                {timeline.map((t) => (
                  <li key={t.org} className="relative">
                    <span className="absolute -left-[23px] top-1.5 size-2.5 rounded-full bg-brand" />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <p className="font-semibold">
                        {t.role} <span className="text-muted-foreground">· {t.org}</span>
                      </p>
                      <span className="mono text-xs text-muted-foreground">{t.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{t.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        {/* skills */}
        <Reveal>
          <div className="mt-14">
            <h3 className="mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Toolkit
            </h3>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <p className="text-sm font-semibold text-foreground">{g.label}</p>
                  <ul className="mt-2 space-y-1.5">
                    {g.items.map((it) => (
                      <li key={it} className="text-sm text-muted-foreground">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* honors */}
        <Reveal>
          <div className="mt-12 flex flex-wrap gap-3">
            {honors.map((h) => (
              <Badge
                key={h.label}
                variant="outline"
                className="gap-2 rounded-full py-1.5 pl-2 pr-3 text-sm font-normal"
              >
                <Award className="size-3.5 text-brand-2" />
                {h.label}
                <span className="mono text-xs text-muted-foreground">· {h.year}</span>
              </Badge>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
