import React from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Paper, IconButton, Card } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import PortraitIcon from '@mui/icons-material/Portrait';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Dashboard } from './Dashboard';
import { Chart } from './Chart';
import { RoundChart } from './RoundChart';
import { Tables } from './Table';







const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



const drawerWidth = 240;


export function Base() {

  return (

    <Box sx={{ display: 'flex', backgroundColor: 'rgba(128, 128, 128, 0.1)' }}  >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,
          border: '1px solid red',
          border: 'none !important',
          outline: 'inset',
          outline: '2px solid white'
        }}
      >

        <Toolbar className="nodec" style={{
          backgroundColor: 'rgba(128, 128, 128, 0.1)',
          color: 'black',
          // border:'1px solid red'
          // border:'none !important'
          borderBottom: 'none !important',
          outline: 'none'

        }}>
          <Typography variant="h6" noWrap component="div" >
            Hello Dhana 👋
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'darkblue !important',

          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar className='drawer'> <h4>Dashboard</h4></Toolbar>

        <List className='list' >
          {[
            { text: 'Dashboard', icon: <KeyIcon />, },
            { text: 'Product', icon: <ViewInArIcon />, icon1: <ChevronRightIcon /> },
            { text: 'Customers', icon: <PortraitIcon />, icon1: <ChevronRightIcon /> },
            { text: 'Income', icon: <AccountBalanceWalletIcon />, icon1: <ChevronRightIcon /> },
            { text: 'Promote', icon: < LocalOfferIcon />, icon1: <ChevronRightIcon /> },
            { text: 'Help', icon: <HelpCenterIcon />, icon1: <ChevronRightIcon /> }
          ].map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ color: 'lightgrey' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
                <ListItemIcon style={{ color: 'lightgrey' }}>
                  {item.icon1}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}

          
        </List>

      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, backgroundColor: 'rgba(128, 128, 128, 0.1)', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          <Dashboard />

        </Typography>



        <Box display="flex" flexDirection="row" justifyContent='space-evenly' >
          <Chart   /> 
          <RoundChart /> {/* The second chart */}
        </Box>

        <Box>
          <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Product Sell
          
        </Typography>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
        <Tables/>
        </Box>


      </Box>
    </Box>
  )
}

