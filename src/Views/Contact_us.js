import React from "react";
import '../css/contact_us.css'

const Contact_us = () => {
  return (
   <>
   
  <header className="bg-dark text-light py-4 text-center">
    <h1>Contact Us</h1>
  </header>
  {/* Contact Section */}
  <section className="contact-section">
    <div className="container">
      <div className="row">
        {/* Contact Information */}
        <div className="col-md-4 mb-4">
          <h3>Contact Information</h3>
          <p>
            <strong>Address:</strong> 123 Street, City, Country
          </p>
          <p>
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p>
            <strong>Email:</strong> info@example.com
          </p>
          {/* Google Maps Integration (Replace with your map embed code) */}
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.31666636438!2d-0.24167945!3d51.5285582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b33b0fdabff%3A0xb0a3c72d6170f8e4!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1597323930171!5m2!1sen!2suk"
              width="100%"
              height={300}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
        {/* Contact Form */}
        <div className="col-md-8 mb-4">
          <h3>Get in Touch</h3>
          <form className="contact-form" method="post" action="#">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required=""
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required=""
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                required=""
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows={5}
                placeholder="Message"
                required=""
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

</>

  );
};

export default Contact_us;
