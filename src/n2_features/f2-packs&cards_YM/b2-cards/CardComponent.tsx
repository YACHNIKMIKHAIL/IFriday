import React from 'react';
import {CardType} from "../../../n1_main/m2-bll/r1-reducers/cardsReducer";
import {Rating} from "@material-ui/core";
import {deleteCardTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkCards";
import {useDispatch} from "react-redux";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {IconButton} from "@mui/material";
import {Delete} from "@material-ui/icons";
import {RoutesXPaths} from '../../../n1_main/m1-ui/routes/routes';
import {useNavigate} from "react-router-dom";
import Modal from "../../../n1_main/m1-ui/common/ModalWindow/ModalWindow";
import EditCardComponent from "./EditCardComponent";
import s from "../b1-packs/OnlyOnePackComponent.module.css";
import TestAddCardComponent from "./TestAddCardComponent";
import {ModeTypes} from "../../../n1_main/m2-bll/r1-reducers/packsReducer";
import {cardsActions} from "../../../n1_main/m2-bll/r2-actions/ActionsCards";
import GlobalError from "../../../n1_main/m1-ui/common/GlobalError/GlobalError";

const CardComponent = ({content}: CardComponentType) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const myId = useFridaySelector<string>(state => state.profile.profile._id)


    const cardMode = useFridaySelector<ModeTypes>(state => state.cards.mode)
    console.log(cardMode)
    const globalError = useFridaySelector<string>(state => state.app.globalError)


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

    if (globalError) {
        return <Modal
            backgroundOnClick={() => {
            }}
            show={true}
            height={0}
            width={0}
            backgroundStyle={{backgroundColor: 'rgba(255,3,3,0.15)'}}
            enableBackground={true}>
            <GlobalError/>
        </Modal>
    }

    if (cardMode === 'add') {
        return (
            <Modal
                backgroundOnClick={() => dispatch(cardsActions.cardModeAC(null))}
                show={true}
                height={0}
                width={0}
                backgroundStyle={{backgroundColor: 'rgba(89,61,215,0.13)'}}
                enableBackground={true}>
                <TestAddCardComponent
                    packId={packId}
                />
            </Modal>
        )
    }

    if (cardMode === 'edit') {
        return (
            <Modal
                backgroundOnClick={() => dispatch(cardsActions.cardModeAC(null))}
                show={true}
                height={0}
                width={0}
                backgroundStyle={{backgroundColor: 'darkolivegreen'}}
                enableBackground={true}>
                <EditCardComponent
                    cardId={content._id}
                    oldQ={content.question}/>
            </Modal>
        )
    }

    return (
        <div className={s.TableContainer} onDoubleClick={goToCard}>
            <div className={s.window}>
                <span onDoubleClick={x}>{content.question}</span>
            </div>
            <div className={s.window}>
                {content.answer}
            </div>
            <div className={s.updated}>
                дата: {content.updated.slice(0, 10)}, время: {content.updated.slice(12, 19)}
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
                    <div className={s.Btn} onClick={x}>edit</div>
                    <div className={s.Btn} onClick={goToCard}>learn</div>
                    <IconButton onClick={deleteCard} aria-label="delete">
                        <Delete/>
                    </IconButton>
                </div>
            }
        </div>
    )
}

export default CardComponent

//types
type CardComponentType = {
    content: CardType
}
