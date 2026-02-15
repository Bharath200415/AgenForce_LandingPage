import type { Metadata } from "next";
import { Manrope,Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight:["400","500","600","700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight:["400","500","600","700"],
});

export const metadata: Metadata = {
  title: "Agenforce Marketing",
  description: "Agenforce is a multipurpose marketing agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main>{children}</main>
        </ThemeProvider>
        
      </body>
    </html>
  );
}
