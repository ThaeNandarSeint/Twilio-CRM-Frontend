import { Box, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { colors } from '../assets/theme';
import {
  CustomPagination,
  DataTable,
  ModalButton,
  SearchBox,
  UserRow,
} from '../components/ui';
import { AddOutlined } from '@mui/icons-material';
import { UserColumn } from '../constants';
import { useGetAllUsers } from '../services';

export const UsersPage = () => {
  const [page, setPage] = useState(1);

  const [searchValue, setSearchValue] = useState('');

  const { isError, error, data, isFetching } = useGetAllUsers({
    search: searchValue,
    sort: '-createdAt',
    page,
    limit: 10,
  });

  if (isError) return <p>Error: {error?.response?.data?.message}</p>;

  return (
    <Box m={2} borderRadius="1rem" bgcolor={colors.white[100]}>
      {/* <Navbar /> */}
      <Box p={3}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <SearchBox setSearch={setSearchValue} placeholder="Search Name" />
          <ModalButton
            mb={2}
            width="180px"
            color="primary"
            innerText="Create New User"
            icon={<AddOutlined sx={{ ml: 1 }} />}
          />
        </Box>
        <>
          {isFetching ? (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress size={56} />
            </Box>
          ) : (
            <>
              <DataTable
                columns={UserColumn}
                rows={<UserRow payload={data?.payload} />}
                hasAction={true}
              />
              <CustomPagination
                count={Math.ceil(data?.total / 10)}
                page={page}
                onChange={(_e, value) => {
                  setPage(value);
                }}
              />
            </>
          )}
        </>
      </Box>
    </Box>
  );
};
