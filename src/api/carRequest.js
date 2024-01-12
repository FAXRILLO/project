import axios from "axios";


const serverURL = process.env.REACT_APP_SERVER_URL;

const API = axios.create({baseURL: serverURL});

export const getAllCars = () => API.get('car');
export const addCars = (formdata) => {
    const token = JSON.parse(localStorage.getItem("token"));
  
    return API.post(`car`,formdata, { headers: { token } });
  };
