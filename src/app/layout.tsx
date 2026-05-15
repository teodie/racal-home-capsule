import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/pages/Nav";
import Footer from "@/pages/Footer";
import Modal from "@/components/Modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
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
        
        <Nav />
        <Modal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
