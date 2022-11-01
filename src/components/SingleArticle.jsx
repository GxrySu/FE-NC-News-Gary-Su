import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../fetch-api";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);

  const { author, body, comment_count, created_at, title, topic, votes } =
    article;

  return (
    <div>
      {isLoading ? (
        <h2>Loading Article...</h2>
      ) : (
        <main className='Article'>
          <h2>{title}</h2>
          <br />
          <p>Article ID: {article_id}</p>
          <p>Author: {author}</p>
          <p>Topic: {topic.charAt(0).toUpperCase() + topic.slice(1)}</p>
          <p>{body}</p>
          <p>Comments: {comment_count} </p>
          <p>Date Created: {created_at.substring(0, 10)}</p>
        </main>
      )}
    </div>
  );
};

export default SingleArticle;
