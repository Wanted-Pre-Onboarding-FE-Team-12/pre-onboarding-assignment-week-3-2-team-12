import { instance } from '.';

export async function deleteComment(commentId) {
  await instance.delete(`/comments/${commentId}`);
}
