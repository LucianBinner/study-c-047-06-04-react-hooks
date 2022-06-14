import {
  Children,
  cloneElement,
  createContext,
  useContext,
  useState,
} from 'react';

const styles = {
  style: {
    fontSize: '60px',
    margin: '0',
  },
};

// EXEMPLO SEM CONTEXTO
// const TurnOnOff = ({ children }) => {
//   const [isOn, setIsOn] = useState(false);

//   const onTurn = () => setIsOn((s) => !s);

//   return Children.map(children, (child) => {
//     if (typeof child.type === 'string') {
//       return child;
//     }
//     return cloneElement(child, {
//       // Passa propriedades aos filhos
//       isOn,
//       onTurn,
//     });
//   });
// };

const TurnOnOffContext = createContext();

// EXEMPLO COM CONTEXT
const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  const onTurn = () => setIsOn((s) => !s);

  return (
    <TurnOnOffContext.Provider value={{ isOn, onTurn }}>
      {children}
    </TurnOnOffContext.Provider>
  );
};

const TurnedOn = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? children : null;
};

const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return !isOn ? children : null;
};

const TurnButton = ({ ...props }) => {
  const { isOn, onTurn } = useContext(TurnOnOffContext);
  return (
    <button onClick={() => onTurn()} {...props}>
      Turn {isOn ? 'OFF' : 'ON'}
    </button>
  );
};

const P = ({ children }) => <p {...styles}>{children}</p>;

// Compound Component -> Um componente que e composto por outros componentes

const Home = () => {
  return (
    <TurnOnOff>
      <div>
        <p>Ola</p>
        <TurnedOn>
          <P>Coisas que vao acontecer quando estiver ON</P>
        </TurnedOn>
        <TurnedOff>
          <P>Coisas que vao acontecer quando estiver OFF</P>
        </TurnedOff>
        <br></br>
        <TurnButton {...styles} />
      </div>
    </TurnOnOff>
  );
};

export default Home;
