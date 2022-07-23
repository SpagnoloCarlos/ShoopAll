const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "calc((100vh - 97px) - 100px)",
  },
  box: {
    height: '300px',
    width: '380px',
    margin: '20px',
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 25%)",
    borderRadius: '0.8em',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    p: 5, 
  },
  forms: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
    marginBottom: "50px",
    width: "100%"
  },
  form_username: {
    m: 1,
    width: "80%"
  },
  form_password: {
    m: 1,
    width: "80%"
  }, 
  button: {
    backgroundColor: "#9c27b0",
    '&:hover': {
      color: 'white',
      backgroundColor: '#7d178f',
    },
  }
};

export default styles;