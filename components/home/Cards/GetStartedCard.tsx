import { Card, Heading, Image, View } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

import { GetStartedForm } from '../../shared/GetStartedForm';
import { ImageOverlay } from '../../shared/ImageOverlay';

const cardStyles = css`
  display: block;
  position: relative;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  @media only screen and (min-width: 550px) {
    padding: 70px 45px;
  }
  border-radius: 0;
`;

const imageWrapperStyles = css`
  position: absolute;
  top: -100px;
  right: 0;
  bottom: 0;
  left: 0;
`;

const textContainerStyles = css`
  max-width: 950px;
  margin: 0 auto;
  position: relative;
  padding: 75px 0;
  @media only screen and (max-width: 349px) {
    padding: 0;
  }
  text-align: center;

  & .amplify-heading {
    color: var(--amplify-colors-white);
  }

  & h1.amplify-heading {
    font-size: 1.75rem;
    font-weight: 700;
    margin: 0 auto;
    line-height: 1.1;
    max-width: 800px;
    @media only screen and (min-width: 350px) {
      font-size: 4rem;
    }
  }

  & h2.amplify-heading {
    font-size: 1.125rem;
    max-width: 800px;
    font-weight: 400;
    margin: 1rem auto;
    @media only screen and (min-width: 350px) {
      font-size: 1.625rem;
    }
  }
`;

const CardBackground = () => {
  return (
    <View css={imageWrapperStyles}>
      <Image
        alt="Unlimited movies, TV shows and more"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/03fdc4bf-72f6-4926-83a7-a76e6a1a5591/9f09b85f-530e-4090-82c3-a60ea2b3177f/US-en-20211115-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/03fdc4bf-72f6-4926-83a7-a76e6a1a5591/9f09b85f-530e-4090-82c3-a60ea2b3177f/US-en-20211115-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/03fdc4bf-72f6-4926-83a7-a76e6a1a5591/9f09b85f-530e-4090-82c3-a60ea2b3177f/US-en-20211115-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/03fdc4bf-72f6-4926-83a7-a76e6a1a5591/9f09b85f-530e-4090-82c3-a60ea2b3177f/US-en-20211115-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
        height="100%"
        width="100%"
        objectFit="cover"
      />
      <ImageOverlay />
    </View>
  );
};

const CardText = () => {
  return (
    <View css={textContainerStyles}>
      <Heading level={1}>Unlimited movies, TV shows, and more.</Heading>
      <Heading level={2}>Watch anywhere. Cancel anytime.</Heading>
      <GetStartedForm />
    </View>
  );
};

export const GetStartedCard = () => {
  return (
    <Card css={cardStyles}>
      <CardBackground />
      <CardText />
    </Card>
  );
};
