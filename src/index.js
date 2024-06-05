import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./store/todosSlice";

const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
