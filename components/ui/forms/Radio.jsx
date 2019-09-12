import React, { useState } from "react";

import "./radio.scss";

const Radio = ({ id, label, name, value, onChange, checked }) => {
  return (
    <>
      <label className="container">
        <span className="label">{label}</span>
        <input
          type="radio"
          value={value}
          name={name}
          checked={checked}
          id={id}
          onChange={onChange}
          className="radioinput"
        ></input>
        <span className="checkmark"></span>
      </label>
    </>
  );
};

export default Radio;
