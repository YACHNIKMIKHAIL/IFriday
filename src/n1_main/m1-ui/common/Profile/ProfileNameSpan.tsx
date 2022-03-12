import React from 'react';
import s from "./Profile.module.css";

export const ProfileNameSpan = ({name, changeModification}: ProfileNameSpanPropsType) => {
    return (
        <div className={s.profileInfo}>
            <span
                className={s.yourNameMessage}
                onClick={changeModification}>
                {`Your name is: ${name}`}
            </span>
            <p className={s.description}>If you want to change your name, click on it 😉</p>
        </div>
    );
};


// TYPES
type ProfileNameSpanPropsType = {
    name: string
    changeModification: () => void
}