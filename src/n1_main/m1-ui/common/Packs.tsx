import React from 'react';
import PacksList from "../../../n2_features/f2-packs&cards_YM/b1-packs/PacksList";
import {useFridaySelector} from "../../m2-bll/store";
import {Navigate} from "react-router-dom";
import {RoutesXPaths} from "../routes/routes";

const Packs = () => {
    const isLoggedIn = useFridaySelector<boolean>(state => state.login.isLoggedIn)
    if (!isLoggedIn) {
        return <Navigate to={RoutesXPaths.LOGIN}/>
    }

    return (
        <div>
            {/*<PacksTestComponent/>*/}
            {/*<DoubleRange/>*/}
            <PacksList/>
            {/*<CardsList/>*/}
        </div>
    );
};

export default Packs;