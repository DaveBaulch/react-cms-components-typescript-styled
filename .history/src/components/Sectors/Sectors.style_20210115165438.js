import styled from 'styled-components';

const Container = styled.div`
  width: calc(100% - 30px);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  position: relative;
  padding: 0 15px;
`;

SectorsRow {
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
}

constSectorsTitle {
  text-align: center;
}

export const Styled = {
  SectorsRow,
  SectorsTitle
};


