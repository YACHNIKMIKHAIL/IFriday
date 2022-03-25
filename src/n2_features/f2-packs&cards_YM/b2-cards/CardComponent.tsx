import React from 'react';
import s from "../b1-packs/OnlyOnePackComponent.module.css";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {IconButton} from "@mui/material";
import {Delete} from "@material-ui/icons";
import {Rating} from "@material-ui/core";

import {CardType} from "../../../n1_main/m2-bll/r1-reducers/cardsReducer";
import {deleteCardTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkCards";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {RoutesXPaths} from '../../../n1_main/m1-ui/routes/routes';
import Modal from "../../../n1_main/m1-ui/common/ModalWindow/ModalWindow";
import EditCardComponent from "./EditCardComponent";
import {ModeTypes} from "../../../n1_main/m2-bll/r1-reducers/packsReducer";
import {cardsActions} from "../../../n1_main/m2-bll/r2-actions/ActionsCards";

const CardComponent = ({content}: CardComponentType) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const myId = useFridaySelector<string>(state => state.profile.profile._id)
    const cardMode = useFridaySelector<ModeTypes>(state => state.cards.mode)
    const isLoad = useFridaySelector<boolean>(state => state.app.isLoad)

    const deleteCard = () => {
        dispatch(deleteCardTC(content._id))
    }

    const cardId = content._id
    const packId = content.cardsPack_id

    const goToCard = () => {
        navigate(`${RoutesXPaths.LEARNED_CARD}/${packId}/${cardId}`)
    }

    const x = () => {
        dispatch(cardsActions.cardModeAC('edit'))
    }

    return (
        <div className={s.TableContainer} onDoubleClick={goToCard}>
            <div className={s.window}>
                <span onDoubleClick={x} aria-disabled={isLoad}>{content.question}</span>
            </div>
            <div className={s.window}>
                {content.answer}
            </div>
            <div className={s.updated}>
                <div>дата: {content.updated.slice(0, 10)}, </div>
                <div>время: {content.updated.slice(12, 19)}</div>
            </div>
            <div className={s.window}>
                <Rating
                    name="read-only"
                    value={content.grade}
                    readOnly size='small'
                />
            </div>
            {
                myId === content.user_id &&
                <div className={s.BtnGroup__Item__My}>
                    <div className={s.Btn} onClick={x} aria-disabled={isLoad}>edit</div>
                    <div className={s.Btn} onClick={goToCard} aria-disabled={isLoad}>learn</div>
                    <IconButton onClick={deleteCard} aria-label="delete" disabled={isLoad}>
                        <Delete/>
                    </IconButton>
                </div>
            }
            <Modal
                backgroundOnClick={() => dispatch(cardsActions.cardModeAC(null))}
                show={cardMode === 'edit'}
                height={0}
                width={0}
                backgroundStyle={{backgroundColor: 'rgba(215,207,61,0.2)'}}
                enableBackground={true}>
                <EditCardComponent
                    cardId={content._id}
                    oldQ={content.question}/>
            </Modal>
        </div>
    )
}

export default CardComponent

//types
type CardComponentType = {
    content: CardType
}
