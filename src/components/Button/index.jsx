import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  background-color: #7B8EF9;
  padding: 20px;
  width: 30%;
  border: none;
  border-radius: 5px;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  transition-duration: .1s;
  &:hover {
    color: #fff;
  }
`;

export default Button;
