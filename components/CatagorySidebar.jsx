import { data } from "@/data/data";
import Link from "next/link";

export default function CatagorySidebar({ setActiveCategory, activeCategory }) {
  const categoryName = [
    "All",
    ...new Set(data.products.map((item) => item.category)),
  ];

  const capitalizedArray = categoryName.map((text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  });

  return (
    <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
      {capitalizedArray.map((name, index) => (
        <Link key={index} href={`/category/${name}`}>
          <button
            className={`hover:border-b border-black block h-6 box-border mt-4 ${
              name === activeCategory ? "font-bold" : ""
            }`}
          >
            {name}
          </button>
        </Link>
      ))}
    </div>
  );
}
