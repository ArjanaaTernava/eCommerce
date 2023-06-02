import { useGlobalContext } from "../../context";
import React, { Fragment, useEffect} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSocialMediaLinks } from "../../actions/socialmediaActions";
import { fetchAffiliateLinks } from "../../actions/affiliateActions";

const Footer = ({
  socialMediaLinks,
  fetchSocialMediaLinks,
  affiliateLinks,
  fetchAffiliateLinks
}) => {
  const { footerYear } = useGlobalContext();
  useEffect(() => {
    fetchSocialMediaLinks();
    fetchAffiliateLinks();
  }, [fetchSocialMediaLinks,fetchAffiliateLinks]);

  return (
    <Fragment>
      <Link to={`/brands/`} className="card-link">
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
      </Link>
      <footer className="py-1">
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class=" fw-bold mb-4">
                  <i class="fa fa-gem me-3"></i>eBlej
                </h6>
                <p>
                  Shopping with us is not just about buying products; it's about
                  being part of a community.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Affiliates</h6>
                <div className="affiliate-list">
                {affiliateLinks.length > 0 ? (
                    affiliateLinks.map((affiliate) => (
                      <p key={affiliate._id}>
                        <a href={affiliate.website} className="text-reset">
                          {affiliate.name}
                        </a>
                      </p>
                    ))
                  ) : (
                    <p>No affiliates available.</p>
                  )}
                </div>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/aboutus" class="text-reset">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="/contactus" class="text-reset">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="/careers" class="text-reset">
                    Careers
                  </a>
                </p>

                <p>
                  <a href="/support" class="text-reset">
                    Support
                  </a>
                </p>

                <p>
                  <a href="/qna" class="text-reset">
                    Q&A
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Info</h6>
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
              <a href="/shipping">
                <img
                  src="/images/payments_all.png"
                  style={{ height: "50px", marginRight: "300px" }}
                  alt="Brand Logo 1"
                  className="nav-link"
                />
              </a>
            </li>
            Social Media:
            {socialMediaLinks.map((link) => (
              <li key={link._id} className="nav-item p-2">
                <a href={link.link} className="me-4 text-black">
                  <i className={`fa fa-${link.platform.toLowerCase()}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-center mt-1">
          eBlej - {footerYear}, All Rights Reserved
        </p>
      </footer>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  socialMediaLinks: state.socialMedia.socialMediaLinks,
  affiliateLinks:state.affiliate.affiliateLinks
});

export default connect(mapStateToProps, {
  fetchSocialMediaLinks,
  fetchAffiliateLinks
})(Footer);
