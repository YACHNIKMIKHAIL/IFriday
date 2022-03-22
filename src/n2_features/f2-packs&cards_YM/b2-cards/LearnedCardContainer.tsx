import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {useDispatch} from "react-redux";
import {cardsTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkCards";
import {RequestStatusType} from "../../../n1_main/m2-bll/r1-reducers/app-reducer";
import Preloader from "../../../n1_main/m1-ui/common/preloader/Preloader";
import LearnedCard from "./LearnedCard";

const LearnedCardContainer = () => {
    const {packId} = useParams<'packId'>()
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
