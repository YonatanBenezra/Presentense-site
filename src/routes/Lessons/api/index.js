import request, { logError } from 'utils/request';

export const getLessonsPosts = () =>
  request('https://yonatanBenezra.github.io/yonatanBenezra-lessons/posts/json/', {
    method: 'GET',
  }).catch(logError);

export const getLessonsPost = location =>
  request(`https://yonatanBenezra.github.io/yonatanBenezra-lessons/posts/json/${location}`, {
    method: 'GET',
  }).catch(logError);

export default { getLessonsPosts, getLessonsPost };