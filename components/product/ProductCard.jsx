import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg m-4">
      <Image
        src="https://res.cloudinary.com/mahabub-bd/image/upload/v1719152544/colorbook/category/Brochure-Printing-Service-in-Bangladesh-1_ckas8r.jpg"
        alt={product?.name}
        className="w-full h-88"
        width={300}
        height={160}
      />

      <h3 className="text-xl  my-2 text-center">{product?.name}</h3>
    </div>
  );
};

export default ProductCard;
