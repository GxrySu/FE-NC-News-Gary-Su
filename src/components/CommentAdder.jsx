import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { postCommentsByArticleId } from "../fetch-api";

const CommentAdder = ({ article_id }) => {
  const [commentInput, setCommentInput] = useState("");
  const [commentPosted, setCommentPosted] = useState(false);

  const { user } = useContext(UserContext);

  const handleSubmit = (event) => {
    setCommentPosted(false);
    event.preventDefault();

    const newComment = {
      username: user,
      body: commentInput,
    };

    postCommentsByArticleId(article_id, newComment).then((res) => {
      setCommentPosted(true);
    });
    setCommentInput("");
  };

  if (commentPosted)
    return (
      <form className="CommentAdder-Form">
        {" "}
        <fieldset className="CommentAdder-Fieldset">
          <legend>Add Comment</legend>
          <h3>Comment has been posted!</h3>
        </fieldset>
      </form>
    );
  return (
    <form className="CommentAdder-Form" onSubmit={handleSubmit}>
      <fieldset className="CommentAdder-Fieldset">
        <legend>Add Comment</legend>
        <textarea
          required
          id="Comment"
          className="CommentAdder-Textbox"
          placeholder="Enter text here..."
          value={commentInput}
          onChange={(event) => {
            setCommentInput(event.target.value);
          }}
        ></textarea>
        <br />
        <button type="submit" className="CommentAdder-Button CommentAdder-Submit">
          Comment
        </button>
      </fieldset>
    </form>
  );
};

export default CommentAdder;
