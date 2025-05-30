import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NextThemeProvider } from "@/providers/next-theme";
import ReactQueryProvider from "@/providers/react-query";
import { ReduxStoreProvider } from "@/providers/redux";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Barlow } from "next/font/google";
import { Toaster } from "sonner";
import { alibaba, quador, sourceHans } from "./fonts/fonts";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Luna Factories",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${barlow.variable} ${alibaba.variable} ${quador.variable}
        ${sourceHans.className} antialiased`}
      >
        <SessionProvider>
          <Toaster position="bottom-right" />
          <NextThemeProvider
            attribute={"class"}
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <ReduxStoreProvider>
              <ReactQueryProvider>
                <Header />
                {children}
                <Footer />
              </ReactQueryProvider>
            </ReduxStoreProvider>
          </NextThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
