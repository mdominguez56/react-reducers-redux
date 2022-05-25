import Contador from "./components/Contador";
import ContadorMejorado from "./components/ContadorMejorado";
import ShoppingCart from "./components/ShoppingCart";
function App() {
  return (
    <div>
      <hr />
      <h1>useReducer</h1>
      <Contador />
      <hr />
      <ContadorMejorado />
      <hr />
      <ShoppingCart />
    </div>
  );
}

export default App;
