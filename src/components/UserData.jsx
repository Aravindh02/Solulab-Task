import React from "react";
import "../stylesheet/aside2.css";
export default function UserData(props) {
  return (
    <div className="wrapper">
      <div className="questionfeild">{props.Gender}</div>
      <div className="answerfeild">{props.Female}</div>
      <div className="underline">
        <img src="/src/assets/vector 743.png"></img>
      </div>
    </div>
  );
}
