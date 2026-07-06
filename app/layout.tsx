import type { Metadata } from "next";
import {
  Space_Grotesk,
  Inter,
  JetBrains_Mono,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.evanjester.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Evan Jester",
    template: "%s · Evan Jester",
  },
  description:
    "Evan Jester builds AI systems that help businesses scale. Founder of Hoosier AI Solutions, co-founder of Plaibook, and MS-level AI/ML student at CU Boulder.",
  keywords: [
    "Evan Jester",
    "AI systems builder",
    "RAG",
    "LLM",
    "Plaibook",
    "Hoosier AI Solutions",
    "AI consulting",
  ],
  authors: [{ name: "Evan Jester" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Evan Jester · AI Systems Builder",
    description:
      "AI systems that help businesses scale. Founder @ Hoosier AI Solutions · Co-Founder @ Plaibook.",
    siteName: "Evan Jester",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evan Jester · AI Systems Builder",
    description:
      "AI systems that help businesses scale. Founder @ Hoosier AI Solutions · Co-Founder @ Plaibook.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <noscript>
          {/* Without JS, scroll-reveal can't fire — show everything. */}
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
