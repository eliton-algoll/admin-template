import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ApartmentIcon from '@material-ui/icons/Apartment';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ListIcon from '@material-ui/icons/ListAlt';
import Usercon from '@material-ui/icons/PeopleAltOutlined';
import SecurityIcon from '@material-ui/icons/SecurityTwoTone';
import Businesscon from '@material-ui/icons/Business';
import ListSubheader from '@material-ui/core/ListSubheader';

import TableIcon from '@material-ui/icons/TableChart';
import ColumnIcon from '@material-ui/icons/ViewWeek';
import ArrowIcon from '@material-ui/icons/CompareArrows';
import PermissIcon from '@material-ui/icons/PersonAddDisabled';

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
  {
    route: '/tipo-orgao',
    icon: <HomeWorkIcon />,
    text: 'Tipo de Órgão',
  },
  {
    route: '/usuario',
    icon: <Usercon />,
    text: 'Usuários',
  },
  {
    route: '/perfil',
    icon: <SecurityIcon />,
    text: 'Perfil',
  },
  {
    route: '/protocolo',
    icon: <ListIcon />,
    text: 'Protocolo',
  },
  {
    route: '/cartorio',
    icon: <Businesscon />,
    text: 'Cartorios',
  },
];

const menuAcl = [
  {
    route: '/tabelas',
    icon: <TableIcon />,
    text: 'Tabelas',
  },
  {
    route: '/colunas',
    icon: <ColumnIcon />,
    text: 'Colunas',
  },
  {
    route: '/acoes',
    icon: <ArrowIcon />,
    text: 'Ações',
  },
  {
    route: '/permissoes',
    icon: <PermissIcon />,
    text: 'Permissões',
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
      <hr
        style={{ marginTop: '30px', border: '0.5px solid rgba(0,0,0,0.3)' }}
      />
      <ListSubheader
        inset
        style={{
          color: '#999',
          fontSize: '.875rem',
          marginLeft: '-30px',
        }}
      >
        Controle de Acesso
      </ListSubheader>

      {menuAcl.map(menu => (
        <>
          <ListItem button key={menu.text}>
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <Link to={menu.route}>
              <ListItemText primary={menu.text} />
            </Link>
          </ListItem>
        </>
      ))}
    </>
  );
}
