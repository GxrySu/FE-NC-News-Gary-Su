import { useState, useEffect } from "react";
import { fetchTopics } from "../fetch-api";
import { Link } from "react-router-dom";

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
    <div>
      <h2>List of Topics</h2>
      <>
        {isLoading ? (
          <h3>Loading Topics</h3>
        ) : (
          topics.map((topic) => {
            return (
              <div key={topic.slug}>
                <Link to={`/topics/${topic.slug}`}>
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
