import React from "react";

const FormInput = ({ id, text, name, required }) => {
  return (
    <>
      <label for={id}>{text}</label>
      <input type="text" id={id} name={name} required={required} />
    </>
  );
};

export default FormInput;
