import { AccountForm, AccountList } from '../components/ui';

export const CreateAccountPage = () => {
  return (
    <div className="flex">
      <AccountList />
      <div style={{ minWidth: '100%' }}>
        <AccountForm />
      </div>
    </div>
  );
};
