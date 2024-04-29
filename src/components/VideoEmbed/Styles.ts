import { Button } from '@components/Button/Button';
import { css, styled } from 'styled-components';

export const StyledVideoEmbed = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${props => props.theme['media']['phone']} {
    min-height: 250px;
  }
  @media ${props => props.theme['media']['extra_small']} {
    min-height: 150px;
  }
`;

export const StyledIframe = styled.iframe`
  border: none;
  background-color: none;
`;

export const VideoSelectorButton = styled(Button)<{ $active: boolean }>`
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 500;
  margin: 5px auto;
  @media ${props => props.theme['media']['phone']} {
    padding: 3px 6px;
    font-size: 10px;
  }
  @media ${props => props.theme['media']['extra_small']} {
    padding: 3px 6px;
    font-size: 10px;
  }
  ${props =>
    props.$active &&
    css`
      background-color: ${props => props.theme['medium']};
    `}
`;

export const VideoSelectorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${props => props.theme['media']['phone']} {
    justify-content: center;
  }
  @media ${props => props.theme['media']['extra_small']} {
    justify-content: center;
  }
`;
