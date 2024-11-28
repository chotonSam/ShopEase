"use client";

import Link from "next/link";

export default function Card({ product }) {
  const discountedPrice =
    product.price - (product.discountPercentage / 100) * product.price;
  const discountPrice = discountedPrice.toFixed(2);

  return (
    <div>
      <Link href={`/productPage/${product.id}`}>
        <div
          style={{
            backgroundImage: `url(${product.thumbnail})`,
          }}
          className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform"
        ></div>
      </Link>
      <h2 className="text-sm lg:text-base mt-2">
        <Link
          className="text-base font-bold"
          href={`/productPage/${product.id}`}
        >
          {product.title}
        </Link>
        <span className="text-[#919090]">
          <Link href={`/category/${product.category}`}>
            {" "}
            ({product.category})
          </Link>
        </span>
      </h2>
      <p className="text-[#919090] text-sm ">{product.description}</p>

      <p className="text-rose-600 text-sm mt-4">
        <span className="text-[#919090] line-through">${product.price}</span> $
        {discountPrice}
      </p>
    </div>
  );
}
