import React, { useReducer } from "react";
import { TYPES } from "../actions/contadorActions";
import {
  contadorInit,
  contadorInitialState,
  contadorReducer,
} from "../reducers/contadorReducer";

const ContadorMejorado = () => {
  const [state, dispatch] = useReducer(
    contadorReducer,
    contadorInitialState,
    contadorInit
  );

  const add = () => dispatch({ type: TYPES.INCREMENT, payload: 1 });
  const add5 = () => dispatch({ type: TYPES.INCREMENT, payload: 5 });
  const subtract = () => dispatch({ type: TYPES.DECREMENT, payload: 1 });
  const subtract5 = () => dispatch({ type: TYPES.DECREMENT, payload: 5 });
  const reset = () => dispatch({ type: TYPES.RESET });
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Improved counter Reducer</h2>
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

export default ContadorMejorado;
