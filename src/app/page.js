import Image from "next/image";
import DateDisplay from "./components/DateDisplay";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f1f7f2] px-4 py-4">
      {/* Hero Card */}
      <section className="mx-auto flex min-h-[225px] max-w-6xl items-center justify-between rounded-[20px] border border-[#dce5de] bg-[#ffffff] px-6 py-6 shadow-sm md:px-8">

        {/* Left Content */}
        <div className="max-w-[700px]">

          {/* Date */}
          <div className="mb-3 inline-flex rounded-full bg-[#e5f5e9] px-3 py-1 text-sm font-medium text-[#16803c]">
            <DateDisplay />
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold tracking-tight text-[#202a23] md:text-[30px]">
            আজকের বাজারের দাম এক নজরে
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-[650px] text-sm leading-6 text-[#68716b] md:text-[15px]">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
            বাজারভিত্তিক বিস্তারিত, দ্রুত, সর্বনিম্ন-সর্বাধিক এবং দামের
            পরিবর্তন এক জায়গায়।
          </p>

          {/* Button */}
          <button
            className="mt-5 rounded-md bg-[#07883f] px-5 py-2.5 text-sm
            font-semibold text-white shadow-md transition
            hover:bg-[#067536]"
          >
            সব পণ্যের দাম
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden items-center justify-center md:flex md:w-[300px]">
          <Image
            src="/bazar-hero.png"
            width={220}
            height={170}
            alt="বাজারের ফলের ঝুড়ি"
            className="object-contain"
          />
        </div>
      </section>
    </main>
  );
}