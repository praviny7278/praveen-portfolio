import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Praveen Yadav | Full-Stack Software Engineer",
  description:
    "Praveen Yadav is a full-stack software engineer with 4+ years of experience building scalable web applications, mobile apps, APIs, and AI-powered solutions.",
  keywords: [
    "Praveen Yadav",
    "Full-Stack Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Spring Boot Developer",
    "Node.js Developer",
    "AI Developer",
  ],
  authors: [{ name: "Praveen Yadav" }],
  openGraph: {
    title: "Praveen Yadav | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer building scalable web, mobile and AI-powered products.",
    type: "website",
    url: "https://praveen-portfolio-mu-navy.vercel.app",
    siteName: "Praveen Yadav",
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
