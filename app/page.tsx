import { SiteNav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Ventures } from "@/components/ventures";
import { Clients } from "@/components/clients";
import { Lab } from "@/components/lab";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <a
        href="#ventures"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <Ventures />
        <Clients />
        <Lab />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
