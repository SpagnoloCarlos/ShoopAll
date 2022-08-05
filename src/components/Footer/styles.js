const styles = {
  container: {
    width: "100%",
    height: "auto",
    backgroundColor: "#2D2E2E",
    marginTop: "20px",
    position: "relative",
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  typography: {
    marginTop: "17px",
    color: "white",
  },
  contact: {
    marginTop: {xs: "5px", sm:"5px", md:"20px", lg: "20px", xl: "20px"},
    display: "flex",
    flexDirection: {xs: "column", sm: "column", md: "row", lg: "row", xl: "row"},
    alignItems: "center",
    marginBottom: "16px",
  },
  social_network: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: {xs: "15px", sm: "15px", md: 0, lg: 0, xl: 0},
    mx: 6,
    cursor: "pointer",
    color: "white",
    transition: "0.5s all ease-in-out",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  icon: {
    mx: 2,
  },
  a_link: {
    textDecoration: "none",
    color: "white",
    transition: "0.5s all ease-in-out",
    "&:hover": { transform: "scale(1.2)" },
  },
};

export default styles;