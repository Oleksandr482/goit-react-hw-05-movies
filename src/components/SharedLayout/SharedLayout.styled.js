import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  background-color: rgb(30, 30, 249);
  z-index: 999;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 420px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledLink = styled(NavLink)`
  box-sizing: border-box;
  width: 200px;
  height: 60px;
  border-radius: 6px;
  background-color: white;
  text-decoration: none;
  font-size: 30px;
  line-height: 40px;
  font-weight: 700;
  padding: 10px 25px;
  text-align: center;

  &:hover,
  &.active {
    background-color: orange;
    color: white;
  }
`;
