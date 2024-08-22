import React from "react";
import "./CheckRadio.css";

const CheckRadioDS = ({
  label,
  hasLabel,
  type = "checkbox",
  name,
  value,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="input-wrapper">
      <input
        id={label}
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={label}>{hasLabel && label}</label>
    </div>
  );
};

export default CheckRadioDS;
