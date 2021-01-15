const breakpoints = {
  xs: '320',
  sm: '576',
  md: '768',
  lg: '992',
  xl: '1200'
};

const mediaQueries = {
  xs: `@media (min-width: ${breakpoints.xs)`,
  sm: `@media (min-width: ${breakpoints.sm)`,
  md: `@media (min-width: ${Breakpoints.config.md)`,
  lg: `@media (min-width: ${Breakpoints.config.lg)`,
  xl: `@media (min-width: ${Breakpoints.config.xl)`,
};


export const config = { breakpoints, mediaQueries };
