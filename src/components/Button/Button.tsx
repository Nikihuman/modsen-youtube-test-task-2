import { ButtonProps } from './Button.props';
import { StyledButton } from './Styles';

export function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
