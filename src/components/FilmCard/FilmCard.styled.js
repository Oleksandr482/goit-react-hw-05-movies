import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListItem = styled.li`
  border-radius: 5px;
  list-style: none;
  width: 340px;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    opacity: 0.9;
    transform: scale(1.025);
  }
`;

export const Poster = styled.img`
  display: block;
  width: 100%;
  border-radius: 6px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  margin-top: 12px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  text-align: start;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  width: 100%;
`;
