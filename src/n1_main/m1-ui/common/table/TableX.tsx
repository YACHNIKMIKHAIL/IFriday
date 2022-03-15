import React, {useState} from "react";
import TableHeader from "./TableHeader";
import s from "./Table.module.css"
import {PackType} from "../../../../n2_features/f2-packs&cards_YM/b1-packs/packsReducer";
import {useFridaySelector} from "../../../m2-bll/store";
import {useDispatch} from "react-redux";
import {deletePacksTC} from "../../../../n2_features/f2-packs&cards_YM/b1-packs/ThunkPacks";
import {useNavigate} from "react-router-dom";
import {RoutesXPaths} from "../../routes/routes";

type TableType = {
    p: PackType
}
const TableX = ({p}: TableType) => {
    // console.log('called with', p.name)
    const arr = [
        {
            Name: p.name,
            Cards: p.cardsCount,
            LastUpd: p.updated,
            CreatedBy: p.created,
            Actions: null,
            _id: p._id,
            user_id: p.user_id
        }
    ]

    return (
        arr
            ? (
                <div className={s.table}>
                    {arr.map((arr, idx) => <TableRow key={idx} arr={arr}/>)}
                </div>
            ) : (
                <div>
                    loading...
                </div>)
    )
};
const TableRow = ({arr}: any) => {
    const {
        Name,
        Cards,
        LastUpd,
        CreatedBy,
        Actions,
        _id,
        user_id
    } = arr
    console.log(Name)


    return (
        <div className={s.tableRow}>
            <TableCell item={Name}/>
            <TableCell item={Cards}/>
            <TableCell item={LastUpd}/>
            <TableCell item={CreatedBy}/>
            <TableCell status={true} item={Actions} _id={_id} user_id={user_id}/>
        </div>
    )
};
const TableCell = ({item, status, _id, user_id}: any) => {
    const [state, setState] = useState(item);
    return (
        <div className={s.tableCell}>
            {/*<input*/}
            {/*    value={state}*/}
            {/*    onChange={({ target }) => setState(target.value)}*/}
            {/*    type="text" />*/}
            <>{item}</>
            {status &&
            <ButtonGroup _id={_id} user_id={user_id}/>
            }
        </div>
    )
}
export default TableX;

export const ButtonGroup = ({_id, user_id}: any) => {
    const myPackId = useFridaySelector<string | null>(state => state.packs.user_id)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const deletePack = (id: string) => {
        dispatch(deletePacksTC(id))
    }


    return (
        <div className={s.BtnContainer}>
            {myPackId === user_id && <>
                <button onClick={() => alert("edit")}>edit</button>
                <button onClick={() => deletePack(_id)}>delete</button>
            </>
            }
            <button onClick={() => navigate(`${RoutesXPaths.CARDS}/${_id}`)}>learn</button>
        </div>
    )
}