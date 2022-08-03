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
        <Route path="/shopall/login" element={<LoginPage />} />
        <Route path="/shopall/catalog" element={<Products />} />
        <Route path="/shopall/product/:id" element={<ProductInformation />} />
        <Route path="/shopall/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
