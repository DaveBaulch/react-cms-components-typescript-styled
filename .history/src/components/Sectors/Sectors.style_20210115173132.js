import styled from 'styled-components';

const SectorsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media (min-width: 768) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
  }
`;

const SectorsTitle = styled.header`
  text-align: center;
`;

export const Styled = {
  SectorsRow,
  SectorsTitle
};
