import React from "react";
import useGlobalHook from "use-global-hook";

const initialState = {
  dashOpen: false,
  prismicData: {}
};

const actions = {
  setPrismicData: (store, page, data) => {
    store.setState({
      prismicData: { ...store.state.prismicData, [page]: data }
    });
  }
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
