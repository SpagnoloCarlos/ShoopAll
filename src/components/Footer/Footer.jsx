import { Box, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import styles from "./styles";

const Footer = () => {
  const handleClick = (event) => {
    switch (event.target.innerText) {
      case 'LinkedIn':
        window.open('https://www.linkedin.com/in/carlos-spagnolo-andres/', '_blank');
        break;
      case 'GitHub':
        window.open('https://github.com/SpagnoloCarlos', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.typography}>
        ® 2022 All rights reserved | Spagnolo Carlos Andrés
      </Typography>
      <Box sx={styles.contact}>
        <Box sx={styles.social_network} onClick={handleClick}>
          <LinkedInIcon sx={styles.icon} />
          LinkedIn
        </Box>
        <Box sx={styles.social_network} onClick={handleClick}>
          <GitHubIcon sx={styles.icon} />
          GitHub
        </Box>
        <Box sx={styles.social_network} onClick={handleClick}>
          <EmailIcon sx={styles.icon} />
          <a
            style={styles.a_link}
            href="mailto:carlos.andres.spagnolo@gmail.com"
          >
            Email
          </a>
        </Box>
      </Box>
    </Box>
  );
}
 
export default Footer;