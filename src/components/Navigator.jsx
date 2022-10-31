import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <br />
      <Link to="/articles">Articles</Link>
      <br />
      <Link to="/topics">Topics</Link>
    </nav>
  );
};

export default Navigator;
