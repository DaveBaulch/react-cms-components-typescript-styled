import styled from 'styled-components';
import  from '../../config/config';

const SectorsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media ${mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${mediaQueries.lg} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }
`;

const SectorsTitle = styled.div`
  text-align: center;
`;

export const Styled = {
  SectorsRow,
  SectorsTitle
};
