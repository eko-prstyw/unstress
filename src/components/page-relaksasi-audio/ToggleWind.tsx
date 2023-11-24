import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ToggleWind: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setAudio(new Audio("/musics/Wind.mp3"));
  }, []); // Run this effect only once, when the component mounts

  const handleToggle = () => {
    setToggle(!toggle);

    // Toggle audio playback
    if (audio) {
      if (!toggle) {
        audio.pause(); // Pause the audio if it was playing
      } else {
        audio.play(); // Start playing the audio if it was paused
      }
    }
  };

  return (
    <div className="flex">
      <div
        onClick={handleToggle}
        className={`flex h-9 w-16 cursor-pointer rounded-full border-[5px] border-white ${
          toggle ? "justify-start bg-transparent" : "justify-end bg-white"
        } p-[3.5px]`}
      >
        <motion.div
          className={`h-5 w-5 rounded-full ${toggle ? "bg-white" : "bg-black"}`}
          layout
          transition={{ type: "spring", stiffness: 700, damping: 60 }}
        />
      </div>
    </div>
  );
};

export default ToggleWind;
