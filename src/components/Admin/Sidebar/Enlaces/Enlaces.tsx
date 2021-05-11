import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { ListItemIcon, IconButton } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DescriptionIcon from '@material-ui/icons/Description';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button>
      <Link to="/Admin" style={{display:'flex',color: '#fff'}}>
        <ListItemIcon>
          <DashboardIcon style={{ color: '#fff' }} />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </Link>
    </ListItem>
    <ListItem button>
      <Link to="/Blogs" style={{display:'flex',color: '#fff'}} >
        <ListItemIcon>
          <DescriptionIcon style={{ color: '#fff' }} />
        </ListItemIcon>
        <ListItemText primary="Blogs" />
      </Link>
    </ListItem>
    <ListItem button>
      <Link to="/" style={{display:'flex',color: '#fff'}} >
        <ListItemIcon>
          <HomeIcon style={{ color: '#fff' }} />
        </ListItemIcon>
        <ListItemText primary="Página pública" />
      </Link>
    </ListItem>
  </div>
);