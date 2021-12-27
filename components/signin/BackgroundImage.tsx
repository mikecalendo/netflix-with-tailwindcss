import { Image, View } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

import { ImageOverlay } from '../shared/ImageOverlay';

const imageStyles = css`
  object-fit: cover;
  min-height: 100vh;
  @media only screen and (min-width: 1024px) and (max-height: 768px) {
    min-height: 130vh;
  }
  min-width: 100vw;
`;

export const BackgroundImage = () => {
  return (
    <View position="relative">
      <Image
        alt="Sign in background image"
        css={imageStyles}
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ddd4085b-8ed5-416a-9b80-5085784ba0e9/c11c6167-b1e7-48f7-86af-f2152cc300e0/US-en-20211206-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/ddd4085b-8ed5-416a-9b80-5085784ba0e9/c11c6167-b1e7-48f7-86af-f2152cc300e0/US-en-20211206-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/ddd4085b-8ed5-416a-9b80-5085784ba0e9/c11c6167-b1e7-48f7-86af-f2152cc300e0/US-en-20211206-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/ddd4085b-8ed5-416a-9b80-5085784ba0e9/c11c6167-b1e7-48f7-86af-f2152cc300e0/US-en-20211206-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
      />
      <ImageOverlay />
    </View>
  );
};
