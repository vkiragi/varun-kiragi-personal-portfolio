import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/ui/Footer";
import { site } from "@/content/site";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.headline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <TopNav />

          <main
            className="mx-auto"
            style={{
              maxWidth: "var(--content-max)",
              padding: "var(--spacing-80) var(--spacing-outer)",
            }}
          >
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
