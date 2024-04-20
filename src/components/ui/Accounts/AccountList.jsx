import { AddCircle, Search } from '@mui/icons-material';
import { Avatar, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllUsers } from '../../../services/user';
import { useInView } from 'react-intersection-observer';
import moment from 'moment';
import { useCustomeFilter } from '../../../hooks';
import { filterItems } from '../../../constants';

// eslint-disable-next-line react/display-name
const Item = React.forwardRef(({ user }, ref) => {
  const navigate = useNavigate();
  const userName = `${user?.name?.first} ${user?.name?.middle} ${user?.name?.last}`;
  const itemContent = (
    <div
      onClick={() => navigate(`/${user._id}`)}
      className="flex items-center gap-3 bg-paleBlue px-3 py-4 border-l-blue border-2 cursor-pointer"
    >
      <Avatar sx={{ bgcolor: '#6D2ED1' }} alt={userName} />
      <div>
        <h1>{userName}</h1>
        <p className="text-sm">
          Contacted: {moment(user?.createdAt).format('DD/MM/YYYY')}
        </p>
      </div>
    </div>
  );

  const content = ref ? (
    <div ref={ref}>{itemContent}</div>
  ) : (
    <div>{itemContent}</div>
  );
  return content;
});

export const AccountList = () => {
  const { filterItem, handleChangefilterItem } = useCustomeFilter({
    initialValue: { text: 'all', value: '' },
  });

  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  const { ref, inView } = useInView();

  const {
    data,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useGetAllUsers({ type: filterItem.value, search: searchValue });

  useEffect(() => {
    if (filterItem || searchValue) {
      refetch();
    }
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, filterItem, refetch, searchValue]);

  const content =
    isSuccess &&
    data?.pages.map((page) => {
      return (
        page?.data &&
        page?.data?.users?.map((user, i) => {
          if (page?.data?.users?.length === i + 1) {
            return <Item ref={ref} key={user._id} user={user} />;
          }
          return <Item key={user._id} user={user} />;
        })
      );
    });

  return (
    <div style={{ minWidth: '30%' }} className="border">
      <div className="p-3">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Account</h1>
            <p className="font-semibold">128 Total</p>
          </div>
          <div className="cursor-pointer" onClick={() => navigate('/')}>
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
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="flex items-center gap-1 mt-3">
          {filterItems.map((item) => (
            <div
              key={item.value}
              className={`border py-1 px-2 cursor-pointer rounded-xl ${
                item?.value === filterItem?.value && 'bg-paleBlue'
              }`}
              onClick={() => handleChangefilterItem(item)}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        {content}
        <div className="flex justify-center">
          {(isFetchingNextPage || isLoading || isRefetching) && (
            <CircularProgress />
          )}
        </div>
      </div>
    </div>
  );
};
