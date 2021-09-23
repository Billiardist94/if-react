import { css } from '@emotion/react';

export const registrationBlock = (theme) => css`
  padding-bottom: 150px;
  padding-top: 150px;
  color: #383838;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url('${theme.backgroundImage}');
  transition: all 0.5s;
`;
