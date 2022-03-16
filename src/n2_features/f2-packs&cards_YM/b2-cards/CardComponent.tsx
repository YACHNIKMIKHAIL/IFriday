import React from 'react';
import {CardType} from "./cardsReducer";
import {Rating} from "@material-ui/core";

const styles= {
    main: {
        display: 'flex',
        justifyContent: 'space-between',
        // height: '50px',
        margin: '5px',
        borderRadius: '20px',
        border:'2px grey solid'
    },
    okoshko:{
        width: '25%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    updated:{
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
    return (
        <div style={styles.main}>
            <div style={styles.okoshko}>
                {c.question}</div>
            <div style={styles.okoshko}>
                {c.answer}</div>
            <div style={styles.updated}>
                {c.updated}</div>
            <div style={styles.okoshko}>
                <Rating name="read-only" value={c.grade} readOnly size='small'/>
            </div>

        </div>
    );
};

export default CardComponent;