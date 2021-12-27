import { Flex, Heading, TextField, PasswordField } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';
import Link from 'next/link';

import { Button } from '../shared/Button';

const formWrapperStyles = css`
  position: absolute;
  flex-direction: column;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);

  background-color: var(--amplify-colors-overlay-30);

  & h1.amplify-heading {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0 auto;
    line-height: 1.1;
    max-width: 800px;
    @media only screen and (min-width: 350px) {
      font-size: 2rem;
    }
  }
`;

const textFieldStyles = css`
  & .amplify-input:focus {
    border-color: var(--amplify-colors-orange-60);
  }
`;

const passwordField = css`
  & .amplify-input:focus {
    border-color: var(--amplify-colors-orange-60);
  }
`;

export const SignInForm = () => {
  return (
    <Flex css={formWrapperStyles}>
      <Heading color="var(--amplify-colors-white)" level={1}>
        Sign In
      </Heading>
      <Flex
        as="form"
        direction="column"
        gap={{ base: '1rem', large: '1.5rem' }}
      >
        <TextField
          css={textFieldStyles}
          color="var(--amplify-colors-white)"
          label="Account number"
          placeholder="Email or phone number"
          labelHidden
        />
        <PasswordField
          css={passwordField}
          color="var(--amplify-colors-white)"
          label="Password"
          placeholder="Password"
          labelHidden
        />
        <Link href="/media">
          <Button borderRadius="3px">Sign In</Button>
        </Link>
      </Flex>
    </Flex>
  );
};
