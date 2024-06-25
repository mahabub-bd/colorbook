const ContactInfoArea = () => {
  return (
    <section className="contact-info-area mb-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className=" contact-info-content mb-8 md:mb-0 md:w-1/2 ">
            <div className="section-title mb-6">
              <span className="sub-title mb-4 block text-lg font-semibold text-gray-600">
                Contact Us
              </span>
              <h2 className="text-5xl font-bold  text-gray-800">
                We’re Ready to Help! Feel Free to Contact Us
              </h2>
            </div>
            <p className="text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque
            </p>
          </div>

          <div className="contact-info-wrap wow fadeInRight delay-0-2s md:w-1/2">
            <div className="contact-info-item flex items-start mb-6">
              <div className="icon text-3xl text-gray-600 mr-4">
                <i className="fal fa-map-marker-alt"></i>
              </div>
              <div className="content">
                <h4 className="text-lg font-semibold text-gray-800">
                  Location
                </h4>
                <p className="text-gray-600">
                  134, Arambag, (3rd Floor), Motijheel, Dhaka-1000
                </p>
              </div>
            </div>
            <div className="contact-info-item flex items-start mb-6">
              <div className="icon text-3xl text-gray-600 mr-4">
                <i className="far fa-envelope-open"></i>
              </div>
              <div className="content">
                <h4 className="text-lg font-semibold text-gray-800">
                  Email Us
                </h4>
                <a
                  href="mailto:info@colorbook.com.bd"
                  className="text-blue-600"
                >
                  info@colorbook.com.bd
                </a>
              </div>
            </div>
            <div className="contact-info-item flex items-start">
              <div className="icon text-3xl text-gray-600 mr-4">
                <i className="far fa-phone"></i>
              </div>
              <div className="content">
                <h4 className="text-lg font-semibold text-gray-800">
                  Phone No
                </h4>
                <a href="tel:+8801780100700" className="text-blue-600">
                  +8801780100700
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoArea;
