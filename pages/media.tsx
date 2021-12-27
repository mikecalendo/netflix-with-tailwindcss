import { View } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

import { Header } from '../components/shared/Header';
import { Footer } from '../components/shared/Footer';
import { Top } from '../components/media/Top';
import { Bottom } from '../components/media/Bottom';
import { Items } from '../components/media/Items';

const navStyles = css`
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgb(22, 22, 22) 100%
  );
  position: fixed;
  width: 100%;
`;

export default function MediaPage(props) {
  return (
    <View backgroundColor="var(--amplify-colors-black)" {...props}>
      <View as="nav" css={navStyles}>
        <Header isShow={false} />
      </View>
      <Top />
      <Items />
      <Bottom />
      <Footer />
    </View>
  );
}
