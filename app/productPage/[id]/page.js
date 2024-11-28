"use client";

import { data } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function ProductPage({ params: { id } }) {
  const productDetails = data.products.find(
    (product) => product.id === Number(id)
  );

  const catagory = productDetails.category.replace(/^\w/, (match) =>
    match.toUpperCase()
  );

  const discountedPrice =
    productDetails.price -
    (productDetails.discountPercentage / 100) * productDetails.price;
  const discountPrice = discountedPrice.toFixed(2);
  const [count, setCount] = useState(0);

  const handlePrev = () => {
    setCount(count === 0 ? productDetails.images.length - 1 : count - 1);
  };

  const handleNext = () => {
    setCount(count === productDetails.images.length - 1 ? 0 : count + 1);
  };

  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4 relative">
            {/* Left Button */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-4xl p-1 hover:bg-gray-200"
              onClick={handlePrev}
            >
              <FaRegArrowAltCircleLeft />
            </button>

            <Image
              src={productDetails.images[count]}
              className="w-[400px] h-[500px] mx-auto object-cover"
              alt=""
              width={400}
              height={500}
            />

            {/* Right Button */}
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-4xl p-1 hover:bg-gray-200"
              onClick={handleNext}
            >
              <FaRegArrowAltCircleRight />
            </button>

            <div className="flex gap-4 mt-4">
              {productDetails.images.map((image, i) => (
                <Image
                  onClick={() => setCount(i)}
                  key={i}
                  src={image}
                  className="w-[100px] h-[100px] mx-auto border object-cover cursor-pointer"
                  alt=""
                  width={100}
                  height={100}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {productDetails.title}
            </h1>
            <span className="text-[#919090] my-3">
              <Link href={`/category/${catagory}`}>{catagory}</Link>
            </span>
            <div className="mt-3 flex items-center justify-start gap-1">
              {Array.from({
                length: Math.round(productDetails.rating) + 1,
              }).map((el, i) => (
                <Image
                  key={i} // Ensure unique keys for each element
                  src="/assets/svg/star.svg"
                  alt="Star"
                  width={20}
                  height={20}
                />
              ))}
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  $ {productDetails.price}
                </span>
                <span className="font-bold text-2xl"> ${discountPrice}</span>
              </p>
            </div>
            <div>
              <p className="leading-7">{productDetails.description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - {discountPrice}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
