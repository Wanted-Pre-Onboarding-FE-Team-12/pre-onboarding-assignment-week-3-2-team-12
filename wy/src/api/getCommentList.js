import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export async function getCommentList() {
  return axios.get(API_URL).then(response => {
    return response.data;
  });
}

export default getCommentList;
