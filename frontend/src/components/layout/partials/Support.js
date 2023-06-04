import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitQuestion } from "../../../actions/supportActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Support = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const dispatch = useDispatch();

  const supportState = useSelector((state) => state.support);
  const { error } = supportState;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(submitQuestion(name, email, question));

    // Clear form fields
    setName("");
    setEmail("");
    setQuestion("");
  };

  const divStyle = {
    marginBottom: 25,
  };

  return (
    <div className="support-form-container" style={divStyle}>
      <h2 align="center">
        <b>Support</b>
      </h2>

      <Form onSubmit={handleSubmit} className="support-form">
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="question">
          <Form.Label>Question:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </Form.Group>

        {error && <p className="error-message">{error}</p>}

        <Button type="submit" className="submit-button">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Support;
