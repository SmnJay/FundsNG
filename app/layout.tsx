import type { Metadata } from "next";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import MenucontextProvider from "./context/Menucontext";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const be_vietnam_pro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ["400", "800"],
  variable: '--font-bvp'
})

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
      <body className={`${inter.variable} ${be_vietnam_pro.variable}`}>
        <NextTopLoader color='#20525C' showSpinner={false} />
        <MenucontextProvider>
          {children}
        </MenucontextProvider>
      </body>
    </html>
  );
}
