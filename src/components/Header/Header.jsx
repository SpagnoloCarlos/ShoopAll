import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import styles from "./styles";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Header = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('username'));
    setUsername(user);
  }, [])

  const handleOnClick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUsername("");
    navigate('/');
    window.location.reload();
  }
  console.log("aa"+username)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={styles.bar} position="static">
        <Toolbar sx={{display: "flex", justifyContent: "space-between"}} variant="dense">
          <Box sx={{display: "flex"}} onClick={()=>navigate("/catalog")}>
          <Typography variant="h6" component="div" sx={{color: "white", fontFamily: "Permanent Marker", fontSize: "48px"}}>
            Shop
          </Typography>
          <Typography variant="h6" component="div" sx={{color: "#BC96E6", fontFamily: "Permanent Marker", fontSize: "48px"}}>
            All
          </Typography>
          </Box>
          {username && <Button variant="contained" sx={styles.button} onClick={handleOnClick}>Cerrar Sesion</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;