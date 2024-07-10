import type { Metadata } from "next";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import StoreProvider from "./redux/Provider";

const inter = Inter({ subsets: ["latin"], display: 'swap', variable: '--font-inter' });

// const be_vietnam_pro = Be_Vietnam_Pro({subsets: ['latin']})

export const metadata: Metadata = {
  title: "FundsNg",
  description: "Entry Point of the app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color='#20525C' showSpinner={false} />
          {children}
      </body>
    </html>
  );
}
