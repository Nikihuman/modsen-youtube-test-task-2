export const THEME: ITheme = {
  primary: '#FF8A00',
  primaty_hover: '#c46c07',
  text_light: '#FFFFFF',
  text_dark: 'rgb(0, 0, 0)',
  text_hover: '#b7b5b5',
  dark: '#383838',
  medium: '#b7b7b7',
  border_dark: 'rgba(0, 0, 0, 0.1)',
  border_light: '#FFFFFF',
  light: '#f2f2f2',
  media: {
    big_tablet: '(max-width: 1440px)',
    tablet: '(max-width: 1080px)',
    phone: '(max-width: 720px)',
    big_tablet_card: '(min-width: 1275px) and (max-width: 1440px)',
    tablet_card: '(max-width: 1080px) and (min-width: 870px)',
    phone_card: '(max-width: 720px) and (min-width: 510px)',
    extra_small: '(max-width: 390px)',
  },
};

export interface ITheme {
  text_light: string;
  text_dark: string;
  text_hover: string;
  border_light: string;
  border_dark: string;
  primary: string;
  primaty_hover: string;
  dark: string;
  medium: string;
  light: string;
  media: {
    big_tablet: string;
    tablet: string;
    phone: string;
    big_tablet_card: string;
    tablet_card: string;
    phone_card: string;
    extra_small: string;
  };
}
