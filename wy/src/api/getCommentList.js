import axios from 'axios';
import { API_URL } from '../constants/API_URL';
export async function getCommentList() {
  return axios.get(API_URL).then(response => {
    return response.data;
  });
}

export default getCommentList;
