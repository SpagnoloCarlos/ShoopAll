import axios from "axios";

export const login = async ({ userData, setToken }) => {
  const res = await axios
    .post('https://fakestoreapi.com/auth/login', userData)
    .then((res) => res.data)
    /* .catch((err) => {
      if (err.response.status === 403) {
        setError(true);
      }
    }); */
    setToken(res.token);

    console.log(res)
    console.log(res.token)
};

export const fetchData = async ({ setProducts }) => {
  const res = await axios.get("https://fakestoreapi.com/products");
  setProducts(res.data);
};

export const fetchProductData = async ({id, setProductData}) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  setProductData(res.data)
}
