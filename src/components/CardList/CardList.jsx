import { Box, Pagination } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchData, fetchCategory } from "../../services/axios";
import Card from '../Card/Card';
import styles from "./styles";

const CardList = (props) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [productsGroups, setProductsGroups] = useState([[1]]);

  useEffect(() => {
    const filter = props.filter.category;
    if (filter) {
      setProducts(fetchCategory(filter, { setProducts }));
    } else {
      setProducts(fetchData({ setProducts }));
    }
  }, [props.filter.category]);

  useEffect(() => {
    const splitArrayIntoSubArrays = () => {
      let subArray = [];
      let i = 0;

      while (i < products.length) {
        subArray.push(products.slice(i, (i += 9)));
      }

      return subArray;
    };

    const subArray = splitArrayIntoSubArrays();

    setProductsGroups(subArray);
    setMaxPage(subArray.length);
  }, [products]);

  const handleChange = (value) => {
    setPage(value);
  };

  return (
    <>
      <Box sx={styles.container}>
        {products.length !== 0 && productsGroups.length > 0 ? (
          productsGroups[page - 1].map((product, index) => (
            <Card
              key={index}
              id={product.id}
              image={product.image}
              price={product.price}
              title={product.title}
              description={product.description}
              rating={product.rating}
            />
          ))
        ) : (
          <Box sx={styles.box} />
        )}
      </Box>
      <Pagination
        page={page}
        count={maxPage}
        color="secondary"
        onChange={(event, value) => {
          handleChange(value);
        }}
        sx={styles.pagination}
      />
    </>
  );
}
 
export default CardList;