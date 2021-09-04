import request, { logError } from 'utils/request';

export const getProjectsPosts = () =>
  request('https://yonatanBenezra.github.io/yonatanBenezra-projects/posts/json/', {
    method: 'GET',
  }).catch(logError);

export const getProjectsPost = location =>
  request(`https://yonatanBenezra.github.io/yonatanBenezra-projects/posts/json/${location}`, {
    method: 'GET',
  }).catch(logError);

export default { getProjectsPosts, getProjectsPost };