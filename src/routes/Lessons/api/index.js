import request, { logError } from 'utils/request';

export const getLessonsPosts = () =>
  request('https://yonatan119.github.io/yonatan119-lessons/posts/json/', {
    method: 'GET',
  }).catch(logError);

export const getLessonsPost = location =>
  request(`https://yonatan119.github.io/yonatan119-lessons/posts/json/${location}`, {
    method: 'GET',
  }).catch(logError);

export default { getLessonsPosts, getLessonsPost };