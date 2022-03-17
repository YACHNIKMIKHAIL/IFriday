import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import {packsActions} from "../../../m2-bll/r2-actions/ActionsPacks";
import {useDispatch} from "react-redux";

const TablesPagination = () => {
    const [page, setPage] = React.useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);
    const dispatch = useDispatch()
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        if (newPage === 1) {
            setPage(2)
        }else
        setPage(newPage);
        dispatch(packsActions.pageAC(newPage))
    };
    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
        dispatch(packsActions.pageCountAC(parseInt(event.target.value)))
    };

    return (
        <>
            <TablePagination
                component="div"
                count={100}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

            {page}
        </>

    );
}
export default TablesPagination;