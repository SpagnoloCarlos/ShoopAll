const styles = {
  box_page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    margin: "50px 50px 20px 50px",
    width: {xs: "80%", sm: "80%", md: "80%", lg: "70%", xl: "70%"},
    height: "auto",
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 25%)",
  },
  box_information: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "23.3em",
    margin: {xs: "20px 20px 20px 20px", sm: "20px 20px 20px 20px", md: "40px 20px 40px 20px", lg: "40px 20px 40px 20px", xl: "40px 20px 40px 20px"},
  },
  box_image: {
    margin: {xs: "40px 20px 20px 20px", sm: "40px 20px 20px 20px", md: "40px 20px 40px 20px", lg: "40px 20px 40px 20px", xl: "40px 20px 40px 20px"},
    width: "23.3em",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "80%",
    maxHeight: "95%",
  },
  rating: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
  },
  icon: {
    color: "#ffe200",
    marginLeft: "5px",
  },
  price: {
    margin: "20px 0 20px 0",
    color: "#00a650",
  },
  box_description: {
    width: "100%",
  },
  button: {
    backgroundColor: "#9c27b0",
    "&:hover": {
      color: "white",
      backgroundColor: "#7d178f",
    },
  },
};

export default styles;