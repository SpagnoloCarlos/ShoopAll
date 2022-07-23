import * as React from 'react';
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from "@mui/material";
import styles from './styles';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    localStorage.setItem("id", JSON.stringify(props.id));
  }

  return (
    <Card sx={styles.card_container}>
      <CardMedia
        sx={styles.card_image}
        component="img"
        alt="image"
        height="50%"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {"$ " + props.price}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={styles.description}>
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={styles.button} variant="contained" size="small" onClick={() => {
            handleOnClick()
            navigate(`/product/${props.id}`)
          }} >More Information</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;