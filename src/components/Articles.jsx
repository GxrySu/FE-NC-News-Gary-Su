import { useState, useEffect } from "react";
import { fetchArticles } from "../fetch-api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles().then((articleList) => {
      setArticles(articleList);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="ArticlesList">
      <h2>List of Articles</h2>
      {isLoading ? (
        <h3>Loading Articles...</h3>
      ) : (
        articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })
      )}
    </div>
  );
};

export default Articles;
