import React, {useState} from "react";
import s from "./TableHeader.module.css"
import {useDispatch} from "react-redux";
import {packsActions} from "../../../m2-bll/r2-actions/ActionsPacks";


const TableHeader = () => {

    const dispatch = useDispatch()
    const [lastUpd, setLastUpd] = useState<boolean>(false)

    const getNew = () => {
        dispatch(packsActions.updateFilterAC('1updated'))
        setLastUpd(true)
    }

    const getOld = () => {
        dispatch(packsActions.updateFilterAC('0updated'))
        setLastUpd(false)
    }

    return (
        <div className={s.tableHeader}>
            <li>Name</li>
            <li>Cards</li>
            <li>Last Update
                {lastUpd
                    ? <button onClick={getOld}>{`old ᐃ`}</button>
                    : <button onClick={getNew}>{`new ᐁ`}</button>
                }
            </li>
            <li>Created by</li>
            <li>Actions</li>

        </div>
    )
}
export default TableHeader;
