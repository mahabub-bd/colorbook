import ProductSection from "../../../components/product/ProductSection";
import { filterProductsBySlug } from "../../../utils";

export default function Packaging() {
  const filteredProducts = filterProductsBySlug("packaging");

  return <ProductSection productsData={filteredProducts} />;
}
