import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { fetchUsers } from "../fetch-api";

const SignIn = () => {
  const [signInList, setSignInList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers().then((users) => {
      setSignInList(users);
      setIsLoading(false);
    });
  }, []);

  const { setUser } = useContext(UserContext);

  return (
    <>
      <h1>Sign In</h1>
      <div className="SignIn">
        <ul>
          {isLoading ? (
            <h2>Loading Users...</h2>
          ) : (
            signInList.map((user) => {
              return (
                <li
                  className="SignIn-User"
                  key={user.username}
                  onClick={() => {
                    setUser(user.username);
                  }}
                >
                  <img className="SignIn-Avatar" src={user.avatar_url} alt="User Avatar"></img>
                  {user.username}
                </li>
              );
            })
          )}
        </ul>
      </div>
    </>
  );
};

export default SignIn;
