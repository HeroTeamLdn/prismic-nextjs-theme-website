import React, { useState } from "react";

import useGlobal from "../store";

import "./appContainer.scss";

const AppContainer = ({ children }) => {
  const [{ dashOpen }, { setDashOpen }] = useGlobal();

  const className = dashOpen
    ? "app-container app-container_open"
    : "app-container";

  return (
    <div>
      <div className={className}>
        <div className="app-body">{children}</div>
      </div>
    </div>
  );
};

export default AppContainer;
