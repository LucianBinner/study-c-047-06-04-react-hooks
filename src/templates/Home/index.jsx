import { useEffect } from 'react';
import { useCounterContext } from '../../contexts/CounterContext';

const Home = () => {
  const { state, actions } = useCounterContext();

  useEffect(() => {
    actions.increase();
  }, [actions]);

  return (
    <div>
      <h1 onClick={() => actions.increase()}>Ola</h1>
    </div>
  );
};

export default Home;
