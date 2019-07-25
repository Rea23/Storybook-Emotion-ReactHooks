import styled from '@emotion/styled';
import { keyframes } from 'emotion';

export const Negative = styled.div`
  background-color: red;
  font-weight: bold;
  color: ${props => (props.prop ? "blue" : "yellow")};
  `
export const Positive = styled.div`
background-color: green;
font-weight: bold;
`

export const SomeComp = styled.div({
    color: 'hotpink'
  })

export const Bounce = keyframes`
from { top: 0; left: 0; }
  to   { top: 100px; left: 100px; }
`
