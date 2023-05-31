import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../layout/Loader";

const QnA = () => {
  const [qnaEntries, setQnaEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQnAEntries = async () => {
      try {
        const response = await axios.get("/api/v1/qna");
        setQnaEntries(response.data.qna);
        setLoading(false);
      } catch (error) {
        setError("Error fetching QnA entries");
        setLoading(false);
      }
    };

    fetchQnAEntries();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ height: "110vh", display: "flex", flexDirection: "column" , paddingBottom: "50px;" }}>
    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Brands</h2>
    <div
      className="row"
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "stretch",
        height: "100%",
      }}
    >
      {qnaEntries.map((qna) => (
        <div
          key={qna._id}
          className="col-md-4 mb-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            maxWidth: "300px",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          <div
            className="card"
            style={{
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: "20px"
            }}
          >
            {/* <Link to={`/qna/${qna._id}`} className="card-link">
                <img
                  className="card-img-top"
                  style={{
                    objectFit: "contain",
                    borderRadius: "4px 4px 0 0",
                    width: "200px",
                    height: "100px",
                  }}
                />
              </Link> */}
            
            
            <div className="card-body" style={{ padding: "10px" }}>
              <h5
                className="card-title"
                style={{
                  fontSize: "18px",
                  marginBottom: "10px",
                  fontWeight: "bold",
                  fontFamily: "MonoLisa, monospace",
                }}
              >
                {qna.question}
              </h5>
              <p className="card-text" style={{ fontSize: "14px" }}>
                {qna.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default QnA;
