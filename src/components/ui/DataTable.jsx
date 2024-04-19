import {
  Box,
  Pagination,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { colors } from '../../assets/theme';
import { StyledTableCell } from './rows';

export const DataTable = ({ rows, columns, hasAction }) => {
  return (
    <TableContainer
      sx={{
        border: `1px solid ${colors.bgColor}`,
        borderTopRightRadius: '1rem',
        borderTopLeftRadius: '1rem',
      }}
    >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map((column, i) => (
              <StyledTableCell key={i}>{column}</StyledTableCell>
            ))}
            {hasAction && <StyledTableCell>Action</StyledTableCell>}
          </TableRow>
        </TableHead>
        {rows}
      </Table>
    </TableContainer>
  );
};

export const CustomPagination = ({ count, page, onChange }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <Pagination
        count={count}
        shape="rounded"
        color="primary"
        sx={{ bgcolor: colors.white[100] }}
        size="large"
        page={page}
        onChange={onChange}
        showFirstButton
        showLastButton
      />
    </Box>
  );
};
