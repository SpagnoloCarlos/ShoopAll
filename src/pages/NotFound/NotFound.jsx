import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles";

const NotFound = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token){
       return navigate("/shopall/login");
    }
  },[]);

  return (
    <>
      <Header />
      <Box sx={styles.container}>
        <Typography sx={styles.typography}>
          Page not found
        </Typography>
      </Box>
      <Footer />
    </>
  );
}
 
export default NotFound;