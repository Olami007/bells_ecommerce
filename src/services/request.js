import axios from "axios";

// Local machine base url
// const Base_url = "http://127.0.0.1:4100/";

// Railway base url
const Base_url = "https://bells-ecommerce-server.up.railway.app/";

export const publicRequest = () => {
  return axios.create({
    baseURL: Base_url,
  });
};

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
