import { LinkProps } from './Link.props';
import { StyledLink } from './Styles';

export function Link({ href, children, ...props }: LinkProps) {
  return (
    <StyledLink href={href} {...props}>
      {children}
    </StyledLink>
  );
}
