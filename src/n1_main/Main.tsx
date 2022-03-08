import React, {useEffect} from 'react';
import Links from "./m1-ui/header/Links";
import {useDispatch} from "react-redux";
import {meTC} from "../n2_features/f1-auth/a3-me/meReducer";

const Main = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(meTC())
        // dispatch(setProfileTC())
    }, [])

    return (
        <div>
            <Links/>
        </div>
    );
};

export default Main;