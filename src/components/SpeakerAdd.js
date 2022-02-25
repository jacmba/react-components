import withAuth from "./withAuth";

const SpeakerAdd = ({ eventYear, insertRecord, loggedUser }) => {
  if (!loggedUser || loggedUser.length === 0) {
    return null;
  }

  return (
    <a href="#" className="addSes">
      <i
        onClick={(e) => {
          e.preventDefault();
          const firstLast = window.prompt("Enter first and last name:", "");
          const firstLastArray = firstLast.split(" ");
          insertRecord({
            id: Date.now().toString(),
            first: firstLastArray[0],
            last: firstLastArray[1],
            bio: "Bio not entered yet",
            sessions: [
              {
                id: Date.now().toString() + "8888",
                title: `New Session for ${firstLastArray[0]}`,
                room: {
                  name: "Main Ball Room",
                },
                eventYear,
              },
            ],
          });
        }}
      >
        +
      </i>
    </a>
  );
};

export default withAuth(SpeakerAdd);
