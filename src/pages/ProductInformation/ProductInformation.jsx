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
    const id = JSON.parse(localStorage.getItem('id'));
    fetchProductData({id, setProductData});
    const token = JSON.parse(localStorage.getItem('token'));
    if (!token){
       return navigate("/");
    }
  },[]);

  const handleOnClick = () => {
    navigate("/catalog");
  }

  return (
    <>
      <Header />
      <Box sx={styles.box_page}>
        <Box sx={styles.container}>
          { Object.entries(productData).length !== 0 ?
            <>
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
                
                  <Box sx={styles.rating}>
                    <Typography variant="h6">
                      {productData.rating.rate}
                    </Typography>
                    <StarIcon sx={styles.icon}></StarIcon>
                  </Box>
                
                <Typography sx={styles.price} variant="h4">
                  {"$ " + productData.price}
                </Typography>
                <Box sx={styles.box_description}>
                  <Typography>{productData.description}</Typography>
                </Box>
              </Box>
            </> : <></>
          }
        </Box>
        <Button sx={styles.button} variant="contained" onClick={handleOnClick}>
          Back
        </Button>
      </Box>
      <Footer />
    </>
  );
}
 
export default ProductInformation;