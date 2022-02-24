import { useState, createContext } from "react";

// Buat dulu setup contextnya dengan createContext
export const UserContext = createContext();

// komponen provider untuk menyediakan data context
const UserContextProvider = (props) => {
  const [user] = useState({
    name: "high haku",
    bootcamp: "skilvul",
  });

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
