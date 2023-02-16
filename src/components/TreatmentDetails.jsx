import React from "react";
import "../stylesheet/treatmentdetail.css";
export default function TreatmentDetails(props) {
  return (
    <div className="treatmentContainer">
      <div className="dateandtime">
        <div className="date">
          <h3>{props.date}</h3>
        </div>
        <div className="time">
            <p>09.00-10.00</p>
        </div>
      </div>
      <div className="line"><img src="/src/assets/vector 749.png"></img></div>
      <div className="treatOption">
        <div className="treatop">Treatment</div>
        <div className="treattype"><p>{props.treatment}</p></div>
      </div>
      <div className="line"><img src="/src/assets/vector 749.png"></img></div>
      <div className="den">
        <div className="dentist">Dentist</div>
        <div className="denName"> Drg.Adam H.</div>
      </div>
      <div className="nur">
        <div className="nurse">Nurse</div>
        <div className="nurseName">jessicamila</div>
      </div>
      <div className="notesec">
        <div><img src="/src/assets/note 2.png"></img></div>
        <div className="note">Note</div>
      </div>
    </div>
  );
}
