import ProductSection from "../../../components/product/ProductSection";
import { filterProductsBySlug } from "../../../utils";

export default function OfficeStationery() {
  const filteredProducts = filterProductsBySlug("office-stationery");

  return <ProductSection productsData={filteredProducts} />;
}
