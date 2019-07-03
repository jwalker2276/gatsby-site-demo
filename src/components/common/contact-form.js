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
  font-size: 18px;
  color: var(--body-light);
`;

const FormLabel = styled.label`
  width: 100%;
  padding: 12px 0;
`;

const FormInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  margin-top: 12px;
  padding: 8px;
  background-color: var(--neut-lightest);
  border: none;
`;

const FormMessage = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  margin-top: 12px;
  background-color: var(--neut-lightest);
  border: none;
`;

const FormButton = styled.button`
  cursor: pointer;
  width: 128px;
  height: 48px;
  margin: 12px 0 0 0;
  font-size: 18px;
  color: var(--body-light-t);
  background: var(--red-base);
  border: none;
`;
