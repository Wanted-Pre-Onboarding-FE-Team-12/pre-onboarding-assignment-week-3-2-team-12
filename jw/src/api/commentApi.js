import { instance } from './index';

export async function fetchGet() {
  const response = await instance.get('/comments');
  return response;
}

export async function fetchDelete(id) {
  const response = await instance.delete('/comments', id);
  return response;
}

export async function fetchModify(id) {
  const response = await instance.put('/comments', id);
  return response;
}
