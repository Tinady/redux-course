import React from "react";
import "./menulink.css";

export default function MenuLink({  text }) {
  return (
    <div className="menulink">
     
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">
        {text === "Logout" && "( John )"}
      </span>
    </div>
  );
}
