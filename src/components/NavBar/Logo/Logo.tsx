import { LogoProps } from './Logo.props';
import { StyledImage, StyledLogo } from './Styles';

export function Logo({ ...props }: LogoProps) {
  return (
    <StyledLogo {...props}>
      <StyledImage />
      <span>ModsenFilms</span>
    </StyledLogo>
  );
}
