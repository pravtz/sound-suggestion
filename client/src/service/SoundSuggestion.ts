import { SoundSugestionApi as api } from "./api";

export const ListSounds = async () => {
  try {
    const response = await api.get("/");
    return await response.data;
  } catch (err) {
    return new Error(`Error response api ${err}`);
  }
};
