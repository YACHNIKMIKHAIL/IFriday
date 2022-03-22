import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {RoutesXPaths} from "../../../n1_main/m1-ui/routes/routes";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {CardType} from "../../../n1_main/m2-bll/r1-reducers/cardsReducer";
import {PackType} from "../../../n1_main/m2-bll/r1-reducers/packsReducer";
import {useDispatch} from "react-redux";
import {cardsTC, gradeCardTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkCards";
import s from './LearnedCard.module.css'
import {RequestStatusType} from "../../../n1_main/m2-bll/r1-reducers/app-reducer";
import Preloader from "../../../n1_main/m1-ui/common/preloader/Preloader";
import {LearnedCard} from "./LearnedCard";

const LearnedCardContainer = () => {
    const {packId} = useParams<'packId'>();
    const appStatus = useFridaySelector<RequestStatusType>(state => state.app.status)

    const dispatch = useDispatch()

    useEffect(() => {
        if (packId) {
            dispatch(cardsTC(packId))
        }
    }, [])

    if (appStatus === 'loading') {
        return <Preloader status={appStatus}/>
    }

    return (
        <div>
            <LearnedCard/>
        </div>
    )
}

export default LearnedCardContainer;