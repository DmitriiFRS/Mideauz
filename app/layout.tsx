import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ReduxProvider from "./Redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Midea & Welkin",
   description: "Midea & Welkin - Официальные представители в Узбекистане",
   keywords: ["Кондиционеры", "Чиллеры", "VRF-Система", "Настенные кондиционеры", "Купить кондиционер", "Midea", "Welkin"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <div className="wrapper">
               <ReduxProvider>
                  <Header />
                  {children}
                  <Footer />
               </ReduxProvider>
            </div>
         </body>
      </html>
   );
}
