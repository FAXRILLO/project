import { createContext, useContext, useState } from "react";

const InfoContext = createContext();

export const useInfoContext = () => useContext(InfoContext);

export const InfoProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("profile")) || null
  );


  const logOut = () => {
    localStorage.clear();
    setCurrentUser(null);
  };
  const value = {
    currentUser,
    setCurrentUser,
    logOut,
  };
  return (
    <InfoContext.Provider value={value}>
      <InfoContext.Consumer>{() => children}</InfoContext.Consumer>
    </InfoContext.Provider>
  )
}