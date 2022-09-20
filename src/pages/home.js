import Header from "../components/header";
import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  incrementByAmount,
} from "../store/slices/counter";

const Home = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => {
    return state.counter.value;
  });
  return (
    <>
      <Header />
      <h1>Home Page... {value}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(5));
        }}
      >
        Increment by 5
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
    </>
  );
};

export default Home;
