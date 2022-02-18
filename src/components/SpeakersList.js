import SpeakerCard from "./Speaker";
import { data } from "../../SpeakerData";
import { useState } from "react";

const SpeakersList = ({ showSessions }) => {
  const [speakersData, setSpeakersData] = useState(data);

  const onFavoriteToggle = (id) => {
    const prevSpeaker = speakersData.find((rec) => rec.id === id);

    const updSpeaker = {
      ...prevSpeaker,
      favorite: !prevSpeaker.favorite,
    };

    const newData = speakersData.map((rec) =>
      rec.id === id ? updSpeaker : rec
    );

    setSpeakersData(newData);
  };

  return (
    <div className="speakers-list p-4">
      <div className="row">
        {speakersData.map((speaker) => {
          return (
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={() => onFavoriteToggle(speaker.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SpeakersList;
