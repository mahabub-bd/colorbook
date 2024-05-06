import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

import { Outfit } from "next/font/google";
import "swiper/css/bundle";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Color Book | Your Trust Printing Partner",
  description: "Color Book",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
