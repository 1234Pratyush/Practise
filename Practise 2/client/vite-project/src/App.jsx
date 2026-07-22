import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Todo from './pages/Todo';
import MyTodos from './pages/MyTodos';

function App(){
  return (
    <div className=" min-h-screen bg-zinc-900 text-white">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/my-todos" element={<MyTodos />}></Route>
      </Routes>
    </div>
  );
}

export default App;