import React, {useState} from 'react';
import {PackType} from "../../../n1_main/m2-bll/r1-reducers/packsReducer";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {IconButton} from "@mui/material";
import {Delete} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import {deletePacksTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkPacks";
import Modal from "../../../n1_main/m1-ui/common/ModalWindow/ModalWindow";
import EditPackComponent from "./EditPackComponent";
import s from './OnlyOnePackComponent.module.css'

type OnlyOnePackComponentType = {
    item: PackType
    runToCards: (packId: string) => void
}

const OnlyOnePackComponent = ({item, runToCards}: OnlyOnePackComponentType) => {

    const dispatch = useDispatch()

    const myId = useFridaySelector<string>(state => state.profile.profile._id)

    const [edit, setEdit] = useState<boolean>(false)

    const deletePack = (id: string) => {
        dispatch(deletePacksTC(id))
    }

    if (edit) {
        return (
            <Modal
                backgroundOnClick={() => setEdit(false)}
                show={true}
                height={0}
                width={0}
                backgroundStyle={{backgroundColor: 'goldenrod'}}
                enableBackground={true}>
                <EditPackComponent
                    packId={item._id}
                    setEditPack={setEdit}
                    oldName={item.name}/>
            </Modal>
        )
    }

    return (
        <div className={s.TableContainer}>
            <div className={s.TableItem__name}>
                {item.name}
            </div>
            <div className={s.TableItem__cardsCount}>
                {item.cardsCount}
            </div>
            <div className={s.TableItem__data}>
                <div>дата: {item.updated.slice(0, 10)},</div>
                <div>время: {item.updated.slice(12, 19)}</div>
            </div>
            <div className={s.TableItem__userName}>
                {item.user_name}
            </div>
            <div className={s.TableItem__BtnGroup}>
                {
                    myId === item.user_id
                        ? <div className={s.BtnGroup__Item__My}>
                            <div className={s.Btn} onClick={() => setEdit(true)}>edit</div>
                            <div className={s.Btn} onClick={() => runToCards(item._id)}>learn</div>
                            <IconButton onClick={() => deletePack(item._id)} aria-label="delete">
                                <Delete/>
                            </IconButton>
                        </div>
                        : <div className={s.BtnGroup__Item__My}>
                            <div className={s.Btn} onClick={() => runToCards(item._id)}>learn</div>
                        </div>
                }
            </div>
        </div>
    )
}

export default OnlyOnePackComponent
