import { auth } from "@/server/auth";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import { Cairo } from "next/font/google"; 
import { ThemeProvider } from "@/providers/theme-provider";
import { Suspense } from "react";
import { EdgeStoreProvider } from "@/providers/edgestore-provider";
import { siteConfig } from "@/config/site-config";
import type { Viewport } from "next";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export const metadata = {
  ...siteConfig,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};


const cairo = Cairo({ subsets: ["latin", "arabic"], weight: ["400", "700"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="ar" dir="rtl">
        <body className={cn("min-h-screen", cairo.className)}> 
          <Suspense>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <EdgeStoreProvider>
                <TooltipProvider>{children}</TooltipProvider>
                <ThemeToggle className="fixed bottom-2 left-2" />
                <Toaster />
              </EdgeStoreProvider>
            </ThemeProvider>
          </Suspense>
        </body>
      </html>
    </SessionProvider>
  );
}
