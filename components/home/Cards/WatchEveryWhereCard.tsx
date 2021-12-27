import { Flex, Image, View } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

import { GeneralCard } from './GeneralCard';

const animationContainerStyles = css`
  position: relative;
`;

const imageStyles = css`
  position: relative;
  z-index: 1;
`;

const videoStyles = css`
  position: absolute;
  width: 65%;
  top: 8%;
  left: 18%;
`;

export const WatchEveryWhereCard = () => {
  return (
    <GeneralCard
      title="Watch everywhere."
      subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
    >
      <Flex css={animationContainerStyles}>
        <Image
          alt="Watch everywhere"
          css={imageStyles}
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
        />
        <View as="video" css={videoStyles} autoPlay playsInline muted loop>
          <View
            as="source"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
            type="video/mp4"
          />
        </View>
      </Flex>
    </GeneralCard>
  );
};
