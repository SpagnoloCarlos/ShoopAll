import { Box, Typography } from "@mui/material";
import styles from "./styles";

const Footer = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.typography}>
        ® 2022 All rights reserved | Spagnolo Carlos Andrés
      </Typography>
    </Box>
  );
}
 
export default Footer;