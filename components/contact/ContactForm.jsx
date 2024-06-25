"use client";
import { useState } from "react";

const ContactFormArea = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "default",
    message: "",
    tac: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form data submitted:", formData);
  };

  return (
    <section className="contact-form-area mt-28 mb-32 wow fadeInUp delay-0-2s">
      <div className="container mx-auto px-4">
        <div className="row justify-center">
          <div className="col-lg-8">
            <form
              id="contactForm"
              className="contact-form z-1 relative"
              onSubmit={handleSubmit}
              name="contactForm"
              method="post"
            >
              <div className="section-title text-center mb-10">
                <span className="sub-title block text-lg font-semibold text-gray-600">
                  Get In Touch
                </span>
                <h2 className="text-2xl font-bold text-gray-800">
                  Send Us Message
                </h2>
              </div>
              <div className="row mt-6">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="far fa-user"></i>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      data-error="Please enter your name"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="far fa-envelope"></i>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      data-error="Please enter your email"
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="phone">
                      <i className="far fa-phone"></i>
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="col-sm-6 mb-6">
                  <div className="form-group">
                    <label htmlFor="subject">
                      <i className="far fa-question-circle"></i>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="default">Subject :</option>
                      <option value="product">Product</option>
                      <option value="printing">Printing</option>
                      <option value="design">Design</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="message">
                      <i className="far fa-highlighter"></i>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your Message"
                      required
                      data-error="Please enter your Message"
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="tac-wrap mb-6">
                    <input
                      type="checkbox"
                      id="tac"
                      name="tac"
                      checked={formData.tac}
                      onChange={handleChange}
                    />
                    <label htmlFor="tac" className="text-gray-600">
                      I agree that my data is collected and stored.
                    </label>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group mb-0">
                    <button
                      type="submit"
                      className="theme-btn bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Send Message <i className="fas fa-arrow-right"></i>
                    </button>
                    <div id="msgSubmit" className="hidden"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormArea;
