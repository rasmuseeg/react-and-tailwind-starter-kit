import React from "react";
import ReactDOM from "react-dom";
import { Provider, DefaultRootState } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./redux/store";
import "./assets/tailwind.css";

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("app-root"));