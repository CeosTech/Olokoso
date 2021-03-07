import React from "react";
import { useState } from "react";
import "./switch.css";

const SwitchBtn = ({ default_val = true }) => {
  const [open, setOpen] = useState(() => default_val);

  // TODO: donner onChange function au props

  return (
    <div className='switch__container'>
      <p className='switch__container-indication '>
        {open ? "ouvert" : "fermé"}
      </p>
      <div
        className={["switch", open ? "active" : ""].join(" ")}
        onClick={() => setOpen(!open)}>
        <div className='switch-round'></div>
      </div>
    </div>
  );
};

export default SwitchBtn;
