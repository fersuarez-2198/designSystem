import React, { useState } from "react";
import "./Field.css";

const Field = ({
  label,
  value: initialValue,
  onChange,
  type = "text",
  width = "100%",
  errorMessage,
  status,
  id
}) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const getStatusClass = () => {
    switch (status) {
      case "success":
        return "input__success";
      case "error":
        return "input__error";
      default:
        return "";
    }
  };

  const getLabelColor = () => {
    switch (status) {
      case "success":
        return "green";
      case "error":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <div className="inputForm" style={{ width }}>
      <input
        type={type}
        id={id}
        className={`form__input ${getStatusClass()}`}
        autoComplete="off"
        placeholder=" "
        value={value}
        onChange={handleChange}
      />
      <label htmlFor="inputField" className="form__label"  style={{ color: getLabelColor() }}>
        {label}
      </label>
      {status === "error" && errorMessage && (
        <span className="field-error-message">{errorMessage}</span>
      )}
    </div>
  );
};

export default Field;
