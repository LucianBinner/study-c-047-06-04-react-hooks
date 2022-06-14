import { createContext, useContext, useState } from 'react';

export const initialState = {
  counter: 0,
  loading: false,
};

const Context = createContext();

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useState(initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useCounterContext = () => {
  const context = useContext(Context);
  console.log(context);
  if (typeof context === 'undefined') {
    throw new Error(
      'You have to use useCounterContext inside <CounterContextProvider>',
    );
  }
  return { ...context };
};
