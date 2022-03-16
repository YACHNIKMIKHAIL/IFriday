import React, {useEffect} from 'react';
import PacksList from "../../../n2_features/f2-packs&cards_YM/b1-packs/PacksList";
import {useFridaySelector} from "../../m2-bll/store";
import {Navigate, useLocation, useSearchParams} from "react-router-dom";
import {RoutesXPaths} from "../routes/routes";

const Packs = () => {
    const isLoggedIn = useFridaySelector<boolean>(state => state.login.isLoggedIn)
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        setSearchParams({pathPacks: location.pathname})
    }, [searchParams])


    if (!isLoggedIn) {
        return <Navigate to={RoutesXPaths.LOGIN}/>
    }


    return (
        <div>
            <PacksList/>
        </div>
    );
};

export default Packs;