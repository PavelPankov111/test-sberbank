import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./components/App/App";
import { rootReducer } from "./redux/reducers/rootreducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<RootApp />, document.getElementById("root"));
