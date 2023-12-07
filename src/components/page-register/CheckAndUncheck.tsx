import React, { useState } from "react";
import { ImCheckboxUnchecked } from "react-icons/im";
import { FaCheckSquare } from "react-icons/fa";

export default function CheckAndUncheck() {
  const [ButtonType, setButtonType] = useState("button");

  const toggleButton = () => {
    setButtonType((prevType) =>
      prevType === "button" ? "checkbox" : "button"
    );
  };

  return (
    <div className="mt-[38px]">
      <button onClick={toggleButton}>
        {ButtonType === "button" ? <ImCheckboxUnchecked /> : <FaCheckSquare />}
      </button>
    </div>
  );
}
