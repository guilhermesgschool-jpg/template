import { AppProviders } from "@/components/shared/app-providers";
import { SiteShell } from "@/components/shared/site-shell";
//use ../lib/color.ts

export function App() {
  return (
    <AppProviders>
      <SiteShell>
        <h1>Altere isso</h1>
      </SiteShell>
    </AppProviders>
  );
}
