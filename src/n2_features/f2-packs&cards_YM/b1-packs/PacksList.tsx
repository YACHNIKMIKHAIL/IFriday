import React, {useState} from "react";
import style from "./PacksList.module.css"
import DoubleRange from "../../../n1_main/m1-ui/doubleRange/DoubleRange";
import TablesPagination from "../../../n1_main/m1-ui/common/pagination/TablePagination";
import {packsActions} from "./ActionsPacks";
import {useDispatch} from "react-redux";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {InitialCardPacksType, PacksType} from "./packsReducer";
import {packsTC} from "./ThunkPacks";


const PacksList = () => {
    const dispatch = useDispatch()
    const myId = useFridaySelector<string>(state => state.profile.profile._id)
    const [selected, setSelected] = useState<'MY' | 'ALL'>('ALL')
    const selectMyOrAll = (value: string | null) => {
        dispatch(packsActions.allMyAC(value))
        value ? setSelected('MY') : setSelected('ALL')
    }
    const packsState = useFridaySelector<InitialCardPacksType>(state => state.packs)
    console.log(packsState.user_id)
    console.log(packsState.user_id)
    const search = (value: string) => {
        dispatch(packsActions.searchAC(value))
    }
    console.log(packsState.packName)
    const getPacks = () => {
        dispatch(packsTC())
    }
    const packs = useFridaySelector<PacksType[]>(state => state.packs.cardPacks)
    return (
        <div className={style.packsListBlock}>
            <div className={style.showPacks}>
                <h4>Show packs cards</h4>
                <span>
                    {selected}
                    <button onClick={() => selectMyOrAll(myId)}>My</button>
                    <button onClick={() => selectMyOrAll(null)}>All</button>
                </span>

                <h4>Number of cards</h4>
                <span>min:{packsState.minCardsCount}</span>
                <span>max:{packsState.maxCardsCount}</span>
                <DoubleRange/>
            </div>

            <div className={style.packsList}>
                <h2>Pack list</h2>
                <span>
                    <input placeholder={"Search..."} onChange={(e) => search(e.currentTarget.value)}/>
                    <button onClick={getPacks}>Search</button></span>
                <div className={style.cardsBlock}>
                    {packs.map((m, i) => {
                        return <div key={i}
                                    style={{border:'2px red dashed'}}
                        >{m.name}</div>
                    })}
                </div>
                <TablesPagination/>
            </div>


        </div>
    )
}
export default PacksList;