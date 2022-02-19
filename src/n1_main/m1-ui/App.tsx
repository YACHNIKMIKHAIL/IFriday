import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Main from "../Main";
import {store} from "../m2-bll/store";
import RoutesX from "./routes/routes";

function App() {
    return (
        <div className="App">

            <Provider store={store}>
                <HashRouter>
                    <>
                        <Main/>
                        <RoutesX/>
                    </>
                </HashRouter>
            </Provider>

        </div>
    );
}

export default App;
