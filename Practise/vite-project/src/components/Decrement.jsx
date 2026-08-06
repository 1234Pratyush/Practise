import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../redux/slice/counter/counterSlice";

const Decrement = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="border rounded mt-4 px-2 py-2 cursor-pointer"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default Decrement;
