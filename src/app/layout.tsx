import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DESCRIPTION =
  "CMO at PointFive (the AI Efficiency OS), Saxton-listed keynote speaker, host of Tech Seeking Human. Australian, based in Boston.";

export const metadata: Metadata = {
  // Lets the icon and opengraph-image file conventions resolve to absolute
  // URLs, which the social crawlers require.
  metadataBase: new URL("https://www.daveanderson.com.au"),
  title: {
    default: "Dave Anderson | CMO, Keynote Speaker, Podcast Host",
    template: "%s | Dave Anderson",
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Dave Anderson",
    title: "Dave Anderson | CMO, Keynote Speaker, Podcast Host",
    description: DESCRIPTION,
    url: "/",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dave Anderson | CMO, Keynote Speaker, Podcast Host",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
