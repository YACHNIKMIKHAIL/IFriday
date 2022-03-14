import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {packsActions} from "./ActionsPacks";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";
import {addNewPacksTC, changePacksTC, deletePacksTC, packsTC} from "./ThunkPacks";
import {PackType} from "./packsReducer";
import {Pack} from "./PackTest";
import {cardsTC} from "../b2-cards/ThunkCards";
import {Navigate} from "react-router-dom";
import {RoutesXPaths} from "../../../n1_main/m1-ui/routes/routes";


const PacksTestComponent = () => {
        const dispatch = useDispatch()
        const myId = useFridaySelector<string>(state => state.profile.profile._id)
        const isLoggedIn = useFridaySelector<boolean>(state => state.login.isLoggedIn)

        const allMy = (value: string | null) => {
            dispatch(packsActions.allMyAC(value))
        }
        const onChangeMin = (min: number) => {
            dispatch(packsActions.minAC(min))
        }
        const onChangeMax = (max: number) => {
            dispatch(packsActions.maxAC(max))
        }
        const search = (value: string) => {
            dispatch(packsActions.searchAC(value))
        }
        const go = () => {
            dispatch(packsTC())
        }
        const setPage = (page: number) => {
            dispatch(packsActions.pageAC(page))
        }
        const setCardsPage = (pageCount: number) => {
            dispatch(packsActions.pageCountAC(pageCount))
        }


        const [newPackName, setNewPackName] = useState<string>('')
        const [newPackPrivate, setNewPackPrivate] = useState<boolean>(false)

        const newPack = {
            name: newPackName,
            deckCover: '',
            private: newPackPrivate
        }
        const addNewPack = () => {
            dispatch(addNewPacksTC(newPack))
        }
        const myPacks = useFridaySelector<PackType[]>(state => state.packs.cardPacks)

        const deletePack = (id: string) => {
            dispatch(deletePacksTC(id))
        }
        const changePackName = (newPackName: string, id: string) => {
            dispatch(changePacksTC(newPackName, id))
        }
        const showCards = (id: string) => {
            dispatch(cardsTC(id))
        }


        useEffect(() => {
            dispatch(packsTC())
        }, [])

        if (!isLoggedIn) {
            return <Navigate to={RoutesXPaths.LOGIN}/>
        }
        return (
            <div>
                <div>
                    <button onClick={() => allMy(null)}>All</button>
                    <button onClick={() => allMy(myId)}>My</button>
                </div>
                <div>
                    min:
                    <input type="number" onChange={(e) => onChangeMin(+e.currentTarget.value)}/>
                    max:
                    <input type="number" onChange={(e) => onChangeMax(+e.currentTarget.value)}/>
                </div>
                <div>
                    search:
                    <input type="text" onChange={(e) => search(e.currentTarget.value)}/>
                    <button onClick={go}>go!</button>
                </div>
                <div>
                    page:
                    <input type="number" onChange={(e) => setPage(+e.currentTarget.value)}/>
                </div>
                <div>
                    pageCount:
                    <input type="number" onChange={(e) => setCardsPage(+e.currentTarget.value)}/>
                </div>

                <h1>New PACK</h1>
                <div>
                    new pack name:
                    <input type="text" onChange={(e) => setNewPackName(e.currentTarget.value)}/>
                    private:
                    <input type="checkbox" onChange={(e) => setNewPackPrivate(e.currentTarget.checked)}/>
                    <button onClick={addNewPack}>add pack</button>
                </div>
                <h1>DELETE PACK</h1>
                <div style={{border: '2px white solid', height: '500px', overflow: 'auto'}}>
                    packID: delete on click
                    {myPacks.map((m, i) => {
                        return <div key={i}>{m.name}
                            <button onClick={() => showCards(m._id)}>show cards</button>
                            <button onClick={() => deletePack(m._id)}>delete</button>
                        </div>
                    })}
                </div>
                <h1>CHANGE PACK</h1>
                <div>
                    packID: delete on click
                    {myPacks.map((m, i) => {
                        return <Pack key={i} name={m.name} id={m._id} changeName={changePackName}/>
                    })}

                </div>
            </div>
        );

    }
;

export default PacksTestComponent;