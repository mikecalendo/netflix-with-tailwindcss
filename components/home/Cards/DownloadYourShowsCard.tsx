import { Flex, Image, Text, View } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

import { GeneralCard } from './GeneralCard';

const cardStyles = css`
  @media only screen and (min-width: 1024px) {
    flex-direction: row-reverse;
  }
`;

const animationContainerStyles = css`
  position: relative;
  width: 50%;
  min-width: 16rem;

  @media only screen and (max-width: 1023px) {
    width: 80%;
  }
`;

const animationStyles = css`
  position: absolute;
  align-items: center;
  width: 70%;
  @media only screen and (max-width: 320px) {
    width: 80%;
  }
  left: 50%;
  bottom: 8%;
  transform: translateX(-50%);
  @media only screen and (max-width: 320px) {
    left: 10%;
    transform: translateX(0);
  }

  background-color: var(--amplify-colors-black);
  box-shadow: 0 0 2em 0 #000;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: 0.75rem;
  padding: 0.5rem 0.75rem;

  &::after {
    display: block;
    content: '';
    width: 3rem;
    height: 3.75rem;
    background: url('https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif')
      center center no-repeat;
    background-size: 100%;
    flex: none;
  }
`;

export const DownloadYourShowsCard = () => {
  return (
    <GeneralCard
      css={cardStyles}
      title="Download your shows to watch offline."
      subtitle="Save your favorites easily and always have something to watch."
    >
      <View css={animationContainerStyles}>
        <Image
          alt="Download your shows to watch offline."
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        />
        <Flex css={animationStyles}>
          <View flex="none">
            <Image
              alt="Stranger Things"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              height={{ base: '3rem', small: '5rem' }}
            />
          </View>
          <View flex="1 1">
            <Text
              color="white"
              fontWeight="600"
              fontSize={{ base: '0.6rem', small: '0.9rem' }}
            >
              Stranger Things
            </Text>
            <Text
              color="#0071eb"
              fontWeight="400"
              fontSize={{ base: '0.6rem', small: '0.9rem' }}
            >
              Downloading...
            </Text>
          </View>
        </Flex>
      </View>
    </GeneralCard>
  );
};
