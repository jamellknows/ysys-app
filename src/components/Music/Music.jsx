import React, { useState } from "react";
import Main from "../audioClips/Main.mp3";
import { Howl, Howler } from "howler";
import "../Music/Music.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const audioClips = [{ sound: Main }];

let sound = new Howl({
  src: [Main],
  loop: false,
  volume: 0.5,
});

const Music = () => {
  const [isPlaying, setisPlaying] = useState(false);
  return (
    <button
      className="sound"
      onClick={() => {
        if (isPlaying) {
          sound.pause();
          setisPlaying(false);
        } else {
          sound.play();
          setisPlaying(true);
        }
        console.log("isPlaying", isPlaying);
      }}
    >
      Click me for a surprise
    </button>
  );
};

export default Music;
