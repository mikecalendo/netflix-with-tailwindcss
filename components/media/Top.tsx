import { Flex, Heading, SearchField, View } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

const topStyles = css`
  flex-direction: column;
  align-items: center;
  background-color: rgb(15, 15, 15);
  padding: 128px 16px 48px 16px;
  background-size: 100%;
  background-image: url('https://media.netflix.com/static/images/streams-bg.png');
  background-repeat: repeat-y;
`;

export const Top = () => {
  return (
    <Flex css={topStyles}>
      <Flex maxWidth={{ base: '543px', xl: '610px' }}>
        <Heading
          level={1}
          color="var(--amplify-colors-white)"
          fontSize="2.5rem"
          fontWeight="700"
          lineHeight="1.25"
          textAlign="center"
        >
          Discover stories to share with the United States.
        </Heading>
      </Flex>
      <Flex justifyContent="center">
        <View
          as="form"
          width={{ base: '250px', small: '300px', large: '500px' }}
        >
          <SearchField
            label="Search for titles"
            placeholder="Search for Netflix titles and news"
          />
        </View>
      </Flex>
    </Flex>
  );
};
