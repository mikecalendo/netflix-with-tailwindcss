import { Image, Flex } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

import { GeneralCard } from './GeneralCard';

const cardStyles = css`
  @media only screen and (min-width: 1024px) {
    flex-direction: row-reverse;
  }
`;

const imageContainerStyles = css`
  width: 50%;
  @media only screen and (max-width: 1023px) {
    width: 80%;
  }
`;

export const CreateProfilesForKidsCard = () => {
  return (
    <GeneralCard
      css={cardStyles}
      title="Create profiles for kids."
      subtitle="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
    >
      <Flex css={imageContainerStyles}>
        <Image
          alt="Create Profiles for kids"
          src="https://occ-0-1360-1007.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
        />
      </Flex>
    </GeneralCard>
  );
};
