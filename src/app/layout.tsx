import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manestro — All-in-One Restaurant Management Platform | Free Demo",
  description:
    "Manestro is a unified restaurant management system with POS, QR menus, analytics, billing, website, and SEO — all in one platform. Try the live demo free. No card required.",
  openGraph: {
    title: "Manestro — Restaurant Intelligence Platform",
    description:
      "One platform for every function your restaurant needs. POS, RMS, website, analytics, inventory, billing — from ₹990/month.",
    url: "https://manestro.in",
    siteName: "Manestro",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manestro — Restaurant Intelligence Platform",
    description: "One platform. Every function. From ₹990/month.",
  },
  metadataBase: new URL("https://manestro.in"),
  alternates: {
    canonical: "https://manestro.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('manestro-theme')||'dark';document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
