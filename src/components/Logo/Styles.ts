import styled from 'styled-components';
import Icon from '@assets/images/youtube.svg';

export const StyledLogo = styled.div`
  display: flex;
  gap: 6px;
  font-size: 18px;
  font-weight: 700;
  span {
    align-self: center;
  }
`;

export const StyledImage = styled(Icon)`
  width: 40px;
  height: 30px;
`;

export const StyledMainSection = styled.section`
  justify-content: space-between;
  display: flex;
  justify-content: center;
`;
