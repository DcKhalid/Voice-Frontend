// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";
// import axios from "axios";
import "../../index.css";
import React, { useEffect, useState } from "react";

const Speech = () => {
  const [isRecording, setisRecording] = useState(false);
  const [note, setNote]: any = useState(null);
  const [notesStore, setnotesStore]: any = useState([]);

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const microphone = new SpeechRecognition();

  microphone.continuous = true;
  microphone.interimResults = true;
  microphone.lang = "en-US";

  const startRecordController = () => {
    if (isRecording) {
      microphone.start();
      microphone.onend = () => {
        console.log("continue..");
        microphone.start();
      };
    } else {
      microphone.stop();
      microphone.onend = () => {
        console.log("Stopped microphone on Click");
      };
    }
    microphone.onstart = () => {
      console.log("microphones on");
    };

    microphone.onresult = (event) => {
      const recordingResult = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      console.log(recordingResult);
      setNote(recordingResult);
      microphone.onerror = (event) => {
        console.log(event.error);
      };
    };
  };

  const storeNote = () => {
    setnotesStore([...notesStore, note]);
    setNote("");
  };

  useEffect(() => {
    startRecordController();
  }, [isRecording]);

  return (
    <div className="App">
      <h1 className="text-2xl font-bold pl-4 pt-8">Record Voice Notes</h1>
      <div>
        <div className="noteContainer">
          <h2 className="font-bold">Record Note Here</h2>
          {isRecording ? (
            <span>Recording... </span>
          ) : (
            <span className="py-1 px-1 bg-green-300 font-bold">Stopped </span>
          )}
          <button
            className="py-2 px-2 bg-black text-white"
            onClick={storeNote}
            disabled={!note}
          >
            Save
          </button>
          <button
            onClick={() => setisRecording((prevState) => !prevState)}
            className="py-2 px-2 bg-blue-200 gap-3 font-bold"
          >
            Start/Stop
          </button>
          <p>{note}</p>
        </div>
        <div className="noteContainer">
          <h2 className="font-bold">Notes Store</h2>
          **
          {notesStore.map((note: any) => (
            <p key={note}>{note}</p>
          ))}
          **
        </div>
      </div>
    </div>
  );
};

export default Speech;
