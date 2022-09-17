import axios from 'axios';

export async function getCommentList() {
  return axios.get('https://comment-api.herokuapp.com/comments').then(response => {
    return response.data;
  });
}

export default getCommentList;
