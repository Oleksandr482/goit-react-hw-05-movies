import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  width: 1440px;
  flex-wrap: nowrap;
  overflow: auto;
  margin: 0 auto;
`;

export const CastItem = styled.li`
  :not(:last-child) {
    margin-right: 10px;
    list-style: none;
  }
`;
