import { useCounterContext } from '../../contexts/CounterContext';

const Button = ({ nameButton, nameAction, payload, disableLoading }) => {
  const { state, actions } = useCounterContext();

  const handleActions = () => {
    actions[`${nameAction}`](payload)
      ?.then((r) => console.log(r))
      ?.catch((e) => console.log(e.name, ':', e.message));
  };

  return (
    <button
      onClick={() => handleActions()}
      disabled={disableLoading && state.loading}
    >
      {nameButton}
    </button>
  );
};

export default Button;
