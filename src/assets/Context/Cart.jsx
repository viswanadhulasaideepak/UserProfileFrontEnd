import { useContext } from "react";
import { ContextCart } from "./ContextCart";

export default function Cart() {
  const { state, dispatch } = useContext(ContextCart);

  return (
    <div>
      <h1>Cart</h1>
      <h2>Total Items: {state.cart.length}</h2>
      {state.cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <button onClick={() => dispatch({ type: "REMOVE", payload: item.id })}> Remove </button>
        </div>
      ))}
      
    </div>
  );
}