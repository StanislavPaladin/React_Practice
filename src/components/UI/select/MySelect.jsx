import React from "react";

const MySelect = ({ options, defaultValue, value, onChange }) => {
    console.log();
  return (
    <div>
      <select 
      value={value}
      onChange={event => onChange(event.target.value)}
      >
        <option disabled value={defaultValue}>{defaultValue}</option>
        {options.map(option => 
          <option key={option.value}value={option.value}>{option.name}</option>
        )}
      </select>
    </div>
  );
};

export default MySelect;