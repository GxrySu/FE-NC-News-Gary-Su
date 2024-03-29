import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById, fetchCommentsByArticleId } from "../fetch-api";
import { patchVotes } from "../fetch-api";
import CommentAdder from "./CommentAdder";
import CommentCard from "./CommentCard";
import ErrorHandler from "./ErrorHandler"
import Loading from "./Loading";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [voteStatus, setVoteStatus] = useState("Like");
  const [incVotes, setIncVotes] = useState(0);
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null)
    setIsLoading(true);
    setCommentsLoading(true);
    fetchArticleById(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    }).catch((err) => {
      const newError = {
        message: err.response.data.msg,
        status: err.response.status
      }
      setError(newError)
    })
    fetchCommentsByArticleId(article_id).then((commentData) => {
      setComments(commentData);
      setCommentsLoading(false);
    });
  }, [article_id]);

  const { author, body, comment_count, created_at, title, topic, votes } =
    article;

  const handleVote = () => {
    if (incVotes === 0) {
      setIncVotes((curr) => curr + 1);
      patchVotes(article_id);
      setVoteStatus("Liked!!!");
    } else {
      setIncVotes((curr) => curr - 1);
      patchVotes(article_id);
      setVoteStatus("Like");
    }
  };

  if(error !== null) {
    return <ErrorHandler error={error}/>
  }
  return (
    <div className="SingleArticle">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <main className="Article">
            <h2>{title}</h2>
            <br />
            <p>Article ID: {article_id}</p>
            <p>Author: {author}</p>
            <p>Topic: {topic.charAt(0).toUpperCase() + topic.slice(1)}</p>
            <p>Comments: {comment_count} </p>
            <main>{body}</main>
            <p className="Article-Votes">Votes: {votes + incVotes}</p>
            <p className="Article-Date">
              Date Created: {created_at.substring(0, 10)}
            </p>
            <ul className="VoteWrapper-SingleArticle">
              <li className="Vote-Button" onClick={handleVote}>
                <span className="Vote-Tooltip">{voteStatus}</span>
                <span>
                  <i className="Like-Button">✔</i>
                </span>
              </li>
            </ul>
          </main>
          <section className="Comments-Section">
            <h3>Comments:</h3>
            <article className="Comments">
              {commentsLoading ? (
                <h4>Loading comments...</h4>
              ) : comments.length === 0 ? (
                <h4>No Comments</h4>
              ) : (
                comments.map((comment) => {
                  return (
                    <CommentCard
                      key={`comment${comment.comment_id}`}
                      comment={comment}
                    />
                  );
                })
              )}
            </article>
          </section>
          <CommentAdder article_id={article_id} />
        </>
      )}
    </div>
  );
};

export default SingleArticle;
