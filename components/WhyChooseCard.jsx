import Image from "next/image";

const WhyChooseCard = ({ imageUrl, title, description }) => (
  <div className="col-span-12 md:col-span-4 m-2 ">
    <div className="flex w-full h-full p-2 md:p-3 flex-col items-center md:justify-start gap-2 flex-1 rounded-lg shadow-md  bg-white hover:translate-y-1 ">
      <Image
        className="w-8 md:w-[40px]"
        src={imageUrl}
        alt={title}
        width={40}
        height={40}
      />
      <div className="flex flex-col w-full items-center gap-1">
        <p className=" text-center text-xl mt-2 text-gray-900 font-bold">
          {title}
        </p>
        <p className="text-center">{description}</p>
      </div>
    </div>
  </div>
);

export default WhyChooseCard;
