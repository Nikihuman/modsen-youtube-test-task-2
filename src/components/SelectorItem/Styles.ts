import styled, { css } from 'styled-components';

export const StyledSelectorItem = styled.li<{ $active: boolean }>`
  background-color: ${props => props.theme['medium']};
  color: ${props => props.theme['text_dark']};
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  margin: 0 5px;
  width: max-content;
  min-width: max-content;
  flex-wrap: nowrap;
  font-weight: 400;
  border: 1px solid ${props => props.theme['border_dark']};
  border-radius: 15px;
  padding: 5px 10px;
  transition:
    background-color 500ms,
    color 500ms;
  &:hover {
    background-color: ${props => props.theme['dark']};
    color: ${props => props.theme['text_light']};
  }
  @media ${props => props.theme['media']['extra_small']} {
    font-size: 10px;
    padding: 3px 6px;
    margin: 0 3px;
  }
  ${props =>
    props.$active &&
    css`
      color: ${props => props.theme['text_light']};
      background-color: ${props => props.theme['dark']};
      &:hover {
        background-color: ${props => props.theme['medium']};
        color: ${props => props.theme['text_dark']};
      }
    `}
`;
