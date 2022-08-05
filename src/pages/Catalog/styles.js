const styles = {
  typography: {
    fontFamily: "Permanent Marker",
    fontSize: { xs: "50px", sm: "60px", md: "80px", lg: "80px", xl: "80px" },
    textAlign: "center",
    marginTop: "40px",
    marginBottom: "15px",
    color: "#0F0F0F",
    backgroundColor: "#9c27b04f",
  },
  typography_all: {
    width: "100$",
    fontFamily: "Permanent Marker",
    fontSize: { xs: "50px", sm: "60px", md: "80px", lg: "80px", xl: "80px" },
    textAlign: "center",
    color: "#0F0F0F",
    "&:hover": {
      cursor: "pointer",
    },
  },
  box_title: {
    backgroundColor: "#9c27b04f",
    marginTop: "40px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: {
      xs: "column",
      sm: "column",
      md: "row",
      lg: "row",
      xl: "row",
    },
  },
  button: {
    marginTop: { xs: "20px", sm: "20px", md: "10px", lg: "10px", xl: "10px" },
    marginBottom: { xs: "20px", sm: "20px", md: 0, lg: 0, xl: 0 },
    marginLeft: { xs: 0, sm: 0, md: "30px", lg: "30px", xl: "30px" },
    color: "#7d178f",
    "&:hover": {
      backgroundColor: "#2d2e2e1f",
    },
  },
};

export default styles;
