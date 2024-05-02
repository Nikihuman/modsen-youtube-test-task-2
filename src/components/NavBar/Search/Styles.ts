import Icon from '@assets/images/loupe.svg';
import { Ripple } from '@components/Ripple/Ripple';
import styled from 'styled-components';

export const StyledSearchWrapper = styled.form`
  display: flex;
  max-width: 570px;
  width: 100%;
  margin: 0 15px;
  position: relative;
  &:focus-within {
    section:first-of-type {
      box-shadow: 0px 0px 10px ${props => props.theme['text_dark']};
      height: 300px;
    }
    p:first-of-type {
      display: block;
      height: fit-content;
    }
    box-shadow: 0px 3px 10px ${props => props.theme['text_dark']};
  }
  @media ${props => props.theme['media']['phone']} {
    max-width: none;
    margin: 30px 15px 0px 0px;
  }
`;

export const StyledMoviesNames = styled.section`
  position: absolute;
  width: 100%;
  top: 50px;
  height: 0px;
  transition: height 500ms;
  display: flex;
  z-index: 4;
  border: 1px solid ${props => props.theme['border_dark']};
  border-top: none;
  flex-direction: column;
`;
export const StyledLoupeImg = styled(Icon)`
  width: 17px;
  height: 17px;
  fill: ${props => props.theme['text_dark']};
  stroke: ${props => props.theme['text_dark']};
  * {
    fill: ${props => props.theme['text_dark']};
    stroke: ${props => props.theme['text_dark']};
  }
  background-color: transparent;
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: 1px solid ${props => props.theme['border_dark']};
  padding: 5px 15px;
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme['text_hover']};
  }
`;

export const StyledSubmitButton = styled.button`
  box-sizing: border-box;
  padding: 11px 20px;
  background-color: transparent;
  border: 1px solid ${props => props.theme['border_dark']};
  transition: background-color 500ms;
  &:hover {
    background-color: ${props => props.theme['medium']};
  }
`;

export const StyledRipple = styled(Ripple)`
  margin: auto;
`;

export const StyledUl = styled.ul`
  overflow-y: scroll;
`;

export const StyledInfo = styled.p`
  width: fit-content;
  margin: auto;
  display: none;
`;
