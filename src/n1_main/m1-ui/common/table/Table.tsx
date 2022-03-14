import React, {useState} from "react";
import {useSelector} from "react-redux";
import TableHeader from "./TableHeader";
import s from "./Table.module.css"


const Table = () => {
    const arr = [
        {
            Name: "PackName",
            Cards: "4",
            LastUpd: "10.12.2021",
            CreatedBy: "Sergey",
            Actions: null
        }
    ]


    // const arr = useSelector(({starships}) => arr.....); вставляем массив

    return (
        arr
            ? <div className={s.table}>
                <TableHeader/>
                {arr.map((arr, idx) => <TableRow key={idx} arr={arr}/>)}
            </div>
            : <div>loading...</div>
    )
};
const TableRow = ({arr}:any) => {
    const {
        Name,
        Cards,
        LastUpd,
        CreatedBy,
        Actions
    } = arr


    return (
        <div className={s.tableRow}>
            <TableCell item={Name} />
            <TableCell item={Cards} />
            <TableCell item={LastUpd} />
            <TableCell item={CreatedBy} />
            <TableCell item={Actions} />
        </div>
    )
};
const TableCell = ({ item }:any) => {
    const [state, setState] = useState(item);

    return (
        <div className={s.tableCell}>
            <input
                value={state}
                onChange={({ target }) => setState(target.value)}
                type="text" />
        </div>
    )
}
export default Table;