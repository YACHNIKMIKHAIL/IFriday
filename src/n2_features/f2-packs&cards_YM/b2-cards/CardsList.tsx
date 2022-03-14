import React from "react";
import style from "./CardsList.module.css"
import TablesPagination from "../../../n1_main/m1-ui/common/pagination/TablePagination";



const CardsList = () => {
    return (
        <div className={style.cardsListBlock}>
            <div className={style.cardsList}>
                <h2>&#129040; Pack Name</h2>
               <input placeholder={"Search..."}/>
                <div className={style.cardsBlock}>
                </div>
                <TablesPagination/>
            </div>


        </div>
    )
}
export default CardsList;