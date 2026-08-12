
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductsCard from "./components/productsCard";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductsCard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
