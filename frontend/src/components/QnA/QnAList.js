import React, { useState, useEffect } from "react";
import axios from "axios";
import QnACard from "./QnACard";

const QnAList = () => {
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="card-container">
      {qnaEntries.slice(0, 6).map((entry) => (
        <QnACard
          key={entry._id}
          question={entry.question}
          answer={entry.answer}
        />
      ))}
    </div>
  );
};

export default QnAList;
