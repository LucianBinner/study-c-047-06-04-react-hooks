import React, { useState } from 'react';
import PostsProvider from '../../contexts/PostsProvider';
import { Posts } from '../../components/Posts';

function App() {
  const [mount, setMount] = useState(false);
  return (
    <PostsProvider>
      <button onClick={() => setMount((p) => !p)}>
        {mount ? 'Desmontar' : 'Montar'}
      </button>
      <div>{mount && <Posts />}</div>
    </PostsProvider>
  );
}

export default App;
