import {useDispatch,useSelector} from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";
import { useState } from 'react';

const App = () => {

 const [number,setNumber] = useState(5);

const dispatch = useDispatch();
const count = useSelector((state)=>state.counter.value);

  return (
    <div className="min-h-screen text-white bg-zinc-900 p-4">
      App
      <h1 className="font-bold mt-4  text-4xl">{count}</h1>
      <div className="flex gap-4 mt-4">
        <button
          className="border px-2 py-2 rounded cursor-pointer"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="border px-2 py-2 rounded cursor-pointer"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <div>
          <input
            type="number"
            value={number}
            className="border rounded font-bold  text-xl"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <button
          className="border px-2 py-2 rounded cursor-pointer"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment by Amount
        </button>
      </div>
    </div>
  );
}

export default App
App