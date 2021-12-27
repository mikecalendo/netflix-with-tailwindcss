import Link from 'next/link';

import { Icon } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

import { LOGO_PATH_DATA } from '../../../utils/constants';

const iconStyles = css`
  width: auto;
  height: 1.5rem;
  margin-right: auto;
  cursor: pointer;
  @media only screen and (max-width: 320px) {
    width: 4rem;
  }
  @media only screen and (min-width: 550px) and (max-width: 949px) {
    width: 6.75rem;
    height: 2rem;
  }
  @media only screen and (min-width: 1450px) {
    width: 10rem;
    height: 3rem;
  }
`;

export const Logo = () => {
  return (
    <Link href="/">
      <Icon
        ariaLabel="Netflix"
        css={iconStyles}
        viewBox={{ minX: 0, minY: 0, width: 111, height: 30 }}
        pathData={LOGO_PATH_DATA}
        fill="#e50914"
      />
    </Link>
  );
};
