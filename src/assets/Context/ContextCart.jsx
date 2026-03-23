import { createContext, useReducer } from "react";

export const ContextCart = createContext();

const initialState = {
  cart: []
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextCart.Provider value={{ state, dispatch }}>
      {children}
    </ContextCart.Provider>
  );
}
