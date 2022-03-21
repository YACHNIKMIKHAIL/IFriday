import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import {useDispatch} from "react-redux";
import {cardsActions} from "../../../n1_main/m2-bll/r2-actions/ActionsCards";
import {useFridaySelector} from "../../../n1_main/m2-bll/store";

const TablesCardsPagination = () => {
    const dispatch = useDispatch()
    const actualCardsPage = useFridaySelector<number>(state => state.cards.page)
    const actualCardsCount = useFridaySelector<number>(state => state.cards.pageCount)
    const [page, setPage] = React.useState<number>(actualCardsPage)

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        if (newPage === page) {
            setPage(page + 1)
            dispatch(cardsActions.cardsPageAC(newPage + 1))
        } else if (newPage < page) {
            setPage(page - 1)
            dispatch(cardsActions.cardsPageAC(newPage + 1))
        }
    }

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setPage(0)
        dispatch(cardsActions.cardsPageCountAC(parseInt(event.target.value)))
    }
    return (
        <TablePagination
            component="div"
            count={100}
            page={page - 1}
            onPageChange={handleChangePage}
            rowsPerPage={actualCardsCount}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
}

export default TablesCardsPagination;