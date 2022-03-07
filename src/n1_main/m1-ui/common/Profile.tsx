import React, {ChangeEvent, useState} from 'react';
import s from './../../../n2_features/f1-auth/a6-profile/Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {fridayReducerType} from "../../m2-bll/store";
import {Navigate} from "react-router-dom"
import {updateUserNameTC} from "../../../n2_features/f1-auth/a6-profile/ProfileReducer";

const BASE_IMG_URL = "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg"

const Profile = () => {



    const isInitialized = useSelector<fridayReducerType, boolean>(state => state.me.isInitialized)
    const userName = useSelector<fridayReducerType, string>(state => state.me.me.name)
    const userEmail = useSelector<fridayReducerType, string>(state => state.me.me.email)
    const userImg = useSelector<fridayReducerType, string | undefined>(state => state.me.me.avatar)

    let [name, setName] = useState<string>(userName)

    const dispatch = useDispatch()

    const changeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const updateUser = () => {
        dispatch(updateUserNameTC(name))
    }

    if (!isInitialized) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className={s.profilePage}>
            Profile
            <div className={s.profileContainer}>
                <h2 className={s.title}>Personal information</h2>
                <img src={userImg ? userImg : BASE_IMG_URL} alt={"user's image"}/>
                <div className={s.inputContainer}>
                    <input type="text" className={s.input} value={name} onChange={changeName}/>
                    <input type="text" className={s.input} value={userEmail}/>
                </div>
                <button className={s.button} onClick={updateUser}>Save</button>

            </div>
        </div>
    );
};

export default Profile;