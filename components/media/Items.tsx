import {
  Flex,
  Grid,
  Link,
  Heading,
  IconMovie,
  IconTheaters,
  IconSource,
  IconEscalatorWarning,
  IconVideocam,
  Text,
  ToggleButton,
  ToggleButtonGroup,
  ScrollView,
  View
} from '@aws-amplify/ui-react';
import { css } from '@emotion/react';
import * as React from 'react';

import { Divider } from '../shared/Divider';

interface ItemProps {
  imageURL: string;
  detailURL: string;
  date: string;
}

const itemContainerStyles = css`
  background-color: transparent;
  margin: 2rem 0;
  transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out;
  @media only screen and (min-width: 768px) {
    &:hover {
      transform: scale3d(1.05, 1.05, 1.05);
    }
  }
`;

const toggleButtonGroupContainerStyles = css`
  margin: 1rem 2rem 2rem;
  .amplify-togglebutton {
    background-color: #4e4e4e;
    color: var(--amplify-colors-white);
    border: none;

    font-size: 0.75rem;
    gap: 0.5rem;
  }

  .amplify-togglebutton[aria-pressed='true'] {
    background-color: rgb(73, 105, 228);

    &:hover {
      background-color: rgb(73, 105, 228);
    }
  }
`;

const Item = ({ imageURL, detailURL, date }: ItemProps) => {
  const backgroundStyles = css`
    background-image: url(${imageURL});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `;
  return (
    <View css={itemContainerStyles}>
      <Link
        display="block"
        textDecoration="none"
        href={detailURL}
        target="_blank"
      >
        <View
          css={backgroundStyles}
          height={{ base: '406px', large: '378px', xl: '359px' }}
        ></View>
        <Flex height="24px" margin="4px" alignItems="center">
          <Text
            color="var(--amplify-colors-white)"
            lineHeight="1.5"
            fontSize="13px"
            fontWeight="400"
          >
            {date}
          </Text>
        </Flex>
      </Link>
    </View>
  );
};

export const Items = () => {
  const [items, setItems] = React.useState([]);
  const [type, setType] = React.useState('film');
  React.useEffect(() => {
    fetch(`/api/${type}.json`)
      .then((res) => res.json())
      .then((json) => setItems(json.data));
  }, [type]);
  return (
    <View>
      <View>
        <Heading
          level={1}
          color="white"
          fontSize="1.5rem"
          fontWeight="700"
          lineHeight="1.25"
          margin="2rem 2rem 0"
        >
          I'm interested in covering titles releasing in
        </Heading>
      </View>
      <ScrollView css={toggleButtonGroupContainerStyles}>
        <ToggleButtonGroup
          value={type}
          onChange={(type: string) => setType(type)}
          isExclusive
          gap="1rem"
        >
          <ToggleButton value="film" borderRadius="4px">
            <IconMovie />
            Film
          </ToggleButton>
          <ToggleButton value="series" borderRadius="4px">
            <IconTheaters />
            Series
          </ToggleButton>
          <ToggleButton value="documentary" borderRadius="4px">
            <IconSource />
            Documentary
          </ToggleButton>
          <ToggleButton value="kids" borderRadius="4px">
            <IconEscalatorWarning />
            Kids
          </ToggleButton>
          <ToggleButton value="reality" borderRadius="4px">
            <IconVideocam />
            Reality
          </ToggleButton>
        </ToggleButtonGroup>
      </ScrollView>
      <Divider />
      <Grid
        rowGap="24px"
        columnGap={{ medium: '24px', large: '40px' }}
        autoRows={{ base: '438px', large: '410px', xl: '391px' }}
        templateColumns={{
          base: '280px',
          medium: 'repeat(2, 290px)',
          large: 'repeat(auto-fill, 271px)',
          xl: 'repeat(auto-fill, 256px)'
        }}
        justifyContent="center"
      >
        {items.map((item, idx) => (
          <Item
            key={idx}
            imageURL={item.imageURL}
            detailURL={item.detailURL}
            date={item.date}
          />
        ))}
      </Grid>
    </View>
  );
};
