import ProductSection from "../../../components/product/ProductSection";
import { filterProductsBySlug } from "../../../utils";

export default function Pharmaceutical() {
  const filteredProducts = filterProductsBySlug("pharmaceutical");

  return <ProductSection productsData={filteredProducts} />;
}
