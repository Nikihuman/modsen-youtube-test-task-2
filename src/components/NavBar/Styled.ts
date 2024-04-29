import styled, { css } from 'styled-components';

export const StyledNavBar = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledGenreUl = styled.ul`
  position: relative;
  padding-top: 16px;
  scroll-behavior: smooth;
  overflow-x: scroll;
  width: 100%;
  scroll-snap-align: start;
  white-space: nowrap;
  &::-webkit-scrollbar {
    width: 1.1rem;
  }
`;
export const StyledGenreSection = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  border-bottom: 1px solid ${props => props.theme['border_dark']};
  border-top: 1px solid ${props => props.theme['border_dark']};
`;

export const StyledScrollButton = styled.button<{ $direction: 'left' | 'right' }>`
  display: flex;
  position: sticky;
  top: 0;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  border: none;
  margin: auto 0;
  padding: 0 30px;
  height: 36px;
  border-radius: 12px;
  transition: background-color 250ms;
  @media ${props => props.theme['media']['extra_small']} {
    padding: 0 10px;
  }
  &:active {
    background-color: ${props => props.theme['medium']};
  }
  ${props =>
    props.$direction === 'right' &&
    css`
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    `}
  ${props =>
    props.$direction === 'left' &&
    css`
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    `};
`;
export const StyledMainSection = styled.section`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding-bottom: 16px;
  @media ${props => props.theme['media']['phone']} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
