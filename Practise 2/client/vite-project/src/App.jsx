import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';

function App(){
  return (
    <div className=" min-h-screen bg-zinc-900 text-white">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;