const styles = {
  bar: {
    backgroundColor: "#2D2E2E",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  box: {
    display: "flex",
    "&:hover": {
      cursor: "pointer",
    },
  },
  typography_shop: {
    color: "white",
    fontFamily: "Permanent Marker",
    fontSize: "48px",
  },
  typography_all: {
    color: "#BC96E6",
    fontFamily: "Permanent Marker",
    fontSize: "48px",
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