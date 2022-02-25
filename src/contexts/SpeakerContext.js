import { createContext } from "react";

const SpeakerContext = createContext();

const SpeakerProvider = ({
  children,
  speaker,
  updateRecord,
  insertRecord,
  deleteRecord,
}) => (
  <SpeakerContext.Provider
    value={{ speaker, updateRecord, insertRecord, updateRecord, deleteRecord }}
  >
    {children}
  </SpeakerContext.Provider>
);

export { SpeakerContext, SpeakerProvider };
