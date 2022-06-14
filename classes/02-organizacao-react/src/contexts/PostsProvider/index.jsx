import { PostsContext } from './context';
import P from 'prop-types';
import { useReducer } from 'react';
import { reducer } from './reducer';
import initialState from './initialState';

const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, initialState);
  return (
    <PostsContext.Provider value={{ postsState, postsDispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;

PostsProvider.propTypes = {
  children: P.node.isRequired,
};
