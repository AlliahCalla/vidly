import React from "react";
const Select = ({ name, label, options, error, ...rest }) => {
  console.log(options);
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select {...rest} className="custom-select" name={name} id={name}>
        {options.map(function (name) {
          return <option value={name}>{name}</option>;
        })}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
