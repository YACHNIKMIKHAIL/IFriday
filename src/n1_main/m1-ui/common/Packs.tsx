import React from 'react';
import PacksList from "../../../n2_features/f2-packs&cards_YM/b1-packs/PacksList";
import {useFridaySelector} from "../../m2-bll/store";
import {Navigate} from "react-router-dom";
import {RoutesXPaths} from "../routes/routes";

const Packs = () => {
    return (
        <div>
            <PacksList/>
        </div>
    );
};

export default Packs;