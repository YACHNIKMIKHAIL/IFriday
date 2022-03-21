import React, {useState} from "react";
import style from "./TableHeader.module.css"
import {useDispatch} from "react-redux";
import {packsActions} from "../../../m2-bll/r2-actions/ActionsPacks";

const TableHeader = () => {

    const dispatch = useDispatch()
    const [lastUpd, setLastUpd] = useState<boolean>(false)
    const [cardsCountUpd, setCardsCountUpd] = useState<boolean>(false)

    const getNew = () => {
        dispatch(packsActions.updateFilterAC('1updated'))
        setLastUpd(true)
    }
    const getOld = () => {
        dispatch(packsActions.updateFilterAC('0updated'))
        setLastUpd(false)
    }

    const getFew = () => {
        dispatch(packsActions.updateFilterAC('1cardsCount'))
        setCardsCountUpd(true)
    }
    const getMore = () => {
        dispatch(packsActions.updateFilterAC('0cardsCount'))
        setCardsCountUpd(false)
    }

    return (
        <div className={style.tableHeader}>
            <div>Name</div>
            <div onClick={cardsCountUpd ? getMore : getFew } >Cards
                {/*{cardsCountUpd*/}
                {/*    ? <button onClick={getMore}>{`many ᐃ`}</button>*/}
                {/*    : <button onClick={getFew}>{`few ᐁ`}</button>*/}
                {/*}*/}
            </div>
            <div onClick={lastUpd ? getOld : getNew}>Last Updated
                {/*{lastUpd*/}
                {/*    ? <button onClick={getOld}>{`new ᐃ`}</button>*/}
                {/*    : <button onClick={getNew}>{`old ᐁ`}</button>*/}
                {/*}*/}
            </div>
            <div>Created by</div>
            <div>Actions</div>
        </div>
    )
}

export default TableHeader