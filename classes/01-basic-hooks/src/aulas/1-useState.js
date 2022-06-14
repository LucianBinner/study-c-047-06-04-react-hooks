import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((previousCount) => previousCount + 1);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={handleIncrement}>Somar Mais 1</button>
    </div>
  );
}

export default App;
