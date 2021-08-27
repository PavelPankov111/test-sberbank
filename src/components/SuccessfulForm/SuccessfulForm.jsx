import React from "react";
import "./SuccessfulForm.scss";

export const SuccessfulForm = ({
  image,
  title,
  description,
  status = true,
}) => (
  <div
    className={
      status ? "successfulForm successfulForm_opened" : "successfulForm"
    }
  >
    <img
      className="successfulForm__image"
      src={image}
      alt="изображение галочки"
    />
    <h2 className="successfulForm__text">{title}</h2>
    <p className="successfulForm__text">{description}</p>
  </div>
);
