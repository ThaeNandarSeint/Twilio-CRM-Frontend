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

export const AccountDetailPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="flex">
      <AccountList />
      <div style={{ minWidth: '100%' }}>
        <AccountInformation />
        <div className="flex flex-col gap-3 px-3 pb-3">
          <AccountDetailNavbar value={value} handleChange={handleChange} />
          {value === 0 ? (
            <AccountDetail />
          ) : value === 1 ? (
            <AccountCoverage />
          ) : (
            <AccountHistory />
          )}
        </div>
        <div className="flex justify-between border-t-2 p-3">
          <button className="border-red-600 border-2 flex items-center gap-1 p-2 rounded text-red-600">
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
