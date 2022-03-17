import React from 'react';

type LearnedCardType = {
    question: string
    answer: string
    setLearn: (v: boolean) => void
}
const LearnedCard = ({question, answer, setLearn}: LearnedCardType) => {
    return (
        <div style={{border: '2px black solid'}}>
            question:
            <div>{question}</div>
            answer:
            <div>{answer}</div>
            <div>
                <button onClick={() => setLearn(false)}>Close</button>
            </div>
        </div>
    );
};

export default LearnedCard;