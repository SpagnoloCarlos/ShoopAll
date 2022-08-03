import * as React from 'react';
import { Button, AppBar, Box, Toolbar, Typography } from '@mui/material';
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
    localStorage.removeItem('id');
    setUsername("");
    navigate("/shopall/login");
    window.location.reload();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={styles.bar} position="static">
        <Toolbar sx={styles.toolbar} variant="dense">
          <Box sx={styles.box} onClick={() => navigate("/catalog")}>
            <Typography
              variant="h6"
              component="div"
              sx={styles.typography_shop}
            >
              Shop
            </Typography>
            <Typography variant="h6" component="div" sx={styles.typography_all}>
              All
            </Typography>
          </Box>
          {username && (
            <Button
              variant="contained"
              sx={styles.button}
              onClick={handleOnClick}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;