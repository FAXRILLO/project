import React from "react";
import { useInfoContext } from "./context/Context";
import Auth from "./pages/Auth/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import "./App.css";

const App = () => {
  const { currentUser } = useInfoContext();
  console.log(currentUser);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={currentUser ? <Home /> : <Auth />} />
        </Routes>
        <ToastContainer />
        <div className="blur"></div>
        <div className="blur"></div>
      </div>
    </BrowserRouter>
  );
};

export default App;
