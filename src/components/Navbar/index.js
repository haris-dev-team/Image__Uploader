import React from "react";
import "./style.css";
const Index = ({ id }) => {
  return (
    <div>
      <div className="main__container">
        <div className="inner__div">
          <h1>Image Uploader</h1>
        </div>
        <div>
          <label htmlFor={id} className="input__label">
            Upload Image
          </label>
        </div>
      </div>
    </div>
  );
};

export default Index;
