import React from "react";

const FormInput = ({ id, text, name, required, type = "text" }) => {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} name={name} required={required} />
    </>
  );
};

export default FormInput;
