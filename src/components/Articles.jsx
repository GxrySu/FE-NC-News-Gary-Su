import { useState, useEffect } from "react";
import { fetchArticles } from "../fetch-api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortByInput, setSortByInput] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [selected, setSelected] = useState(true);

  const handleChange = (event) => {
    setSortByInput(event.target.value);
    setSelected(false);
  };

  const handleSortBySubmit = (event) => {
    if (sortByInput) {
      setSortBy(sortByInput);
      setSortByInput("");
    }
    event.preventDefault();
  };

  useEffect(() => {
    setSelected(true)
    setIsLoading(true);
    fetchArticles(sortBy).then((articleList) => {
      setArticles(articleList);
      setIsLoading(false);
    });
  }, [sortBy]);

  return (
    <div className="ArticlesList">
      <h2>List of Articles</h2>
      <div className="Articles-SortBy">
        <select
          id="sortBy"
          className="SortBy"
          defaultValue=""
          onChange={handleChange}
        >
          <option value="" disabled hidden>
            ---Select Sort By---
          </option>
          <option value="title">Title</option>
          <option value="topic">Topic</option>
          <option value="author">Author</option>
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
        </select>
      </div>
      {selected ? (
        <p></p>
      ) : (
        <button
          className="SortBy-Button SortBy-Submit"
          onClick={handleSortBySubmit}
        >
          Submit
        </button>
      )}
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
