import { instance } from '.';

export async function postComment(comment) {
  try {
    await instance.post('/comments', comment);
  } catch (error) {
    console.log(error);
  }
}
