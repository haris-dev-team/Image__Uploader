import React from "react";
import "./style.css";
const Index = ({ type, accept, onchange, classes, id }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <input
        className={`input ${classes ? classes : ""}`}
        type={type}
        accept={accept}
        onChange={onchange}
        id={id}
      />
    </div>
  );
};

export default Index;
