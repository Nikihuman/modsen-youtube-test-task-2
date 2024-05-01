import { ITheme, THEME_KEY } from '@constants/theme';
import { saveState } from '@store/storage';
import { useCallback } from 'react';

import { StyledThemeSelector, ThemeSelectorWrapper } from './Styles';
import { ThemeSelectorProps } from './ThemeSelector.props';

export function ThemeSelector({ setThemFunc, ...props }: ThemeSelectorProps) {
  const changeTheme = useCallback(() => {
    setThemFunc(state => {
      const newTheme = {
        border_light: state.border_dark,
        dark: state.light,
        light: state.dark,
        medium: state.medium,
        primary: state.primary,
        primary_hover: state.primary_hover,
        text_dark: state.text_light,
        text_hover: state.text_hover,
        text_light: state.text_dark,
        border_dark: state.border_light,
        media: { ...state.media },
      };
      saveState<ITheme>(THEME_KEY, newTheme);
      return newTheme;
    });
  }, []);

  return (
    <ThemeSelectorWrapper data-test-id="theme-id" onClick={changeTheme} {...props}>
      <StyledThemeSelector />
    </ThemeSelectorWrapper>
  );
}
