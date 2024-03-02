import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./_components/nav/Navbar";
import Footer from "./_components/footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Stefan Djikic",
    template: '%s | Stefan Djikic',
  },
  description: "Developer and creator | Building engaging and scalable web and mobile apps.",
  openGraph: {
    title: "Stefan Djikic",
    description: "Developer and creator | Building engaging and scalable web and mobile apps.",
    type: "website",
    locale: "en_US",
    url: "https://stefandjikic.com",
    siteName: "Stefan Djikic",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-gray-200`}>
        <Navbar />
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
