import SpeakerCard from "./Speaker";
import ReactPlaceholder from "react-placeholder/lib";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData";

const SpeakersList = ({ showSessions }) => {
  const {
    data: speakersData,
    requestStatus,
    error,
    updateRecord,
  } = useRequestDelay(2000, data);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">
        ERROR: <b>loading Speaker Data failed {error}</b>
      </div>
    );
  }

  return (
    <div className="speakers-list p-4">
      <ReactPlaceholder
        type="media"
        rows={15}
        className="speakerslist-placeholder"
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
      >
        <div className="row">
          {speakersData.map((speaker) => {
            return (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                showSessions={showSessions}
                onFavoriteToggle={(doneCallBack) =>
                  updateRecord(
                    { ...speaker, favorite: !speaker.favorite },
                    doneCallBack
                  )
                }
              />
            );
          })}
        </div>
      </ReactPlaceholder>
    </div>
  );
};

export default SpeakersList;
