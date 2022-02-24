import { createContext } from "react";

const SpeakerContext = createContext();

const SpeakerProvider = ({ children, speaker, updateRecord }) => (
  <SpeakerContext.Provider value={(speaker, updateRecord)}>
    {children}
  </SpeakerContext.Provider>
);

export { SpeakerContext, SpeakerProvider };
