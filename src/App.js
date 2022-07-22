import LoginPage from "./pages/LoginPage/LoginPage";
import Products from "./pages/Products/Products";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />}/>
        <Route path="products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
