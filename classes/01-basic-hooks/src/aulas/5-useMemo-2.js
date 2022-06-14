import React, { useEffect, useMemo, useState } from 'react';
import P from 'prop-types';

const Post = ({ post }) => {
  console.log('Filho renderizou');
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log('Pai renderizou');

  // So sera executado uma vez
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div>
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {/* Nao rendiriza os filhos novamente */}
      {useMemo(() => {
        return posts?.length > 0 ? (
          posts?.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p>Carregando...</p>
        );
      }, [posts])}

      {/* Rendiriza todos os filhos (Post) novamente sempre que o input e digitado */}
      {/* {posts?.length > 0 ? (
        posts?.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p>Carregando...</p>
      )} */}
    </div>
  );
}

export default App;
