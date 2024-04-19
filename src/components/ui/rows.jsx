import { TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { colors } from '../../assets/theme';
import { TableActionButton } from './button';

export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: colors.paleBlue[800],
    color: colors.white[100],
    fontSize: '16px',
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '14px',
    fontWeight: 400,
    color: colors.black[200],
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(even)': {
    backgroundColor: colors.white[300],
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const UserRow = ({ payload }) => {
  return (
    <TableBody>
      {payload &&
        payload.map((data) => (
          <StyledTableRow key={data?._id}>
            <StyledTableCell>{data?.userId}</StyledTableCell>
            <StyledTableCell>{data?.name}</StyledTableCell>
            <StyledTableCell>{data?.email}</StyledTableCell>
            <StyledTableCell>{data?.department.name}</StyledTableCell>
            <StyledTableCell>{data?.jobLabel}</StyledTableCell>
            <StyledTableCell align="center" sx={{ display: 'flex', gap: 1 }}>
              <TableActionButton userId={data?._id} />
            </StyledTableCell>
          </StyledTableRow>
        ))}
    </TableBody>
  );
};
