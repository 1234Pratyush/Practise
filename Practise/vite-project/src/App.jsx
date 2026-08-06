
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import {useSelector} from 'react-redux'

function App() {
 const user = useSelector((state)=>state.counter.items)
 console.log(user)

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="text-2xl "> {user}</div>
      <div className="flex gap-4">
        <Increment />
        <Decrement />
      </div>

      <div className="flex gap-4"></div>
    </div>
  );
}

export default App;
