import React from "react";

const ProductCard = ({ product }) => {
  const today = Number(product.today);
  const yesterday = Number(product.yesterday);

  const percentage =
    yesterday > 0
      ? ((today - yesterday) / yesterday) * 100
      : 0;

  return (
    <div className="rounded-2xl border border-[#dce5de] bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {/* Product Info */}
      <div className="flex items-center gap-3">
        {/* Product Icon */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f1f6f2] text-2xl">
          {product.image}
        </div>

        {/* Product Name */}
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-[#202a23] sm:text-base">
            {product.nameBn}
          </h3>

          <p className="mt-0.5 text-xs text-gray-500">
            {product.unit || "প্রতি কেজি"}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-[11px] text-gray-500">
            আজকের দাম
          </p>

          <p className="mt-0.5 text-lg font-bold text-[#202a23]">
            {product.today} টাকা
          </p>
        </div>

        {/* Price Change */}
        {percentage > 0 ? (
          <span className="rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-medium text-red-600">
            ▲ {percentage.toFixed(1)}%
          </span>
        ) : percentage < 0 ? (
          <span className="rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-medium text-green-600">
            ▼ {Math.abs(percentage).toFixed(1)}%
          </span>
        ) : (
          <span className="rounded-full bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-500">
            — 0.0%
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;