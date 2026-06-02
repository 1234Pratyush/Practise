import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/home" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Products />} />
      </Routes>

      <main className="flex-grow"></main>

      <Footer />
    </div>
  );
}

export default App;
