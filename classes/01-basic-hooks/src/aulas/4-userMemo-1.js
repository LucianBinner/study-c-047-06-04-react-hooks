import React, { useCallback, useMemo, useState } from 'react';
import prop from 'prop-types';

// eslint-disable-next-line react/prop-types
const Button = function Button({ incrementButton }) {
  console.log('Renderizou Filho');
  return <button onClick={() => incrementButton(10)}>+</button>;
};

Button.prototype = {
  incrementButton: prop.func,
};

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback((num) => {
    setCount((c) => c + num); // Apenas pai renderiza
  }, []);

  // const incrementCount = useCallback((num) => {
  //   setCount(count + num); // Pai e filho renderizam
  // }, [count]);

  console.log('Renderizou Pai');

  const btn = useMemo(() => {
    // O userMemo memoriza os componentes
    return <Button incrementButton={incrementCount} />;
  }, [incrementCount]);

  return (
    <div>
      <h1>Contador: {count}</h1>
      {btn}
    </div>
  );
}

export default App;
