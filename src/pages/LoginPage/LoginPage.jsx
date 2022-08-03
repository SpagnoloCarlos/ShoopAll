import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  IconButton,
  InputAdornment,
  FormHelperText,
  Avatar,
} from "@mui/material";
import styles from "./styles.js";
import { useState } from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Header from "../../components/Header/Header.jsx";
import { login } from "../../services/axios.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer.jsx";

const LoginPage = () => {
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      return navigate("/shopall/catalog");
    }
  }, []);

  const handleOnClick = async () => {
    const userData = { username, password };
    if (username && password) {
      const response = await login({ userData, setToken, setError });
      if (response) {
        navigate("/shopall/catalog");
      }
    } else {
      setError(true);
    }
  };

  const handleOnChangeUsername = (data) => {
    setUsername(data.target.value);
    setError(false);
  };
  const handleOnChangePassword = (data) => {
    setPassword(data.target.value);
    setError(false);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Header />
      <Box sx={styles.container}>
        <Box sx={styles.box}>
          <Avatar sx={styles.icon}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={styles.typography_login}>
            Login
          </Typography>
          <Box sx={styles.forms}>
            <FormControl sx={styles.form_username} variant="outlined" required>
              <InputLabel htmlFor="username-component" error={error}>
                Username
              </InputLabel>
              <OutlinedInput
                error={error}
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
            <FormControl sx={styles.form_password} variant="outlined" required>
              <InputLabel htmlFor="password-component-password" error={error}>
                Password
              </InputLabel>
              <OutlinedInput
                error={error}
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
              {error ? (
                <FormHelperText
                  sx={styles.error}
                  id="password-component-error-text"
                  error
                >
                  Username or password invalid.
                </FormHelperText>
              ) : (
                <Box sx={styles.error}></Box>
              )}
            </FormControl>
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={styles.button}
            onClick={handleOnClick}
          >
            Login
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default LoginPage;
