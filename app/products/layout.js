import PageBanner from "@/components/common/PageBanner";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import ProductCategory from "@/components/product/ProductCategory";

import bannerImage from "https://res.cloudinary.com/mahabub-bd/image/upload/v1719938612/colorbook/sl_012421_39970_34_hmsjk1.jpg";

export default function ProductLayout({ children }) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, .1), transparent), url(${bannerImage.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "center",
      }}
    >
      <PageBanner pageName="Product" />
      <ProductCategory />
      {children}
      <WhyChooseUs />
    </div>
  );
}
