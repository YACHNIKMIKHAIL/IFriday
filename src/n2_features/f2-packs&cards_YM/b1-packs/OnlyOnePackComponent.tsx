import React, {useState} from 'react';
import {PackType} from "../../../n1_main/m2-bll/r1-reducers/packsReducer";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {Button, IconButton} from "@mui/material";
import {Delete} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import {deletePacksTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkPacks";
import {RoutesXPaths} from "../../../n1_main/m1-ui/routes/routes";
import {useNavigate} from "react-router-dom";

type OnlyOnePackComponentType = {
    item: PackType
}
const OnlyOnePackComponent = ({item}: OnlyOnePackComponentType) => {
    const myId = useFridaySelector<string>(state => state.profile.profile._id)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const [edit, setEdit] = useState<boolean>(false)
    const [newName, setNewName] = useState<string>(item.name)
    const itemName = item.name

    const runToCards=() => navigate(`${RoutesXPaths.CARDS}/${item._id}`)
    const deletePack = (id: string) => {
        dispatch(deletePacksTC(id))
    }
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            border: '2px red solid',
        }}>
            <div style={{
                width: '16%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '2px blue solid'
            }}>
                {!edit
                    ? itemName
                    : <input type="text" value={newName} onChange={(e) => setNewName(e.currentTarget.value)}/>
                }
            </div>
            <div style={{
                width: '15%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '2px blue solid'
            }}>
                {item.cardsCount}
            </div>
            <div style={{
                width: '25%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                border: '2px blue solid',
                fontSize: '13px'
            }}>
                <div>дата: {item.updated.slice(0, 10)},</div>
                <div>время: {item.updated.slice(12, 19)}</div>
            </div>
            <div style={{
                width: '15%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '2px blue solid'
            }}>
                {item.user_name}
            </div>
            <div style={{
                width: '29%', display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '2px blue solid'
            }}>
                {myId === item.user_id
                    ? <>
                        <Button size="small" onClick={() => setEdit(true)}>edit</Button>
                        <Button size="small" onClick={runToCards}>learn</Button>
                        <IconButton onClick={() => deletePack(item._id)} aria-label="delete">
                            <Delete/>
                        </IconButton>
                    </>
                    : <>
                        <Button size="small" onClick={runToCards}>learn</Button>
                    </>}

            </div>
        </div>
    );
};

export default OnlyOnePackComponent;