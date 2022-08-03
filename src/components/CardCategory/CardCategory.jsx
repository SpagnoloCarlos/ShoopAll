import { Box , CardActionArea, CardMedia, Typography } from "@mui/material";
import styles from "./styles";

const CardCategory = (props) => {
  return (
    <Box sx={styles.page}>
      <Box sx={styles.container}>
        <CardActionArea
          sx={styles.card}
          onClick={() => {
            props.filter.setCategory("electronics");
          }}
        >
          <CardMedia
            sx={styles.image}
            component="img"
            image="https://m.media-amazon.com/images/I/3126FEWBzHL.jpg"
          />
          <Typography sx={styles.typography}>Electronics</Typography>
        </CardActionArea>
      </Box>
      <Box sx={styles.container}>
        <CardActionArea
          sx={styles.card}
          onClick={() => {
            props.filter.setCategory("jewelery");
          }}
        >
          <CardMedia
            sx={styles.image}
            component="img"
            image="https://i.pinimg.com/474x/6b/68/ca/6b68ca646926285b885a5bc11afa3583--fashion-jewellery-jewellery-box.jpg"
          />
          <Typography sx={styles.typography}>Jewelry</Typography>
        </CardActionArea>
      </Box>
      <Box sx={styles.container}>
        <CardActionArea
          sx={styles.card}
          onClick={() => {
            props.filter.setCategory("men's clothing");
          }}
        >
          <CardMedia
            sx={styles.image}
            component="img"
            image="https://http2.mlstatic.com/D_NQ_NP_875129-MLA49610548198_042022-O.webp"
          />
          <Typography sx={styles.typography}>Men's clothing</Typography>
        </CardActionArea>
      </Box>
      <Box sx={styles.container}>
        <CardActionArea
          sx={styles.card}
          onClick={() => {
            props.filter.setCategory("women's clothing");
          }}
        >
          <CardMedia
            sx={styles.image}
            component="img"
            image="https://m.media-amazon.com/images/I/41wsMd8lPKS._SL500_.jpg"
          />
          <Typography sx={styles.typography}>Women's clothing</Typography>
        </CardActionArea>
      </Box>
    </Box>
  );
}
 
export default CardCategory;