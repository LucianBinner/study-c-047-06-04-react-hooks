import React, { createContext, useContext, useReducer } from 'react';
import P from 'prop-types';

// actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// data.js
const initialState = {
  title: 'O titulo do contexto',
  body: 'O body do contexto',
  counter: 0,
};

// reducer.js // Pode ter um ou varios reducers
// eslint-disable-next-line no-unused-vars
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      return { ...state, title: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};

// AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeTitle = (newTitle) => {
    dispatch({ type: actions.CHANGE_TITLE, payload: newTitle });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};

// H1/index.jsx
export const H1 = () => {
  const { state, changeTitle } = useContext(Context);
  return (
    <>
      <h1>{state.title}</h1>
      <input type="text" onChange={(e) => changeTitle(e.target.value)} />
    </>
  );
};

// App.jsx
function App() {
  return (
    <AppContext>
      <H1 />
    </AppContext>
  );
}

export default App;
