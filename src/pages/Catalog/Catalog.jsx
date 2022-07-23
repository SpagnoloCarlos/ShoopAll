import CardList from "../../components/CardList/CardList";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import styles from "./styles";

const Products = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token){
       return navigate("/");
    }
    localStorage.removeItem('id');
  },[]);

  return (
    <>
      <Header />
      <Typography sx={styles.typography}>Catalog</Typography>
      <CardList />
      <Footer />
    </>
  );
}
 
export default Products;