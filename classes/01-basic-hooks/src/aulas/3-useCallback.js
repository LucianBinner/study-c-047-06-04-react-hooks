import React, { useCallback, useState } from 'react';
import prop from 'prop-types';

// eslint-disable-next-line react/prop-types
const Button = React.memo(function Button({ incrementButton }) {
  // E o mesmo que useMemo
  console.log('Renderizou Filho');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

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

  return (
    <div>
      <h1>Contador: {count}</h1>
      <Button incrementButton={incrementCount} />
    </div>
  );
}

export default App;
