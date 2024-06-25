import Image from "next/image";

const TeamMemberCard = ({ name, title, image, description }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white transform transition-transform duration-500 hover:scale-105">
      <div className="relative overflow-hidden h-48">
        <Image
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{title}</p>
        <p className="text-gray-700 text-base mt-2">{description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
