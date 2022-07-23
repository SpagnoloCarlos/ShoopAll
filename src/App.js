import LoginPage from "./pages/LoginPage/LoginPage";
import Products from "./pages/Catalog/Catalog";
import NotFound from "./pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import ProductInformation from "./pages/ProductInformation/ProductInformation";
import "./App.css"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/catalog" element={<Products />} />
        <Route path="/product/:id" element={<ProductInformation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
