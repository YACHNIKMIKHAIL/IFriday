import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './../../../n2_features/f1-auth/a6-profile/Profile.module.css'
import {useDispatch} from "react-redux";
import {useFridaySelector} from "../../m2-bll/store";
import {ProfileActions, updateUserNameTC} from "../../m2-bll/r1-reducers/ProfileReducer";
import {Navigate} from 'react-router-dom';
import {RoutesXPaths} from "../routes/routes";
import {UserDataType} from "../../m2-bll/r2-actions/ActionLoginForm";
import {meRespType} from "../../m3-dal/meAPI";

export const BASE_IMG_URL = "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg"

const Profile = () => {

    const userInfo = useFridaySelector<UserDataType | meRespType>(state => state.profile.profile)
    const errorMessage = useFridaySelector<string | undefined>(state => state.profile.error)
    const isLoggedIn = useFridaySelector<boolean>(state => state.login.isLoggedIn)

    /*alert(JSON.stringify(errorMessage))*/
    let [name, setName] = useState<string>(userInfo.name)
    /*let [error, setError] = useState<boolean>(!!errorMessage)*/

    /*if (error) {
        console.log(errorMessage)
    }*/


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
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            dispatch(updateUserNameTC(name))
            setModification(!modification)
        }
    }
    const killError = () => {
        dispatch(ProfileActions.setErrorAC(''))
    }

    if (!isLoggedIn) {
        return <Navigate to={RoutesXPaths.LOGIN}/>
    }


    return (
        <div className={s.profilePage}>
            {!!errorMessage && <div style={{color: 'red'}}>{errorMessage}</div> }
            <div className={s.profileContainer} onBlur={killError}>
                <>

                <h2 className={s.title}>Personal information</h2>
                </>
                <img src={userInfo.avatar ? userInfo.avatar : BASE_IMG_URL} alt={"user's image"}/>
                <div className={s.nameContainer}>
                    {
                        modification
                            ? <div>
                                <input type="text" className={s.input} value={name} onKeyPress={onKeyPressHandler}
                                       onChange={changeName}/>
                                <p className={s.description}>Enter your new name, please 😌</p>
                            </div>
                            : <div>
                                <span className={s.yourNameMessage}
                                      onClick={changeModification}>{`Your name is: ${userInfo.name}`}</span>
                                <p className={s.description}>If you want to change your name, click on it 😉</p>
                            </div>

                    }
                </div>

                <button className={s.button} onClick={updateUser}>Save</button>
            </div>
        </div>
    );
};

export default Profile;