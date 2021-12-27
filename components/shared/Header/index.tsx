import { Flex } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

import { Logo } from './Logo';
import { SignIn } from './SignIn';
import { LangSelection } from '../LangSelection';

interface HeaderProps {
  /**
   * Determine whether to show signi button and language selection
   */
  isShow?: boolean;
}

const headerStyles = css`
  position: relative;
  margin: 0 3.5rem;
  @media only screen and (max-width: 549px) {
    margin: 0 5%;
  }
  padding-block-start: 1.25rem;
  justify-content: flex-start;
  align-items: center;
  z-index: 10;
`;

export const Header = (props) => {
  const { isShow = true, ...rest } = props;
  return (
    <Flex css={headerStyles} {...rest}>
      <Logo />
      {isShow && (
        <Flex alignItems="center">
          <LangSelection />
          <SignIn />
        </Flex>
      )}
    </Flex>
  );
};
