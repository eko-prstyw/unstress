import React, { useState } from "react";
import { motion } from "framer-motion";

const ToggleSwitch: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
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

export default ToggleSwitch;
