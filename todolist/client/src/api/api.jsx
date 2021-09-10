import axios from "axios";

const api = axios.create({
  baseURL: "https://todolist-pulkitb.herokuapp.com/api",
});

export const createTask = (payload) => api.post("/task/add", payload);
export const getTasks = async () => {
  const response = await api.get("/task/view");
  if (response) {
    const { data } = response.data;
    return data;
  }
};

export const deleteTask = async (id) => {
  await api.delete(`/task/delete/${id}`);
};
