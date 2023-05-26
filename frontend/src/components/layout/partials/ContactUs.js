import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 m-auto">
            <h1 className="mt-4 mb-4 text-center">
              <b>Contact Us</b>
            </h1>
          </div>
          <div className="col-lg-8 col-md-12 text-justify m-auto">
            {/* Introduction */}
            <div className="mt-4 mb-4">
              <p>
                You are always welcome to contact us at anytime! Feel free to
                email us or phone us using our contact details below
                <br />
                You can also visit us or call us at anytime during our working
                hours from <i>Monday to Friday: 9AM to 19PM.</i> <br />
                We reply to our emails even during the weekends. So please do
                not hesitate to contact us.
              </p>
            </div>
            {/* Email contacts */}
            <div className="mt-4 mb-4">
              <p>
                <h6>
                  <i>Contact us by email:</i>
                </h6>
              </p>
              <p>
                For general inquiries:{" "}
                <a href="mailto:general@email.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <u>general@email.com</u>
                </a>
              </p>
              <p>
                For orders problems:{" "}
                <a href="mailto:orders@email.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <u>orders@email.com</u>
                </a>
              </p>
              <p>
                For technical support:{" "}
                <a href="mailto:support@email.com">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <u>support@email.com</u>
                </a>
              </p>
            </div>
            {/* Phone contacts */}
            <div className="mt-4 mb-4">
              <p>
                <h6>
                  <i>Contact us by phone:</i>
                </h6>
              </p>
              <p>
                Call center phone 1:{" "}
                <a href="tel:555-555-5555">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  555-555-5555
                </a>
              </p>
              <p>
                Call center phone 2:{" "}
                <a href="tel:555-555-5555">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  555-555-5555
                </a>
              </p>
              <p>
                Whatsapp phone:{" "}
                <a href="tel:555-555-5555">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  555-555-5555
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
