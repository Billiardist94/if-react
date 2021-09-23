import { css } from '@emotion/react';

export const footer = (theme) => css`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  transition: all 0.5s;
`;

export const link = (theme) => css`
  color: ${theme.colors.primary};
  &:hover {
    color: #F5BD41;
    transition: all 0.5s;
  }
  transition: all 0.5s;
`;
