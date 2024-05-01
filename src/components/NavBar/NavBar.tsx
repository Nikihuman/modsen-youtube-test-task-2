import {
  StyledNavBar,
  StyledMainSection,
  StyledGenreUl,
  StyledScrollButton,
  StyledGenreSection,
} from './Styled';
import { Search } from '@components/NavBar/Search/Search';
import { Logo } from '@components/NavBar/Logo/Logo';
import { ThemeSelector } from '@components/NavBar/ThemeSelector/ThemeSelector';
import { NavBarProps } from './NavBar.props';
import { GENRES } from '@constants/genres';
import { useCallback, useRef } from 'react';
import { SelectorItem } from '@components/SelectorItem/SelectorItem';

export function NavBar({ setTheme, ...props }: NavBarProps) {
  const ulRef = useRef<HTMLUListElement>(null);

  const scroll = useCallback((scrollOffset: number, direction: 'left' | 'right') => {
    return () => {
      ulRef.current
        ? (ulRef.current.scrollLeft += direction === 'right' ? scrollOffset : -scrollOffset)
        : null;
    };
  }, []);

  return (
    <StyledNavBar {...props}>
      <StyledMainSection>
        <Logo />
        <Search placeholder="Search..." />
        <ThemeSelector setThemFunc={setTheme} />
      </StyledMainSection>
      <StyledGenreSection>
        <StyledScrollButton $direction="left" onClick={scroll(100, 'left')}>
          {'<'}
        </StyledScrollButton>
        <StyledGenreUl ref={ulRef}>
          {GENRES.map(el => (
            <SelectorItem data-test-id={el.name} genre_name={el.name} key={el.name}>
              {el.name.toUpperCase()}
            </SelectorItem>
          ))}
        </StyledGenreUl>
        <StyledScrollButton onClick={scroll(100, 'right')} $direction="right">
          {'>'}
        </StyledScrollButton>
      </StyledGenreSection>
    </StyledNavBar>
  );
}
