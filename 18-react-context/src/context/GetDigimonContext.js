import { useState, createContext, useEffect } from "react";

// Buat dulu setup contextnya dengan createContext
export const GetDigimonContext = createContext();

// komponen provider untuk menyediakan data context
const GetDigimonContextProvider = (props) => {
  const [data, setData] = useState([]);

  // untuk ambil data kita akan gunakan useEffect
  // https://digimon-api.vercel.app/api/digimon

  useEffect(() => {
    const fetchData = () => {
      fetch("https://digimon-api.vercel.app/api/digimon")
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch((error) => console.log("error", error));
    };

    fetchData();
  }, []);

  return (
    <GetDigimonContext.Provider value={{ data }}>
      {props.children}
    </GetDigimonContext.Provider>
  );
};

export default GetDigimonContextProvider;
