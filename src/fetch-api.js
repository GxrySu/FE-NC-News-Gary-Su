import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-garys.cyclic.app/api",
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

export const fetchArticles = (sortBy) => {
  if (!sortBy) {
    return myApi.get("/articles").then((res) => {
      return res.data;
    });
  } else {
    return myApi.get(`/articles?sort_by=${sortBy}`).then((res) => {
      return res.data;
    });
  }
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

export const fetchCommentsByArticleId = (article_id) => {
  return myApi.get(`/articles/${article_id}/comments`).then((res) => {
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

export const postCommentsByArticleId = (article_id, comment) => {
  const newComment = {
    username: comment.username,
    body: comment.body,
  };
  return myApi
    .post(`/articles/${article_id}/comments`, newComment)
    .then((res) => {
      return res.data;
    });
};

export const deleteCommentByCommentId = (comment_id) => {
  return myApi.delete(`/comments/${comment_id}`).then((res) => {
    return res.data;
  });
};
