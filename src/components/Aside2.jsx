import React from "react";
import UserData from "./UserData";
import TreatmentDetails from "./TreatmentDetails";
import "../stylesheet/aside2.css";
export default function Aside2() {
  return (
    <div className="asidecontainer2">
      <div className="profiledetail">
        <UserData Gender="Gender" Female="Female"></UserData>
        <UserData Gender="Birthday" Female="Feb 24,1997"></UserData>
        <UserData Gender="Phone Number" Female="(239)555-0108"></UserData>
        <UserData Gender="Registered Date" Female="Feb 24,1997"></UserData>
        <UserData
          Gender="Street Address"
          Female="JL.Diponegoro No.21"
        ></UserData>
        <UserData Gender="City" Female="Cilacap"></UserData>
        <UserData Gender="Zip Code" Female="655849"></UserData>
        <UserData Gender="Member Status" Female="Active Member"></UserData>
      </div>

      <div className="appointment">
        <div className="appdetail detailselected">
          <p>Upcoming Appointments</p>
        </div>
        <div className="appdetail">
          <p>Past Appointments</p>
        </div>
        <div className="appdetail">
          <p>Medical Records</p>
        </div>
      </div>
      <div className="treatmentsection">
        <div className="treatBtn">
          <div className="root">
            <p>Root Canal Treatment</p>
          </div>
          <div className="showPrev">
            <p> Show Previous Treatments</p>
          </div>
        </div>
        <div className="treatLine">
          <img src="src/assets/vector 745.png"></img>
        </div>
        <TreatmentDetails
          date={"26 Nov'19"}
          treatment={"Open Access"}
        ></TreatmentDetails>
        <TreatmentDetails
          date={"12 Nov'19"}
          treatment={"Root Canal"}
        ></TreatmentDetails>
      </div>
    </div>
  );
}
