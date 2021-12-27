import { Divider as AmplifyDivider } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

const dividerStyles = css`
  margin: 2px 0;
`;
export const Divider = () => {
  return <AmplifyDivider css={dividerStyles} />;
};
