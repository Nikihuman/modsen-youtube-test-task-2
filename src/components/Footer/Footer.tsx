import { Link } from '@components/Footer/Link/Link';
import { FIRST_BLOCK, SECOND_BLOCK, SOCIAL_MEDIA } from '@constants/footersLinks';

import { FooterProps } from './Footer.props';
import {
  StyledCompanyName,
  StyledFooter,
  StyledLinksBlock,
  StyledLinksWrapper,
  StyledSocialLinksBlock,
} from './Styles';

export function Footer({ ...props }: FooterProps) {
  return (
    <StyledFooter {...props}>
      <StyledLinksWrapper>
        <StyledLinksBlock>
          {FIRST_BLOCK.map(el => (
            <Link key={el.value} href={el.link}>
              {el.value}
            </Link>
          ))}
        </StyledLinksBlock>
        <StyledLinksBlock>
          {SECOND_BLOCK.map(el => (
            <Link key={el.value} href={el.link}>
              {el.value}
            </Link>
          ))}
        </StyledLinksBlock>
        <StyledSocialLinksBlock>
          {SOCIAL_MEDIA.map((el, i) => (
            <Link key={i} href={el.link}>
              {el.value}
            </Link>
          ))}
        </StyledSocialLinksBlock>
      </StyledLinksWrapper>
      <StyledCompanyName>2023 Modsen company</StyledCompanyName>
    </StyledFooter>
  );
}
