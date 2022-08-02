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
    // width: "100%",
    // height: "100%",
    // padding: "10px",
  },
  typography: {
    position: "absolute",
    top: "45%",
    left: "0%",
    textAlign: "center",
    backgroundColor: "white",
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