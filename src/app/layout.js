import { Suspense } from "react";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import ScrolData from "./components/ScrolData";

const notoserifbengli = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata = {
  title: "BazarDor",
  description: "Bazar price and products",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bn"
      className={`${notoserifbengli.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />

        <Suspense
          fallback={
            <div className="border-y border-gray-200 py-3 text-center">
              Loading...
            </div>
          }
        >
          <ScrolData />
        </Suspense>

        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}