import React, { useState, ChangeEvent } from "react";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

function ShowAndHidePassword() {
  const [passwordType, setPasswordType] = useState<string>("password");
  const [passwordInput, setPasswordInput] = useState<string>("");

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(event.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <div className="relative">
      <input
        type={passwordType}
        onChange={handlePasswordChange}
        value={passwordInput}
        name="password"
        id="password"
        className="input-group ml-[65px] mr-[65px] w-[503px] h-10 px-3 py-[9px] bg-[#F8F9FB] text-[#858C95] text-[14px] font-roboto rounded-lg border border-[#E5E5E7] items-center gap-2 inline-flex justify-between"
        placeholder="Password"
      />
      <div className="input-group-btn">
        <button className="btn btn-outline-primary absolute right-20 top-3" onClick={togglePassword}>
          {passwordType === "password" ? <BiHide /> : <BiShow />}
        </button>
      </div>
    </div>
  );
}

export default ShowAndHidePassword;
