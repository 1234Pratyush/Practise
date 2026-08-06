import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../redux/slice/counterSlice";

const Increment = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="border rounded mt-4 px-2 py-2 cursor-pointer"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </div>
  );
};

export default Increment;
