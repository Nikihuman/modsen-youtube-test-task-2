import {
  StyledNavBar,
  StyledMainSection,
  StyledGenreUl,
  StyledScrollButton,
  StyledGenreSection,
} from './Styled';
import { Search } from '@components/Search/Search';
import { Logo } from '@components/Logo/Logo';
import { ThemeSelector } from '@components/ThemeSelector/ThemeSelector';
import { NavBarProps } from './NavBar.props';
import { GENRES } from '@constants/genres';
import { useCallback, useRef } from 'react';
import { SelectorItem } from '@components/SelectorItem/SelectorItem';

export function NavBar({ setTheme, ...props }: NavBarProps) {
  const ulRef = useRef<HTMLUListElement>(null);
  const scroll = useCallback((scrollOffset: number) => {
    ulRef.current ? (ulRef.current.scrollLeft += scrollOffset) : null;
  }, []);
  const scrollLeft = useCallback(() => {
    scroll(-100);
  }, []);
  const scrollRight = useCallback(() => {
    scroll(100);
  }, []);
  return (
    <StyledNavBar {...props}>
      <StyledMainSection>
        <Logo />
        <Search placeholder="Search..." />
        <ThemeSelector setThemFunc={setTheme} />
      </StyledMainSection>
      <StyledGenreSection>
        <StyledScrollButton $direction="left" onClick={scrollLeft}>
          {'<'}
        </StyledScrollButton>
        <StyledGenreUl ref={ulRef}>
          {GENRES.map(el => (
            <SelectorItem data-test-id={el.name} genre_name={el.name} key={el.name}>
              {el.name.toUpperCase()}
            </SelectorItem>
          ))}
        </StyledGenreUl>
        <StyledScrollButton onClick={scrollRight} $direction="right">
          {'>'}
        </StyledScrollButton>
      </StyledGenreSection>
    </StyledNavBar>
  );
}
