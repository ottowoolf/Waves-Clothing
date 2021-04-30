import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 70%;
  width: 10px;

  @media screen and (max-width: 550px) {
    width: 20px;
    padding: 0;
    display: none;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 900;
  transition all 1s;
  &:hover {
    transform: scale(1.5);
  }
`;
