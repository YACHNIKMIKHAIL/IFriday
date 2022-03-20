import React from 'react';
import Links from "./m1-ui/header/Links";
import {useFridaySelector} from "./m2-bll/store";
import {Navigate} from "react-router-dom";
import {RoutesXPaths} from "./m1-ui/routes/routes";

const Main = () => {

    return (
        <div>
            <Links/>
        </div>
    );
};

export default Main;