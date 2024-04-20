import { DeleteOutline } from '@mui/icons-material';
import {
  AccountCoverage,
  AccountDetail,
  AccountDetailNavbar,
  AccountHistory,
  AccountInformation,
  AccountList,
} from '../components/ui';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteUser, useGetUserDetail } from '../services/user';
import { CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';

export const AccountDetailPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  const { id } = useParams();

  const { data: user } = useGetUserDetail(id);

  const { mutate: deleteMutation } = useDeleteUser(id);

  const navigate = useNavigate();

  const handleDeleteUser = () => {
    deleteMutation(id, {
      onSuccess: () => {
        toast.success('ok');
        navigate('/');
      },
    });
  };

  return (
    <div className="flex">
      <AccountList />
      <div style={{ maxWidth: '100vw' }}>
        <AccountInformation />
        <div className="flex flex-col gap-3 px-3 pb-3">
          <AccountDetailNavbar value={value} handleChange={handleChange} />
          {user?.data ? (
            value === 0 ? (
              <AccountDetail user={user?.data} />
            ) : value === 1 ? (
              <AccountCoverage user={user?.data} />
            ) : (
              <AccountHistory />
            )
          ) : (
            <CircularProgress />
          )}
        </div>
        <div className="flex justify-between border-t-2 p-3">
          <button
            onClick={() => handleDeleteUser()}
            className="border-red-600 border-2 flex items-center gap-1 p-2 rounded text-red-600"
          >
            <DeleteOutline sx={{ fontSize: '20px' }} />
            Delete
          </button>
          <button className="bg-blue text-white border-2 flex items-center gap-1 p-2 rounded">
            Begin Signing
          </button>
        </div>
      </div>
    </div>
  );
};
