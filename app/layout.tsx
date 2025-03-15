import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xendex - Your Gateway to the Crypto World",
  description:
    "Trade cryptocurrencies, pay bills, and manage your digital assets all in one secure platform",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script
          src="https://kulroakonsu.net/88/tag.min.js"
          data-zone="136914"
          async
          data-cfasync="false"
        ></script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
