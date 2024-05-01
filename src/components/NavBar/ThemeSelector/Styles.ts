import styled, { css } from 'styled-components';

export const ThemeSelectorWrapper = styled.button`
  display: flex;
  height: 25px;
  width: 50px;
  min-width: 50px;
  border: 3px solid ${props => props.theme['primary']};
  border-radius: 13px;
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
  @media ${props => props.theme['media']['phone']} {
    align-self: flex-end;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

export const StyledThemeSelector = styled.div`
  height: 20px;
  width: 20px;
  border: 3px solid ${props => props.theme['primary']};
  border-radius: 9.5px;
  box-sizing: border-box;
  background-color: ${props => props.theme['light']};
  transition:
    background-color 1s,
    transform 1s;
  ${props =>
    props.theme['light'] === 'rgba(56, 56, 56, 1)' &&
    css`
      transform: translateX(25px);
    `}
`;
