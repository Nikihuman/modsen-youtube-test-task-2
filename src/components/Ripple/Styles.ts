import { css, keyframes, styled } from 'styled-components';

const ripple = keyframes`
0%{
	top: 36px;
	left: 36px;
	width: 0px;
	height: 0px;
	opacity: 0;

}
5%{
	top: 36px;
	left: 36px;
	width: 0px;
	height: 0px;
	opacity: 1;

}
100%{
	top: 0px;
	left: 0px;
	width: 72px;
	height: 72px;
	opacity: 0;
	
}
`;

export const StyledRipple = styled.div<{ $isLoaded?: boolean }>`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  ${props =>
    props.$isLoaded &&
    css`
      display: none;
    `}
`;

export const StyledFirst = styled.div`
  position: absolute;
  border: 4px solid ${props => props.theme['dark']};
  border-radius: 50%;
  opacity: 1;
  animation: ${ripple} 1s ease infinite;
`;
export const StyledSecond = styled(StyledFirst)`
  animation-delay: -0.5s;
`;
