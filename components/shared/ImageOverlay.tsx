import { View } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

const imageOverlayStyles = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--amplify-colors-overlay-40);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;
export const ImageOverlay = () => {
  return <View css={imageOverlayStyles} />;
};
