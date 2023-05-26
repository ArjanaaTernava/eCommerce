import React from "react";

const Careers = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 m-auto text-justify">
            <h1 className="mt-4 mb-5 text-center">
              <b>Work With Us</b>
            </h1>
            <h3>
              <i>We are always looking to hire enthusiastic people!</i>
            </h3>

            <p>
              If you are interested in working with us, please send your CV to
              the following email and we will get back to you. <br />
              <a href="mailto:hr@email.com">
                <i className="fa fa-envelope" aria-hidden="true"></i>

                <u> hr@email.com</u>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
