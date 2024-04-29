import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => props.theme['primary']};
  color: ${props => props.theme['text_light']};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  padding: 1rem 2rem;
  cursor: pointer;
  transition:
    background-color 500ms,
    color 500ms;
  &:hover {
    background-color: ${props => props.theme['primaty_hover']};
    color: ${props => props.theme['text_hover']};
  }
  @media ${props => props.theme['media']['extra_small']} {
    padding: 5px 10px;
  }
`;
