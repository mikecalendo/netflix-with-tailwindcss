import { Expander, ExpanderItem, View } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

import { GeneralCard } from './GeneralCard';
import { GetStartedForm } from '../../shared/GetStartedForm';

const expanderStyles = css`
  width: 75%;
  background-color: var(--amplify-colors-black);
  & .amplify-expander__item {
    background-color: #303030;
    border-radius: 0;
    color: var(--amplify-colors-white);
    margin: 1rem auto;
    padding: 0.5rem 0;
  }
  & .amplify-expander__header {
    box-shadow: none;
    font-size: 1.625rem;
    font-weight: 400;
    @media only screen and (max-width: 549px) {
      font-size: 1.125rem;
    }
  }
  & .amplify-expander__trigger:hover {
    background-color: #303030;
  }

  & .amplify-expander__content__text {
    color: var(--amplify-colors-white);
    font-size: 1.625rem;
    @media only screen and (max-width: 549px) {
      font-size: 1.125rem;
    }
  }
`;

export const FAQCard = () => {
  return (
    <GeneralCard
      title="Frequently Asked Questions"
      direction="column"
      gap="3rem"
    >
      <Expander css={expanderStyles} isCollapsible>
        <ExpanderItem value="1" title="What is Netflix?">
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries, and more on
          thousands of internet-connected devices.
          <View as="br" />
          <View as="br" />
          You can watch as much as you want, whenever you want without a single
          commercial – all for one low monthly price. There's always something
          new to discover and new TV shows and movies are added every week!
        </ExpanderItem>
        <ExpanderItem value="2" title="How much does Netflix cost?">
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
          streaming device, all for one fixed monthly fee. Plans range from
          $8.99 to $17.99 a month. No extra costs, no contracts.
        </ExpanderItem>
        <ExpanderItem value="3" title="Where can I watch?">
          Watch anywhere, anytime. Sign in with your Netflix account to watch
          instantly on the web at netflix.com from your personal computer or on
          any internet-connected device that offers the Netflix app, including
          smart TVs, smartphones, tablets, streaming media players and game
          consoles.
          <View as="br" />
          <View as="br" />
          You can also download your favorite shows with the iOS, Android, or
          Windows 10 app. Use downloads to watch while you're on the go and
          without an internet connection. Take Netflix with you anywhere.
        </ExpanderItem>
        <ExpanderItem value="4" title="How do I cancel?">
          Netflix is flexible. There are no pesky contracts and no commitments.
          You can easily cancel your account online in two clicks. There are no
          cancellation fees – start or stop your account anytime.
        </ExpanderItem>
        <ExpanderItem value="5" title="What can I watch on Netflix?">
          Netflix has an extensive library of feature films, documentaries, TV
          shows, anime, award-winning Netflix originals, and more. Watch as much
          as you want, anytime you want.
        </ExpanderItem>
        <ExpanderItem value="6" title="Is Netflix good for kids?">
          The Netflix Kids experience is included in your membership to give
          parents control while kids enjoy family-friendly TV shows and movies
          in their own space.
          <View as="br" />
          <View as="br" />
          Kids profiles come with PIN-protected parental controls that let you
          restrict the maturity rating of content kids can watch and block
          specific titles you don’t want kids to see.
        </ExpanderItem>
      </Expander>
      <GetStartedForm />
    </GeneralCard>
  );
};
