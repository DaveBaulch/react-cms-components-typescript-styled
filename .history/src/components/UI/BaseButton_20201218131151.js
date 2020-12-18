import React from 'react';
import '../../sass/components/_buttons.scss';

const Button = (props) => {
  return (
    <div class="section text-block">
      <div class="container">
        <div class="row">
          <div
            className="wysiwyg"
            dangerouslySetInnerHTML={{
              __html: data.text
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Button;
