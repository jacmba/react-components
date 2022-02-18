import SpeakerCard from "./Speaker";

const SpeakersList = ({ data, showSessions }) => (
  <div className="speakers-list p-4">
    <div className="row">
      {data.map((speaker) => {
        return (
          <SpeakerCard
            key={speaker.id}
            speaker={speaker}
            showSessions={showSessions}
          />
        );
      })}
    </div>
  </div>
);

export default SpeakersList;
