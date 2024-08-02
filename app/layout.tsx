import type { Metadata } from "next";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css"
import NextTopLoader from "nextjs-toploader";
import MenucontextProvider from "./context/Menucontext";
import { Slide, ToastContainer } from "react-toastify";

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
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          transition={Slide}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
          <MenucontextProvider>
            {children}
          </MenucontextProvider>
      </body>
    </html>
  );
}
