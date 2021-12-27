import { AmplifyProvider, View } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

import 'normalize.css';
import '@aws-amplify/ui-react/styles.css';

export default function App({ Component, pageProps }) {
  return (
    <AmplifyProvider>
      <View
        as={Component}
        css={css`
          font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial,
            sans-serif;
          /* min-width: 320px; */
        `}
        {...pageProps}
      />
    </AmplifyProvider>
  );
}
