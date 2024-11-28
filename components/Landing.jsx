import { data } from "@/data/data";
import Card from "./Card";
import Footer from "./Footer";
import Form from "./Form";

export default function Landing() {
  const products = data.products.slice(0, 12);
  return (
    <>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
          {products.map((product, index) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Form />

      <Footer />
    </>
  );
}
