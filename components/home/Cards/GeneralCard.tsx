import { Card, Flex, Heading, FlexProps } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

interface GeneralCardProps extends FlexProps {
  title?: string;
  subtitle?: string;
}

const cardStyles = css`
  display: block;
  background-color: var(--amplify-colors-black);
  padding: 50px 5%;
  @media only screen and (min-width: 550px) {
    padding: 70px 45px;
  }
  border-radius: 0;
  border-bottom: 8px solid #222;
`;

const contentContainerStyles = css`
  max-width: 1100px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  @media only screen and (max-width: 1023px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const textContainerStyles = css`
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  & .amplify-heading {
    color: var(--amplify-colors-white);
    text-align: center;
  }
  & h1.amplify-heading {
    font-size: 3.125rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
    line-height: 1.1;
    @media only screen and (max-width: 549px) {
      font-size: 1.625rem;
    }
  }
  & h2.amplify-heading {
    font-size: 1.625rem;
    font-weight: 400;
    margin: 0.75rem 0 0.25rem;
    @media only screen and (max-width: 549px) {
      font-size: 1.125rem;
    }
  }
`;

export const GeneralCard: React.FC<GeneralCardProps> = ({
  children,
  title,
  subtitle,
  ...rest
}) => {
  return (
    <Card css={cardStyles}>
      <Flex css={contentContainerStyles} {...rest}>
        <Flex css={textContainerStyles}>
          {title && <Heading level={1}>{title}</Heading>}
          {subtitle && <Heading level={2}>{subtitle}</Heading>}
        </Flex>
        {children}
      </Flex>
    </Card>
  );
};
