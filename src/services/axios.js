import axios from "axios";

const commonAxios = axios.create();

export const fetchData = async ({setProducts}) => {
  const res = await commonAxios.get('https://fakestoreapi.com/products')
  setProducts(res.data);
  // console.log(res.data);
}
