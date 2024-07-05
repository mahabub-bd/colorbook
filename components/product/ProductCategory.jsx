"use client";
import { servicesData } from "@/constants/data";
import { usePathname, useRouter } from "next/navigation";

export default function ProductCategory() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (productSlug) => {
    router.push(`/products/${productSlug}`);
  };

  const NavigationButton = ({ path, label }) => {
    const isActive = pathname === path;
    return (
      <button
        className={`px-2 rounded-md text-white ${
          isActive ? "bg-slate-900" : "bg-slate-700"
        }`}
        onClick={() => router.push(path)}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="container flex flex-wrap  md:gap-2 gap-3 border justify-center md:justify-around my-10 mx-auto pt-10 ">
      <NavigationButton path="/products" label="All Products" />
      {servicesData.map((service) => (
        <NavigationButton
          key={service.id}
          path={`/products/${service.productSlug}`}
          label={service.title}
        />
      ))}
    </div>
  );
}
