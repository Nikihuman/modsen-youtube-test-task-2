import styled from 'styled-components';

export const StyledMovieCard = styled.div`
  width: 330px;
  height: 225px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px ${props => props.theme['text_dark']};
  padding: 0 30px;
  @media ${props => props.theme['media']['extra_small']} {
    width: 212px;
    height: 129px;
  }
`;
