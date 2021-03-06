import styled from 'styled-components';
import { mediaQueries } from './device';

const SectorsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @include breakpoint(sm) {
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
