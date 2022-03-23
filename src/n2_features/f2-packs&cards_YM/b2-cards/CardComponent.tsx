import React, {useState} from 'react';
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

const CardComponent = ({content}: CardComponentType) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const myId = useFridaySelector<string>(state => state.profile.profile._id)

    const [editCard, setEditCard] = useState<boolean>(false)

    const deleteCard = () => {
        dispatch(deleteCardTC(content._id))
    }

    const cardId = content._id
    const packId = content.cardsPack_id

    const goToCard = () => {
        navigate(`${RoutesXPaths.LEARNED_CARD}/${packId}/${cardId}`)
    }

    if (editCard) {
        return (
            <Modal
                backgroundOnClick={() => setEditCard(false)}
                show={true}
                height={0}
                width={0}
                backgroundStyle={{backgroundColor: 'darkolivegreen'}}
                enableBackground={true}>
                <EditCardComponent
                    setEditCard={setEditCard}
                    cardId={content._id}
                    oldQ={content.question}/>
            </Modal>
        )
    }

    return (
        <div className={s.TableContainer} onDoubleClick={goToCard}>
            <div className={s.window}>
                <span onDoubleClick={() => setEditCard(true)}>{content.question}</span>
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
                    <div className={s.Btn} onClick={goToCard}>edit</div>
                    <div className={s.Btn} onClick={() => setEditCard(true)}>learn</div>
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
