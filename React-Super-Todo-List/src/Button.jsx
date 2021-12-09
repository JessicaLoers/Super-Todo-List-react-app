import styled from "styled-components";

function Button({ text, color }) {
  return <StyledButton color={color}>{text}</StyledButton>;
}
export default Button;

const StyledButton = styled.button`
.button {
  border-radius: 0.1rem;
  font-size: 1.2rem;
  border: none;
  background-color: tomato;
  padding: 1rem, 1.3rem;
  margin: 0.6rem;
}
`;
