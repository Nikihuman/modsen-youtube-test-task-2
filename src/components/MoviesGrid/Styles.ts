import styled from 'styled-components';

export const StyledMoviesGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  row-gap: 60px;
  column-gap: 20px;
  margin-top: 28px;
  @media ${props => props.theme['media']['big_tablet']} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${props => props.theme['media']['tablet']} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${props => props.theme['media']['phone']} {
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${props => props.theme['media']['extra_small']} {
    row-gap: 40px;
  }
`;
