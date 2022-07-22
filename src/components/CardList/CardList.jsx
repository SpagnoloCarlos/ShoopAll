import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchData } from "../../services/axios";
import Card from '../Card/Card';
import styles from "./styles";

const CardList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(fetchData({setProducts}));
  }, [])

  return (
    <>
      <Box sx={styles.container}>
        {products.length > 0 ? products.map((product, index) => 
          <Card 
            key={index}
            image= {product.image}
            title= {product.title}
            description= {product.description}
          />) :
          <>
          </>
        }
      </Box>
    </>
  );
}
 
export default CardList;