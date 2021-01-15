import Breakpoints from '.Breakpoints';

const MediaQueries = {
  xs: `@media (min-width: ${bpSize.sMin})`,
  sm: `@media (min-width: ${bpSize.smMin})`,
  sm_to_md: `@media (min-width: ${bpSize.smMin}) and (max-width: ${bpSize.smMax})`,
  md: `@media (min-width: ${bpSize.mdMin})`,
  lg: `@media (min-width: ${bpSize.lgMin})`,
  xl: `@media (min-width: ${bpSize.xlMin})`,
};

export default MediaQueries;


  xs: '320',
  sm: '576',
  md: '768',
  lg: '992',
  xl: '1200'
Breakpoints.config.md;
