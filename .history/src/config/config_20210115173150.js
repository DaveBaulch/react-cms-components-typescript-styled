const breakpoints = {
  xs: '320',
  sm: '576',
  md: '768',
  lg: '992',
  xl: '1200'
};

const mediaQueries = {
  xs: `@media only screen and (min-width: ${breakpoints.xs}px)`,
  sm: `@media only screen and (min-width: ${breakpoints.sm})`,
  md: `@media only screen and (min-width: ${breakpoints.md})`,
  lg: `@media only screen and (min-width: ${breakpoints.lg})`,
  xl: `@media only screen and (min-width: ${breakpoints.xl})`
};

export const config = { breakpoints, mediaQueries };
