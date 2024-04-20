import { useParams } from 'react-router-dom';
import { AccountForm, AccountList } from '../components/ui';
import { useGetUserDetail } from '../services/user';

export const EditAccountPage = () => {
  const { id } = useParams();

  const { data: user } = useGetUserDetail(id);

  let oldData;

  if (user?.data) {
    oldData = {
      ...user?.data,
      height: {
        feet: Math.ceil(user?.height?.value / 12),
        inches: user?.height?.value % 12,
      },
    };
  }

  return (
    <div className="flex">
      <AccountList />
      <div style={{ minWidth: '100%' }}>
        <AccountForm oldData={oldData} />
      </div>
    </div>
  );
};
