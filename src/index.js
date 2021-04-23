import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./Redux/Reducers";

import App from "./App";

const rootElement = document.getElementById("root");

//configuring store of redux
let store = createStore(Reducer);

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
