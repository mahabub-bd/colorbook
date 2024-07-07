import { AboutOne } from "@/public";
import Image from "next/image";
const Colorbook = () => {
  return (
    <div className="py-8 container ">
      <section className="mb-8 flex flex-col md:flex-row text-justify">
        <div className="md:w-1/3 flex justify-center md:justify-start p-4 hover:scale-95 ">
          <Image
            src={AboutOne}
            alt="Colorbook Image"
            width={450}
            height={260}
            className=" rounded-lg "
          />
        </div>
        <div className="md:w-2/3 md:ml-8">
          <p className="mt-4 ">
            Founded in 2015, COLORBOOK has established itself as a comprehensive
            provider of printing and packaging services, catering to a diverse
            array of industries. Our extensive team is dedicated to delivering
            exceptional service to corporate clients across sectors such as
            cable, automotive, healthcare, non-profit organizations, consultancy
            firms, and the garment industry. Additionally, we extend our
            printing expertise to individual clients, ensuring personalized and
            high-quality solutions for all.
          </p>
          <p className="mt-4 ">
            Under the expert leadership of{" "}
            <span className="text-red-500">Mr. Md. Zahidul Haque</span>, the
            proprietor, COLORBOOK operates with a deep-seated commitment to
            excellence. His extensive experience in the printing sector has been
            instrumental in guiding our operations and fostering a reputation
            for reliability and customer satisfaction.
          </p>
        </div>
      </section>

      <section className="mb-8 text-justify">
        <h2 className="text-2xl font-semibold text-center text-red-600">
          Our Philosophy
        </h2>
        <p className="mt-4">
          At COLORBOOK, we believe in reviving the lost art of printing—bringing
          forth ideas that resonate with relevance, originality, and impact.
          From the sharp edge of a pencil, the nib of a pen, to the soft head of
          a brush, our creative processes are deeply rooted in human ingenuity.
          While machines serve as essential tools, it is the human touch that
          breathes life into every project. Our philosophy centers on the
          seamless integration of art and science, men and machines, to
          transform concepts and thoughts from brain to paper.
        </p>
        <p className="mt-4">
          Every project we undertake is a unique execution, a canvas rich with
          human touch and artistic flair. This is the essence of COLORBOOK—a
          place where creativity and technology converge to produce unparalleled
          printing solutions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-center text-red-600">
          Our Commitment
        </h2>
        <p className="mt-4">
          At COLORBOOK, we know that we can deliver and make a point of doing it
          well. Our commitment is to provide an honest and reliable printing
          service ranging from one-color jobs to full ten-color jobs. In each
          case, we assure meeting deadlines, sticking to budgets, and producing
          results of the highest standards. Our value proposition is different
          from the standard printing vendor. We offer our clients a vendor who
          is an ally, who will work for them and with them to obtain the
          products and services they want. Our confidence and ability translate
          into confidence for our clients and serve as a starting point for
          developing long-term relationships and trust. Moreover, our service is
          second to none. We will advise you on the best way of producing a
          requirement, provide fast estimates with competitive prices, and
          complete the packages with door-to-door delivery.
        </p>
        <p className="mt-4">
          Our experienced design team works with you to identify your product
          requirements, from construction to concept surface design. See your
          product designed by the people who live and breathe packaging, saving
          you time and money, and giving you peace of mind.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-center text-red-600">
          Our Culture
        </h2>
        <p className="mt-4">
          At COLORBOOK, understanding, respecting, and leveraging diversity in
          the new world of the printing business is a high priority. We make it
          clear that we want a culture in which we do more than just acknowledge
          our different talents, ideas, and backgrounds.
        </p>
        <p className="mt-4">
          COLORBOOK is accelerating to build a high-performance culture that
          values differences, attracts and retains the best talent, excels in
          the new world of printing business, and helps its clients succeed. In
          a nutshell…
        </p>
      </section>
    </div>
  );
};

export default Colorbook;
