import React, {useState} from 'react';
import {PackType} from "../../../n1_main/m2-bll/r1-reducers/packsReducer";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {Button, IconButton} from "@mui/material";
import {Delete} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import {deletePacksTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkPacks";
import AddPackComponent from "./AddPackComponent";
import Modal from "../../../n1_main/m1-ui/common/ModalWindow/ModalWindow";
import EditPackComponent from "./EditPackComponent";

type OnlyOnePackComponentType = {
    item: PackType
    runToCards: (packId: string) => void
}
const OnlyOnePackComponent = ({item, runToCards}: OnlyOnePackComponentType) => {
    const myId = useFridaySelector<string>(state => state.profile.profile._id)
    const dispatch = useDispatch()
    const [edit, setEdit] = useState<boolean>(false)
    const [newName, setNewName] = useState<string>(item.name)

    const deletePack = (id: string) => {
        dispatch(deletePacksTC(id))
    }
    if (edit) {
        return <Modal backgroundOnClick={() => setEdit(false)}
                      show={true}
                      height={0}
                      width={0}
                      backgroundStyle={{backgroundColor: 'goldenrod'}}
                      enableBackground={true}>
            <EditPackComponent packId={item._id} setEditPack={setEdit} oldName={item.name}/>
        </Modal>
    }

    return (
        <div style={{
            display: 'flex',
            width: '98%',
            backgroundColor: 'pink',
            margin: '5px',
            borderRadius: '5px'
        }}>
            <div style={{
                width: '16%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}>{item.name}
            </div>
            <div style={{
                width: '15%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {item.cardsCount}
            </div>
            <div style={{
                width: '25%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '13px'
            }}>
                <div>дата: {item.updated.slice(0, 10)},</div>
                <div>время: {item.updated.slice(12, 19)}</div>
            </div>
            <div style={{
                width: '15%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                textAlign: 'end'
            }}>
                {item.user_name}
            </div>
            <div style={{
                width: '29%', display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {myId === item.user_id
                    ? <>
                        <Button size="small" onClick={() => setEdit(true)}>edit</Button>
                        <Button size="small" onClick={() => runToCards(item._id)}>learn</Button>
                        <IconButton onClick={() => deletePack(item._id)} aria-label="delete">
                            <Delete/>
                        </IconButton>
                    </>
                    : <>
                        <Button size="small" onClick={() => runToCards(item._id)}>learn</Button>
                    </>}

            </div>
        </div>
    );
};

export default OnlyOnePackComponent;