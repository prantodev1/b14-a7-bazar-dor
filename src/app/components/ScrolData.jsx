import MarqueeText from "react-marquee-text";
import React from "react";

const toBanglaNumber = (number) => {
  return String(number).replace(
    /\d/g,
    (digit) => "০১২৩৪৫৬৭৮৯"[digit]
  );
};

const ScrolData = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return (
    <div className="border-y border-gray-200 bg-gray-50">
      <MarqueeText
        className="py-2"
        direction="right"
        duration="19"
      >
        {data?.map((item) => (
          <div
            key={item.id || item.nameBn}
            className="mx-4 flex items-center gap-2 text-sm" >
            <span>{item.categoryIcon}</span>
            <span className="font-medium">
              {item.nameBn}
            </span>
            <span className="font-medium">
              {toBanglaNumber(item.today)} টাকা/কেজি
            </span>
            <span
              className={
                item.change?.dir === "up"
                  ? "font-bold text-green-600"
                  : "font-bold text-red-600"
              }
            >
              {item.change?.dir === "up" ? "▲" : "▼"}{" "}
              {toBanglaNumber(item.change?.pct)}%
            </span>
          </div>
        ))}
      </MarqueeText>
    </div>
  );
};

export default ScrolData;