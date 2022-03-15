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
import TableHeader from "../../../n1_main/m1-ui/common/table/TableHeader";
import TestAddPackComponent from "./TestAddPackComponent";

const PacksList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const myId = useFridaySelector<string>(state => state.profile.profile._id)
    const [selected, setSelected] = useState<'MY' | 'ALL'>('ALL')
    const [addPack, setAddPack] = useState<boolean>(false)
    const packsState = useFridaySelector<InitialCardPacksType>(state => state.packs)
    const packs = useFridaySelector<PackType[]>(state => state.packs.cardPacks)
    const debouncedSearch = useDebounce<string>(packsState.packName, 1000)
    const debouncedSelect = useDebounce<'MY' | 'ALL'>(selected, 1000)
    const debouncedMIN = useDebounce<number>(packsState.minCardsCount, 1000)
    const debouncedMAX = useDebounce<number>(packsState.maxCardsCount, 1000)
    const debouncedPackOnPage = useDebounce<number>(packsState.pageCount, 1000)
    const debouncedPageChanged = useDebounce<number>(packsState.page, 1000)
    const globalError = useFridaySelector<string>(state => state.app.globalError)

    const selectMyOrAll = (value: string | null) => {
        dispatch(packsActions.allMyAC(value))
        value ? setSelected('MY') : setSelected('ALL')
    }
    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(packsActions.searchAC(e.currentTarget.value))
    }

    const runToCards = (packId: string) => {
        navigate(`${RoutesXPaths.CARDS}/${packId}`)
    }

    useEffect(() => {
        dispatch(packsTC())
    }, [debouncedSearch[0], debouncedSelect[0], debouncedMIN[0], debouncedMAX[0], debouncedPackOnPage[0],
        debouncedPageChanged[0]])

    return (
        <div>
            {
                !addPack
                    ? (<div className={style.packsListBlock}>

                            <div className={style.showPacks}>
                                <h4 className={style.title}>Show packs cards</h4>
                                <div className={style.blockContainer}>
                                </div>
                                <button className={selected === "MY" ? style.selected : ""}
                                        onClick={() => selectMyOrAll(myId)}>My
                                </button>
                                <button className={selected === "ALL" ? style.selected : ""}
                                        onClick={() => selectMyOrAll(null)}>All
                                </button>
                                <h4 className={style.title}>Number of cards</h4>
                                <DoubleRange/>
                                <div className={style.rangeValue}>
                                    <div className={style.rangeValue__item}>min : {packsState.minCardsCount} </div>
                                    <div className={style.rangeValue__item}>max : {packsState.maxCardsCount}</div>
                                </div>
                            </div>
                            <div className={style.packsList}>
                                {globalError
                                    ? <h2 style={{color: 'red'}}>{globalError}</h2>
                                    : <h2 className={style.title}>Pack list</h2>
                                }
                                <div>
                                    <input placeholder={"Search..."}
                                           value={packsState.packName}
                                           onChange={onChangeSearchInput}
                                    />
                                    <button
                                        className={style.buttonSearch}
                                        onClick={() => setAddPack(!addPack)}
                                    >
                                        Add New
                                    </button>
                                </div>

                                <div className={style.cardsBlock}>
                                    <TableHeader/>
                                    {
                                        packs.map((item, index) => {
                                            return (
                                                <div key={index} onDoubleClick={() => runToCards(item._id)}>
                                                    <TableX key={index} p={item}/>
                                                </div>
                                            )
                                        })
                                    }
                                    <TablesPagination/>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            {addPack && <TestAddPackComponent setAddPack={setAddPack}/>}
                        </div>)
            }
        </div>
    )
}
export default PacksList;