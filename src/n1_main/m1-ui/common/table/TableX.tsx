import React, {useState} from "react";
import s from "./Table.module.css"
import {PackType} from "../../../../n2_features/f2-packs&cards_YM/b1-packs/packsReducer";
import {useFridaySelector} from "../../../m2-bll/store";
import {useDispatch} from "react-redux";
import {changePacksTC, deletePacksTC} from "../../../../n2_features/f2-packs&cards_YM/b1-packs/ThunkPacks";
import {useNavigate} from "react-router-dom";
import {RoutesXPaths} from "../../routes/routes";
import Preloader from "../preloader/Preloader";


type TableType = {
    p: PackType
}
const TableX = ({p}: TableType) => {
    const arr = [
        {
            Name: p.name,
            Cards: p.cardsCount,
            LastUpd: p.updated,
            CreatedBy: p.user_name,
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
                    <Preloader status={"failed"}/>
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
    const dispatch = useDispatch()
    const [newPackName, setNewPackName] = useState<string>('')
    const [edit, setEdit] = useState<boolean>(false)


    const saveChanges = () => {
        setEdit(false)
        dispatch(changePacksTC(newPackName, _id))
    }

    return (
        <div className={s.tableCell}>
            {edit ? <input
                    value={newPackName}
                    onChange={({target}) => setNewPackName(target.value)}
                    type="text"/>
                : <>{item}</>}
            {status &&
            <ButtonGroup _id={_id} user_id={user_id} edit={edit} setEdit={setEdit} saveChanges={saveChanges}/>
            }
        </div>
    )
}
export default TableX;

export const ButtonGroup = ({_id, user_id, edit, setEdit, saveChanges}: any) => {
    const myId = useFridaySelector<string>(state => state.profile.profile._id)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const deletePack = (id: string) => {
        dispatch(deletePacksTC(id))
    }


    return (
        <div className={s.BtnContainer}>
            {myId === user_id && <>{!edit
                ? <button onClick={() => setEdit(true)}>edit</button>
                : <button onClick={saveChanges}>save</button>}
                <button onClick={() => deletePack(_id)}>delete</button>
            </>
            }
            <button onClick={() => navigate(`${RoutesXPaths.CARDS}/${_id}`)}>learn</button>
        </div>
    )
}