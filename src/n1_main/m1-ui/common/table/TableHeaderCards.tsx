import React from "react";
import s from "./TableHeader.module.css"
import {useFridaySelector} from "../../../m2-bll/store";

type TCHType={user_id:string}
const TableCardsHeader=({user_id}:TCHType)=>{
    const myId = useFridaySelector<string>(state => state.profile.profile._id)

    return(
        <div className={s.tableHeader}>
            <li>Question</li>
            <li>Answer</li>
            <li>Updated</li>
            <li>Grade</li>
            {myId === user_id &&<li>Actions</li>}



        </div>
    )
}
export default TableCardsHeader;
