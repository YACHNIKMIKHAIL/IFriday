import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Profile.module.css";




export const ChangeNameInput = ({name, updateUser, onKeyPressHandler, changeNameValue, error}: ChangeNameInputPropsType) => {


    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        changeNameValue(e.currentTarget.value)
    }

    return (
        <div>
            <input
                type="text"
                className={s.input}
                value={name}
                onBlur={updateUser}
                onKeyPress={onKeyPressHandler}
                onChange={onChangeName}
                autoFocus
            />
            {!error && <p className={s.description}>Enter your new name, please 😌</p>}
            {error && <span style={{color: "red", fontWeight: 700}}>{error}</span>}
        </div>
    );
};


// TYPES
type ChangeNameInputPropsType = {
    name: string
    error: string
    updateUser: () => void
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    changeNameValue: (newName: string) => void
}
