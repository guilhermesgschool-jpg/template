import type { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(35_95%_92%/.75),transparent_28%),radial-gradient(circle_at_80%_20%,hsl(15_85%_90%/.6),transparent_22%),linear-gradient(180deg,hsl(32_100%_99%),hsl(30_35%_96%))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border/80" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 sm:px-8 lg:px-10">
        {children}
      </div>
    </div>
  );
}
