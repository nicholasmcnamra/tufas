import * as React from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Menu } from '@mui/material';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AccountMenu = ({ onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleMyClimbsClick = () => {
    history.push("/userclimbs");
    setAnchorEl(null);
  }
  return (
    <div className="account-menu">
      <div className="account-menu-button">
      <Button
      id="account-menu-button"
      aria-controls={open ? 'account-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}>
        My Account
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        MenuListProps={{'aria-labelledby' : 'account-menu-button'}}
      >
          <MenuItem onClick={handleMyClimbsClick} >My Climbs</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem onClick={onLogout}>Log Out</MenuItem>
      </Menu>
      </div>
    </div>
  );
}

export default AccountMenu;
