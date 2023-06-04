const AboutUs = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 m-auto text-justify">
            <h1 className="mt-4 mb-5 text-center">
              <b>About Us</b>
            </h1>
            <h3>
              <i>Welcome to our online store!</i>
            </h3>
            <p>
              We are dedicated to providing you with a seamless and enjoyable
              shopping experience. At eBlej, we believe that shopping should be
              convenient, reliable, and exciting.
            </p>
            <p>
              Our mission is to offer a wide range of high-quality products that
              cater to your diverse needs and preferences. Whether you're
              looking for trendy fashion apparel, state-of-the-art electronics,
              stylish home decor, or unique gifts, we've got you covered.We
              carefully curate our collection to ensure that every item meets
              our strict standards of quality and style.
            </p>
            <p>
              Thank you for choosing eBlej. We appreciate your trust and look
              forward to serving you with excellence. Start exploring our
              extensive collection today and discover the joy of shopping with
              us!
            </p>
          </div>
          <div className="col-lg-8 col-md-12 mx-auto mt-3 mb-3">
            <h3>
              <i>Our location on map</i>
            </h3>
            <div
              className="mt-4"
              id="map"
              style={{ width: "100%", height: "500px" }}
            >
              <iframe
                id="inlineFrameExample"
                title="Inline Frame Example"
                width="700"
                height="500"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
