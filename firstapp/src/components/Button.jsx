import React, { useState } from "react";
import style from "./Button.module.css";

export default function Button(props) {
  const [isOn, setIsOn] = useState();

  return (
    <div
      className={isOn ? style.isOn : style.isOff}
      onClick={() => {
        alert("clicked");
        setIsOn(!isOn);
      }}
    >
      {props.name} is {props.age} years old and is {isOn ? "On" : "Off"}
    </div>
  );
}
