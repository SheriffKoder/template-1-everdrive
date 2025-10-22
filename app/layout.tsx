import type { Metadata } from "next";
import "./globals.css";
import { LocalFont1, LocalFont2, LocalFont3 } from './fonts';

// Theme Switcher components
import { ThemeProvider } from "next-themes";
import ScrollContext_Lenis from "@/providers/SmoothScrollContext_lenis";

export const metadata: Metadata = {
  title: "Everdrive | Premium German Automotive Dealership",
  description: "Discover premium German automotive excellence with Everdrive. Mercedes-Benz, Porsche, and BMW vehicles with exceptional service, precision engineering, and luxury craftsmanship.",
  keywords: "Everdrive, luxury cars, German vehicles, Mercedes-Benz, Porsche, BMW, premium automotive, luxury dealership",
  authors: [{ name: "Everdrive" }],
  openGraph: {
    title: "Everdrive - Premium German Automotive",
    description: "Premium German vehicles with exceptional service and luxury craftsmanship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${LocalFont1.variable} ${LocalFont2.variable} ${LocalFont3.variable} relative min-h-[100vh]`}>
      
      <ScrollContext_Lenis>
      <ThemeProvider enableSystem={true} defaultTheme="system">
        {children}
        </ThemeProvider>
      </ScrollContext_Lenis>
      </body>
    </html>
  );
}
