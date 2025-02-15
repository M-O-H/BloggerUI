import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/utils/ThemeProvider";

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
