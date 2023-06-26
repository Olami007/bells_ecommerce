import axios from "axios";

const Base_url = "http://127.0.0.1:4100/";

export const publicRequest = axios.create({
  baseURL: Base_url,
});

const token = localStorage.getItem("token");
// console.log(token);
export const UserRequest = () => {
  return axios.create({
    baseURL: Base_url,
    headers: {
      token: token,
    },
  });
};
