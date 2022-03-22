import React, {useState} from "react";
import s from "./TableHeader.module.css"
import {useFridaySelector} from "../../../m2-bll/store";
import {useDispatch} from "react-redux";
import {cardsActions} from "../../../m2-bll/r2-actions/ActionsCards";
import style from "./TableHeader.module.css";

type TCHType = { user_id: string }

const TableCardsHeader = ({user_id}: TCHType) => {

    const dispatch = useDispatch()

    const myId = useFridaySelector<string>(state => state.profile.profile._id)

    const [lastUpd, setLastUpd] = useState<boolean>(false)
    const [gradeUpd, setGradeUpd] = useState<boolean>(false)

    const getNewCard = () => {
        dispatch(cardsActions.updateFilterCardAC('1created'))
        setLastUpd(true)
    }

    const getOldCard = () => {
        dispatch(cardsActions.updateFilterCardAC('0created'))
        setLastUpd(false)
    }

    const getGradeUpdMoreCard = () => {
        dispatch(cardsActions.updateFilterCardAC('1grade'))
        setGradeUpd(true)
    }

    const getGradeUpdLessCard = () => {
        dispatch(cardsActions.updateFilterCardAC('0grade'))
        setGradeUpd(false)
    }

    return (
        <div className={s.tableHeader}>
            <div>
                <span className={style.tableHeader__item}>
                    Question
                </span>
            </div>
            <div>
                <span className={style.tableHeader__item}>
                    Answer
                </span>
            </div>
            <div onClick={lastUpd ? getOldCard : getNewCard}>
                <span className={style.tableHeader__item}>
                    Last Updated
                </span>
            </div>
            <div onClick={gradeUpd ? getGradeUpdLessCard : getGradeUpdMoreCard}>
                <span className={style.tableHeader__item}>
                    Grade
                </span>
            </div>
            {
                myId === user_id && <div>
                    <span className={style.tableHeader__item}>
                        Actions
                    </span>
                </div>
            }
        </div>
    )
}

export default TableCardsHeader
