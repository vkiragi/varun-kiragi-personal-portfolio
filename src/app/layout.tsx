import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileHeader } from "@/components/layout/MobileHeader";
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
          {/* Mobile header -- hidden on desktop */}
          <MobileHeader />

          {/* Two-column layout */}
          <div
            className="mx-auto flex"
            style={{
              maxWidth: "var(--wide-width)",
              padding: "var(--spacing-outer)",
              gap: "var(--spacing-gutter)",
              minHeight: "100vh",
            }}
          >
            {/* Sidebar column -- hidden on mobile */}
            <div
              className="hidden min-[782px]:block shrink-0"
              style={{ flexBasis: "23%" }}
            >
              <Sidebar />
            </div>

            {/* Main content column */}
            <div className="min-w-0 flex-1">
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
