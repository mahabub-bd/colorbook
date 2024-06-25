import ProductSection from "../../../components/product/ProductSection";
import { filterProductsBySlug } from "../../../utils";

export default function GiftItem() {
  const filteredProducts = filterProductsBySlug("gift-item");

  return <ProductSection productsData={filteredProducts} />;
}
