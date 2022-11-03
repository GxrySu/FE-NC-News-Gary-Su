import { useState } from "react";
import { deleteCommentByCommentId } from "../fetch-api";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const CommentCard = ({ comment }) => {
  const { user } = useContext(UserContext);
  const [currComment, setCurrentComment] = useState(comment);

  const removeComment = () => {
    deleteCommentByCommentId(comment.comment_id)
      .then((res) => {
        setCurrentComment(null);
      })
      .catch((err) => {});
  };

  if (!currComment) {
    return (
      <fieldset className="CommentCard">
        <legend>{comment.author} :</legend>
        <p className="DeletedComment">Comment Deleted</p>
        <i className="Comment-Votes"></i>
      </fieldset>
    );
  }

  return (
    <fieldset className="CommentCard">
      <legend>{comment.author} :</legend>
      <p>{comment.body}</p>
      <i className="Comment-Votes">Votes: {comment.votes}</i>
      <i className="Comment-Date">
        Date: {comment.created_at.substring(0, 10)}
      </i>
      {comment.author === user ? (
        <button
          className="DeleteComment-Submit DeleteComment-Button"
          onClick={() => {
            removeComment();
          }}
        >
          delete
        </button>
      ) : (
        <></>
      )}
    </fieldset>
  );
};

export default CommentCard;
