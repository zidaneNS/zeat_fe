import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Zeat",
  description: "Food and Drink Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-thin scrollbar-track-indigo-400/20 scrollbar-thumb-indigo-400">
      <body
        className={`antialiased ${poppins.className}`}
      >
        <div className="min-h-screen w-full bg-purple-200 flex flex-col text-black relative">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
