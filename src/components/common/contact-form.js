import React, { useState } from "react";
import styled from "styled-components";

const ContactForm = () => {
  const initialState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [{ name, email, subject, message }, setState] = useState(initialState);

  // Timer
  const send = () => {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
  };

  // Clear form inputs
  const clearState = () => {
    setState(initialState);
  };

  // Submit form
  const handleSubmit = event => {
    event.persist();

    if (event) {
      event.preventDefault();
    }

    alert(
      `User sent message!
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}`
    );

    send().then(clearState);
  };

  // Update inputs
  const handleInputChange = event => {
    const { name, value } = event.target;

    setState(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">
        Name
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
      </FormLabel>
      <FormLabel htmlFor="email">
        Email
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
        />
      </FormLabel>
      <FormLabel htmlFor="subject">
        Subject
        <FormInput
          type="text"
          name="subject"
          value={subject}
          onChange={handleInputChange}
          required
        />
      </FormLabel>
      <FormLabel htmlFor="message">
        Message
        <FormMessage
          type="text"
          name="message"
          value={message}
          onChange={handleInputChange}
          required
          rows="7"
        />
      </FormLabel>
      <FormButton type="submit" value="Submit">
        Send
      </FormButton>
    </Form>
  );
};

export default ContactForm;

const Form = styled.form`
  display: grid;
  grid-template: 1fr 1fr 1fr auto auto / 1fr;
  padding: 10px;
`;

const FormLabel = styled.label`
  width: 100%;
`;

const FormInput = styled.input`
  width: 100%;
  box-sizing: border-box;
`;

const FormMessage = styled.textarea`
  width: 100%;
  box-sizing: border-box;
`;

const FormButton = styled.button`
  cursor: pointer;
  width: 150px;
  height: 40px;
`;
