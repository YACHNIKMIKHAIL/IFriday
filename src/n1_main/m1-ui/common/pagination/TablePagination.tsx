import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import {packsActions} from "../../../../n2_features/f2-packs&cards_YM/b1-packs/ActionsPacks";
import {useDispatch} from "react-redux";

const TablesPagination = () => {
    const [page, setPage] = React.useState<number>(1);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);
    const dispatch = useDispatch()
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
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
export default TablesPagination;