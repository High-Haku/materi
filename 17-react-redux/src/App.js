import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [number, setNumber] = useState(100);

  const handleClickPlus = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h1>Redux</h1>
      <Counter number={number} handleClickPlus={handleClickPlus} />
    </div>
  );
}

export default App;
