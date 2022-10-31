import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-news-garys.herokuapp.com/api",
});

export const fetchApi = () => {
  return myApi.get("/").then((res) => {
    return res.data;
  });
};

export const fetchUsers = () => {
  return myApi.get("/users").then((res) => {
    return res.data;
  });
};
