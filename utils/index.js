import { servicesData } from "@/constants/data";

const filterProductsBySlug = (slug) => {
  const service = servicesData.find((service) => service.productSlug === slug);
  return service ? service.products : [];
};

export { filterProductsBySlug };
