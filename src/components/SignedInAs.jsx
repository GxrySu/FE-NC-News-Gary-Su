import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const SignedInAs = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="SignedInAs">
      <p>signed in as: {user}</p>
      <button
        onClick={() => {
          setUser(null);
        }}
      >
        sign out
      </button>
    </div>
  );
};

export default SignedInAs;
