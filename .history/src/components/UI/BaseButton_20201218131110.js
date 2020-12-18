import React from 'react';
import '../../sass/components/_text.scss';

const Text = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/text-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

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
