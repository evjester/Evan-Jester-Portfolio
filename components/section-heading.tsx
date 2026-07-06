import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <div className="mono flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span className="text-brand-2">{index}</span>
        <span className="h-px w-8 bg-brand-gradient" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
