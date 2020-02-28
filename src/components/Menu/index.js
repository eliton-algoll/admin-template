import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ApartmentIcon from '@material-ui/icons/Apartment';

import { Link } from 'react-router-dom';

import './styles.css';

const menuItens = [
  {
    route: '/',
    icon: <DashboardIcon />,
    text: 'Home',
  },
  {
    route: '/orgao',
    icon: <ApartmentIcon />,
    text: 'Órgãos',
  },
];

export default function Menu() {
  return (
    <>
      {menuItens.map(menu => (
        <ListItem button key={menu.text}>
          <ListItemIcon>{menu.icon}</ListItemIcon>
          <Link to={menu.route}>
            <ListItemText primary={menu.text} />
          </Link>
        </ListItem>
      ))}
    </>
  );
}
