const ContactFeature = () => {
  return (
    <section className="contact-feature  py-50">
      <div className="container">
        <div className="flex gap-10 flex-col md:flex-row">
          <div className="service-item-two style-two ">
            <div className="icon">
              <i className="flaticon-technical-support"></i>
            </div>
            <div className="content">
              <h4>Need Our Support</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque
              </p>
            </div>
          </div>

          <div className="service-item-two style-two ">
            <div className="icon">
              <i className="flaticon-chat"></i>
            </div>
            <div className="content">
              <h4>Become a Member</h4>
              <p>
                On the other hand denounce righteous ination and dislike men who
                are so beguiled
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFeature;
