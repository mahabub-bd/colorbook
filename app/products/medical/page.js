import ProductSection from "../../../components/product/ProductSection";
import { filterProductsBySlug } from "../../../utils";

export default function Medical() {
  const filteredProducts = filterProductsBySlug("medical");

  return <ProductSection productsData={filteredProducts} />;
}
