import React from "react";
import { FileListData } from "./FileListData";
import "../stylesheet/aside1.css";

export default function Aside1() {
  return (
    <div className="container">
      <div className="profilepic">
        <div>
          <img src="/src/assets/profilepic.png"></img>
        </div>

        <div className="name">
          <p>Diane Cooper</p>
        </div>
        <div className="email">
          <p>diane.cooper@example.com</p>
        </div>
        <div className="followers">
          <div className="past">
            <div>
              <h3>15</h3>{" "}
            </div>
            <div>
              {" "}
              <p>past</p>
            </div>
          </div>
          <div className="line">
            <img src="/src/assets/vector 735.png"></img>
          </div>
          <div className="upcoming">
            <div>
              <h3>02</h3>
            </div>
            <p>Upcoming</p>
          </div>
        </div>
      </div>
     <div className="threesection">

     <div className=" sendbtn">
       <button className="btn"> Send Message</button>
       
      </div>
      <div className="filedoc">
        <p>Files/ Documents</p>
      </div>
      <div className="filelist">
        {FileListData.map((val, key) => {
          return (
            <div key={key} className="filedata">
              <div className="fileicon">{val.icon}</div>
              <div className="filename">{val.fileName}</div>
            </div>
          );
        })}
      </div>
     </div>
      
    </div>
  );
}
