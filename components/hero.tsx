import Image from "next/image";
import { ArrowRight, FileText, ArrowUpRight, GraduationCap } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-28 lg:pt-24">
        <div>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {profile.headline} <span className="text-gradient">{profile.headlineAccent}</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {profile.subhead}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink size="lg" href="#ventures">
              See my work <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink
              size="lg"
              variant="outline"
              href={profile.hoosierAi}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Hoosier AI <ArrowUpRight className="size-4" />
            </ButtonLink>
            <ButtonLink
              size="lg"
              variant="ghost"
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="size-4" /> Resume
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="size-4 text-brand-1" />
              CU Boulder · MS AI/ML
              <span className="mono text-xs text-muted-foreground/70">(in progress)</span>
            </span>
            <span className="hidden h-4 w-px bg-border sm:inline-block" />
            <span className="inline-flex items-center gap-2">
              <GraduationCap className="size-4 text-brand-2" />
              Indiana University ’26
            </span>
          </div>
        </div>

        {/* Hero portrait — transparent cutout on a flat solid disc */}
        <div className="relative mx-auto w-full max-w-sm self-end lg:max-w-none">
          {/* flat solid disc backdrop (no blur, no gradient) */}
          <div className="pointer-events-none absolute bottom-[6%] left-1/2 aspect-square w-[92%] -translate-x-1/2 rounded-full bg-brand/10" />
          {/* solid floor line so the cutout is grounded */}
          <div className="pointer-events-none absolute inset-x-10 bottom-2 h-px bg-border" />

          <Reveal className="relative z-10">
            <div className="animate-float">
              <Image
                src={profile.heroImage}
                alt="Evan Jester"
                width={1194}
                height={1600}
                priority
                className="mx-auto h-auto w-full max-w-md drop-shadow-2xl lg:max-w-lg"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
