import React from "react";
import s from "./TableHeader.module.css"


const TableCardsHeader=()=>{
    return(
        <div className={s.tableHeader}>
            <li>Question</li>
            <li>Answer</li>
            <li>Updated</li>
            <li>Grade</li>


        </div>
    )
}
export default TableCardsHeader;
