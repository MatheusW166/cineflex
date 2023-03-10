import styled from "styled-components";

const headerHeight = "67px";

const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: ${headerHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.overBg};
  h1 {
    font-size: ${({ theme }) => theme.xxl};
    color: ${({ theme }) => theme.accent};
    font-weight: 400;
  }
  button {
    position: absolute;
    left: 24px;
  }
`;

const AppContainer = styled.div`
  margin-top: ${headerHeight};
  padding: 0 24px 24px 24px;
`;

const PageTitle = styled.h2`
  font-size: ${({ theme }) => theme.xl};
  font-weight: 400;
  text-align: center;
  line-height: 28px;
  letter-spacing: 0.04em;
  margin: 40px 0 24px 0;
`;

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const PrimaryButton = styled.button`
  letter-spacing: 0.02em;
  line-height: 21px;
  color: ${({ theme }) => theme.bg};
  font-size: ${({ theme }) => theme.md};
  background: ${({ theme }) => theme.accent};
  display: grid;
  place-content: center;
  border-radius: 3px;
  height: 43px;
  padding: 0 16px;
  cursor: pointer;
  transition: filter ease 0.3s;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.8);
  }
`;

const CustomInput = styled.input`
  height: 50px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 3px;
  padding: 0 16px;
  &::placeholder {
    color: ${({ theme }) => theme.placeHolder};
    font-style: italic;
  }
`;

const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 48px;
  gap: 32px;
  font-size: ${({ theme }) => theme.md};
  margin-bottom: 118px;
  input {
    margin-top: 4px;
  }
  button {
    margin: 0 auto;
    margin-top: 48px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export {
  Header,
  AppContainer,
  PageTitle,
  PageContainer,
  PrimaryButton,
  CustomInput,
  CustomForm,
};
