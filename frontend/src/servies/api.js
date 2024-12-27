import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4001/', 
});

export const fetchPosts = () => API.get('/posts');
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const createPost = (data) => API.post('/posts', data);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const editPost = (id) => API.put(`/posts/${id}`);
