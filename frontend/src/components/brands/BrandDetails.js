import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../layout/Loader";

const BrandDetails = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBrandDetails = async () => {
      try {
        const response = await axios.get(`/api/v1/brands/${id}`);
        setBrand(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching brand details");
        setLoading(false);
      }
    };

    fetchBrandDetails();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!brand) {
    return <div>Brand not found</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <img src={brand.image} alt={brand.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{brand.name}</h5>
              <p className="card-text">{brand.description}</p>
              {/* Display other brand details as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
