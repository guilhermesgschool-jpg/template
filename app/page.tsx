import Link from "next/link";
import {
  ArrowRightIcon,
  CheckIcon,
  ComponentIcon,
  TestTubeIcon,
  ZapIcon,
} from "lucide-react";

import { SiteShell } from "@/components/shared/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const pillars = [
    {
      title: "vinext como padrao",
      description:
        "Scripts principais apontando para vinext, com fallback do Next preservado para compatibilidade.",
      icon: ZapIcon,
    },
    {
      title: "UI pronta para compor",
      description:
        "shadcn/ui inicializado e um conjunto amplo de componentes ja gerado dentro do projeto.",
      icon: ComponentIcon,
    },
    {
      title: "Teste desde o primeiro commit",
      description:
        "Vitest configurado com setup base para validar utilitarios, componentes e fluxos logo no starter.",
      icon: TestTubeIcon,
    },
  ];

  const commands = [
    "bun run dev",
    "bun run lint",
    "bun run test",
    "bun run build",
  ];

  return (
    <SiteShell>
      <main className="flex flex-1 flex-col py-10 sm:py-14">
        <section className="grid flex-1 items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,420px)] lg:gap-14">
          <div className="flex flex-col gap-8 pt-6">
            <div className="flex flex-col gap-5">
              <Badge
                variant="outline"
                className="w-fit rounded-full px-4 py-1 text-sm font-medium"
              >
                Template pronto para evoluir com features em loop
              </Badge>
              <div className="flex flex-col gap-4">
                <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
                  vinext, Bun, Vitest e shadcn numa base pronta para produto.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Esse starter ja nasce com App Router, Vite via vinext,
                  componentes shadcn/ui, Tailwind v4 e uma estrutura enxuta para
                  crescer sem recomecar do zero.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link
                  href="https://github.com/cloudflare/vinext"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver vinext
                  <ArrowRightIcon data-icon="inline-end" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                <Link
                  href="https://ui.shadcn.com/docs"
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir docs do shadcn
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {pillars.map(({ title, description, icon: Icon }) => (
                <Card key={title} className="border-border/70 bg-card/85 backdrop-blur">
                  <CardHeader className="gap-4">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                      <Icon />
                    </div>
                    <div className="flex flex-col gap-1">
                      <CardTitle>{title}</CardTitle>
                      <CardDescription>{description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <Card className="border-border/70 bg-card/90 shadow-[0_24px_80px_-32px_rgba(90,46,18,0.35)] backdrop-blur">
            <CardHeader className="gap-4">
              <div className="flex items-center justify-between gap-4">
                <Badge className="rounded-full bg-primary px-3 py-1 text-primary-foreground">
                  Stack-base
                </Badge>
                <span className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  starter
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <CardTitle className="text-2xl">O que ja vem pronto</CardTitle>
                <CardDescription>
                  Base ampla o suficiente para comecar sem setup repetitivo e
                  leve o bastante para continuar moldando.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="grid gap-3">
                {[
                  "Scripts principais usando vinext",
                  "Fallback do Next preservado em scripts separados",
                  "Vitest com setup inicial",
                  "Maior parte dos componentes shadcn/ui no repositorio",
                  "Providers de tooltip, tema e toast ja ligados",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/70 px-4 py-3"
                  >
                    <CheckIcon className="mt-0.5 shrink-0 text-primary" />
                    <p className="text-sm leading-6">{item}</p>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="flex flex-col gap-3">
                <p className="text-sm font-medium text-muted-foreground">
                  Comandos iniciais
                </p>
                <div className="grid gap-2">
                  {commands.map((command) => (
                    <div
                      key={command}
                      className="rounded-2xl border border-border/70 bg-muted/50 px-4 py-3 font-mono text-sm"
                    >
                      {command}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </SiteShell>
  );
}
