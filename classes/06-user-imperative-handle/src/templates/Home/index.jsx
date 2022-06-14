import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

export const DisplayCounted = forwardRef(function ({ counted }, ref) {
  const [rand, setRand] = useState('0.24');
  const divRef = useRef();

  const handleClick = () => {
    setRand(Math.random().toFixed(2));
  };

  useImperativeHandle(ref, () => ({
    // Passa o parametros como referencia para o componente indicado, ou seja, poderemos acessar a funcao de handleClick atraves do ref, ref.current.handleClick()
    handleClick,
    divRef: divRef.current,
  }));

  return (
    <div
      ref={divRef}
      style={{
        height: '100px',
        width: '100px',
        overflowY: 'scroll',
      }}
    >
      {counted.map((c) => {
        return (
          <p key={`c-${c}`} onClick={() => handleClick()}>
            {c} +++ {rand}
          </p>
        );
      })}
    </div>
  );
});

function Home() {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 300)
      divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight;
  });

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
    divRef.current.handleClick(); // Acessando um parametro passado atraves do useImperativeHandle
  };

  return (
    <>
      <button onClick={() => handleClick()}>Count {counted.slice(-1)}</button>
      <DisplayCounted counted={counted} ref={divRef} />
    </>
  );
}

export default Home;
