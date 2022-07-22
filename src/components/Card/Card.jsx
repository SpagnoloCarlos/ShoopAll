import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './styles';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    localStorage.setItem('id', JSON.stringify(props.id));
    // navigate("/product");
  }

  return (
    <Card sx={styles.card_container}>
      <CardMedia
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
        <Button size="small" onClick={() => {
            handleOnClick()
            navigate(`/product/${props.id}`)
          }} >Más Información</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;