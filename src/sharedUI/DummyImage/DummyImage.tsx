import React from "react";
import style from "./DummyImage.module.scss";

const DummyImage = () => {
  return (
    <div className={style.dummy}>
      <img src={require("./dummy.jpg")} alt="dummy" />
    </div>
  );
};

export default DummyImage;
