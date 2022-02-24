import { GetDigimonContext } from "../context/GetDigimonContext";
import { useContext } from "react";

function DigimonList() {
  const { data } = useContext(GetDigimonContext);
  console.log("data", data);
  return (
    <div>
      <h1>digimonlist</h1>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default DigimonList;

// buat context untuk nama dan domisili kalian
