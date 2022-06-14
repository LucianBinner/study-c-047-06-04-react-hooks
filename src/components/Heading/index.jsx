import { useCounterContext } from '../../contexts/CounterContext';

const Heading = () => {
  const { state } = useCounterContext();
  return <h1>{state.counter}</h1>;
};

export default Heading;
