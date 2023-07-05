import "./globals.css";
import { Inter } from "next/font/google";
import CartItemsProvider from "@/contexts/CartItemsContext";
import ProductsContextProvider from "@/contexts/ProductContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#333] text-white flex flex-col justify-center`}
      >
        <CartItemsProvider>
          <ProductsContextProvider>{children}</ProductsContextProvider>
        </CartItemsProvider>
      </body>
    </html>
  );
}
