import React, {useState} from "react";
import TableHeader from "./TableHeader";
import s from "./Table.module.css"
import {PackType} from "../../../../n2_features/f2-packs&cards_YM/b1-packs/packsReducer";

type TableType={
    p:PackType
}
const Table = ({p}:TableType) => {
    const arr = [
        {
            Name: p.name,
            Cards: p.cardsCount,
            LastUpd: p.updated,
            CreatedBy: p.created,
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
            {/*<input*/}
            {/*    value={state}*/}
            {/*    onChange={({ target }) => setState(target.value)}*/}
            {/*    type="text" />*/}
            <>{state}</>
        </div>
    )
}
export default Table;