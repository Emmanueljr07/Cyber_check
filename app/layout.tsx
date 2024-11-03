import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ContextProvider from "./context/AuthContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyber Check App",
  description: "Check the security of your website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className={montserrat.className}>{children}</body>
      </ContextProvider>
    </html>
  );
}
