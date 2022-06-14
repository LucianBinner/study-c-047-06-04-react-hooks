import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // componentDidUpdate - executa toda vez que o component atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // componentDidMount - executa 1 vez
  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  // Com dependencia - executa toda vez que a dependencia mudar
  useEffect(() => {
    console.log('Contador mudou para ', count);
  }, [count]);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Somar Mais 1</button>
    </div>
  );
}

export default App;
