import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { fetchProductData } from "../../services/axios";
import { Box, CardMedia, Typography } from "@mui/material";
// import StarIcon from '@mui/icons-material/Star';
import styles from './styles';

const ProductInformation = () => {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('id'));
    fetchProductData({id, setProductData});
  }, []);

  return (
    <>
      <Header />
      <Box sx={styles.box_page}>
        <Box sx={styles.container}>
          <Box sx={styles.box_image}>
            <CardMedia
              sx={{ width: "40%" }}
              component="img"
              alt="image"
              image={productData.image}
            />
          </Box>
          <Box sx={styles.box_information}>
            <Typography variant="h5">{productData.title}</Typography>
            {/* <Typography>{productData.rating.rate}</Typography> */}
            <Typography sx={styles.price} variant="h4">
              {"$ " + productData.price}
            </Typography>
            <Box sx={styles.box_description}>
              <Typography>{productData.description}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
 
export default ProductInformation;