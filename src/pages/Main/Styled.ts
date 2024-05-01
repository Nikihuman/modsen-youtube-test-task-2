import { Button } from '@components/Button/Button';
import styled, { createGlobalStyle } from 'styled-components';

export const StyledMainPage = styled.div`
  max-width: 1440px;
  padding: 15px 20px;
  margin: 0 auto;
  @media ${props => props.theme['media']['extra_small']} {
    padding: 15px;
  }
`;

export const StyledMessage = styled.div`
  width: fit-content;
  margin: 30px auto;
  font-size: 20px;
  font-weight: 500;
`;

export const StyledButton = styled(Button)`
  margin: 50px auto;
`;

export const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    color: ${props => props.theme['text_dark']};
    background-color: ${props => props.theme['light']};
    transition: background-color 1s, color 1s;
}
`;
