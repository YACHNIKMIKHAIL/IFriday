import React, {useState} from 'react';
import {CardType} from "../../../n1_main/m2-bll/r1-reducers/cardsReducer";
import {Rating} from "@material-ui/core";
import {deleteCardTC, updateCardTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkCards";
import {useDispatch} from "react-redux";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";

const styles = {
    main: {
        display: 'flex',
        justifyContent: 'space-between',
        // height: '50px',
        margin: '5px',
        borderRadius: '20px',
        border: '2px grey solid'
    },
    okoshko: {
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

    const deleteCard = () => {
        dispatch(deleteCardTC(c._id))
    }

    const saveCard = () => {
        const updatedCard = {
            _id: c._id,
            question: q,
            comments: ''
        }
        dispatch(updateCardTC(updatedCard))
        setEditCard(false)
    }

    return (
        <div style={styles.main}>
            <div style={styles.okoshko}>
                {editCard ? <input type="text" value={q} onChange={(e) => setQ(e.currentTarget.value)}/>
                    : <span>{c.question}</span>}
            </div>
            <div style={styles.okoshko}>
                {c.answer}
            </div>
            <div style={styles.updated}>
                {c.updated}</div>
            <div style={styles.okoshko}>
                <Rating name="read-only" value={c.grade} readOnly size='small'/>
            </div>
            {myId === c.user_id &&
            <>{!editCard
                ? <>
                    <button onClick={deleteCard}>delete</button>
                    <button onClick={() => setEditCard(true)}>edit</button>
                </>

                : <>
                    <button onClick={saveCard}>save</button>
                    <button onClick={() => setEditCard(false)}>cancel</button>
                </>}
            </>}
        </div>
    );
};

export default CardComponent;