import React, { useState } from "react";
import "./style.css";
import { PrimaryInp } from "../../components";
const Index = ({ id }) => {
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    console.log(preview);
    localStorage.setItem("preview", preview);
  };

  return (
    <div className="home__main">
      <PrimaryInp
        type={"file"}
        accept={"image/*"}
        onchange={handleChange}
        classes={"custom__inp"}
        id={id}
      />
      {preview && (
        <div className="preview__main__div">
          <img src={preview} alt="preview" className="preview__images" />
        </div>
      )}
    </div>
  );
};

export default Index;
