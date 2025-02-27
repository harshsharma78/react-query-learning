import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// Fetch
export const fetchPosts = () => {
  return api.get("/posts?_start=0&_limit=3");
};
