import { IconLanguage, SelectField, View } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';

const iconLanguageStyles = css`
  color: var(--amplify-colors-white);
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
`;

const selectFieldStyles = css`
  background-color: #000;
  & .amplify-select {
    color: var(--amplify-colors-white);
    border-radius: 2px;
    border-color: var(--amplify-colors-white);
    padding: 2px 1rem 2px 1.75rem;
    @media only screen and (max-width: 350px) {
      font-size: 0.75rem;
    }
  }

  & .amplify-select__icon-wrapper {
    right: 0.4rem;
    @media only screen and (max-width: 350px) {
      right: 0.25rem;
    }
    color: var(--amplify-colors-white);
  }
`;

export const LangSelection = (props) => {
  return (
    <View
      css={css`
        position: relative;
      `}
      {...props}
    >
      <IconLanguage css={iconLanguageStyles} />
      <SelectField css={selectFieldStyles} label="Select Language" labelHidden>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
      </SelectField>
    </View>
  );
};
