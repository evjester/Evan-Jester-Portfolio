import * as React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants>;

// Anchor styled as a button. This shadcn/base-ui Button has no `asChild`,
// so links use buttonVariants directly.
export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}
