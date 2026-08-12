
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductsCard from "./components/productsCard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductsCard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
