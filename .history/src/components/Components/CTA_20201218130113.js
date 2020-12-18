import React from 'react';

const CTA = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get('data/quote-data.json');
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return <React.Fragment>CTA</React.Fragment>;
};

export default CTA;
