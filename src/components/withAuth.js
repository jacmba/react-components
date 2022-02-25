import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const withAuth = (Component) => (props) => {
  const { loggedUser, setLoggedUser } = useContext(AuthContext);
  return (
    <Component
      loggedUser={loggedUser}
      setLoggedUser={setLoggedUser}
      {...props}
    ></Component>
  );
};

export default withAuth;
