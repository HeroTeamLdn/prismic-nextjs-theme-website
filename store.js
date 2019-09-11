import React from "react";
import { createState } from "react-global-hook";

const initialState = {
  dashOpen: false,
  prismicData: {}
};

const actions = {
  setDashOpen: (store, open) => {
    store.setState({ dashOpen: open });
  },
  setPrismicData: (store, page, data) => {
    store.setState({
      prismicData: { ...store.state.prismicData, [page]: data }
    });
  }
};

const [useGlobal, getGlobal] = createState(initialState, actions);

export default useGlobal;
