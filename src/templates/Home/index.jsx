import { useCounterContext } from '../../contexts/CounterContext';

const Home = () => {
  const { state, dispatch } = useCounterContext();

  return (
    <div>
      <p>Ola</p>
    </div>
  );
};

export default Home;
