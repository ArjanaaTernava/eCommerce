import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../layout/Loader";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get("/api/v1/brands");
        setBrands(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching brands");
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Brands</h2>
      <div className="row">
        {brands.map((brand) => (
          <div key={brand._id} className="col-md-4 mb-4">
            <div className="card">
              <Link to={`/brands/${brand._id}`} className="card-link">
                <img
                  src="/images/lenovoPng.jpg"
                  alt={brand.name}
                  className="card-img-top"
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{brand.name}</h5>
                <p className="card-text">{brand.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
