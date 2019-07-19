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
        Your Name
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
      </FormLabel>
      <FormLabel htmlFor="email">
        Your Email
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

  @media screen and (max-width: 800px) {
    padding: 0px;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const FormLabel = styled.label`
  width: 100%;
  padding: 12px 0;
  text-shadow: 0px 0px 20px var(--body-dark);
`;

const FormInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  margin-top: 12px;
  padding: 8px;
  background-color: var(--neut-lightest);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.15' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  border: none;
  border-radius: 5px;
  box-shadow: inset 1px 2px 3px 0px var(--neut-base),
    inset -1px -1px 3px 0px white;

  :focus {
    outline-color: var(--red-dark);
  }
`;

const FormMessage = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  margin-top: 12px;
  background-color: var(--neut-lightest);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.15' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  border: none;
  border-radius: 5px;
  box-shadow: inset 1px 2px 3px 0px var(--neut-base),
    inset -1px -1px 3px 0px white;

  :focus {
    outline-color: var(--red-dark);
  }
`;

const FormButton = styled.button`
  cursor: pointer;
  width: 128px;
  height: 48px;
  margin: 12px 0 0 0;
  justify-self: center;
  font-size: 18px;
  font-family: "Nunito", "sans-serif";
  font-weight: 700;
  color: var(--body-light-t);
  background: var(--red-base);
  border: none;
  border: 2px solid var(--red-dark);
  border-radius: 5px;
  text-transform: uppercase;
  box-shadow: 2px 3px 2px 0px var(--neut-darkest),
    2px 6px 15px 0px var(--neut-darkest);
  transition: box-shadow 0.1s ease-in, transform 0.1s ease-in;

  :hover {
    box-shadow: 2px 8px 2px 0px var(--neut-darkest),
      2px 8px 15px 0px var(--neut-darkest);
    transform: translate(0px, -2px);
  }

  @media screen and (max-width: 500px) {
    width: 115px;
    font-size: 16px;
  }
`;
