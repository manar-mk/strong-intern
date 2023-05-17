import styled from 'styled-components'

export const Button = styled.button`
  background: ${props => props.$primary ? "#5436A9" : "#5C5C5C"};
  color: white;

  padding: 0.8125em 1em;
  border-radius: 50px;
  border: none;
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
`;