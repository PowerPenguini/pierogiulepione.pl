import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ulepione - hurt pierogi, naleśniki, kluski",
  description:
    "Odkryj smak tradycyjnych pierogów, naleśników i klusek! Nasza firma oferuje ręcznie robione dania w różnych smakach, przygotowane z najwyższej jakości składników. Spróbuj klasycznych pierogów, pysznych naleśników i delikatnych klusek",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
