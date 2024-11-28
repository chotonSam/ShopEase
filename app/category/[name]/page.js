"use client";

import Card from "@/components/Card";
import CatagorySidebar from "@/components/CatagorySidebar";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import { data } from "@/data/data";

export default function CategoryPage({ params }) {
  const filterCategory = data.products.filter((name) => {
    if (params.name === "All") {
      return true;
    }
    return name.category === params.name.toLowerCase();
  });

  console.log(filterCategory);
  return (
    <>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <CatagorySidebar activeCategory={params.name} />

        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          {filterCategory.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Form />

      <Footer />
    </>
  );
}
