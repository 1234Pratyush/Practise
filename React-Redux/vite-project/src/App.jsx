import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Signup from "./pages/Signup";
function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
