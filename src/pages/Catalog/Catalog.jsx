import CardList from "../../components/CardList/CardList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import styles from "./styles";
import CardCategory from "../../components/CardCategory/CardCategory";
import Slideshow from "../../components/Slide/Slide";

const Products = () => {
  const navigate = useNavigate();

  const [a, setA] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const token = JSON.parse(localStorage.getItem('token'));

    if (!token){
       return navigate("/");
    }
    localStorage.removeItem('id');
  },[]);

  return (
    <>
      <Header />
      <Slideshow />
      <Typography sx={styles.typography}>Categories</Typography>
      <CardCategory a={{ a, setA }} />
      {a ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {a === "jewelery" ? (
            <Typography sx={styles.typography_all}>jewelry</Typography>
          ) : (
            <Typography sx={styles.typography_all}>{a}</Typography>
          )}
          <Button onClick={() => setA("")} sx={styles.button}>
            Back
          </Button>
        </Box>
      ) : (
        <Typography sx={styles.typography}>All Products</Typography>
      )}

      <CardList a={{ a }} />
      <Footer />
    </>
  );
}
 
export default Products;