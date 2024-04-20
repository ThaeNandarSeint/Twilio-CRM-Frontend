import { AddCircle, Search } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { colors } from '../../../assets/theme';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const filterTabs = ['All', 'Prospects', 'Leads', 'Clients'];

export const AccountList = () => {
  const [filterValue, setFilterValue] = useState('All');
  const navigate = useNavigate();

  return (
    <div style={{ minWidth: '30%' }} className="border">
      <div className="p-3">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Account</h1>
            <p className="font-semibold">128 Total</p>
          </div>
          <div className="cursor-pointer" onClick={() => navigate('/create')}>
            <AddCircle className="text-blue text-4xl" />
          </div>
        </div>
        <div
          className="bg-grey w-10 border flex justify-center items-center"
          style={{ transform: 'translate(5%, 105%)', height: '1.9rem' }}
        >
          <Search />
        </div>
        <input
          type="text"
          className={`bg-transparent border border-black rounded w-[100%] outline-none focus:border-black-400 block pl-12 py-1`}
          placeholder="Search"
        />
        <div className="flex items-center gap-1 mt-3">
          {filterTabs.map((item) => (
            <div
              key={item}
              className={`border py-1 px-2 cursor-pointer rounded-xl ${
                item === filterValue && 'bg-paleBlue'
              }`}
              onClick={() => setFilterValue(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-3 bg-paleBlue px-3 py-4 border-l-blue border-2 cursor-pointer">
          <Avatar sx={{ bgcolor: colors.paleBlue[800] }} alt={'hel'} />
          <div>
            <h1>Thae</h1>
            <p className="text-sm">Contacted: 6/12/2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};
