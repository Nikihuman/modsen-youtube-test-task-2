import styled from 'styled-components';
import Icon from '@assets/images/youtube.svg';

export const StyledInfoWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  width: 50px;
  box-sizing: border-box;
  align-items: center;
  width: calc(100% - 10px);
  border: 2px solid ${props => props.theme['border_dark']};
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 500ms;
  &:hover {
    box-shadow: 0px 0px 10px ${props => props.theme['text_dark']};
  }
`;

export const StyledPoster = styled.img`
  max-height: 80px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px ${props => props.theme['text_dark']};
`;

export const StyledMovieName = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const StyledLogoWrapper = styled.div`
  height: 80px;
  width: 55px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px ${props => props.theme['text_dark']};
`;

export const StyledImage = styled(Icon)`
  width: 40px;
  height: 30px;
  margin: auto;
`;
