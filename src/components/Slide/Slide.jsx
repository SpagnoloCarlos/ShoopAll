import { Box } from '@mui/material';
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from "./styles";

const fadeImages = [
  {
    url: "https://uploads-ssl.webflow.com/5fb442bd2623fb2f7ce55c46/624c779a99056e24d5b2d077_Realidad%20virtual%20en%20la%20moda.png",
    caption: "Electronics",
    description: "All products electronic",
  },
  {
    url: "https://tuscreacionesblog.files.wordpress.com/2014/04/moda-mujer-primera-verano-2014-stradivarius-blanco-y-negro.jpg",
    caption: "Women's clothing",
    description: "dsg dsgdkfg dlgkklf dgldlgjd",
  },
  {
    url: "https://bemors.cl/wp-content/uploads/2022/01/BANNER-HOMBRE.jpg",
    caption: "Men's clothing",
    description: "sldfjlksjflk slakfjlsjaf klsjfl sflksjflsj alfkjs",
  },
  {
    url: "http://www.waterfalljewelers.com/wp-content/uploads/2021/04/hero_JewelryStoreWaterforeWhiteLake.jpg",
    caption: "Jewelry",
    description: "Spend jewelry",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <Box sx={styles.slice} className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage.url} style={styles.image} />
            </div>
            <Box sx={styles[`text${index}`]}>
              <h1 style={styles[`title${index}`]}>{fadeImage.caption}</h1>
            </Box>
          </Box>
        ))}
      </Fade>
    </div>
  );
}

export default Slideshow;