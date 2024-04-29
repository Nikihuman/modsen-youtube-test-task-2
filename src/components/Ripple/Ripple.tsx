import { RippleProps } from './Ripple.props';
import { StyledFirst, StyledRipple, StyledSecond } from './Styles';

export function Ripple({ ...props }: RippleProps) {
  return (
    <StyledRipple {...props} $isLoaded={props.$isLoaded ?? false}>
      <StyledFirst />
      <StyledSecond />
    </StyledRipple>
  );
}
