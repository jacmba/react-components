import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const SpeakersToolbar = (props) => {
  const { showSessions, setShowSessions } = props;

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <section className={`dark-theme-header}`}>
      <div className="container">
        <div className="justify-content-between">
          <ul className="toolrow d-flex flex-column flex-lg-row">
            <li className="d-flex flex-column flex-md-row">
              <b className={theme === "light" ? "" : "text-info"}>
                Show Sessions&nbsp;&nbsp;
              </b>
              <label className="fav">
                <input
                  type="checkbox"
                  checked={showSessions}
                  onClick={() => setShowSessions(!showSessions)}
                />
                <span className="switch"></span>
              </label>
            </li>
            <li className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
              <strong className={theme === "light" ? "" : "text-info"}>
                Theme
              </strong>
              <label className="dropdown">
                <select
                  className="form-control theme"
                  value={theme}
                  onChange={(evt) => setTheme(evt.target.value)}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SpeakersToolbar;
