import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticles } from "../fetch-api";

const ArticlesByTopic = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const myTopic = topic.charAt(0).toUpperCase() + topic.slice(1);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

  const filteredArticles = articles.filter(
    (article) => article.topic === topic
  );

  return (
    <div>
      <h2>Articles about {myTopic}</h2>
      {isLoading ? (
        <h3>Loading Articles...</h3>
      ) : (
        filteredArticles.map((article) => {
          return (
            <div>
              <h3>{article.title}</h3>
              <p>Topic: {myTopic}</p>
              <p>
                Author: <span>{article.author}</span>
              </p>
              <p>Date: {article.created_at.substring(0, 10)}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ArticlesByTopic;
