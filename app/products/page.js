import ProductSection from "@/components/product/ProductSection";
import { servicesData } from "@/constants/data";

export default function ProductPage() {
  const allProducts = servicesData.flatMap((category) => category.products);

  return <ProductSection productsData={allProducts} />;
}
