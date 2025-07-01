import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CiUser } from "react-icons/ci";

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
    <html lang="en">
      <body
        className={`antialiased ${poppins.className} scrollbar-thin`}
      >
        <div className="min-h-screen w-full bg-purple-100 text-black relative">
          <nav className="w-full fixed top-0 left-0 flex justify-between px-6 py-4 shadow-xl bg-gradient-to-r from-indigo-950 to-indigo-700 items-center">
            <h2 className="text-2xl font-bold text-orange-400 cursor-pointer">Zeat</h2>
            <div className="flex gap-x-4 text-white">
              <div className="flex items-center gap-x-2 cursor-pointer hover:bg-white/20 rounded-md duration-300 py-2 px-4">
                <CiUser className="w-6 h-6" />
                <p className="text-sm">Sign In</p>
              </div>
            </div>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
