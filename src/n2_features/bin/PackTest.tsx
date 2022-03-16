// import React, {useState} from "react";
// import CardsTestComponent from "../f2-packs&cards_YM/b2-cards/cardsTestComponent";
//
// type PackType = {
//     name: string
//     changeName: (newPackName: string, id: string) => void
//     id: string
// }
// export const Pack = ({name, changeName, id}: PackType) => {
//     const [newPackName, setNewPackName] = useState<string>(name)
//
//     const changePackName = () => {
//         changeName(newPackName, id)
//     }
//
//     return <div>
//         {name}
//         new name:
//         <input type="text" value={newPackName} onChange={(e) => setNewPackName(e.currentTarget.value)}/>
//         <button onClick={changePackName}>change</button>
//
//         <CardsTestComponent packId={id}/>
//     </div>
// }
export default ()=>{}