import { instance } from '.';

export async function getCommentList() {
  try {
    const response = await instance.get('/comments');
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export default getCommentList;
