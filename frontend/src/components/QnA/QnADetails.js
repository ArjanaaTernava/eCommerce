import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../layout/Loader";

const QnADetails = () => {
  const { id } = useParams();
  const [qnaEntry, setQnaEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQnAEntry = async () => {
      try {
        const response = await axios.get(`/api/v1/qna/${id}`);
        setQnaEntry(response.data.qna);
        setLoading(false);
      } catch (error) {
        setError("Error fetching QnA details");
        setLoading(false);
      }
    };

    fetchQnAEntry();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!qnaEntry) {
    return <div>QnA entry not found</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Question: {qnaEntry.question}</h5>
              <p className="card-text">Answer: {qnaEntry.answer}</p>
              {/* Display other QnA details as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnADetails;
