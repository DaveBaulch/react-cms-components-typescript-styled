import React from 'react';
import '../../sass/components/_buttons.scss';

const Text = () => {
  const [data, setData] = useState([]);

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

export default Text;
