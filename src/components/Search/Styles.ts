import styled from 'styled-components';
import Icon from '@assets/images/loupe.svg';
import { Ripple } from '@components/Ripple/Ripple';

export const StyledSearchWrapper = styled.form`
  display: flex;
  max-width: 570px;
  width: 100%;
  margin: 0 15px;
  position: relative;
  &:focus-within,
  &:hover {
    section:first-of-type {
      display: flex;
      box-shadow: 0px 0px 10px ${props => props.theme['text_dark']};
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
  min-height: 50px;
  max-height: 300px;
  display: none;
  z-index: 4;
  border: 1px solid ${props => props.theme['border_dark']};
  border-top: none;
  flex-direction: column;
  &::before {
    content: '';
    height: 7px;
    width: calc(100% + 2px);
    position: absolute;
    top: -7px;
    left: -0.85px;
    background: inherit;
    z-index: 2;
    box-sizing: border-box;
    border-left: 1px solid ${props => props.theme['border_dark']};
    border-right: 1px solid ${props => props.theme['border_dark']};
  }
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
  overflow-y: scroll;
  display: block;
  width: fit-content;
  margin: auto;
`;
