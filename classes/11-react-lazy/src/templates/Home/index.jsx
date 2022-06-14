import React, { Suspense, useState } from 'react';
// import LazyComponent from './lazy-component';

const loadLazyComponent = () => {
  console.log('Carregadon componente');
  return import('./lazy-component');
};
const LazyComponent = React.lazy(loadLazyComponent);
// Com a importacao do react.lazy o componente so e renderizado em tela quando chamado

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onMouseOut={loadLazyComponent} onClick={() => setShow((p) => !p)}>
        Show
      </button>
      <Suspense fallback={<p>Carregando...</p>}>
        {show && <LazyComponent />}
      </Suspense>
    </div>
  );
};

export default Home;
