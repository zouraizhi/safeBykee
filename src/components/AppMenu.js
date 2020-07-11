import React from 'react';
import {
  Typography,
  ListItemIcon,
  Divider,
  MenuList,
  MenuItem
}from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

import logo from '../assets/sidemenu_logo.png';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CarIcon from '@material-ui/icons/DirectionsCar';
import ListIcon from '@material-ui/icons/ListAlt';
import ExitIcon from '@material-ui/icons/ExitToApp';
import OfferIcon from '@material-ui/icons/LocalOffer';
import PeopleIcon from '@material-ui/icons/People';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import NotifyIcon from '@material-ui/icons/NotificationsActive';
import  languageJson  from "../config/language";
import {
  signOut
}  from "../actions/authactions";


function AppMenu() {
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(signOut());
  };

    return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center',backgroundColor:'#fff'}}>
        <img style={{marginTop:'20px',marginBottom:'20px',width:'120px',height:'140px'}} src={logo} alt="Logo" />
      </div>
      <Divider/>
      <MenuList>
        <MenuItem component={Link} to="/">
          <ListItemIcon>
            <DashboardIcon style={{backgroundColor:'black', color:'white'}} />
          </ListItemIcon>
          <Typography variant="inherit">{languageJson.dashboard_text}</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/drivers">
          <ListItemIcon>
            <PeopleIcon style={{backgroundColor:'black', color:'white'}} />
          </ListItemIcon>
          <Typography variant="inherit">{languageJson.user}</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/cartypes">
          <ListItemIcon>
            <CarIcon style={{backgroundColor:'black', color:'white'}} />
          </ListItemIcon>
          <Typography variant="inherit">{languageJson.car_type}</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/bookings">
          <ListItemIcon>
            <ListIcon style={{backgroundColor:'black', color:'white'}} />
          </ListItemIcon>
          <Typography variant="inherit">{languageJson.booking_history}</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/Earningreports">
          <ListItemIcon>
          <MoneyIcon style={{backgroundColor:'black', color:'white'}} />
          </ListItemIcon>
          <Typography variant="inherit">{languageJson.earning_reports}</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/promos">
          <ListItemIcon>
            <OfferIcon style={{backgroundColor:'black', color:'white'}} />
          </ListItemIcon>
          <Typography variant="inherit">{languageJson.promo}</Typography>
        </MenuItem>
        <MenuItem onClick={LogOut}>
          <ListItemIcon>
            <ExitIcon style={{backgroundColor:'black', color:'white'}} />
          </ListItemIcon>
          <Typography variant="inherit">{languageJson.logout}</Typography>
        </MenuItem>
      </MenuList>
    </div>
  );
}

export default AppMenu;