const styles = {
  page: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    height: "500px",
  },
  container: {
    width: "350px",
    height: "450px",
    margin: "5px",
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