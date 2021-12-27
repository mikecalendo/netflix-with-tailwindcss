import { Image, View } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

import { GeneralCard } from './GeneralCard';

const animationContainerStyles = css`
  position: relative;
  width: 50%;
  @media only screen and (max-width: 1023px) {
    width: 80%;
  }
`;

const videoStyles = css`
  position: absolute;
  object-fit: contain;
  width: 73%;
  height: 60%;
  top: 18%;
  left: 13%;
`;

export const EnjoyYourTVCard = () => {
  return (
    <GeneralCard
      title="Enjoy on your TV."
      subtitle="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more."
    >
      <View css={animationContainerStyles}>
        <Image
          alt="Enjoy on your TV."
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        />
        <View as="video" css={videoStyles} autoPlay muted loop>
          <View
            as="source"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
            type="video/mp4"
          />
        </View>
      </View>
    </GeneralCard>
  );
};
