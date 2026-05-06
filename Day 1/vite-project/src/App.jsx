import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import {Routes,Route} from 'react-router-dom'
import Item from "./components/Item";

function App() {
  const [data, setData] = useState([]);


  useEffect(()=>{
  const getData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.log("error", error.message);
    }
  }; getData()
  },[])


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
      </Routes>
    </div>
  );
}

export default App;
