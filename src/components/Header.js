import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import withAuth from "./withAuth";

const Header = ({ loggedUser, setLoggedUser }) => {
  const { theme } = useContext(ThemeContext);

  const LoggedIn = ({ loggedUser, setLoggedUser }) => (
    <div>
      <span>Logged in as {loggedUser} </span>
      <button className="btn btn-secondary" onClick={() => setLoggedUser("")}>
        Logout
      </button>
    </div>
  );

  const NotLoggedIn = ({ loggedUser, setLoggedUser }) => (
    <button
      className="btn-secondary"
      onClick={(e) => {
        e.preventDefault();
        const username = window.prompt("Enter user name: ");
        setLoggedUser(username);
      }}
    >
      Login
    </button>
  );

  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img alt="SVCC Home Page" src="/images/SVCClogo.png" />
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            <h4 className="header-title">Sillicon Valley Code Camp</h4>
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            {loggedUser && loggedUser.length > 0 ? (
              <LoggedIn loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
            ) : (
              <NotLoggedIn
                loggedUser={loggedUser}
                setLoggedUser={setLoggedUser}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Header);
