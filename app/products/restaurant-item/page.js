import ProductSection from "../../../components/product/ProductSection";
import { filterProductsBySlug } from "../../../utils";

export default function RestaurantItem() {
  const filteredProducts = filterProductsBySlug("restaurant-item");

  return <ProductSection productsData={filteredProducts} />;
}
