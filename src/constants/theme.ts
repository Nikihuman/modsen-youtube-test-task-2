export const THEME: ITheme = {
  primary: 'rgba(255, 138, 0, 1)',
  primary_hover: 'rgba(196, 108, 7, 1)',
  text_light: 'rgba(255, 255, 255, 1)',
  text_dark: 'rgba(0, 0, 0, 1)',
  text_hover: 'rgba(183, 181, 181, 1)',
  dark: 'rgba(56, 56, 56, 1)',
  medium: 'rgba(183, 183, 183, 1)',
  border_dark: 'rgba(0, 0, 0, 0.1)',
  border_light: 'rgba(255, 255, 255, 1)',
  light: 'rgba(242, 242, 242, 1)',
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
  primary_hover: string;
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
