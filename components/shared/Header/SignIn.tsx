import NextLink from 'next/link';
import { Link } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

const linkStyles = css`
  background-color: #e50914;
  border-radius: 3px;
  color: var(--amplify-colors-white);
  font-weight: 400;
  padding: 7px 17px;
  cursor: pointer;
  @media only screen and (max-width: 350px) {
    font-size: 0.75rem;
    padding: 7px 8px;
  }
  &:hover {
    color: var(--amplify-colors-white);
    background-color: #f40612;
  }
`;

export const SignIn = () => {
  return (
    <NextLink href="/signin">
      <Link css={linkStyles}>SignIn</Link>
    </NextLink>
  );
};
