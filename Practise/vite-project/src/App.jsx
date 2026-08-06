
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import {useSelector} from 'react-redux'
import { useProducts } from "./hooks/useProducts";
import ProductCard from "./components/ProductCard";
import {Route,Routes} from 'react-router-dom'

function App() {
 const user = useSelector((state)=>state.counter.items)
 useProducts()


  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="text-2xl "> {user}</div>
      <div className="flex gap-4">
        <Increment />
        <Decrement />
      </div>

      <div className="flex gap-4"></div>

      <Routes>
        <Route path="products" element={<ProductCard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
