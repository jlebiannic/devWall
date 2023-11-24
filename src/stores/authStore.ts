import Resource from "@/interfaces/resourceInterface";
import User from "@/interfaces/userInterface";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore(
  "authStore",
  () => {
    const user = ref<User>({
      email: "admin@gmail.com",
      password: "12345",
      accessToken: "",
    });

    const signin = async (): Promise<string | undefined> => {
      try {
        const result: any = await axios.post(
          `${import.meta.env.VITE_API_SERVER}/signin`,
          user.value
        );
        const token = result?.data?.accessToken;
        if (token) {
          user.value.accessToken = token;
          return token;
        }
      } catch (error) {
        console.error(error);
      }
    };

    const disconnect = () => {
      //user.value.email = "";
      user.value.accessToken = "";
    };

    return {
      user,
      signin,
      disconnect,
    };
  },
  { persist: true }
);
