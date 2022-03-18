import React, {useState} from 'react';
import {CardType} from "../../../n1_main/m2-bll/r1-reducers/cardsReducer";
import {Rating} from "@material-ui/core";
import {deleteCardTC, updateCardTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkCards";
import {useDispatch} from "react-redux";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {Button, IconButton} from "@mui/material";
import {Delete} from "@material-ui/icons";

const styles = {
    main: {
        display: 'flex',
        justifyContent: 'space-between',
        // height: '50px',
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
    const myId = useFridaySelector<string>(state => state.profile.profile._id)

    const dispatch = useDispatch()
    const [editCard, setEditCard] = useState<boolean>(false)
    const [q, setQ] = useState<string>('')
    const [learn, setLearn] = useState<boolean>(false)

    //         <LearnedCard setLearn={setLearn} question={c.question} answer={c.answer}/>

    const deleteCard = () => {
        dispatch(deleteCardTC(c._id))
    }

    const updatedCard = {
        _id: c._id,
        question: q,
        comments: '',
    }
    const saveCard = () => {
        dispatch(updateCardTC(updatedCard))
        setEditCard(false)
    }
    return (
        <div style={styles.main} onDoubleClick={() => setLearn(!learn)}>
            <div style={styles.window}>
                {
                    editCard && c.user_id === myId
                        ? <input onBlur={saveCard} autoFocus type="text" value={q}
                                 onChange={(e) => setQ(e.currentTarget.value)}/>
                        : <span onDoubleClick={() => setEditCard(true)}>{c.question}</span>
                }
            </div>
            <div style={styles.window}>
                {c.answer}
            </div>
            <div style={styles.updated}>
                {c.updated}
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
                    {
                        !editCard
                            ? (
                                <>
                                    <Button size="small" onClick={() => setLearn(true)}>learn</Button>
                                    <Button size="small" onClick={() => setEditCard(true)}>edit</Button>
                                    <IconButton onClick={deleteCard} aria-label="delete">
                                        <Delete/>
                                    </IconButton>
                                </>
                            ) : (
                                <div>
                                    <Button size="small" onClick={saveCard}>save</Button>
                                    <Button size="small" onClick={() => setEditCard(false)}>cancel</Button>
                                </div>
                            )
                    }
                </>
            }
        </div>
    )
}

export default CardComponent