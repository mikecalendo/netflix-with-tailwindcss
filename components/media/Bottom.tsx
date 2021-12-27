import { Button, Flex, Heading, Text, View } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';
import Link from 'next/link';

const bottomContainerStyles = css`
  background-size: cover;
  background-image: url('https://media.netflix.com/static/images/company_assets_bg.png');
`;

const flexContainerStyles = css`
  margin-top: 5rem;
  padding: 80px 10% 80px;
  background-image: linear-gradient(
    270deg,
    #0f0f0f 15.47%,
    rgba(15, 15, 15, 0.731185) 49%,
    rgba(15, 15, 15, 0.34) 75.16%
  );
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const buttonStyles = css`
  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Bottom = () => {
  return (
    <View css={bottomContainerStyles}>
      <Flex css={flexContainerStyles}>
        <Heading
          level={1}
          color="var(--amplify-colors-white)"
          fontSize="1.75rem"
          fontWeight="700"
          lineHeight="1.25"
        >
          Looking for company assets?
        </Heading>
        <Text
          color="var(--amplify-colors-white)"
          fontSize="1.25rem"
          fontWeight="400"
          lineHeight="1.5"
        >
          Get more images and information about Netflix on our company site.
        </Text>
        <Link href="https://about.netflix.com/en/company-assets">
          <Button
            css={buttonStyles}
            variation="link"
            color="var(--amplify-colors-white)"
            fontSize="0.75rem"
            fontWeight="600"
            border="1px solid var(--amplify-colors-white)"
            textDecoration="none"
          >
            Go to About Netflix
          </Button>
        </Link>
      </Flex>
    </View>
  );
};
