import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import WorkIcon from '@mui/icons-material/Work';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#EEF3F8",
  
  '&:hover': {
    backgroundColor: "#EEF3F8",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
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
  color: 'grey',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >

      
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed" >
     
        <Toolbar  style={{backgroundColor:"white",boxShadow:"none",height:"20px"}} >
    
          <LinkedInIcon style={{fontSize: 40 , color:"#0A66C2"}}/>
          <Search >
            <SearchIconWrapper>
              <SearchIcon style={{color:"rgba(0, 0, 0, 0.6)"}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} gap={4}>
         
           <div style={{display:"block", justifyContent:'center', marginBottom:"20px"}}>
            <IconButton style={{color:"rgba(0, 0, 0, 0.6)"}} >
              <Badge >
                <HomeIcon style={{fontSize: 33,transform: "translateY(22px)" }}/>
              </Badge>
            </IconButton>
            <p className="parag"  >Home</p>
            </div>

            <div style={{display:"block", justifyContent:'center'}}>
            <IconButton  style={{color:"rgba(0, 0, 0, 0.6)"}}  >
              <Badge >
                <WifiTetheringIcon style={{fontSize: 33 ,transform: "translateY(22px)"}}/>
              </Badge>
            </IconButton>
            <p className="parag" >Réseau</p>
            </div>

            <div style={{display:"block", justifyContent:'center'}}>
            <IconButton  style={{color:"rgba(0, 0, 0, 0.6)"}} >
              <Badge >
                <WorkIcon style={{fontSize: 33,transform: "translateY(22px)" }}/>
              </Badge>
            </IconButton>
            <p className="parag" >Emplois</p>
            </div>

            <div style={{display:"block", justifyContent:'center'}}>
            <IconButton  style={{color:"rgba(0, 0, 0, 0.6)"}}  >
              <Badge >
                <SmsIcon style={{fontSize: 33,transform: "translateY(22px)" }}/>
              </Badge>
            </IconButton>
            <p className="parag" >Messagerie</p>
            </div>

            <div style={{display:"block", justifyContent:'center'}}>
            <IconButton   style={{color:"rgba(0, 0, 0, 0.6)"}}  >
              <Badge >
                <NotificationsIcon style={{fontSize: 33,transform: "translateY(22px)" }} />
              </Badge>
            </IconButton>
            <p className="parag" >Notifications</p>
            </div>

            <div style={{display:"block", justifyContent:'center'}}>
            <IconButton  color="inherit" >
            <Badge  >
              <AccountCircle style={{fontSize: 33,transform: "translateY(22px)" , color:"rgba(0, 0, 0, 0.6)"}}/>
              </Badge>
            </IconButton>
            <p className="parag" >Vous</p>
            </div>
          
            <div style={{display:"block", justifyContent:'center'}}>
            <IconButton   >
              <Badge >
                <AppsIcon  style={{fontSize: 33,transform: "translateY(22px)" }} />
              </Badge>
            </IconButton>
            <p className="parag" >Produits</p>
            </div>


            <div style={{fontSize:"12px",color:"rgb(145, 89, 7)",textDecoration:"underline",transform: "translateY(40px)"}} > 
            
               Essayer Premium <br /> gratuitement
              
            </div>
           
          </Box>
      
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton 
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
             <MoreIcon/>
            </IconButton>
            
          </Box>
        </Toolbar>
   
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
