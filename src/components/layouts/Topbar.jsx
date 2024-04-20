import {
  ArrowDropDownOutlined,
  Dialpad,
  Forum,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { colors } from '../../assets/theme';
import { useDisclosure } from '../../hooks';
import { useRef } from 'react';

export const Topbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const anchorEl = useRef();

  const handleLogout = () => {};

  return (
    <div className="bg-darkBlue text-white px-3 py-2 flex justify-between">
      <div className="flex gap-5">
        <div className="cursor-pointer">
          <MenuIcon sx={{ fontSize: '25px' }} />
        </div>
        <div className="bg-white text-black py-1 px-4">Logo</div>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <Dialpad />
        </div>
        <div>
          <Forum />
        </div>
        <select
          className={`bg-transparent border border-white rounded w-[100%] outline-none focus:border-black-400 block p-1`}
        >
          <option value="1">
            <div className="bg-green w-2 h-2"></div>
            Available | 10:27
          </option>
        </select>

        <div
          className="flex items-center cursor-pointer"
          onClick={onOpen}
          ref={anchorEl}
        >
          <Avatar
            sx={{ bgcolor: colors.paleBlue[800], width: 28, height: 28 }}
            alt={'h'}
          />
          <ArrowDropDownOutlined />
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl.current}
          open={isOpen}
          onClose={onClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem sx={{ fontSize: '14px' }} onClick={handleLogout}>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};
