import { useState, useEffect } from "react";
import { fetchTopics } from "../fetch-api";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchTopics().then((topicList) => {
      setTopics(topicList);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="TopicsBlock">
      <h2>List of Topics</h2>
      <>
        {isLoading ? (
          <Loading />
        ) : (
          topics.map((topic) => {
            return (
              <div className="TopicsCard"key={topic.slug}>
                <Link className="ArticleLink" to={`/topics/${topic.slug}`}>
                  <h3>
                    {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
                  </h3>
                </Link>
                <p>
                  <span>Description:</span> {topic.description}
                </p>
              </div>
            );
          })
        )}
      </>
    </div>
  );
};

export default Topics;
