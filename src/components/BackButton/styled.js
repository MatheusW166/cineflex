import styled from "styled-components";

const Button = styled.button`
  font-size: ${({ theme }) => theme.xl};
  cursor: pointer;
  line-height: 0;
  height: 100%;
  width: 50px;
`;

export { Button };
