import React from "react";
import s from "./TableHeader.module.css"


const TableHeader=()=>{
    return(
        <div className={s.tableHeader}>
            <li>Name</li>
            <li>Cards</li>
            <li>Last Update</li>
            <li>Created by</li>
            <li>Actions</li>

        </div>
    )
}
export default TableHeader;
