import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { fetchProductData } from "../../services/axios";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom";
import styles from './styles';
import Footer from "../../components/Footer/Footer";

const ProductInformation = () => {
  const [productData, setProductData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token){
       return navigate("/");
    }
  },[]);

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('id'));
    fetchProductData({id, setProductData});
  }, []);

  console.log(productData)

  return (
    <>
      <Header />
      <Box sx={styles.box_page}>
        <Box sx={styles.container}>
          <Box sx={styles.box_image}>
            <CardMedia
              sx={styles.image}
              component="img"
              alt="image"
              image={productData.image}
            />
          </Box>
          <Box sx={styles.box_information}>
            <Typography variant="h5">{productData.title}</Typography>
            {productData.rating !== undefined ? 
              <Box sx={{display: "flex", alignItems: "center",   marginTop: "20px"}}>
                <Typography variant="h6">{productData.rating.rate}</Typography>
                <StarIcon sx={{color:"yellow", marginLeft: "5px"}}></StarIcon>
              </Box>
                : 
              <></>
            }
            <Typography sx={styles.price} variant="h4">
              {"$ " + productData.price}
            </Typography>
            <Box sx={styles.box_description}>
              <Typography>{productData.description}</Typography>
            </Box>
          </Box>
        </Box>
        <Button sx={styles.button} variant="contained" onClick={() => navigate("/catalog")}>Volver</Button>
      </Box>
      <Footer />
    </>
  );
}
 
export default ProductInformation;