 import Products from "./pages/Products";
 import {Routes,Route} from 'react-router-dom'
 
 function App(){
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Routes>
        <Route path="/" element={<Products />}></Route>
      </Routes>
    </div>
  );
}


export default App;