import Quate from "@/public/quate.svg";
import Image from "next/image";
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-8  bg-white  m-2 rounded-lg h-full shadow-lg border  hover:scale-95 cursor-pointer">
      <Image src={Quate} width={20} alt="quate" />
      <p className="leading-relaxed mb-6">{testimonial.quote}</p>
      <a className="inline-flex items-center">
        <Image
          alt={`Photo of ${testimonial.name}`}
          width={80}
          height={80}
          src={testimonial.image}
          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
        />
        <span className="flex-grow flex flex-col pl-4">
          <span className="title-font font-medium text-red-600">
            {testimonial.name}
          </span>
          <span className="text-blue-500 text-sm">{testimonial.role}</span>
        </span>
      </a>
    </div>
  );
};

export default TestimonialCard;
