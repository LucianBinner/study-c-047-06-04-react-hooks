import { useContext, useEffect, useRef } from 'react';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';

export const Posts = () => {
  const isMounted = useRef(true); // Seta do componente como montado
  const { postsState, postsDispatch } = useContext(PostsContext);

  console.log('Componente montou', isMounted);

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      // loadPosts retorna um funcao, se o componente estiver montado em tela a funcao sera executada caso contrario a funcao na sera executada
      if (isMounted.current) {
        // Se o comoponete ainda estiver montado ele sera executaod
        dispatch();
      }
    });

    return () => {
      console.log('Componente desmontou', isMounted);
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <h1>Posts</h1>
      {postsState.loading && <strong>Carregando posts...</strong>}
      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};
