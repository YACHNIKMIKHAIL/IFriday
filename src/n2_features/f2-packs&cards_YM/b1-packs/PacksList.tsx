import React from "react";
import style from "./PacksList.module.css"
import DoubleRange from "../../../n1_main/m1-ui/doubleRange/DoubleRange";
import TablesPagination from "../../../n1_main/m1-ui/common/pagination/TablePagination";


const PacksList = () => {
    return (
        <div className={style.packsListBlock}>
            <div className={style.showPacks}>
                <h4>Show packs cards</h4>
                <span><button>My</button><button>All</button></span>
                <h4>Number of cards</h4>
                <DoubleRange/>
            </div>

            <div className={style.packsList}>
                <h2>Pack list</h2>
                <span><input placeholder={"Search..."}
                /><button>Add new pack</button></span>
                <div className={style.cardsBlock}>

                </div>
                <TablesPagination/>
            </div>


        </div>
    )
}
export default PacksList;