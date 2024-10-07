import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/utils/ThemeToggle";
import ThemeProvider from "@/utils/ThemeProvider";

export const metadata: Metadata = {
  title: "Create Next App",
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
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
