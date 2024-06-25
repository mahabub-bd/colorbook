import PageBanner from "@/components/common/PageBanner";
import ProductCategory from "@/components/product/ProductCategory";

export default function ProductLayout({ children }) {
  return (
    <div>
      <PageBanner pageName="Product" />
      <ProductCategory />
      {children}
    </div>
  );
}
