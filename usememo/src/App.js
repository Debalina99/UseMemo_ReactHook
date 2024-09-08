import { useMemo, useState } from 'react';
import './App.css';
import { Multiply } from './utility';
function App() {
  const [number, setNumber] = useState('');
  const [counter, setCounter] = useState(0);

  const inputHandler = (e) => {
    setNumber(e.target.value)
  };

  const counterHandler = () => {
    setCounter(counter + 1)
  };

  const multiplyResult = useMemo(() => {
    return Multiply(number)
  }, [number])

  return (
    <div className="App">
      <h2>UseMemo Example</h2>
      <input type="number" placeholder='Enter number' value={number} onChange={inputHandler} />
      <h3>{multiplyResult}</h3>

      <h3>Counter: {counter}</h3>
      <button onClick={counterHandler}>Increment</button>
    </div>
  );
}

export default App;