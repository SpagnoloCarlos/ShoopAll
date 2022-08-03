const styles = {
  container: {
    width: "100%",
    height: "100px",
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
    color: "white",
  },
  contact: {
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
  },
  social_network: {
    display: "flex",
    justifyContent: "center",
    mt: 1,
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