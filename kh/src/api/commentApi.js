import { instance } from './index';

export async function fetchGet() {
  const response = await instance.get('/comment');
  return response;
}

export async function fetchDelete(id) {
  const response = await instance.delete('/comment', id);
  return response;
}

export async function fetchModify(id) {
  const response = await instance.put('/comment', id);
  return response;
}
