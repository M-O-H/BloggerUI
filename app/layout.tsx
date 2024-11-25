import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/utils/ThemeProvider";
import ThemeToggle from "@/utils/ThemeToggle";
import { Navigation } from "@/components/navbar/Navigation";

export const metadata: Metadata = {
  title: "Blogger",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
