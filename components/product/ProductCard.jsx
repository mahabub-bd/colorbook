import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-xl hover:scale-95 overflow-hidden shadow-xl m-4 bg-gradient-to-r from-red-50 to-gray-50  ">
      <Image
        src={product?.imgUrl}
        alt={product?.name}
        className="w-[380px] h-60 bg-slate-100 object-contain"
        width={300}
        height={160}
      />

      <h3 className="text-lg  my-1 py-2 text-center hover:text-red-500 cursor-pointer">
        {product?.name}
      </h3>
    </div>
  );
};

export default ProductCard;
