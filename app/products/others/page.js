import ProductSection from "../../../components/product/ProductSection";
import { filterProductsBySlug } from "../../../utils";

export default function Pharmaceutical() {
  const filteredProducts = filterProductsBySlug("others");

  return <ProductSection productsData={filteredProducts} />;
}
