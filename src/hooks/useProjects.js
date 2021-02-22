import { useState, useEffect } from 'react';
import { getProjectsPosts, getProjectsPost } from 'routes/Projects/api';

export const initialState = {};

export const getPosts = async setPosts => setPosts((await getProjectsPosts()) || initialState);

export const getSinglePost = setPost => async location =>
  setPost((location && (await getProjectsPost(location))) || initialState);

export default function useProjects(initialPost) {
  const [posts, setPosts] = useState(initialState);
  const [post, setPost] = useState(initialPost || initialState);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  const getPost = getSinglePost(setPost);

  return [posts, post, getPost];
}
