import Icon from '@assets/images/youtube.svg';
import { SelectorItem } from '@components/SelectorItem/SelectorItem';
import styled, { css } from 'styled-components';

export const StyledMovieCard = styled.div`
  position: relative;
  display: flex;
  box-shadow: 0px 0px 10px ${props => props.theme['text_dark']};
  box-sizing: border-box;
  width: 330px;
  height: 225px;
  @media ${props => props.theme['media']['big_tablet_card']} {
    width: 400px;
  }
  @media ${props => props.theme['media']['tablet_card']} {
    width: 400px;
  }
  @media ${props => props.theme['media']['phone_card']} {
    width: 400px;
  }
  @media ${props => props.theme['media']['extra_small']} {
    width: 212px;
    height: 129px;
  }
`;

export const StyledMovieImage = styled.img<{ $isLoaded: boolean }>`
  height: 100%;
  display: none;
  ${props =>
    props.$isLoaded &&
    css`
      display: block;
    `}
  @media ${props => props.theme['media']['extra_small']} {
    height: 124px;
  }
`;
export const StyledMovieImageWrapper = styled.div`
  min-width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  box-sizing: border-box;
  border-right: 1px solid ${props => props.theme['border_dark']};
  @media ${props => props.theme['media']['extra_small']} {
    height: 124px;
    min-width: 83px;
  }
`;

export const StyledMovieInfo = styled.section`
  min-width: 180px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 5px;
  @media ${props => props.theme['media']['extra_small']} {
    min-width: 90px;
  }
`;

export const StyledMovieName = styled.div`
  background-color: transparent;
  width: fit-content;
  text-align: center;
  margin: 0 auto;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 700;
  @media ${props => props.theme['media']['extra_small']} {
    margin-top: 5px;
    font-size: 8px;
    font-weight: 700;
  }
`;

export const StyledMovieGenres = styled.ul`
  margin: 0 auto;
  list-style: none;
  z-index: 3;
  background-color: transparent;
  width: fit-content;
  text-align: center;
`;

export const StyledHover = styled.button`
  position: absolute;
  top: 0;
  box-sizing: border-box;
  width: calc(100% + 1.5px);
  height: 100%;
  cursor: pointer;
  border: none;
  background: transparent;
  transition:
    background 0.5s,
    box-shadow 0.5s;
  z-index: 2;
  &:hover {
    box-shadow: 0px 0px 10px ${props => props.theme['text_dark']};
    background: rgb(6 6 6 / 31.1%);
  }
`;

export const StyledSelectorItem = styled(SelectorItem)`
  font-size: 12px;
  padding: 3px 6px;
  margin: 2px 4px;
  @media ${props => props.theme['media']['extra_small']} {
    font-size: 10px;
    padding: 2px 4px;
    margin: 1px 3px;
  }
`;

export const StyledDefaultLogo = styled(Icon)<{ $isLoaded: boolean }>`
  width: 60px;
  height: 45px;
  ${props =>
    props.$isLoaded &&
    css`
      display: none;
    `}
`;
