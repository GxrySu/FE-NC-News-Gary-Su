import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-news-garys.herokuapp.com/api",
});

export const fetchEndpoints = () => {
  return myApi.get("/").then((res) => {
    return res.data.api;
  });
};

export const fetchUsers = () => {
  return myApi.get("/users").then((res) => {
    return res.data;
  });
};

export const fetchArticles = () => {
  return myApi.get("/articles").then((res) => {
    return res.data
  })
}
