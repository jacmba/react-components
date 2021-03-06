import { useContext } from "react";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import { ThemeContext } from "../contexts/ThemeContext";

const SpeakersToolbar = () => {
  const {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    setSearchQuery,
    EVENT_YEARS,
  } = useContext(SpeakerFilterContext);
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
                  defaultChecked={showSessions}
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
            <li>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  onChange={(evt) => setSearchQuery(evt.target.value)}
                />
                <div className="input-group-append">
                  <button className="btn btn-secondary" type="button">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </li>
            <li className="d-flex flex-column flex-md-row">
              <strong>Year</strong>
              <label className="dropmenu">
                <select
                  className="form-control"
                  value={eventYear}
                  onChange={({ currentTarget }) =>
                    setEventYear(currentTarget.value)
                  }
                >
                  {EVENT_YEARS.map((year) => (
                    <option value={year} key={year}>
                      {year}
                    </option>
                  ))}
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
