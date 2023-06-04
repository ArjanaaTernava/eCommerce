import React, { useState, useEffect } from "react";
import axios from "axios";

const QnAList = () => {
  const [qnaList, setQnaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/v1/qna");
        setQnaList(response.data.qna);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="card-container" style={{marginBottom:"20px",marginTop:"20px"}}>
      {qnaList.map((entry) => (
        <div className="card" key={entry._id}>
          <div className="card-body">
            <h5 className="card-title">Q: {entry.question}</h5>
            <p className="card-text">A: {entry.answer}</p>
          </div>
        </div>
      ))}
    </div>
    
  );
};

export default QnAList;
