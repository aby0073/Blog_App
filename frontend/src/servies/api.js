import axios from "axios";

const API = axios.create({
  baseURL: "https://blog-app-23du.onrender.com",
});

export const fetchPosts = (page = 1, limit = 5) =>
  API.get(`/posts?page=${page}&limit=${limit}`);
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const createPost = (data) => API.post("/posts", data);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const editPost = (id, data) => API.put(`/posts/${id}`, data);
