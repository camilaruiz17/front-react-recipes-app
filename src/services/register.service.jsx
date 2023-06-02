import axios from 'axios';

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const  registerUser= (data) => {
    const token = localStorage.getItem("token");
    const config = {
    headers: {
        //Authorization: `Bearer ${token}`,
    },
    }
    return axios.post(baseUrl + "/auth/register", data, config);
};
