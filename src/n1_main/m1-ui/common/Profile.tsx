import React, {ChangeEvent, useState} from 'react';
import s from './../../../n2_features/f1-auth/a6-profile/Profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {fridayReducerType} from "../../m2-bll/store";
import {ProfileType, updateUserNameTC} from "../../../n2_features/f1-auth/a6-profile/ProfileReducer";
import {Navigate} from 'react-router-dom';
import {RoutesXPaths} from "../routes/routes";

export const BASE_IMG_URL = "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg"

const Profile = () => {

    const userInfo = useSelector<fridayReducerType, ProfileType>(state => state.profile.profile)
    const isLoggedIn = useSelector<fridayReducerType, boolean>(state => state.login.isLoggedIn)

    let [name, setName] = useState<string>(userInfo.name)
    let [modification, setModification] = useState<boolean>(false)

    const dispatch = useDispatch()

    const changeModification = () => {
        setModification(true)
    }
    const changeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const updateUser = () => {
        dispatch(updateUserNameTC(name))
        setModification(!modification)
    }

    if (!isLoggedIn) {
        return <Navigate to={RoutesXPaths.LOGIN}/>
    }


    return (
        <div className={s.profilePage}>
            Profile
            <div className={s.profileContainer}>
                <h2 className={s.title}>Personal information</h2>
                <img src={userInfo.avatar ? userInfo.avatar : BASE_IMG_URL} alt={"user's image"}/>
                <div className={s.nameContainer}>
                    {
                        modification
                            ? <div>
                                <input type="text" className={s.input} value={name} onChange={changeName}/>
                                <p>Enter your new name, please 😌</p>
                            </div>
                            : <div>
                                <span onClick={changeModification}>{`Your name is: ${userInfo.name}`}</span>
                                <p>If you want to change your name, click on it 😉</p>
                            </div>

                    }
                </div>
                <button className={s.button} onClick={updateUser}>Save</button>
            </div>
        </div>
    );
};

export default Profile;