import React from "react";

const QnACard = ({ question, answer }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Q: {question}</h5>
        <p className="card-text">A: {answer}</p>
      </div>
    </div>
    
  );
};

export default QnACard;
