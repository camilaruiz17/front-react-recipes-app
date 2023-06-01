import axios from 'axios';

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const  registerUser= (data) => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem('name', response.data.name);
    const config = {
    headers: {
        //Authorization: `Bearer ${token}`,
    },
    }
    return axios.post(baseUrl + "/auth/register", data, config);
};
