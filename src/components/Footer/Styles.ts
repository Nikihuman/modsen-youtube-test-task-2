import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  padding-top: 60px;
  border-top: 1px solid ${props => props.theme['border_dark']};
  margin-top: 50px;
`;

export const StyledLinksWrapper = styled.section`
  display: flex;
  @media ${props => props.theme['media']['phone']} {
    flex-direction: column;
    gap: 30px;
  }
`;

export const StyledLinksBlock = styled.div`
  width: 230px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 7px;
  margin-right: 32px;
  @media ${props => props.theme['media']['extra_small']} {
    font-size: 16px;
  }
`;

export const StyledSocialLinksBlock = styled.div`
  display: flex;
  gap: 27px;
  margin-left: auto;
  @media ${props => props.theme['media']['phone']} {
    margin: 0 auto;
  }
`;

export const StyledCompanyName = styled.section`
  width: max-content;
  margin: 20px auto;
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.theme['text_hover']};
  @media ${props => props.theme['media']['extra_small']} {
    font-size: 16px;
  }
`;
