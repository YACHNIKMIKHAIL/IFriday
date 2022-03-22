import React, {useState} from 'react';
import {CardType} from "../../../n1_main/m2-bll/r1-reducers/cardsReducer";
import {Rating} from "@material-ui/core";
import {deleteCardTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkCards";
import {useDispatch} from "react-redux";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {Button, IconButton} from "@mui/material";
import {Delete} from "@material-ui/icons";
import {RoutesXPaths} from '../../../n1_main/m1-ui/routes/routes';
import {useNavigate} from "react-router-dom";
import Modal from "../../../n1_main/m1-ui/common/ModalWindow/ModalWindow";
import EditCardComponent from "./EditCardComponent";

const styles = {
    main: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '5px',
        borderRadius: '20px',
        border: '2px grey solid'
    },
    window: {
        width: '25%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    updated: {
        width: '25%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: 'small'
    }
}

type CardComponentType = {
    c: CardType
}

const CardComponent = ({c}: CardComponentType) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const myId = useFridaySelector<string>(state => state.profile.profile._id)

    const [editCard, setEditCard] = useState<boolean>(false)

    const deleteCard = () => {
        dispatch(deleteCardTC(c._id))
    }

    const cardId = c._id
    const packId = c.cardsPack_id

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
                    cardId={c._id}
                    oldQ={c.question}/>
            </Modal>
        )
    }
    return (
        <div style={styles.main} onDoubleClick={goToCard}>
            <div style={styles.window}>
                <span onDoubleClick={() => setEditCard(true)}>{c.question}</span>
            </div>
            <div style={styles.window}>
                {c.answer}
            </div>
            <div style={styles.updated}>
                дата: {c.updated.slice(0, 10)}, время: {c.updated.slice(12, 19)}
            </div>
            <div style={styles.window}>
                <Rating
                    name="read-only"
                    value={c.grade}
                    readOnly size='small'
                />
            </div>
            {
                myId === c.user_id &&
                <>
                    <Button size="small" onClick={goToCard}>learn</Button>
                    <Button size="small" onClick={() => setEditCard(true)}>edit</Button>
                    <IconButton onClick={deleteCard} aria-label="delete">
                        <Delete/>
                    </IconButton>
                </>
            }
        </div>
    )
}

export default CardComponent
