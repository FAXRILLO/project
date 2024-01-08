import axios from "axios";


const serverURL = process.env.REACT_APP_SERVER_URL;

const API = axios.create({baseURL: serverURL});

export const getAllCars = () => API.get('car');
// export const getOneCategory = (id) => API.get(`car/${id}`)
