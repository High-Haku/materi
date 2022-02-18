import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ListDigimon() {
  const navigate = useNavigate()
  const [digimons, setDigimons] = useState([]);

  useEffect(async () => {
    // get data dari API
    const result = await axios.get(
      "https://digimon-api.vercel.app/api/digimon"
    );

    let limitData = [];
    for (let i = 0; i < 10; i++) {
      limitData.push(result.data[i]);
    }

    setDigimons(limitData);
  }, []);

  const handleClick = (item) => {
    // alert(item.name);
    navigate(`/digimon/${item.name}`)
  };

  const h1Click = () => {
    console.log("tessss")
  }

  return (
    <>
      <h1 onClick={h1Click}>List Digimon</h1>
      {digimons.length === 0 ? (
        <p>loading...</p>
      ) : (
        digimons.map((item, index) => (
          <div key={index} onClick={() => handleClick(item)}>
            <img src={item.img} alt="" width={150} />
            <h3>{item.name}</h3>
          </div>
        ))
      )}
    </>
  );
}

export default ListDigimon;
