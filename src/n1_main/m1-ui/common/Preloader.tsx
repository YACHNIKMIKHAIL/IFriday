import React from "react";
import preloader from "../assets/preloader/preloader.gif"
import {RequestStatusType} from "../../m2-bll/r1-reducers/app-reducer";

type PreloaderType = {
    status: RequestStatusType
}

const Preloader = ({status}: PreloaderType) => {
    return (
        <div>
            {status==="loading" && <img src={preloader} style={{
                width: "200px",
                height: "200px", top: "15%", left: "40%",
                position: "absolute", opacity: ".5"
            }} alt='preloader'/>}
        </div>
    )
}
export default Preloader;