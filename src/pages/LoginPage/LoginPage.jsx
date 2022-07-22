import { Box, Typography, FormControl, InputLabel, OutlinedInput, Button, CssBaseline, IconButton, InputAdornment } from "@mui/material";
import styles from './styles.js';
import { useState } from "react";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import Header from "../../components/Header/Header.jsx";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleOnChangeUsername = (data) => {
    setUsername(data.target.value)
    setError(false);
  }
  const handleOnChangePassword = (data) => {
    setPassword(data.target.value)
  }
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Header/>
      <Box sx={styles.container}>
        {/* <CssBaseline /> */}
        <Box sx={styles.box}>
          <Typography component="h1" variant="h5">
            Iniciar Sesion
          </Typography>
          <Box sx={styles.forms}>
            <FormControl
              sx={styles.form_username}
              variant="outlined"
              required
              fullWidth
            >
              <InputLabel htmlFor="username-component" /* error={error} */>
                Usuario
              </InputLabel>
              <OutlinedInput
                /* error={error} */
                id="username-component"
                name="username"
                value={username}
                onChange={handleOnChangeUsername}
                label="Username"
                inputProps={{
                  inputMode: "text",
                  pattern: "^[A-Za-z0-9]*$",
                }}
              />
            </FormControl>
            <FormControl
              sx={styles.form_password}
              variant="outlined"
              required
              fullWidth
            >
              <InputLabel
                htmlFor="password-component-password" /* error={error} */
              >
                Contraseña
              </InputLabel>
              <OutlinedInput
                /* error={error} */
                id="password-component"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handleOnChangePassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              {/* {error && (
            <FormHelperText id="password-component-error-text" error>
              Username or password invalid.
            </FormHelperText>
          )} */}
            </FormControl>
          </Box>
          <Button type="submit" variant="contained" sx={{}}>
            Log In
          </Button>
        </Box>
      </Box>
    </>
  );
}
 
export default LoginPage;