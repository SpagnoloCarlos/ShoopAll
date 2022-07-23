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
    // flexWrap: "wrap",
    alignItems: "center",
    margin: "50px 50px 20px 50px",
    width: "1000px",
    height: "600px",
    // border: "solid 1px black",
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 25%)"
  },
  box_information: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "450px",
    margin: "20px",
  },
  box_image: {
    margin: "20px",
    width: "450px",
    height: "550px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "80%",
    maxHeight: "95%",
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
    '&:hover': {
      color: 'white',
      backgroundColor: '#7d178f',
    },
  },
};

export default styles;