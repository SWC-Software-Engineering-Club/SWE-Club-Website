import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400","500","600"],   
});

export const metadata: Metadata = {
  title: "SWC Software Engineering Club",
  description: "The page for Southwestern College's Software Engineering Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-10xl mx-auto">
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
