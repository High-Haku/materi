import { useState, createContext, useEffect } from "react";
import axios from "axios";

// Buat dulu setup contextnya dengan createContext
export const UserDetailContext = createContext();

// komponen provider untuk menyediakan data context
const UserDetailContextProvider = (props) => {
  const [user] = useState({
    name: "Thoriq",
    domisili: "jakarta",
  });

  const [data, setData] = useState([]);

  useEffect(async () => {
    // get data dari API
    const result = await axios.get(
      "https://digimon-api.vercel.app/api/digimon"
    );

    setData(result.data);
  }, []);

  console.log(data);

  return (
    <UserDetailContext.Provider value={{ user, data }}>
      {props.children}
    </UserDetailContext.Provider>
  );
};

export default UserDetailContextProvider;
