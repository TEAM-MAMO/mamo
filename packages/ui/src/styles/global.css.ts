import { globalFontFace, globalStyle } from '@vanilla-extract/css';

import { vars } from './theme.css';

const pretendard = 'Pretendard';

/* Pretendard variables */
globalFontFace(pretendard, {
  src: 'local("../assets/fonts/Pretendard.woff2")',
});

globalStyle('body', {
  color: vars.color.text.default,
  fontFamily: pretendard,
  margin: 0,
  padding: 0,
});

globalStyle('*, :after, :before', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
});

globalStyle('html', {
  MozTextSizeAdjust: 'none',
  WebkitTextSizeAdjust: 'none',
  textSizeAdjust: 'none',
});

globalStyle('body, h1, h2, h3, h4, p, figure, blockquote, dl, dd', {
  marginBlockEnd: 0,
});

globalStyle('ul, ol', {
  listStyle: 'none',
  padding: 0,
});

globalStyle('body', {
  minHeight: '100dvh',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

globalStyle('button', {
  cursor: 'pointer',
});

globalStyle('a:not([class])', {
  textDecorationSkipInk: 'auto',
  color: 'currentColor',
});

globalStyle('a', {
  textDecoration: 'none',
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

globalStyle('svg', {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
});

globalStyle('svg path', {
  fill: 'currentColor',
});
