import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Particles from "./components/Particles";

const inter = Inter({ subsets: ["latin"] });+
6

export const metadata = {
  title: "Leandro Villalba",
  description: "Generated by Leandro Villalba",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${inter.className} `}>
        <Background />
        {/* <Particles /> */}

        <Navbar />
        {children}
      </body>
    </html>
  );
}