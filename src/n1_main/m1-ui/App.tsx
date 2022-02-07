import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Main from "../Main";
import {store} from "../m2-bll/store";
import RoutesX from "./routes/routes";

function App() {
    return (
        <div className="App">

            <Provider store={store}>
                <BrowserRouter>
                    <>
                        <Main/>
                        <RoutesX/>
                    </>
                </BrowserRouter>
            </Provider>

        </div>
    );
}

export default App;
