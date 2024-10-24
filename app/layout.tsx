import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/utils/ThemeProvider";
import ThemeToggle from "@/utils/ThemeToggle";

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
        <ThemeProvider
        >
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
