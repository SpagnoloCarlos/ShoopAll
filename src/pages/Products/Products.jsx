import CardList from "../../components/CardList/CardList";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Typography } from "@mui/material";
import Footer from "../../components/Footer/Footer";

const Products = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token){
       return navigate("/");
    }
  },[]);

  return (
    <>
      <Header />
      <Typography sx={{fontFamily: "Permanent Marker", fontSize: "80px", textAlign: "center", marginTop: "20px", color: "#0F0F0F"}}>Catalogo</Typography>
      <CardList />
      <Footer />
    </>
  );
}
 
export default Products;