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
    <div>
      <ul>
        {isLoading ? (
          <h2>Loading Users...</h2>
        ) : (
          signInList.map((user) => {
            return (
              <li
                key={user.username}
                onClick={() => {
                  setUser(user.username);
                }}
              >
                {user.username}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default SignIn;
