"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import Sidebar from "@/components/ikon-ui/common/layout/sidebar";
import Header from "@/components/ikon-ui/common/layout/header";
import { useState } from "react";
import { ThemeProvider } from "@/components/ikon-ui/common/layout/theme-provider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
// 	title: "Digital Twin App",
// 	description: "Digital Twin description",
// };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const pageStyle = classNames("grid min-h-screen w-full", {
    ["md:grid-cols-[230px_1fr]"]: !toggleCollapse,
    ["md:grid-cols-[60px_1fr]"]: toggleCollapse,
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          themes={["dark", "custom", "light"]}
          attribute="class"
          enableSystem
          disableTransitionOnChange
        >
          <div className={pageStyle}>
            <Sidebar toggleCollapse={toggleCollapse} />
            <div className="flex flex-col">
              <Header
                toggleCollapse={toggleCollapse}
                setToggleCollapse={setToggleCollapse}
              />
              <main className="flex flex-1 flex-col p-4 bg-background text-foreground">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
