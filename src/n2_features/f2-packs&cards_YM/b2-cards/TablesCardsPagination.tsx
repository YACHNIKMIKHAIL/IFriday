import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import {useDispatch} from "react-redux";
import {cardsActions} from "../../../n1_main/m2-bll/r2-actions/ActionsCards";

const TablesCardsPagination = () => {
    const [page, setPage] = React.useState<number>(1);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);
    const dispatch = useDispatch()
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
        dispatch(cardsActions.cardsPageAC(newPage))
    };
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
        dispatch(cardsActions.cardsPageCountAC(parseInt(event.target.value)))
    };

    return (
        <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    );
}
export default TablesCardsPagination;