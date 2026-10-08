import React from "react";

const TodayPriceInc = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  const data = await res.json();

  // দাম বেড়েছে
  const increasedProducts = data.filter(
    (item) => Number(item.today) > Number(item.yesterday)
  );

  // দাম কমেছে
  const decreasedProducts = data.filter(
    (item) => Number(item.today) < Number(item.yesterday)
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">

      {/*দাম বেড়েছে */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-red-700">▲</span>

        <h2 className="text-xl font-bold text-gray-800">
          আজ দাম বেড়েছে
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {increasedProducts.map((item) => {
          const today = Number(item.today);
          const yesterday = Number(item.yesterday);

          const increase = today - yesterday;

          const percentage = (increase / yesterday) * 100;

          return (
            <div
              key={item.id}
              className="rounded-2xl border border-[#dce5de] bg-white p-3 shadow-sm"
            >
              {/* Product */}
              <div className="flex items-center gap-3">

                {/* Emoji */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f1f6f2] text-2xl">
                  {item.image}
                </div>

                {/* Name */}
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {item.nameBn}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {item.unit || "প্রতি কেজি"}
                  </p>
                </div>

              </div>

              {/* Price */}
              <div className="mt-4 flex items-end justify-between">

                <div>
                  <p className="text-xs text-gray-500">
                    আজকের দাম
                  </p>

                  <p className="text-lg font-bold text-gray-900">
                    {item.today} টাকা
                  </p>
                </div>

                {/* Increase percentage */}
                <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-600">
                  ▲ {percentage.toFixed(1)}%
                </span>

              </div>
            </div>
          );
        })}
      </div>


      {/* দাম কমেছে */}

      <div className="mb-4 mt-10 flex items-center gap-2">
        <span className="text-green-700">▼</span>

        <h2 className="text-xl font-bold text-gray-800">
          আজ দাম কমেছে
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {decreasedProducts.map((item) => {
          const today = Number(item.today);
          const yesterday = Number(item.yesterday);

          const decrease = yesterday - today;

          const percentage = (decrease / yesterday) * 100;

          return (
            <div
              key={item.id}
              className="rounded-2xl border border-[#dce5de] bg-white p-3 shadow-sm"
            >
              {/* Product */}
              <div className="flex items-center gap-3">

                {/* Emoji */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f1f6f2] text-2xl">
                  {item.image}
                </div>

                {/* Name */}
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {item.nameBn}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {item.unit || "প্রতি কেজি"}
                  </p>
                </div>

              </div>

              {/* Price */}
              <div className="mt-4 flex items-end justify-between">

                <div>
                  <p className="text-xs text-gray-500">
                    আজকের দাম
                  </p>

                  <p className="text-lg font-bold text-gray-900">
                    {item.today} টাকা
                  </p>
                </div>

                {/* Decrease percentage */}
                <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600">
                  ▼ {percentage.toFixed(1)}%
                </span>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default TodayPriceInc;