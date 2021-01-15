import styled from 'styled-components';
import mediaQueries from '../../config/config';

const SectorsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media ${mediaQueries} {
    grid-template-columns: 1fr 1fr;
  }

  @include breakpoint(lg) {
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
