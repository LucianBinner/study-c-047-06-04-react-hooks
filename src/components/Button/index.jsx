import { useCounterContext } from '../../contexts/CounterContext';

const Button = ({ nameButton, nameAction }) => {
  const { actions } = useCounterContext();
  return (
    <button onClick={() => actions[`${nameAction}`]()}>{nameButton}</button>
  );
};

export default Button;
