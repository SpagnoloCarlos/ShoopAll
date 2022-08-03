import axios from "axios";

export const login = async ({ userData, setToken, setError }) => {
  const res = await axios
    .post("https://fakestoreapi.com/auth/login", userData)
    .then((res) => res.data)
    .catch((err) => {
      if (err.response.status === 401) {
        setError(true);
      }
    });
    setToken(res.token);
    localStorage.setItem("token", JSON.stringify(res.token));
    localStorage.setItem('username', JSON.stringify(userData.username));

    return res;
};

export const fetchData = async ({ setProducts }) => {
  const res = await axios.get("https://fakestoreapi.com/products");
  setProducts(res.data);
};

export const fetchProductData = async ({id, setProductData}) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  setProductData(res.data)
}

export const fetchCategory = async (category, {setProducts}) => {
  const res = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  setProducts(res.data);
}
