import styled from 'styled-components';
import config from '../../config/config';

const SectorsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media ${config.mediaQueries.sm} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${config.mediaQueries.lg} {
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
