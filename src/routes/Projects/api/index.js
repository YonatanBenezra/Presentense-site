import request, { logError } from 'utils/request';

export const getProjectsPosts = () =>
  request('https://yonatan119.github.io/yonatan119-projects/posts/json/', {
    method: 'GET',
  }).catch(logError);

export const getProjectsPost = location =>
  request(`https://yonatan119.github.io/yonatan119-projects/posts/json/${location}`, {
    method: 'GET',
  }).catch(logError);

export default { getProjectsPosts, getProjectsPost };