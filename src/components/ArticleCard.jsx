const ArticleCard = ({ article }) => {
  const { author, created_at, title, topic } = article;
  const myTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
  const myDate = created_at.substring(0, 10);

  return (
    <section className="ArticleCard">
      <h3>{title}</h3>
      <div className="Article">
        <p>Topic: {myTopic}</p>
        <p>
          Author: <span>{author}</span>
        </p>
        <p>Date: {myDate}</p>
      </div>
    </section>
  );
};

export default ArticleCard;
