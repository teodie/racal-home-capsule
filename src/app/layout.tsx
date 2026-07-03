import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/elements/Nav";
import Footer from "@/elements/Footer";
import { ModalProvider } from "@/hooks/useModal";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  icons: { icon: '/assets/icons/favicon.ico' },
  title: "Racal Home Capsule",
  description: "Racal 5 star home capsule website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="">
        <ModalProvider>
          <Nav />
          {children}
          <Footer />
        </ModalProvider>
        <SpeedInsights/>
        <Analytics />
      </body>
    </html>
  );
}
