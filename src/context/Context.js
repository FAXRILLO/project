import { createContext, useContext, useState } from "react";

const InfoContext = createContext();

export const useInfoContext = () => useContext(InfoContext);

export const InfoProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("profile")) || null
  );

  const [category, setCategory] = useState([]);


  const logOut = () => {
    localStorage.clear();
    setCurrentUser(null); 
  };
  const value = {
    currentUser,
    setCurrentUser,
    logOut,
    category, setCategory
  };
  return (
    <InfoContext.Provider value={value}>
      <InfoContext.Consumer>{() => children}</InfoContext.Consumer>
    </InfoContext.Provider>
  )
}