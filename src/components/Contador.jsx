import React, { useReducer } from "react";

const initialState = { contador: 0 };

const TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + action.payload };
    case TYPES.DECREMENT:
      return { contador: state.contador - action.payload };
    default:
      return state;
  }
}

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sumar = () => dispatch({ type: TYPES.INCREMENT, payload: 1 });
  const restar = () => dispatch({ type: TYPES.DECREMENT, payload: 1 });
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;
