import React, { useReducer, useState } from "react";

const initialState = { contador: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { contador: state.contador + 1 };
    case "DECREMENT":
      return { contador: state.contador - 1 };
    case "RESET":
      return { contador: 0 };

    default:
      return state;
  }
}

const Contador = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  // const sumar = () => setCount(count + 1);
  const sumar = () => dispatch({ type: "INCREMENT" });
  // const restar = () => setCount(count - 1);
  const restar = () => dispatch({ type: "DECREMENT" });
  // const reset = () => setCount(0);
  const reset = () => dispatch({ type: "RESET" });
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={reset}>Reset</button>
      </nav>
      <h3>{state.contador}</h3>
      <h1>Seguir con clase 85</h1>
    </div>
  );
};

export default Contador;
