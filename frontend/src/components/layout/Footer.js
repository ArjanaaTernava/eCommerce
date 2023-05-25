import React, { Fragment } from "react";
import { useGlobalContext } from "../../context";
const Footer = () => {
  const { footerYear } = useGlobalContext();

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav navbaricons">
            <li className="nav-item ">
              <img
                src="/images/gjirafa50AARPng.jpg"
                style={{ height: "70px" }}
                alt="Brand Logo 1"
                className="nav-link"
              />
            </li>
            <li className="nav-item">
              <img
                src="/images/samsungPng.jpg"
                style={{ height: "70px" }}
                alt="Brand Logo 1"
                className="nav-link"
              />
            </li>
            <li className="nav-item">
              <img
                src="/images/mSIPng.jpg"
                style={{ height: "70px" }}
                alt="Brand Logo 1"
                className="nav-link"
              />
            </li>
            <li className="nav-item">
              <img
                src="/images/steelseriesPng.jpg"
                style={{ height: "70px" }}
                alt="Brand Logo 1"
                className="nav-link"
              />
            </li>
            <li className="nav-item">
              <img
                src="/images/lenovoPng.jpg"
                style={{ height: "70px" }}
                alt="Brand Logo 1"
                className="nav-link"
              />
            </li>
            <li className="nav-item">
              <img
                src="/images/zowiePng.jpg"
                style={{ height: "70px" }}
                alt="Brand Logo 1"
                className="nav-link"
              />
            </li>
          </ul>
      </nav>
      <footer className="py-1">
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fa fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Laravel
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fa fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i class="fa fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i class="fa fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i class="fa fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbarpayment">
      <ul className="navbar-nav d-flex align-items-center">
        <li className="nav-item d-flex align-items-center">
          Payment can be done through:
          <a href="/payment">
          <img
            src="/images/payments_all.png"
            style={{ height: "50px" , marginRight:"300px"}}
            alt="Brand Logo 1"
            className="nav-link"
          />
          </a>
        </li>

        Social Media:
        <li className="nav-item p-2">
          <a href="/" className="me-4 text-black">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li className="nav-item p-2 ">
          <a href="/" className="me-4 text-black">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li className="nav-item p-2">
          <a href="/" className="me-4 text-black">
            <i className="fa fa-google"></i>
          </a>
        </li>
        <li className="nav-item p-2">
          <a href="/" className="me-4 text-black">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li className="nav-item p-2">
          <a href="/" className="me-4 text-black">
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </nav>
        <p className="text-center mt-1">
          eBlej - {footerYear}, All Rights Reserved
        </p>
      </footer>
    </Fragment>
  );
};

export default Footer;
