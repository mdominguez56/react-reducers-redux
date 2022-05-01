import React, { useReducer } from "react";

const initialState = { contador: 0 };

const init = (initialState) => {
  return {
    contador: initialState.contador + 100,
  };
};

const TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET",
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + action.payload };
    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.payload };
    case TYPES.DECREMENT:
      return { contador: state.contador - action.payload };
    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.payload };
    case TYPES.RESET:
      return initialState;
    default:
      return state;
  }
}

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const sumar = () => dispatch({ type: TYPES.INCREMENT, payload: 1 });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT, payload: 5 });
  const restar = () => dispatch({ type: TYPES.DECREMENT, payload: 1 });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT, payload: 5 });
  const reset = () => dispatch({ type: TYPES.RESET });
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={sumar5}>+5</button>
        <button onClick={restar}>-</button>
        <button onClick={restar5}>-5</button>
        <button onClick={reset}>0</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;
