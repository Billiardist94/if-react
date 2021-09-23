import { css } from '@emotion/react';

export const availHotelBlock = (theme) => css`
  padding-bottom: 40px;
  padding-top: 150px;
  color: #383838;
  background-image: url('${theme.backgroundImage}');
  transition: all 0.5s;
`;

export const availHotelLink = (theme) => css`
  text-decoration-line: none;
  color: ${theme.colors.primary};
  font-size: 20px;
  &:hover {
    color: #f5bd41;
    transition: all 0.5s;
  }
  transition: all 0.5s;
`;
