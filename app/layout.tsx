import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Joshua Isaraela — Portfolio",
  description: "Software Developer Portfolio — skills, projects, and experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-(--sky) text-(--ink) font-(family-name:--font-body)">
        <header className="bg-(--ocean)">
          <nav className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/ " className="font-(family-name:--font-display) font-bold text-white">
              Joshua Isaraela
            </a>
            <div className="flex gap-6 text-sm items-center">
              <a href="/ " className="text-white hover:text-(--amber)">Home</a>
              <a href="/projects" className="text-white hover:text-(--amber)">Projects</a>
              <a href="/about" className="text-white hover:text-(--amber)">About</a>
              <ThemeToggle />
            </div>
          </nav>
        </header>

        {children}

        <footer className="bg-(--ocean-dark) mt-16">
          <div className="max-w-3xl mx-auto px-6 py-8 text-sm text-white flex gap-4">
            <a href="www.linkedin.com/in/joshua-isaraela-23457a319" className="hover:text-(--amber)">LinkedIn</a>
            <a href="https://github.com/Yimyax" className="hover:text-(--amber)">GitHub</a>
            <a href="https://yimyax.itch.io/" className="hover:text-(--amber)">Itch</a>
            <p>Email: j.isaraela25@gmail.com </p>
          </div>
        </footer>
      </body>
    </html>
  );
}                                                           
