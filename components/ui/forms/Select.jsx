import React, { useState } from "react";
import Select from "react-select";

import "./select.scss";

const customStyles = {
  control: (base, state) => ({
    ...base,
    boxShadow: "none"
  })
};

export default ({ options, name, onChange, ...props }) => {
  return (
    <div className="select-container">
      <Select
        onChange={onChange}
        name={name}
        options={options}
        defaultValue={options[0]}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          outline: 'none',
          boxShadow: 'none !important',
          colors: {
            ...theme.colors,
            primary: '#acacac',
          },
        })}
        styles={customStyles}
      />
    </div>
  );
};
