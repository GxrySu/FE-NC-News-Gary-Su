import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { fetchUsers } from "../fetch-api";
import Loading from "./Loading";

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
            <Loading />
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
                  <img
                    className="SignIn-Avatar"
                    src={user.avatar_url}
                    alt="User Avatar"
                  ></img>
                  <br />
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
