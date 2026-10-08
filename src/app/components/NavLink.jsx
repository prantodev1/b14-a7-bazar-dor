import Link from "next/link";
import React from "react";

const NavLink = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
     {
    next: {
      revalidate: 3600,
    },
  }
  );

  const data = await res.json();

  return (
    <nav className="border-t border-gray-100">
      <div className="mx-auto flex max-w-6xl items-center gap-5 overflow-x-auto px-4 py-3">
        {data?.map((nav) => (
          <Link
            key={nav.slug}
            href={`/categories/${nav.slug}`}
            className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-gray-700 transition hover:text-green-700"
          >
            <span>{nav.icon}</span>
            <span>{nav.nameBn}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavLink;