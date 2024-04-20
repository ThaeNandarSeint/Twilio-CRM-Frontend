import {
  ArticleOutlined,
  BarChartOutlined,
  ConnectedTvOutlined,
  GroupOutlined,
  InventoryOutlined,
  PermPhoneMsgOutlined,
  Person2Outlined,
  PhoneEnabledOutlined,
  ShowChartOutlined,
  ToggleOffOutlined,
} from '@mui/icons-material';

export const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2" style={{ width: '50px' }}>
      <div className="flex justify-center items-center gap-1 mt-3">
        <ToggleOffOutlined sx={{ fontSize: '25px', color: '#606B85' }} />
      </div>
      <div className="flex justify-center items-center gap-1 mt-3">
        <InventoryOutlined sx={{ fontSize: '25px', color: '#606B85' }} />
      </div>
      <div className="flex justify-center items-center gap-1 mt-3">
        <GroupOutlined sx={{ fontSize: '25px', color: '#606B85' }} />
      </div>
      <div className="flex justify-center items-center gap-1 mt-3">
        <ConnectedTvOutlined sx={{ fontSize: '25px', color: '#606B85' }} />
      </div>
      <div className="flex justify-center items-center gap-1 mt-3">
        <ShowChartOutlined sx={{ fontSize: '25px', color: '#606B85' }} />
      </div>
      <div className="flex justify-center items-center gap-1 mt-3">
        <BarChartOutlined sx={{ fontSize: '25px', color: '#606B85' }} />
      </div>
      <div className="flex justify-center items-center gap-1 mt-3">
        <ArticleOutlined sx={{ fontSize: '25px', color: '#606B85' }} />
      </div>
      <div className="flex justify-center items-center gap-1 mt-3">
        <Person2Outlined sx={{ fontSize: '25px', color: '#606B85' }} />
      </div>
      <div className="flex justify-center items-center gap-1 mt-3">
        <PermPhoneMsgOutlined sx={{ fontSize: '25px', color: '#606B85' }} />
      </div>
      <div className="flex justify-center items-center gap-1 mt-3">
        <PhoneEnabledOutlined sx={{ fontSize: '25px', color: '#606B85' }} />
      </div>
    </div>
  );
};
