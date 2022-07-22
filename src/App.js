import LoginPage from "./pages/LoginPage/LoginPage";
import Products from "./pages/Products/Products";
import { Routes, Route } from "react-router-dom";
import ProductInformation from "./pages/ProductInformation/ProductInformation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/catalog" element={<Products />} />
        <Route path="/product/:id" element={<ProductInformation />} />
      </Routes>
    </>
  );
}

export default App;
