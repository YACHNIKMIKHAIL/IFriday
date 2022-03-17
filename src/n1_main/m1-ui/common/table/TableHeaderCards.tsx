import React, {useState} from "react";
import s from "./TableHeader.module.css"
import {useFridaySelector} from "../../../m2-bll/store";
import {useDispatch} from "react-redux";
import {cardsActions} from "../../../m2-bll/r2-actions/ActionsCards";

type TCHType = { user_id: string }

const TableCardsHeader = ({user_id}: TCHType) => {

    const dispatch = useDispatch()
    const [lastUpd, setLastUpd] = useState<boolean>(false)

    const myId = useFridaySelector<string>(state => state.profile.profile._id)

    const getNewCard = () => {
        dispatch(cardsActions.updateFilterCardAC('1grade'))
        setLastUpd(true)
    }

    const getOldCard = () => {
        dispatch(cardsActions.updateFilterCardAC('0grade'))
        setLastUpd(false)
    }

    return (
        <div className={s.tableHeader}>
            <li>Question</li>
            <li>Answer</li>
            <li>Last Updated
                {
                    lastUpd
                        ? <button onClick={getOldCard}>{`new ᐃ`}</button>
                        : <button onClick={getNewCard}>{`old ᐁ`}</button>
                }
            </li>
            <li>Grade</li>
            {
                myId === user_id && <li>Actions</li>
            }
        </div>
    )
}

export default TableCardsHeader
