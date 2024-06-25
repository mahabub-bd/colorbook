import ProductSection from "../../../components/product/ProductSection";
import { filterProductsBySlug } from "../../../utils";

export default function MarketingMaterial() {
  const filteredProducts = filterProductsBySlug("marketing-material");

  return <ProductSection productsData={filteredProducts} />;
}
