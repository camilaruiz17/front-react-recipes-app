import axios from 'axios';

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const login = (data) => {

return axios.post(baseUrl + "/auth/login", data);
};
