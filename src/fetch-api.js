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
    return res.data;
  });
};

export const fetchTopics = () => {
  return myApi.get("/topics").then((res) => {
    return res.data;
  });
};

export const fetchArticleById = (article_id) => {
  return myApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};

export const patchVotes = (article_id) => {
  return myApi
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .then((res) => {
      return res.data;
    });
};
