import React from 'react';
import {ModeTypes, PackType} from "../../../n1_main/m2-bll/r1-reducers/packsReducer";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {IconButton} from "@mui/material";
import {Delete} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import {deletePacksTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkPacks";
import Modal from "../../../n1_main/m1-ui/common/ModalWindow/ModalWindow";
import EditPackComponent from "./EditPackComponent";
import s from './OnlyOnePackComponent.module.css'
import {packsActions} from "../../../n1_main/m2-bll/r2-actions/ActionsPacks";

type OnlyOnePackComponentType = {
    item: PackType
    runToCards: (packId: string) => void
}

const OnlyOnePackComponent = ({item, runToCards}: OnlyOnePackComponentType) => {

    const dispatch = useDispatch()

    const myId = useFridaySelector<string>(state => state.profile.profile._id)
    const isLoad = useFridaySelector<boolean>(state => state.app.isLoad)
    const packMode = useFridaySelector<ModeTypes>(state => state.packs.mode)
    const deletePack = (id: string) => {
        dispatch(deletePacksTC(id))
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
                            <div className={s.Btn} onClick={() => dispatch(packsActions.packModeAC('edit'))} aria-disabled={isLoad}>edit
                            </div>
                            <div className={s.Btn} onClick={() => runToCards(item._id)} aria-disabled={isLoad}>learn</div>
                            <IconButton onClick={() => deletePack(item._id)} aria-label="delete" disabled={isLoad}>
                                <Delete/>
                            </IconButton>
                        </div>
                        : <div className={s.BtnGroup__Item__My}>
                            <div className={s.Btn} onClick={() => runToCards(item._id)} aria-disabled={isLoad}>learn</div>
                        </div>
                }
            </div>
            <Modal
                backgroundOnClick={() => {
                }}
                show={packMode === 'edit'}
                height={0}
                width={0}
                backgroundStyle={{backgroundColor: 'rgba(255,145,3,0.13)'}}
                enableBackground={true}>
                {packMode === 'edit' && <EditPackComponent
                    packId={item._id}
                    oldName={item.name}/>}
            </Modal>
        </div>
    )
}

export default OnlyOnePackComponent
