import React, {ChangeEvent, useEffect, useState} from "react";
import style from "./PacksList.module.css"
import DoubleRange from "../../../n1_main/m1-ui/doubleRange/DoubleRange";
import TablesPagination from "../../../n1_main/m1-ui/common/pagination/TablePagination";
import {packsActions} from "./ActionsPacks";
import {useDispatch} from "react-redux";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {InitialCardPacksType, PackType} from "./packsReducer";
import {packsTC} from "./ThunkPacks";
import {useNavigate} from "react-router-dom";
import {RoutesXPaths} from "../../../n1_main/m1-ui/routes/routes";
import {useDebounce} from "use-debounce";
import TableX from "../../../n1_main/m1-ui/common/table/TableX";


const PacksList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const myId = useFridaySelector<string>(state => state.profile.profile._id)
    const [selected, setSelected] = useState<'MY' | 'ALL'>('ALL')
    const packsState = useFridaySelector<InitialCardPacksType>(state => state.packs)
    const packs = useFridaySelector<PackType[]>(state => state.packs.cardPacks)
    const debouncedSearch = useDebounce<string>(packsState.packName, 1500)
    const debouncedSelect = useDebounce<'MY' | 'ALL'>(selected, 1500)
    const debouncedMIN = useDebounce<number>(packsState.minCardsCount, 1500)
    const debouncedMAX = useDebounce<number>(packsState.maxCardsCount, 1500)


    const selectMyOrAll = (value: string | null) => {
        dispatch(packsActions.allMyAC(value))
        value ? setSelected('MY') : setSelected('ALL')
    }
    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(packsActions.searchAC(e.currentTarget.value))
    }
    const getPacks = () => {
        dispatch(packsTC())
    }
    const runToCards = (packId: string) => {
        navigate(`${RoutesXPaths.CARDS}/${packId}`)
    }


    useEffect(() => {
        dispatch(packsTC())
    }, [debouncedSearch[0], debouncedSelect[0], debouncedMIN[0], debouncedMAX[0]])

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
                    <input placeholder={"Search..."} value={packsState.packName}
                           onChange={onChangeSearchInput}/>
                    <button onClick={getPacks}>Search</button></span>
                <div className={style.cardsBlock}>

                    {packs.map((m, i) => {
                        return <div key={i} onDoubleClick={() => runToCards(m._id)}>
                            <TableX key={i} p={m}/>
                        </div>
                    })}
                </div>
                <TablesPagination/>
            </div>


        </div>
    )
}
export default PacksList;