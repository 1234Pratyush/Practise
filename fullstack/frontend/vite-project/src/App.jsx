import {Route,Routes} from 'react-router-dom';
import Form from './pages/Form';
import AllUser from './pages/AllUser';
import EditUser from './pages/EditUser';

function App() {
return (
  <div>
    <Routes>
      <Route path="/" element={<Form />}></Route>
      <Route path="/allUsers" element={<AllUser />}></Route>
      <Route path="/edit/:id" element={<EditUser />}></Route>
    </Routes>
  </div>
);



 
}

export default App;
