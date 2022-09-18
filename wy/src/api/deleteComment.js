import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export async function deleteComment(commentId) {
  await axios.delete(`${API_URL}/${commentId}`);
}
