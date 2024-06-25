"use client";
import { servicesData } from "@/constants/data";
import { usePathname, useRouter } from "next/navigation";

export default function ProductCategory() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (productSlug) => {
    router.push(`/products/${productSlug}`);
  };

  return (
    <div className="container flex flex-wrap gap-4 border mx-auto justify-center my-20">
      <button
        className={`px-2 rounded-md text-white ${
          pathname === "/products" ? "bg-slate-900" : "bg-slate-700"
        }`}
        onClick={() => router.push("/products")}
      >
        All Products
      </button>
      {servicesData.map((service) => (
        <div key={service?.id}>
          <button
            className={`px-2 rounded-md text-white ${
              pathname === `/products/${service.productSlug}`
                ? "bg-slate-900"
                : "bg-slate-700"
            }`}
            onClick={() => handleNavigation(service.productSlug)}
          >
            {service.title}
          </button>
        </div>
      ))}
    </div>
  );
}
