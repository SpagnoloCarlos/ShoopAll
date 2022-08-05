const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "calc((100vh - 98px) - 100px)",
  },
  box: {
    height: "320px",
    width: {xs: "70%", sm: "70%", md: "380px", lg: "380px", xl: "380px"},
    margin: "20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 25%)",
    borderRadius: "0.8em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    p: 5,
  },
  icon: {
    marginTop: "20px",
    backgroundColor: "#BC96E6",
  },
  typography_login: {
    fontFamily: "Source Sans Pro",
    marginTop: "10px",
  },
  forms: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "30px",
    marginBottom: "30px",
    width: "100%",
  },
  form_username: {
    m: 1,
    width: {xs: "100%", sm: "90%", md: "80%", lg: "80%", xl: "80%"},
  },
  form_password: {
    m: 1,
    width: {xs: "100%", sm: "90%", md: "80%", lg: "80%", xl: "80%"},
  },
  error: {
    height: "10px",
    marginTop: "5px",
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