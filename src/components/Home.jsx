import { useState, useEffect } from "react";
import { fetchEndpoints } from "../fetch-api"

const Home = () => {
  const [endpoints, setEndpoints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    fetchEndpoints().then((data) => {
    })
  }, []);

  return <h2>Home Page</h2>;
};

export default Home;
