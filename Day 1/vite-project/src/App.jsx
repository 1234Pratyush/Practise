import { useContext, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import {Routes,Route} from 'react-router-dom'
import Item from "./components/Item";
import Cart from "./components/Cart";
import { DataContext } from "./context/CartContext";
import Form from "./components/Form";

function App() {

const {data} = useContext(DataContext);

  return (
    <div>
  <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="p-8">
                <div className="mt-10 min-h-screen p-10 flex flex-wrap gap-8">
                  {data.map((item) => (
                    <Card key={item.id} item={item} />
                  ))}
                </div>
              </div>
            }
          />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/form" element={<Form/>}/>
       </Routes> 
    </div>
  );
}

export default App;
