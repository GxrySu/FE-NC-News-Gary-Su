const CommentCard = ({ comment }) => {
  return (
    <fieldset className="CommentCard">
      <legend>{comment.author} :</legend>
      <p>{comment.body}</p>
    </fieldset>

  );
};

export default CommentCard;
