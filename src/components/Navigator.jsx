import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <nav className="nav">
      <ul>
        <Link className='NavLink'to="/">
          <li><a>Home</a></li>
        </Link>
        <Link className='NavLink'to="/articles">
          <li>Articles</li>
        </Link>
        <Link className='NavLink'to="/topics">
          <li>Topics</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigator;
