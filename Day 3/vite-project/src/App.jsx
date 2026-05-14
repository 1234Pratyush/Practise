import Body from "./Components/Body"
import { Route,Routes } from "react-router-dom"
import Browse from "./Components/Browse";

function App(){
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/browse" element={<Browse/>}/>
      </Routes>
    </div>
  );
}

export default App