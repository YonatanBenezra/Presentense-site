import { useState, useEffect } from 'react';
import { getLessonsPosts, getLessonsPost } from 'routes/Lessons/api';

export const initialState = {};

export const getPosts = async setPosts => setPosts((await getLessonsPosts()) || initialState);

export const getSinglePost = setPost => async location =>
  setPost((location && (await getLessonsPost(location))) || initialState);

export default function useLessons(initialPost) {
  const [posts, setPosts] = useState(initialState);
  const [post, setPost] = useState(initialPost || initialState);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  const getPost = getSinglePost(setPost);

  return [posts, post, getPost];
}
