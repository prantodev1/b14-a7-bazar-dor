import ProductCard from "@/app/components/ProductCard";
import React from "react";

export const instant = false;

const CategoryId = async ({ params }) => {
  const { categoriesId } = await params;

  const [categoriesRes, productsRes] = await Promise.all([
    fetch(
      "https://api.api-store.workers.dev/api/bazardor/categories",
      {
        next: {
          revalidate: 3600,
        },
      }
    ),

    fetch(
      "https://api.api-store.workers.dev/api/bazardor/products",
      {
        next: {
          revalidate: 3600,
        },
      }
    ),
  ]);

  const categories = await categoriesRes.json();
  const products = await productsRes.json();

  const category = categories.find(
    (item) => item.slug === categoriesId
  );

  const categoryProducts = Array.isArray(products)
    ? products.filter(
        (product) =>
          product.categoryId === categoriesId ||
          product.category === categoriesId ||
          product.categorySlug === categoriesId
      )
    : [];

  if (!category) {
    return (
      <main className="min-h-screen bg-[#f1f7f2] px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-xl font-bold text-red-600">
            Category not found
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f1f7f2] px-4 py-4">
      <div className="mx-auto max-w-6xl">

        {/* Category Header */}
        <section className="rounded-2xl border border-[#dce5de] bg-white px-4 py-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1f6f2] text-2xl">
              {category.icon}
            </div>

            <div>
              <h1 className="text-xl font-bold text-[#202a23]">
                {category.nameBn}
              </h1>

              <p className="text-xs text-gray-500">
                {categoryProducts.length}টি পণ্যের আজকের দাম ও পরিবর্তন
              </p>
            </div>
          </div>
        </section>

        {/* Sort */}
        <section className="mt-5 rounded-2xl border border-[#dce5de] bg-white px-4 py-3">
          <div className="flex items-center justify-end gap-2">
            <span className="text-xs text-gray-500">
              সাজান
            </span>

            <select className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-700 outline-none">
              <option>ডিফল্ট</option>
              <option>দাম: কম থেকে বেশি</option>
              <option>দাম: বেশি থেকে কম</option>
            </select>
          </div>
        </section>

        {/* Count */}
        <div className="mt-4">
          <p className="text-xs text-gray-500">
            মোট {categoryProducts.length}টি পণ্য দেখানো হচ্ছে
          </p>
        </div>

        {/* Products */}
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categoryProducts.map((pd) => (
            <ProductCard
              key={pd.id}
              product={pd}
            />
          ))}
        </div>

      </div>
    </main>
  );
};

export default CategoryId;