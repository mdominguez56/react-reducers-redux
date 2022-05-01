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

  const sumar = () => dispatch({ type: TYPES.INCREMENT, payload: 1 });
  const sumar5 = () => dispatch({ type: TYPES.INCREMENT, payload: 5 });
  const restar = () => dispatch({ type: TYPES.DECREMENT, payload: 1 });
  const restar5 = () => dispatch({ type: TYPES.DECREMENT, payload: 5 });
  const reset = () => dispatch({ type: TYPES.RESET });
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Mejorado Reducer</h2>
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

export default ContadorMejorado;
