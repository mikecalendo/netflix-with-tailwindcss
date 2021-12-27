import { View } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

import { Header } from '../components/shared/Header';
import { Footer } from '../components/shared/Footer';
import { BackgroundImage } from '../components/signin/BackgroundImage';
import { SignInForm } from '../components/signin/SignInForm';

const containerStyles = css`
  position: relative;
`;

const headerStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export default function SignInPage(props) {
  return (
    <View css={containerStyles} {...props}>
      <Header css={headerStyles} isShow={false} />
      <BackgroundImage />
      <SignInForm />
      <Footer />
    </View>
  );
}
