import React from "react";

import { sidebarData } from "./sidebarData";
import "../stylesheet/sideBar.css";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="list">
        <div  className="vector" id="active">
          <img src="/src/assets/Vector 771 (Stroke).png"></img>
        </div>

        {sidebarData.map((val, key) => {
          return (
            <div
              id={window.location.pathname == val.link ? "active" : ""}
              className="item"
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="sidebaricon">{val.icon}</div>
              <div id="sidebartitle">{val.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
