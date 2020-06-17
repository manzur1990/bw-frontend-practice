import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./reducers";

i
import "./styles.css";

// STEP 1 - create the store
const store = createStore(rootReducer);
console.log(store.getState());

function App() {
  return (
    <div className="App">
      
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
