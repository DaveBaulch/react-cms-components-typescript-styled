@import '../utilities/variables';
@import '../utilities/mixins';

.skip-link {
  padding: 0.5rem 1rem 1rem 1rem;
  background-color: $white;
  position: absolute;
  top: -100%;
  left: 2px;
  z-index: 200;
  text-decoration: none !important;
  display: none;

  &:focus {
    top: 2px;
    transition: $transition-speed-medium ease all;
    color: $black;
  }

  @include breakpoint(md) {
    display: flex;
  }  
}

.skip-link:visited {
  color: $black;
}