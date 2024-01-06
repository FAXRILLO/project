import axios from "axios";


const serverURL = process.env.REACT_APP_SERVER_URL;

const API = axios.create({baseURL: serverURL});

export const getAllCategory = () => API.get('category');
export const getOneCategory = (id) => API.get(`category/${id}`)
// export const login = (formData) => API.post('user/login', formData);
