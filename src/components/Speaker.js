const Session = ({ title, room }) => (
  <span className="session w-100">
    {title}
    <strong>Room: {room.name}</strong>
  </span>
);

const SessionsList = ({ sessions }) => (
  <div className="sessionBox card h-250">
    <Session {...sessions[0]} />
  </div>
);

const SpeakerImage = ({ id, first, last }) => (
  <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300 thumbnail">
    <img
      className="contain-fit"
      src={`/images/speaker-${id}.jpg`}
      width="300"
      alt={`${first} ${last}`}
    />
  </div>
);

const SpeakerDemographics = ({
  first,
  last,
  bio,
  company,
  twitterHandle,
  favorite,
}) => (
  <div className="speaker-info">
    <div className="d-flex justify-content-between mb-3">
      <h3 className="text-truncate w-200">
        {first} {last}
      </h3>
    </div>
    <div>
      <p className="card-description">{bio}</p>
      <div className="social d-flex flex-row mt-4">
        <div className="company">
          <h5>Company</h5>
          <h6>{company}</h6>
        </div>
        <div className="twitter">
          <h5>Twitter</h5>
          <h6>@{twitterHandle}</h6>
        </div>
      </div>
    </div>
  </div>
);

const SpeakerCard = ({ speaker, showSessions }) => {
  const { id, bio, first, last, sessions } = speaker;
  return (
    <div key={id} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
      <div className="card card-height p-4 mt-4">
        <SpeakerImage id={id} first={first} last={last} />
        <SpeakerDemographics {...speaker} />
        {showSessions ? <SessionsList sessions={sessions} /> : null}
      </div>
    </div>
  );
};

export default SpeakerCard;
