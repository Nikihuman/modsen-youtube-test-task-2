import { css, styled } from 'styled-components';
import DefautlAvatar from '@assets/images/default_avatar.svg';
import { Ripple } from '@components/Ripple/Ripple';
import { Button } from '@components/Button/Button';

export const ModalWindowWrapper = styled.div<{ $active: boolean }>`
  position: fixed;
  display: none;
  top: 0;
  height: 100%;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 5;
  ${props =>
    props.$active &&
    css`
      display: flex;
      justify-content: center;
    `}
`;

export const StyledModalWindow = styled.div`
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  width: 75%;
  background-color: ${props => props.theme['light']};
  display: flex;
  flex-direction: column;
`;

export const StyledMovieInfo = styled.section`
  margin: 20px 0;
  display: flex;
  gap: 10px;
  box-sizing: border-box;
  padding: 5px;
  flex-direction: column;
`;

export const StyledDirectorName = styled.div`
  font-weight: 500;
  background-color: transparent;
  width: fit-content;
  height: fit-content;
  margin: auto;
  text-align: center;
  @media ${props => props.theme['media']['extra_small']} {
    font-size: 10px;
  }
`;

export const StyledDirectorAvatarDefault = styled(DefautlAvatar)`
  align-self: center;
  max-width: 70px;
  fill: ${props => props.theme['text_dark']};
  stroke: ${props => props.theme['text_dark']};
  * {
    fill: ${props => props.theme['text_dark']};
    stroke: ${props => props.theme['text_dark']};
  }
  background-color: transparent;
`;

export const StyledDirectorAvatar = styled.img`
  max-width: 70px;
  border-radius: 15px;
  background-color: transparent;
  align-self: center;
  @media ${props => props.theme['media']['extra_small']} {
    height: 70px;
  }
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding: 0 10px;
  font-weight: 500;
`;

export const StyledDirectorInfo = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  gap: 20px;
`;

export const StyledParagraph = styled.p``;

export const StyledRipple = styled(Ripple)`
  margin: auto;
`;

export const StyledButton = styled(Button)`
  position: absolute;
  top: 15px;
  right: 15px;
`;
