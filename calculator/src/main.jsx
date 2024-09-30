import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Provider } from "react-redux"; // Import Provider
import { store } from "./redux/store"; // Import the Redux store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Wrap the App with Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
