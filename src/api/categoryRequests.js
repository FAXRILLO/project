import axios from "axios";

const serverURL = process.env.REACT_APP_SERVER_URL;

const API = axios.create({ baseURL: serverURL });

export const getAllCategory = () => API.get("category");
export const getOneCategory = (id) => API.get(`category/${id}`);
export const addCategory = (formdata) => {
  const token = JSON.parse(localStorage.getItem("token"));

  return API.post(`category`,formdata, { headers: { token } });
};
