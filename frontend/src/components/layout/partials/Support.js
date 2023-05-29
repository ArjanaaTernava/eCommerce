import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitQuestion } from "../../../actions/supportActions";

const Support = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const dispatch = useDispatch();

  const supportState = useSelector((state) => state.support);
  const { error } = supportState;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting question:", name, email, question);

    dispatch(submitQuestion(name, email, question));

    // Clear form fields
    setName("");
    setEmail("");
    setQuestion("");
  };

  return (
    <div>
      <h2>Support</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Question:</label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          ></textarea>
        </div>

        {error && <p>{error}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Support;
