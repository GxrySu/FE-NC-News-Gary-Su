const CommentCard = ({ comment }) => {
  return (
    <fieldset className="CommentCard">
      <legend>{comment.author} :</legend>
      <p>{comment.body}</p>
      <i className="Comment-Votes">Votes: {comment.votes}</i>
      <i className="Comment-Date">Date: {comment.created_at.substring(0, 10)}</i>
    </fieldset>

  );
};

export default CommentCard;
