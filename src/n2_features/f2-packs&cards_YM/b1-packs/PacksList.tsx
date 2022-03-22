import React, {ChangeEvent, useEffect, useState} from "react";
import style from "./PacksList.module.css"
import DoubleRange from "../../../n1_main/m1-ui/doubleRange/DoubleRange";
import TablesPagination from "../../../n1_main/m1-ui/common/pagination/TablePagination";
import {packsActions} from "../../../n1_main/m2-bll/r2-actions/ActionsPacks";
import {useDispatch} from "react-redux";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {InitialCardPacksType, PackType} from "../../../n1_main/m2-bll/r1-reducers/packsReducer";
import {packsTC} from "../../../n1_main/m2-bll/r3-thunks/ThunkPacks";
import {useNavigate} from "react-router-dom";
import {RoutesXPaths} from "../../../n1_main/m1-ui/routes/routes";
import {useDebounce} from "use-debounce";
import TableHeader from "../../../n1_main/m1-ui/common/table/TableHeader";
import AddPackComponent from "./AddPackComponent";
import OnlyOnePackComponent from "./OnlyOnePackComponent";
import Modal from "../../../n1_main/m1-ui/common/ModalWindow/ModalWindow";
import {Nullable} from "../../../types/Nullable";

const PacksList = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const myId = useFridaySelector<string>(state => state.profile.profile._id)
    const packsState = useFridaySelector<InitialCardPacksType>(state => state.packs)
    const packs = useFridaySelector<PackType[]>(state => state.packs.cardPacks)
    const globalError = useFridaySelector<string>(state => state.app.globalError)

    const debouncedSearch = useDebounce<string>(packsState.packName, 1000)
    const debouncedMIN = useDebounce<number>(packsState.minCardsCount, 1000)
    const debouncedMAX = useDebounce<number>(packsState.maxCardsCount, 1000)

    const [selected, setSelected] = useState<'MY' | 'ALL'>('ALL')
    const [addPack, setAddPack] = useState<boolean>(false)

    const selectMyOrAll = (value: Nullable<string>) => {
        dispatch(packsActions.allMyAC(value))
        value
            ? setSelected('MY')
            : setSelected('ALL')
    }
    const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(packsActions.searchAC(e.currentTarget.value))
    }

    const runToCards = (packId: string) => {
        dispatch(packsActions.allMyAC(''))
        dispatch(packsActions.searchAC(''))
        dispatch(packsActions.pageAC(1))
        dispatch(packsActions.minAC(0))
        dispatch(packsActions.maxAC(100))

        navigate(`${RoutesXPaths.CARDS}/${packId}`)
    }

    useEffect(() => {
        dispatch(packsTC())
    }, [debouncedSearch[0], packsState.user_id, debouncedMIN[0], debouncedMAX[0], packsState.pageCount,
        packsState.page, packsState.updated])

    if (addPack) {
        return (
            <Modal
                backgroundOnClick={() => setAddPack(false)}
                show={true}
                height={0}
                width={0}
                backgroundStyle={{backgroundColor: 'hotpink'}}
                enableBackground={true}
            >
                <AddPackComponent setAddPack={setAddPack}/>
            </Modal>
        )
    }

    return (
        <div className={style.packsListBlock}>

            <div className={style.showPacks}>
                <h4 className={style.title}>
                    Show packs cards
                </h4>
                <button
                    className={selected === "MY" ? style.selected : style.hoverSelected}
                    onClick={() => selectMyOrAll(myId)}
                >
                    My
                </button>
                <button
                    className={selected === "ALL" ? style.selected : style.hoverSelected}
                    onClick={() => selectMyOrAll(null)}
                >
                    All
                </button>
                <h4 className={style.title}>
                    Number of cards
                </h4>
                <DoubleRange/>
                <div className={style.rangeValue}>
                    <div className={style.rangeValue__item}>min : {packsState.minCardsCount} </div>
                    <div className={style.rangeValue__item}>max : {packsState.maxCardsCount}</div>
                </div>
            </div>

            <div className={style.packsList}>
                <div>
                    <h2 className={style.title}>Pack list</h2>
                    <div className={style.searchContainer}>
                        <input placeholder={"Search..."}
                               value={packsState.packName}
                               onChange={onChangeSearchInput}/>
                        <button
                            className={style.buttonSearch}
                            onClick={() => setAddPack(!addPack)}
                        >
                            Add New
                        </button>
                    </div>
                </div>
                <div className={style.cardsBlock}>
                    <TableHeader/>
                    {
                        packs.map((item, index) => {
                            return (
                                <div key={index} onDoubleClick={() => runToCards(item._id)}>
                                    <OnlyOnePackComponent item={item} runToCards={runToCards}/>
                                </div>
                            )
                            /*<div key={index} onDoubleClick={() => runToCards(item._id)}>
                            {<TableX/>}
                            <OnlyOnePackComponent item={item} key={index}/>
                            {</div>}*/
                        })
                    }
                    <TablesPagination/>
                </div>
            </div>

        </div>
    )
}

export default PacksList
