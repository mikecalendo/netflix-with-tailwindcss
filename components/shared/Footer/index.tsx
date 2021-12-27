import { Card, Grid, Link, Text } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

import { LangSelection } from '../LangSelection';

const cardStyles = css`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: var(--amplify-colors-black);
  padding: 50px 5%;
  @media only screen and (min-width: 550px) {
    padding: 70px 45px;
  }
  border-radius: 0;

  & .amplify-link {
    color: #757575;
    cursor: pointer;
  }
`;

const gridStyles = css`
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
  font-size: 1rem;
  @media only screen and (max-width: 549px) {
    font-size: 0.375rem;
    row-gap: 0.5rem;
  }
`;

const languageSelectStyles = css`
  & select.amplify-select {
    color: #757575;
    border-color: #757575;
  }

  & .amplify-icon {
    color: #757575;
  }
`;

export const Footer = (props) => (
  <Card css={cardStyles} {...props}>
    <Grid css={gridStyles}>
      <Text color="#757575" column="1 / 5" margin="0 0 1rem">
        Questions? Call 1-844-505-2993
      </Text>
      <Link href="https://ui.docs.amplify.aws/">FAQ</Link>
      <Link href="https://ui.docs.amplify.aws/">Help Center</Link>
      <Link href="https://ui.docs.amplify.aws/">Account</Link>
      <Link href="https://ui.docs.amplify.aws/">Media Center</Link>
      <Link href="https://ui.docs.amplify.aws/">Investor Relations</Link>
      <Link href="https://ui.docs.amplify.aws/">Jobs</Link>
      <Link href="https://ui.docs.amplify.aws/">Redeem Gift Cards</Link>
      <Link href="https://ui.docs.amplify.aws/">Buy Gift Cards</Link>
      <Link href="https://ui.docs.amplify.aws/">Ways to Watch</Link>
      <Link href="https://ui.docs.amplify.aws/">Terms of Use</Link>
      <Link href="https://ui.docs.amplify.aws/">Privacy</Link>
      <Link href="https://ui.docs.amplify.aws/">Cookie Preferences</Link>
      <Link href="https://ui.docs.amplify.aws/">Corporate Information</Link>
      <Link href="https://ui.docs.amplify.aws/">Contact Us</Link>
      <Link href="https://ui.docs.amplify.aws/">Speed Test</Link>
      <Link href="https://ui.docs.amplify.aws/">Legal Notices</Link>
      <Link href="https://ui.docs.amplify.aws/">Only on Netflix</Link>
      <LangSelection
        css={languageSelectStyles}
        row="7"
        column="1"
        margin="1.5rem 0 0"
      />
    </Grid>
  </Card>
);
