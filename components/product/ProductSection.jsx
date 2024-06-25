import ProductCard from "./ProductCard";

export default function ProductSection({ productsData }) {
  return (
    <div className="container bg-gradient-to-t">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 my-8 justify-items-center">
        {productsData.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
