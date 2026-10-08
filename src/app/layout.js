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
      data-theme="light"
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

        <main className="flex-1">{children}</main>
      <footer className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2">
  <p className="text-sm font-medium text-gray-700">
    বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
  </p>

  <p className="text-sm text-gray-700">
    সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
  </p>
</footer>
      </body>
    </html>
  );
}
