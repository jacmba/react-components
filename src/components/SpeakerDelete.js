import { useContext } from "react";
import { SpeakerContext } from "../contexts/SpeakerContext";
import withAuth from "./withAuth";

const SpeakerDelete = ({ loggedUser }) => {
  if (!loggedUser || loggedUser.length === 0) {
    return null;
  }

  const { speaker, deleteRecord } = useContext(SpeakerContext);

  return (
    <span className="session w-100">
      <a href="#" className="remSes">
        <i
          onClick={(e) => {
            e.preventDefault();
            if (window.confirm("Sure wanna delete this speaker?")) {
              deleteRecord(speaker);
            }
          }}
        >
          -
        </i>
      </a>
      <span className="padL2">Delete Speaker</span>
    </span>
  );
};

export default withAuth(SpeakerDelete);
