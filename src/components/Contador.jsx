import React, { useReducer } from "react";

const initialState = { count: 0 };

const init = (initialState) => {
  return {
    count: initialState.count + 100,
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
      return { count: state.count + action.payload };
    case TYPES.INCREMENT_5:
      return { count: state.count + action.payload };
    case TYPES.DECREMENT:
      return { count: state.count - action.payload };
    case TYPES.DECREMENT_5:
      return { count: state.count - action.payload };
    case TYPES.RESET:
      return initialState;
    default:
      return state;
  }
}

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const add = () => dispatch({ type: TYPES.INCREMENT, payload: 1 });
  const add5 = () => dispatch({ type: TYPES.INCREMENT, payload: 5 });
  const subtract = () => dispatch({ type: TYPES.DECREMENT, payload: 1 });
  const subtract5 = () => dispatch({ type: TYPES.DECREMENT, payload: 5 });
  const reset = () => dispatch({ type: TYPES.RESET });
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Counter useReducer</h2>
      <nav>
        <button onClick={add}>+1</button>
        <button onClick={add5}>+5</button>
        <button onClick={subtract}>-1</button>
        <button onClick={subtract5}>-5</button>
        <button onClick={reset}>0</button>
      </nav>
      <h3>{state.count}</h3>
    </div>
  );
};

export default Contador;
