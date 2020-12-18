import React from 'react';

const Main = (props) => {
  return (
    <main id="main" class="main">
      {props.children}
    </main>
  );
};

export default Main;
