const styles = {
  page: {
    display: "flex",
    flexWrap: {xs: "wrap", sm: "wrap", md: "noWrap", lg: "noWrap", xl: "noWrap"},
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "transparent",
  },
  container: {
    width: {xs: "80%", sm: "20em", md: "20em", lg: "20em", xl: "20em"},
    height: "auto ",
    margin: "30px 10px 10px 10px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    transition: "0.5s all ease-in-out",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  card: {
    overflow: "hidden",
  },
  typography: {
    position: "absolute",
    top: "45%",
    left: "0%",
    textAlign: "center",
    paddingBottom: "10px",
    paddingTop: "10px",
    fontFamily: "'Anton', sans-serif",
    fontSize: "20px",
    width: "100%",
    backgroundColor: "#413c3c60",
    color: "white",
  },
};

export default styles;