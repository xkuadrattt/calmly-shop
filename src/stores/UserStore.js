import axiosInit from "@/api";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const loginUser = async (username, password) => {
    console.log(username);
    const response = await axiosInit.post("auth/login", {
      username: username,
      password: password,
    });
    console.log(response);
  };
  return { loginUser };
});
