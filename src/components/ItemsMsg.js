/** @jsx jsx */
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

export const Negative = styled.div`
  background-color: red;
  font-weight: bold;
  color: white;
`;
export const Positive = styled.div`
  background-color: green;
  font-weight: bold;
`;

export const Button = styled.button`
  background-color: ${props => (props.bcg ? "yellow" : "green")};
  font-size: 16pt;
  margin: 12px 0;
`;

export const SomeComp = styled.div({
  color: "hotpink"
});

export const Bounce = keyframes`
from, to{ transform: translateY(0); }
50%{transform: translateY(-30px);}
`;
