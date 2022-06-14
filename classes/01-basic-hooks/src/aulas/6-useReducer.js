import React, { useReducer } from 'react';

const initialState = {
  title: 'O titulo do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda', action.payload);
      return { ...state, title: 'Mudou' };
    }
    default: {
      return { ...state };
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { title, counter } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Click
      </button>
    </div>
  );
}

export default App;
