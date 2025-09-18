import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState({});
  const [err, setErr] = useState();
  useEffect(() => {
    fetch("https://api.batmanapi.com/v1/characters")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => setErr(err));
  }, []);
  return (
    <div>
      <ul>
        {data?.data?.map((item, index) => (
          <>
            <li key={index}>{item.attributes.alias}</li>
            <li key={item.attributes.image_url}>
              <img
                src={`${item.attributes.image_url}`}
                alt="no"
              />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default App;
