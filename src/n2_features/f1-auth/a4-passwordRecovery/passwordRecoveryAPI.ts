import axios from "axios";

export const instance = axios.create({
    // baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    baseURL: process.env.REACT_APP_BACK_URL || 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const passwordRecoveryAPI = {
    async forgot(email: string) {
        return await instance.post<ForgotResponseType>(`/auth/forgot`, {
            email,
            message: `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:3000/IFriday#/set-new-password>
link</a>
</div>`
        })
    },
}
type ForgotResponseType = {
    info: string,
    success: boolean,
    answer: boolean,
    html: boolean,
}