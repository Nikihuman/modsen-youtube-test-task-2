import styled from 'styled-components';

export const StyledLink = styled.a`
  color: ${props => props.theme['text_dark']};
  font-size: 20px;
  font-weight: 500;
  height: min-content;
  text-decoration: none;
  transition:
    color 1s,
    background-color 1s;
  * {
    background-color: transparent;
    transition: fill 0.5s;
  }
  &:hover {
    color: ${props => props.theme['text_hover']};
    transition: color 500ms;
    * {
      fill: ${props => props.theme['text_dark']};
    }
  }
`;
