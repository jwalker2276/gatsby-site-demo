import React from "react";
import styled from "styled-components";

export const EmailIcon = props => (
  <IconSVG
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={`${props.width}`}
    fill={`${props.color}`}
  >
    <g>
      <path d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z" />
      <path d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z" />
    </g>
  </IconSVG>
);

export const PhoneIcon = props => (
  <IconSVG
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={`${props.width}`}
    fill={`${props.color}`}
  >
    <g>
      <path d="M4 2h4a1 1 0 0 1 .98.8l1 5a1 1 0 0 1-.27.9l-2.52 2.52a12.05 12.05 0 0 0 5.59 5.59l2.51-2.52a1 1 0 0 1 .9-.27l5 1c.47.1.81.5.81.98v4a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2z" />
      <path d="M22 10a1 1 0 0 1-2 0 6 6 0 0 0-6-6 1 1 0 0 1 0-2 8 8 0 0 1 8 8zm-4 0a1 1 0 0 1-2 0 2 2 0 0 0-2-2 1 1 0 0 1 0-2 4 4 0 0 1 4 4z" />
    </g>
  </IconSVG>
);

export const LocationIcon = props => (
  <IconSVG
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={`${props.width}`}
    fill={`${props.color}`}
  >
    <g>
      <path d="M12 1v6a3 3 0 0 0 0 6v9.31a1 1 0 0 1-.7-.29l-5.66-5.66A9 9 0 0 1 12 1z" />
      <path d="M12 1a9 9 0 0 1 6.36 15.36l-5.65 5.66a1 1 0 0 1-.71.3V13a3 3 0 0 0 0-6V1z" />
    </g>
  </IconSVG>
);

const IconSVG = styled.svg`
  margin-right: 8px;
`;
