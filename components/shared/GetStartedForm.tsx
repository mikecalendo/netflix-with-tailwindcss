import {
  Flex,
  Heading,
  IconChevronRight,
  TextField,
  View
} from '@aws-amplify/ui-react';
import { css } from '@emotion/react';
import Link from 'next/link';

import { Button } from '../shared/Button';

const formStyles = css`
  width: 100%;
  max-width: 950px;
  padding-top: 0.85rem;
  flex-direction: column;
  align-items: center;
`;

const inputContainerStyles = css`
  gap: 0;
  margin: 0 auto;
  width: 80%;
  @media screen and (max-width: 1023px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const inputStyles = css`
  & .amplify-input {
    width: 100%;
    height: 48px;
    text-align: left;
    border-radius: 0;
    background-color: var(--amplify-colors-white);
    padding: 0.5rem 1rem 0;

    @media only screen and (min-width: 740px) {
      height: 60px;
    }

    @media only screen and (min-width: 1450px) {
      min-width: 500px;
      height: 70px;
    }
  }
`;

const labelStyles = css`
  position: relative;
  flex: 1;
  & .amplify-label {
    position: absolute;
    color: #8c8c8c;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease;
    z-index: 1;
  }
  &:focus-within .amplify-label {
    top: 6px;
    font-weight: 700;
    font-size: 13px;
    transform: translateY(0);
  }
`;

export const GetStartedForm = () => {
  return (
    <Flex as="form" css={formStyles}>
      <Heading
        level={3}
        color="white"
        fontSize="1rem"
        fontWeight="400"
        padding="0 5%"
        textAlign="center"
      >
        Ready to watch? Enter your email to create or restart your membership.
      </Heading>
      <Flex css={inputContainerStyles}>
        <View as="label" css={labelStyles}>
          <TextField css={inputStyles} label="Email address" />
        </View>
        <Link href="/media">
          <Button>
            Get Started
            <IconChevronRight />
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};
