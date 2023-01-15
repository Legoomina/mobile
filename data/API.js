import axios from "axios";
import { BACKEND_URL } from "./const";

const addUser = async (body, header) => {
  return await axios
    .post(`${BACKEND_URL}/auth/register`, body, header)
    .then((response) => {
      console.log(response.statusText);
    })
    .catch((err) => {
      console.log(err);
    });
};

const axiosConfig = (accessToken) => {
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    withCredentials: false,
  };
};

export { addUser, axiosConfig };
