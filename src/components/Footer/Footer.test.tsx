import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { THEME } from '../../constants/theme';
import { FIRST_BLOCK, SECOND_BLOCK, SOCIAL_MEDIA } from '../../constants/footersLinks';

test('Testing the Footer component', () => {
  render(
    <ThemeProvider theme={THEME}>
      <Footer data-testid="footer-element" />
    </ThemeProvider>,
  );
  const links = screen.getAllByRole('link');
  const footer = screen.getByTestId('footer-element');
  expect(footer).toBeInTheDocument();
  links.forEach(el => expect(el).toBeInTheDocument());
  expect(links.length).toEqual(FIRST_BLOCK.length + SECOND_BLOCK.length + SOCIAL_MEDIA.length);
  expect(footer).toMatchSnapshot('footer snapshot');
});
