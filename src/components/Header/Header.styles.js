import { css } from '@emotion/react';

export const header = (theme) => css`
  // background-color: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 50px;
  transition: all 0.5s;
`;

export const headerBody = () => css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const headerNav = () => css`
  display: flex;
  flex-wrap: wrap;
`;

export const headerMenuBurger = () => css`
  display: none;
`;

export const headerList = () => css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
`;

export const headerIcons = () => css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
`;

export const headerItem = () => css`
  margin-right: 24px;
  cursor: pointer;
`;

export const headerItemTxt = () => css`
  font-size: 24px;
  margin-right: 24px;
  cursor: pointer;
  position: relative;
  &:hover&:after {
    --line-width: 50px;
    display: block;
    content: ' ';
    width: var(--line-width);
    height: 4px;
    background-color: #f5bd41;
    position: relative;
    top: 12px;
    left: calc(50% - var(--line-width) / 2);
    transition: all 0.5s;
  }
`;

export const headerItemSvg = () => css`
  width: 30px;
  height: 30px;
`;
export const headerItemSvgUser = () => css`
  width: 40px;
  height: 40px;
`;

export const label = (theme) => css`
  fill: ${theme.colors.primary};
  transition: all 0.5s;
`;
