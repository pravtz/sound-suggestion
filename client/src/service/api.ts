import axios from "axios";

export const SoundSugestionApi = axios.create({
  baseURL: "http://localhost:8081/api",
});
