import { useCallback } from 'react';
import { StyledThemeSelector, ThemeSelectorWrapper } from './Styles';
import { ThemeSelectorProps } from './ThemeSelector.props';

export function ThemeSelector({ setThemFunc, ...props }: ThemeSelectorProps) {
  const changeTheme = useCallback(() => {
    setThemFunc(state => {
      return {
        border_light: state.border_dark,
        dark: state.light,
        light: state.dark,
        medium: state.medium,
        primary: state.primary,
        primaty_hover: state.primaty_hover,
        text_dark: state.text_light,
        text_hover: state.text_hover,
        text_light: state.text_dark,
        border_dark: state.border_light,
        media: { ...state.media },
      };
    });
  }, []);

  return (
    <ThemeSelectorWrapper data-test-id="theme-id" onClick={changeTheme} {...props}>
      <StyledThemeSelector />
    </ThemeSelectorWrapper>
  );
}
