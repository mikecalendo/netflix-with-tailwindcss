import { Button as AmplifyButton, ButtonProps } from '@aws-amplify/ui-react';
import { css } from '@emotion/react';
import * as React from 'react';

const buttonStyles = css`
  background-color: #e50914;
  color: var(--amplify-colors-white);
  border: none;
  border-left: 1px solid #333;
  border-radius: 0;
  gap: 10px;
  font-weight: 400;
  font-size: 1rem;
  @media only screen and (min-width: 1450px) {
    font-size: 1.875rem;
  }
  &:hover {
    background-color: #f40612;
    color: var(--amplify-colors-white);
    border-color: #f40612;
  }
  &:focus {
    color: var(--amplify-colors-white);
  }
`;

export const Button: React.FC<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ children, ...rest }, ref) => (
  <AmplifyButton css={buttonStyles} ref={ref} {...rest}>
    {children}
  </AmplifyButton>
));
