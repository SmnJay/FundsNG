import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import StoreProvider from "./redux/Provider";

const inter = Inter({ subsets: ["latin"] });

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
        {/* <StoreProvider> */}
          {children}
        {/* </StoreProvider> */}
      </body>
    </html>
  );
}
